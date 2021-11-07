<?php

namespace App\Http\Controllers\Api;

use App\Models\Person;
use Illuminate\Http\Request;
use App\Http\Traits\FileTrait;
use App\Http\Traits\AvatarTrait;
use App\Http\Traits\EntityTrait;
use App\Http\Traits\CommentTrait;
use App\Http\Traits\WebsiteTrait;
use App\Http\Controllers\Controller;
use App\Http\Resources\PersonResource;
use App\Http\Resources\PersonCollection;
use Illuminate\Support\Facades\Validator;
use App\Http\Traits\RespondsWithHttpStatus;

class PersonController extends Controller
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
  const PER_PAGE = 20;

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
  protected $related = ['user', 'event', 'venue', 'ticket'];

  /**
   * Sortable fields.
   *
   * @var array
   */
  protected $sortFields = ['nickname', 'firstname', 'lastname', 'type', 'company'];

  /**
   * Display the list of all people.
   *
   * @param Request $request
   * @return PersonCollection
   */
  public function index(Request $request)
  {
    // Retrieve and sort data.
    $sortField = in_array(
      $request->input('sort_by'),
      $this->sortFields
    ) // Accepted values.
      ? $request->input('sort_by') // Submitted value.
      : 'nickname'; // Default value.
    $sortOrder = in_array(
      $request->input('order_by'),
      ['asc', 'desc']
    ) // Accepted values.
      ? $request->input('order_by') // Submitted value.
      : 'asc'; // Default value.
    $query = Person::orderBy($sortField, $sortOrder);
    // Returns the list of people with attached relationships.
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
      ->with([/* 
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
      ]);
    // Search data.
    $search = $request->input('search');
    if (!is_null($search)) {
      $query = $query->where("nickname", "like", "%$search%")
        ->orWhere("firstname", "like", "%$search%")
        ->orWhere("lastname", "like", "%$search%")
        ->orWhere("company", "like", "%$search%");
    }
    // Pagination.
    $perPage = $request->input('per_page') ?? self::PER_PAGE;
    $people = $query->paginate((int)$perPage);
    // Check if people exist.
    if ($people->isEmpty()) {
      return $this->failure('No people found.', 404);
    }
    /* TODO add pagination to response.
    // Success message.
    $message = 'OK';
    // Returns people data with success message.
    return $this->success($message, new PersonCollection($people), 200);
     */
    // Returns people data's collection.
    return new PersonCollection($people);
  }

  /**
   * Create a new person.
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
    $this->messages[] = 'Person created successfully.';
    // Store person's avatar.
    $this->storeAvatar('person', $request);
    // Create a new person.
    $person = new Person([
      'nickname' => $request->input('nickname'),
      'firstname' => $request->input('firstname'),
      'lastname' => $request->input('lastname'),
      'description' => $request->input('description'),
      'company' => $request->input('company'),
      // TODO create a default person's avatar if not submitted.
      'avatar' => $request->file('upload') ? $this->file_name : null,
      'user_id' => $request->input('user_id')
    ]);
    // Save the person.
    $person->save();
    // Attach venues to the person.
    $this->attachEntity($person, 'venues', 'Venue', 'App\Models\Venue', $request);
    // Attach events to the person.
    $this->attachEntity($person, 'events', 'Event', 'App\Models\Event', $request);
    // Create and attach addresses to the person.
    $this->storeEntity($person, 'addresses', 'App\Models\Address', $request);
    // Create and attach emails to the person.
    $this->storeEntity($person, 'emails', 'App\Models\Email', $request);
    // Create and attach phones to the person.
    $this->storeEntity($person, 'phones', 'App\Models\Phone', $request);
    // Attach files to the person.
    $this->attachEntity($person, 'files', 'File', 'App\Models\File', $request);
    // TODO Check if new taxonomies's types are valid.
    // Attach submitted taxonomies to the person.
    $this->attachEntity($person, 'taxonomies', 'Taxonomy', 'App\Models\Taxonomy', $request);
    // Create and attach websites to the person.
    $this->storeWebsite($person, $request);
    // Add warning messages to the response.
    if ($this->warning != null) {
      $this->messages[] = $this->warning;
    }
    // Returns the newly created person data with response messages.
    return $this->success($this->messages, new PersonResource($person), 201);
  }

  /**
   * Display the specified person.
   *
   * @param  string  $id
   * @return Response
   */
  public function show($id)
  {
    // Check if the person exists.
    $person = Person::find($id);
    if (!$person) {
      return $this->failure('Person ' . $id . ' not found.', 404);
    }
    // Success message.
    $message = 'OK';
    // Returns the person data with success message.
    return $this->success($message, new PersonResource($person), 200);
  }

  /**
   * Update the specified person.
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
    $this->messages[] = 'Person ' . $id . ' edited successfully.';
    // Load the person.
    $person = Person::find($id);
    // Check if the person exists.
    if (!$person) {
      return $this->failure('Person ' . $id . ' not found.', 404);
    }
    // Update the person's fields.
    $person->nickname = $request->input('nickname');
    $person->firstname = $request->input('firstname');
    $person->lastname = $request->input('lastname');
    $person->description = $request->input('description');
    $person->company = $request->input('company');
    // Detach current venues from the person.
    $person->venues()->detach();
    // Attach submitted venues to the person.
    $this->attachEntity($person, 'venues', 'Venue', 'App\Models\Venue', $request);
    // Detach current events from the person.
    $person->events()->detach();
    // Attach submitted events to the person.
    $this->attachEntity($person, 'events', 'Event', 'App\Models\Event', $request);
    // Detach current addresses from the person.
    $this->detachEntity($person, 'person', 'addresses');
    // Delete current addresses from the person.
    $this->deleteEntity($person, $this->related, 'addresses');
    // Store new addresses into the person.
    $this->storeEntity($person, 'addresses', 'App\Models\Address', $request);
    // Detach current emails from the person.
    $this->detachEntity($person, 'person', 'emails');
    // Delete current emails from the person.
    $this->deleteEntity($person, $this->related, 'emails');
    // Store new emails into the person.
    $this->storeEntity($person, 'emails', 'App\Models\Email', $request);
    // Detach current phones from the person.
    $this->detachEntity($person, 'person', 'phones');
    // Delete current phones from the person.
    $this->deleteEntity($person, $this->related, 'phones');
    // Store new phones into the person.
    $this->storeEntity($person, 'phones', 'App\Models\Phone', $request);
    // Detach current taxonomies from the person.
    $person->taxonomies()->detach();
    // TODO Check if new taxonomies's types are valid.
    // Attach submitted taxonomies to the person.
    $this->attachEntity($person, 'taxonomies', 'Taxonomy', 'App\Models\Taxonomy', $request);
    // Detach current websites from the person.
    $this->detachEntity($person, 'person', 'websites');
    // Delete current websites from the person.
    $this->deleteEntity($person, $this->related, 'websites');
    // Store new websites into the person.
    $this->storeWebsite($person, $request);
    // Save the person.
    $person->save();
    // Add warning messages to the response.
    if ($this->warning != null) {
      $this->messages[] = $this->warning;
    }
    // Returns the edited person data with response messages.
    return $this->success($this->messages, new PersonResource(Person::find($id)), 201);
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
    // Load the person.
    $person = Person::find($id);
    // Check if the person exists.
    if (!$person) {
      return $this->failure('Person ' . $id . ' not found.', 404);
    }
    // Success message.
    $this->messages[] = 'Avatar of person ' . $id . ' edited successfully.';
    // Delete the current person's avatar.
    $this->deleteAvatar($person);
    // Store the new person's avatar.
    $this->storeAvatar('person', $request);
    // Update the person's avatar field.
    $person->avatar = $request->file('upload') ? $this->file_name : null;
    $person->save();
    // Add warning messages to the response.
    if ($this->warning != null) {
      $this->messages[] = $this->warning;
    }
    // Returns the edited person data with response messages.
    return $this->success($this->messages, new PersonResource(Person::find($id)), 201);
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
    // Load the person.
    $person = Person::find($id);
    // Check if the person exists.
    if (!$person) {
      return $this->failure('Person ' . $id . ' not found.', 404);
    }
    // Success message.
    $this->messages[] = 'File uploaded successfully.';
    // Store the new comment.
    $this->addFile($person, 'person', $request);
    // Add warning messages to the response.
    if ($this->warning != null) {
      $this->messages[] = $this->warning;
    }
    // Returns the edited person data with response messages.
    return $this->success($this->messages, new PersonResource(Person::find($id)), 201);
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
    // Load the person.
    $person = Person::find($id);
    // Check if the person exists.
    if (!$person) {
      return $this->failure('Person ' . $id . ' not found.', 404);
    }
    // Success message.
    $this->messages[] = 'Comment created successfully.';
    // Store the new comment.
    $this->addComment($person, 'person', $request);
    // Add warning messages to the response.
    if ($this->warning != null) {
      $this->messages[] = $this->warning;
    }
    // Returns the edited person data with response messages.
    return $this->success($this->messages, new PersonResource(Person::find($id)), 201);
  }

  /**
   * Remove the specified person.
   *
   * @param  string  $id
   * @return Response
   */
  public function destroy($id)
  {
    // Load the person.
    $person = Person::find($id);
    // Check if the person exists.
    if (!$person) {
      return $this->failure('Person ' . $id . ' not found.', 404);
    }
    // Delete the person's avatar.
    $this->deleteAvatar($person);
    // Detach venues from the person.
    $person->venues()->detach();
    // Detach events from the person.
    $person->events()->detach();
    // Detach addresses from the person.
    $this->detachEntity($person, 'person', 'addresses');
    // Delete addresses from the person.
    $this->deleteEntity($person, $this->related, 'addresses');
    // Detach emails from the person.
    $this->detachEntity($person, 'person', 'emails');
    // Delete emails from the person.
    $this->deleteEntity($person, $this->related, 'emails');
    // Detach phones from the person.
    $this->detachEntity($person, 'person', 'phones');
    // Delete phones from the person.
    $this->deleteEntity($person, $this->related, 'phones');
    // Detach files from the person.
    $this->detachEntity($person, 'person', 'files');
    // Delete files from the person.
    $this->deleteEntity($person, $this->related, 'files');
    // Detach taxonomies from the person.
    $person->taxonomies()->detach();
    // Detach websites from the person.
    $this->detachEntity($person, 'person', 'websites');
    // Delete websites from the person.
    $this->deleteEntity($person, $this->related, 'websites');
    // Delete the person.
    $person->delete();
    // Success message.
    $message = 'Person ' . $id . ' removed successfully.';
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
