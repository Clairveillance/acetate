<?php

namespace App\Http\Controllers\Api;

use App\Models\Venue;
use Illuminate\Http\Request;
use App\Http\Traits\FileTrait;
use App\Http\Traits\AvatarTrait;
use App\Http\Traits\EntityTrait;
use App\Http\Traits\CommentTrait;
use App\Http\Traits\WebsiteTrait;
use App\Http\Controllers\Controller;
use App\Http\Resources\VenueResource;
use App\Http\Resources\VenueCollection;
use Illuminate\Support\Facades\Validator;
use App\Http\Traits\RespondsWithHttpStatus;

class VenueController extends Controller
{
  // Import custom response trait.
  use RespondsWithHttpStatus;
  // Import Entity trait.
  use EntityTrait;
  // Import Avatar trait.
  use AvatarTrait;
  // Import Website trait.
  use WebsiteTrait;
  // Import File trait.
  use FileTrait;
  // Import Comment trait.
  use CommentTrait;

  // Pagination.
  const PER_PAGE = 10;

  /**
   * Response messages.
   *
   * @var array
   */
  protected $messages = [];

  /**
   * Warning messages.
   *
   * @var array
   */
  protected $warning = [];

  /**
   * Attached relationships.
   *
   * @var array
   */
  protected $related = ['user', 'event', 'people', 'ticket'];

  /**
   * Sortable fields.
   *
   * @var array
   */
  protected $sortFields = ['name'];

  /**
   * Searchable fields.
   *
   * @var array
   */
  protected $searchFields = ['name'];

  /**
   * Adresses cantons.
   *
   * @var array
   */
  protected $addressesCantons = [
    'AG', 'AI', 'AR', 'BE', 'BL', 'BS', 'FR', 'GE', 'GL', 'GR', 'JU', 'LU', 'NE', 'NW',
    'OW', 'SG', 'SH', 'SO', 'SZ', 'TG', 'TI', 'UR', 'VD', 'VS', 'ZG', 'ZH'
  ];

  /**
   * Display the list of all venues.
   *
   * @param Request $request
   * @return VenueCollection
   */
  public function index(Request $request)
  {
    // Retrieve and sort data.
    $sortField = in_array(
      $request->input('sort_by'),
      $this->sortFields
    ) // Accepted values.
      ? $request->input('sort_by') // Submitted value.
      : 'name'; // Default value.
    $sortOrder = in_array(
      $request->input('order_by'),
      ['asc', 'desc']
    ) // Accepted values.
      ? $request->input('order_by') // Submitted value.
      : 'asc'; // Default value.
    $query = Venue::orderBy($sortField, $sortOrder);
    // Returns the list of venues with attached relationships.
    $query = $query->withCount([
      // Returns the total number of likes.
      // TODO show likes of the logged user.
      'likes as likes_count' => function ($filter) {
        $filter
          ->where('is_dislike', 0);
      },
      // Returns the total number of dislikes.
      // TODO show dislikes of the logged user.
      'likes as dislikes_count' => function ($filter) {
        $filter
          ->where('is_dislike', 1);
      },
      // Returns the total number of comments.
      'comments as comments_count'
    ])
      ->with([
        // Returns addresses.
        'addresses',/* 
        // Returns taxonomies.
        'taxonomies' => function ($filter) {
          $filter
            // Order taxonomies by type.
            ->orderBy('type')
            // Order taxonomies by category.
            ->orderBy('category')
            // Order taxonomies by sub_category.
            ->orderBy('sub_category');
        }, */
        // Returns favorites of the specified user.
        // TODO show favorites only if the user is logged in.
        'favorites'
      ])
      // Search in venues's relationships.
      ->whereHas('addresses', function ($filter) use ($request) {
        // Search addresses canton.
        if ($request->input('canton')) {
          if (in_array(
            $request->input('canton'),
            $this->addressesCantons
          )) {
            $filter->where('canton', $request->input('canton'));
          }
        }
        // Search addresses city.
        if ($request->input('city')) {
          $city = $request->input('city');
          $filter->where('city', 'like', "%$city%");
        }
        // Search addresses region.
        if ($request->input('region')) {
          $region = $request->input('region');
          $filter->where('region', 'like', "%$region%");
        }
      });
    // Search data.
    $searchValue = $request->input('search_value');
    $searchField = in_array(
      $request->input('search_field'),
      $this->searchFields
    ) // Accepted values.
      ? $request->input('search_field') // Submitted value.
      : null; // Default value.
    if (!is_null($searchValue) && !is_null($searchField)) {
      $searchQuery = "%$searchValue%";
      $query = $query->where($searchField, 'like', $searchQuery);
    }
    // Pagination.
    $perPage = $request->input('per_page') ?? self::PER_PAGE;
    $venues = $query->paginate((int)$perPage);
    // Check if people exist.
    if ($venues->isEmpty()) {
      return $this->failure('No venues found.', 404);
    }
    /* TODO add pagination to response.
    // Success message.
    $message = 'OK';
    // Returns venues data with success message.
    return $this->success($message, new VenueCollection($venues), 200);
     */
    // Returns venues data's collection.
    return new VenueCollection($venues);
  }

  /**
   * Create a new venue.
   *
   * @param  Request  $request
   * @return Response
   */
  public function store(Request $request)
  {
    // Validation.
    $validatorRules = $this->validators();
    $validator = Validator::make($request->all(), $validatorRules);
    // If validation fails, returns error messages.
    if ($validator->fails()) {
      $errors = $validator->errors();
      return $this->failure($errors);
    }
    // Success message.
    $this->messages[] = 'Venue created successfully.';
    // Store venue's avatar.
    $this->storeAvatar('venue', $request);
    // Create a new venue.
    $venue = new Venue([
      'name' => $request->input('name'),
      'description' => $request->input('description'),
      // TODO create a default venue's avatar if not submitted.
      'avatar' => $request->file('upload') ? $this->file_name : null,
      'user_id' => $request->input('user_id')
    ]);
    // Save the venue.
    $venue->save();
    // Attach people to the venue.
    $this->attachEntity($venue, 'people', 'Person', 'App\Models\Person', $request);
    // Attach events to the venue.
    $this->attachEntity($venue, 'events', 'Event', 'App\Models\Event', $request);
    // Create and attach addresses to the venue.
    $this->storeEntity($venue, 'addresses', 'App\Models\Address', $request);
    // Create and attach emails to the venue.
    $this->storeEntity($venue, 'emails', 'App\Models\Email', $request);
    // Create and attach phones to the venue.
    $this->storeEntity($venue, 'phones', 'App\Models\Phone', $request);
    // Attach files to the venue.
    $this->attachEntity($venue, 'files', 'File', 'App\Models\File', $request);
    // TODO Check if new taxonomies's types are valid.
    // Attach submitted taxonomies to the venue.
    $this->attachEntity($venue, 'taxonomies', 'Taxonomy', 'App\Models\Taxonomy', $request);
    // Create and attach websites to the venue.
    $this->storeWebsite($venue, $request);
    // Add warning messages to the response.
    if ($this->warning != null) {
      $this->messages[] = $this->warning;
    }
    // Returns the newly created venue data with response messages.
    return $this->success($this->messages, new VenueResource($venue), 201);
  }

  /**
   * Display the specified venue.
   *
   * @param  string  $id
   * @return Response
   */
  public function show($id)
  {
    // Check if the venue exists.
    $venue = Venue::find($id);
    if (!$venue) {
      return $this->failure('Venue ' . $id . ' not found.', 404);
    }
    // Success message.
    $message = 'OK';
    // Returns the venue data with success message.
    return $this->success($message, new VenueResource($venue), 200);
  }

  /**
   * Update the specified venue.
   *
   * @param  string  $id
   * @param  Request  $request
   * @return Response
   */
  public function update($id, Request $request)
  {
    // Validation.
    $validatorRules = $this->validators(true);
    $validator = Validator::make($request->all(), $validatorRules);
    // If validation fails, returns error messages.
    if ($validator->fails()) {
      $errors = $validator->errors();
      return $this->failure($errors);
    }
    // Success message.
    $this->messages[] = 'Venue ' . $id . ' edited successfully.';
    // Load the venue.
    $venue = Venue::find($id);
    // Check if the venue exists.
    if (!$venue) {
      return $this->failure('Venue ' . $id . ' not found.', 404);
    }
    // Update the venue's fields.
    $venue->name = $request->input('name');
    $venue->description = $request->input('description');
    // Detach current people from the venue.
    $venue->people()->detach();
    // Attach submitted people to the venue.
    $this->attachEntity($venue, 'people', 'Person', 'App\Models\Person', $request);
    // Detach current events from the venue.
    $venue->events()->detach();
    // Attach submitted events to the venue.
    $this->attachEntity($venue, 'events', 'Event', 'App\Models\Event', $request);
    // Detach current addresses from the venue.
    $this->detachEntity($venue, 'venue', 'addresses');
    // Delete current addresses from the venue.
    $this->deleteEntity($venue, $this->related, 'addresses');
    // Store new addresses into the venue.
    $this->storeEntity($venue, 'addresses', 'App\Models\Address', $request);
    // Detach current emails from the venue.
    $this->detachEntity($venue, 'venue', 'emails');
    // Delete current emails from the venue.
    $this->deleteEntity($venue, $this->related, 'emails');
    // Store new emails into the venue.
    $this->storeEntity($venue, 'emails', 'App\Models\Email', $request);
    // Detach current phones from the venue.
    $this->detachEntity($venue, 'venue', 'phones');
    // Delete current phones from the venue.
    $this->deleteEntity($venue, $this->related, 'phones');
    // Store new phones into the venue.
    $this->storeEntity($venue, 'phones', 'App\Models\Phone', $request);
    // Detach current taxonomies from the venue.
    $venue->taxonomies()->detach();
    // TODO Check if new taxonomies's types are valid.
    // Attach submitted taxonomies to the venue.
    $this->attachEntity($venue, 'taxonomies', 'Taxonomy', 'App\Models\Taxonomy', $request);
    // Detach current websites from the venue.
    $this->detachEntity($venue, 'venue', 'websites');
    // Delete current websites from the venue.
    $this->deleteEntity($venue, $this->related, 'websites');
    // Store new websites into the venue.
    $this->storeWebsite($venue, $request);
    // Save the venue.
    $venue->save();
    // Add warning messages to the response.
    if ($this->warning != null) {
      $this->messages[] = $this->warning;
    }
    // Returns the edited venue data with response messages.
    return $this->success($this->messages, new VenueResource(Venue::find($id)), 201);
  }

  /**
   * Update the specified avatar.
   *
   * @param  string  $id
   * @param  Request  $request
   * @return Response
   */
  public function updateAvatar($id, Request $request)
  {
    // Load the venue.
    $venue = Venue::find($id);
    // Check if the venue exists.
    if (!$venue) {
      return $this->failure('Venue ' . $id . ' not found.', 404);
    }
    // Success message.
    $this->messages[] = 'Avatar of venue ' . $id . ' edited successfully.';
    // Delete the current venue's avatar.
    $this->deleteAvatar($venue);
    // Store the new venue's avatar.
    $this->storeAvatar('venue', $request);
    // Update the venue's avatar field.
    $venue->avatar = $request->file('upload') ? $this->file_name : null;
    $venue->save();
    // Add warning messages to the response.
    if ($this->warning != null) {
      $this->messages[] = $this->warning;
    }
    // Returns the edited venue data with response messages.
    return $this->success($this->messages, new VenueResource(Venue::find($id)), 201);
  }

  /**
   * Create a new file.
   *
   * @param  string  $id
   * @param  Request  $request
   * @return Response
   */
  public function storeFile($id, Request $request)
  {
    // Validation.
    $validatorRules = $this->validators(false, false, true);
    $validator = Validator::make($request->all(), $validatorRules);
    // If validation fails, returns error messages.
    if ($validator->fails()) {
      $errors = $validator->errors();
      return $this->failure($errors);
    }
    // Load the venue.
    $venue = Venue::find($id);
    // Check if the venue exists.
    if (!$venue) {
      return $this->failure('Venue ' . $id . ' not found.', 404);
    }
    // Success message.
    $this->messages[] = 'File uploaded successfully.';
    // Store the new comment.
    $this->addFile($venue, 'venue', $request);
    // Add warning messages to the response.
    if ($this->warning != null) {
      $this->messages[] = $this->warning;
    }
    // Returns the edited venue data with response messages.
    return $this->success($this->messages, new VenueResource(Venue::find($id)), 201);
  }

  /**
   * Create a new comment.
   *
   * @param  string  $id
   * @param  Request  $request
   * @return Response
   */
  public function storeComment($id, Request $request)
  {
    // Validation.
    $validatorRules = $this->validators(false, true);
    $validator = Validator::make($request->all(), $validatorRules);
    // If validation fails, returns error messages.
    if ($validator->fails()) {
      $errors = $validator->errors();
      return $this->failure($errors);
    }
    // Load the venue.
    $venue = Venue::find($id);
    // Check if the venue exists.
    if (!$venue) {
      return $this->failure('Venue ' . $id . ' not found.', 404);
    }
    // Success message.
    $this->messages[] = 'Comment created successfully.';
    // Store the new comment.
    $this->addComment($venue, 'venue', $request);
    // Add warning messages to the response.
    if ($this->warning != null) {
      $this->messages[] = $this->warning;
    }
    // Returns the edited venue data with response messages.
    return $this->success($this->messages, new VenueResource(Venue::find($id)), 201);
  }

  /**
   * Remove the specified venue.
   *
   * @param  string  $id
   * @return Response
   */
  public function destroy($id)
  {
    // Load the venue.
    $venue = Venue::find($id);
    // Check if the venue exists.
    if (!$venue) {
      return $this->failure('Venue ' . $id . ' not found.', 404);
    }
    // Delete the venue's avatar.
    $this->deleteAvatar($venue);
    // Detach people from the venue.
    $venue->people()->detach();
    // Detach events from the venue.
    $venue->events()->detach();
    // Detach addresses from the venue.
    $this->detachEntity($venue, 'venue', 'addresses');
    // Delete addresses from the venue.
    $this->deleteEntity($venue, $this->related, 'addresses');
    // Detach emails from the venue.
    $this->detachEntity($venue, 'venue', 'emails');
    // Delete emails from the venue.
    $this->deleteEntity($venue, $this->related, 'emails');
    // Detach phones from the venue.
    $this->detachEntity($venue, 'venue', 'phones');
    // Delete phones from the venue.
    $this->deleteEntity($venue, $this->related, 'phones');
    // Detach files from the venue.
    $this->detachEntity($venue, 'venue', 'files');
    // Delete files from the venue.
    $this->deleteEntity($venue, $this->related, 'files');
    // Detach taxonomies from the venue.
    $venue->taxonomies()->detach();
    // Detach websites from the venue.
    $this->detachEntity($venue, 'venue', 'websites');
    // Delete websites from the venue.
    $this->deleteEntity($venue, $this->related, 'websites');
    // Delete the venue.
    $venue->delete();
    // Success message.
    $message = 'Venue ' . $id . ' removed successfully.';
    // Returns success message.
    return $this->success($message, null, 200);
  }

  /**
   * Validators.
   *
   * @param  bool $update
   * @param  bool $comment
   * @return array
   */
  protected function validators($update = false, $comment = false, $file = false)
  {
    $validatorRules = [];
    // TODO
    // Validator rules for all submitted fields.
    $validatorRules = [];
    // Validator rules for comments.
    if ($comment) {
      $validatorRules = [
        'text' => 'required|string|min:10|max:255',
        'user_id' => 'required|integer|digits_between:1,20',
      ];
    }
    // Validator rules for files.
    if ($file) {
      $validatorRules = [
        'upload' => 'required|file',
        'name' => 'required|string|min:10|max:30',
        'type' => 'required|in:audio,video,image',
        'user_id' => 'required|string|max:36',
      ];
    }
    // Validate id when update method is requested.
    if ($update) {
      $validatorRules['id'] = 'required|string|max:36';
    }
    return $validatorRules;
  }
}
