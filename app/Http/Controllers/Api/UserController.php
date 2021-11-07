<?php

namespace App\Http\Controllers\Api;

use App\Models\File;
use App\Models\Like;
use App\Models\User;
use App\Models\Event;
use App\Models\Venue;
use App\Models\Person;
use App\Models\Comment;
use App\Models\Favorite;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserFilesCollection;
use App\Http\Resources\UserLikesCollection;
use App\Http\Traits\RespondsWithHttpStatus;
use App\Http\Resources\UserEventsCollection;
use App\Http\Resources\UserPeopleCollection;
use App\Http\Resources\UserVenuesCollection;
use App\Http\Resources\UserCommentsCollection;
use App\Http\Resources\UserFavoritesCollection;

class UserController extends Controller
{
  // Import custom response trait.
  use RespondsWithHttpStatus;

  // Default pagination value.
  const PER_PAGE = 10;

  /**
   * Sortable fields.
   *
   * @var array
   */
  protected $sortFields = ['id', 'username', 'email', 'firstname', 'lastname', 'company', 'language'];

  /**
   * Searchable fields.
   *
   * @var array
   */
  protected $searchFields = ['username', 'email', 'firstname', 'lastname', 'company', 'language'];

  /**
   * User's contents.
   *
   * @var array
   */
  protected $contents = ['events', 'people', 'venues', 'files', 'tickets', 'comments', 'likes', 'favorites'];

  /**
   * Display the list of all users.
   *
   * @param Request $request
   * @return Response
   */
  public function index(Request $request)
  {
    // Retrieve data and sort it.
    $sortField = $request->input('sort_by');
    $sortableFields = in_array($sortField, $this->sortFields) ? $sortField : 'id';
    $orderField = $request->input('order_by');
    $sortOrder = in_array($orderField, ['asc', 'desc']) ? $orderField : 'asc';
    $query = User::orderBy($sortableFields, $sortOrder);
    // Search data.
    $searchField = $request->input('search_field');
    $searchValue = $request->input('search_value');
    $searchableFields = in_array($searchField, $this->searchFields) ? $searchField : null;
    if (!is_null($searchValue) && !is_null($searchableFields)) {
      $searchQuery = "%$searchValue%";
      $query = $query->where($searchableFields, 'like', $searchQuery);
    }
    // Pagination.
    $perPage = $request->input('per_page') ?? self::PER_PAGE;
    $users = $query->paginate((int)$perPage);
    // Check if users exist.
    if ($users == '') {
      return $this->failure('No users were found.', 404);
    }
    // Format data.
    return new UserCollection($users);
  }

  /**
   * User login.
   *
   * @param Request $request
   * @return Response
   */
  public function login(Request $request)
  {
    // Check if the submitted user's login is valid.
    $user = User::where('email', $request->email)->first();
    if (!$user || !Hash::check($request->password, $user->password)) {
      return $this->failure('Wrong email or password.', 403);
    }
    // Revoke current user's tokens.
    $user->tokens()->where('abilities', '!=', '["role:anonymous"]')->delete();
    // Retrieve user's role.
    $abilities = [];
    if ($user->hasRole('super-admin')) {
      $abilities = ['*'];
    } elseif ($user->hasRole('member')) {
      $abilities = ['role:member'];
    } elseif ($user->hasRole('contributor')) {
      $abilities = ['role:contributor'];
    }
    // Create a new token and attach it to the current user.
    $token = $user->createToken('api_token', $abilities);
    // Data response.
    $data = [
      'user' => collect([
        'id' => $user->id,
        'username' => $user->username,
        'firstname' => $user->firstname,
        'lastname' => $user->lastname,
        'email' => $user->email,
        'language' => $user->language,
        'theme' => $user->theme,
        'avatar' => $user->avatar,
        'api_token' => $token->plainTextToken,
        'role' => $user->roles,
        'abilities' => $abilities
      ]),
      'credit' => $this->apiCredit()
    ];
    // Returns data with success message.
    return $this->success('User ' . $user->id . ' successfully logged in.', $data, 201);
  }

  /**
   * User logout.
   *
   * @param  Request  $request
   * @return Response
   */
  public function logout(Request $request)
  {
    // Check if the user exists.
    $user = User::find($request->id);
    if (!$user) {
      return $this->failure('User ' . $request->id . ' not found.', 404);
    }
    // Revoke current user's tokens.
    $user->tokens()->where('abilities', '!=', '["role:anonymous"]')->delete();
    // Data response.
    $data = [
      'credit' => $this->apiCredit()
    ];
    // Returns success message.
    return $this->success('Successfully logged out.', $data, 200);
  }

  /**
   * Creat a new user account.
   *
   * @param  Request  $request
   * @return Response
   */
  public function register(Request $request) // TODO Register
  {
    //
  }

  /**
   * Display the specified user account.
   *
   * @param  string  $id
   * @param  string  $content
   * @param  Request  $request
   * @return Response
   */
  public function show($id, $content, Request $request)
  {
    // Available types of user's contents.
    $contentField = in_array($content, $this->contents) ? $content : null;
    // Check if the user exists.
    $user = User::find($id);
    if (!$user) {
      return $this->failure('User not found.', 404);
    }
    // Display specified user's contents.
    switch ($contentField) {
        // Events.
      case 'events':
        $events = $user->events;
        // Check if user's events exist.
        if ($events->isEmpty()) {
          return $this->failure('No events found for this user.', 404);
        }
        // Pagination.
        $perPage = $request->input('per_page') ?? self::PER_PAGE;
        // Return all events attached to the user.
        return new UserEventsCollection(
          Event::where('user_id', $id)->paginate((int)$perPage)
        );
        break;
        // People.
      case 'people':
        $people = $user->people;
        // Check if user's people exist.
        if ($people->isEmpty()) {
          return $this->failure('No people found for this user.', 404);
        }
        // Pagination.
        $perPage = $request->input('per_page') ?? self::PER_PAGE;
        // Return all people attached to the user.
        return new UserPeopleCollection(
          Person::where('user_id', $id)->paginate((int)$perPage)
        );
        break;
        // Venues.
      case 'venues':
        $venues = $user->venues;
        // Check if user's venues exist.
        if ($venues->isEmpty()) {
          return $this->failure('No venues found for this user.', 404);
        }
        // Pagination.
        $perPage = $request->input('per_page') ?? self::PER_PAGE;
        // Return all venues attached to the user.
        return new UserVenuesCollection(
          Venue::where('user_id', $id)->paginate((int)$perPage)
        );
        break;
        // Comments.
      case 'comments':
        $comments = $user->comments;
        // Check if user's comments exist.
        if ($comments->isEmpty()) {
          return $this->failure('No comments found for this user.', 404);
        }
        // Pagination.
        $perPage = $request->input('per_page') ?? self::PER_PAGE;
        // Return all comments attached to the user.
        return new UserCommentsCollection(
          Comment::where('user_id', $id)->paginate((int)$perPage)
        );
        break;
        // Likes.
      case 'likes':
        $likes = $user->likes;
        // Check if user's likes exist.
        if ($likes->isEmpty()) {
          return $this->failure('No likes found for this user.', 404);
        }
        // Pagination.
        $perPage = $request->input('per_page') ?? self::PER_PAGE;
        // Return all likes attached to the user.
        return new UserLikesCollection(
          Like::where('user_id', $id)->paginate((int)$perPage)
        );
        break;
        // Favorites.
      case 'favorites':
        $favorites = $user->favorites;
        // Check if user's favorites exist.
        if ($favorites->isEmpty()) {
          return $this->failure('No favorites found for this user.', 404);
        }
        // Pagination.
        $perPage = $request->input('per_page') ?? self::PER_PAGE;
        // Return all favorites attached to the user.
        return new UserFavoritesCollection(
          Favorite::where('user_id', $id)->paginate((int)$perPage)
        );
        break;
        // Files.
      case 'files':
        $files = $user->files;
        // Check if user's files exist.
        if ($files->isEmpty()) {
          return $this->failure('No files found for this user.', 404);
        }
        // Pagination.
        $perPage = $request->input('per_page') ?? self::PER_PAGE;
        // Return all comments attached to the user.
        return new UserFilesCollection(
          File::where('user_id', $id)->paginate((int)$perPage)
        );
        break;
      default:
        // By default, returns the user data.
        return new UserResource($user);
    }
  }

  /**
   * Update the specified user account.
   *
   * @param  int  $id
   * @param  Request  $request
   * @return Response
   */
  public function update($id, Request $request) // TODO Update
  {
    //
  }

  /**
   * Remove the specified user account.
   *
   * @param  int  $id
   * @return Response
   */
  public function destroy($id) // TODO Destroy
  {
    //
  }
}
