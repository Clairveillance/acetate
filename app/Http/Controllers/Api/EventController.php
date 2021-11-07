<?php

namespace App\Http\Controllers\Api;

use App\Models\Date;
use App\Models\Event;
use Illuminate\Http\Request;
use App\Http\Traits\FileTrait;
use Illuminate\Support\Carbon;
use App\Http\Traits\AvatarTrait;
use App\Http\Traits\EntityTrait;
use App\Http\Traits\CommentTrait;
use App\Http\Traits\WebsiteTrait;
use App\Http\Controllers\Controller;
use App\Http\Resources\EventResource;
use App\Http\Resources\EventCollection;
use Illuminate\Support\Facades\Validator;
use App\Http\Traits\RespondsWithHttpStatus;

class EventController extends Controller
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
  protected $related = ['user', 'people', 'venue', 'ticket'];

  /**
   * Sortable fields.
   *
   * @var array
   */
  protected $sortFields = ['start_date', 'end_date', 'start_time', 'end_time'];

  /**
   * Searchable fields.
   *
   * @var array
   */
  protected $searchFields = ['start_date', 'end_date'];

  /**
   * Searchable values.
   *
   * @var array
   */
  protected $searchValues = ['>=', '=', '<='];

  /**
   * Taxonomy Types.
   *
   * @var array
   */
  protected $taxonomyTypes = ['conference', 'exhibition', 'music', 'theater'];

  /**
   * Display the list of all events.
   *
   * @param Request $request
   * @return EventCollection
   */
  public function index(Request $request)
  {
    // Search dates.
    $searchField = in_array(
      $request->input('search_field'),
      $this->searchFields
    ) // Accepted values.
      ? $request->input('search_field') // Submitted value.
      : 'start_date'; // Default value.
    $searchValue = in_array(
      $request->input('search_value'),
      $this->searchValues
    ) // Accepted values.
      ? $request->input('search_value') // Submitted value.
      : '>='; // Default value.
    $searchReference = $request->input('search_reference')
      ? Carbon::parse($request->input('search_reference'))->toDateString()
      : Carbon::now()->toDateString();
    // By default, only returns events where date is superior or equal to today.
    $query = Date::whereDate($searchField, $searchValue, $searchReference)
      // Returns the list of dates with attached relationships.
      ->with([
        // Returns event:id, event:name and event:avatar.
        'event' => function ($filter) {
          $filter
            ->select('id', 'name', 'avatar')
            // Order event by name.
            ->orderBy('name')
            ->with([
              // Returns people:id and people:nickname.
              'people' => function ($filter) {
                $filter
                  ->select('id', 'nickname')
                  // Order people by nickname.
                  ->orderBy('nickname');
              },
              // Returns venues:id and venues:name.
              'venues' => function ($filter) {
                $filter
                  ->select('id', 'name')
                  // Order venues by name.
                  ->orderBy('name');
              },
              // Returns prices.
              'prices' => function ($filter) {
                $filter
                  // Order prices by cost.
                  ->orderBy('cost');
              },
              // Returns taxonomies.
              'taxonomies' => function ($filter) {
                $filter
                  // Order taxonomies by type.
                  ->orderBy('type')
                  // Order taxonomies by category.
                  ->orderBy('category')
                  // Order taxonomies by sub_category.
                  ->orderBy('sub_category');
              },
              // Returns favorites of the specified user.
              'favorites'
            ])
            // Returns the total number of likes.
            ->withCount([
              'likes as likes_count' => function ($filter) {
                $filter
                  ->where('is_dislike', 0);
              },
              // Returns the total number of dislikes.
              'likes as dislikes_count' => function ($filter) {
                $filter
                  ->where('is_dislike', 1);
              },
              // Returns the total number of comments.
              'comments as comments_count'
            ]);
        }
      ])
      // Search in event's relationships.
      ->whereHas('event', function ($filter) use ($request) {
        // Search taxonomy type.
        if ($request->input('type')) {
          $filter
            ->whereHas('taxonomies', function ($filter) use ($request) {
              if (in_array(
                $request->input('type'),
                $this->taxonomyTypes
              )) {
                $filter->where('type', $request->input('type'));
              }
            });
        }
        // Search taxonomy category.
        if ($request->input('category')) {
          $filter
            ->whereHas('taxonomies', function ($filter) use ($request) {
              $filter->where('category', $request->input('category'));
            });
        }
        // Search taxonomy sub_category.
        if ($request->input('sub_category')) {
          $filter
            ->whereHas('taxonomies', function ($filter) use ($request) {
              $filter->where('sub_category', $request->input('sub_category'));
            });
        }
      });
    // Sort data.
    $sortField = in_array(
      $request->input('sort_by'),
      $this->sortFields
    ) // Accepted values.
      ? $request->input('sort_by') // Submitted value.
      : 'start_date'; // Default value.
    $sortOrder = in_array(
      $request->input('order_by'),
      ['asc', 'desc']
    ) // Accepted values.
      ? $request->input('order_by') // Submitted value.
      : 'asc'; // Default value.
    $query = $query->orderBy($sortField, $sortOrder);
    // Pagination.
    $perPage = $request->input('per_page') ?? self::PER_PAGE;
    $events = $query->paginate((int)$perPage);
    // Check if events exist.
    if ($events->isEmpty()) {
      return $this->failure('No events found.', 404);
    }
    // Returns events data's collection.
    return new EventCollection($events);
  }

  /**
   * Create a new event.
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
    $this->messages[] = 'Event created successfully.';
    // Store event's avatar.
    $this->storeAvatar('event', $request);
    // Create a new event.
    $event = new Event([
      'name' => $request->input('name'),
      'description' => $request->input('description'),
      'avatar' => $request->file('upload') ? $this->file_name : null,
      'user_id' => $request->input('user_id')
    ]);
    // Save the event.
    $event->save();
    // Create and attach dates to the event.
    $this->storeEntity($event, 'dates', 'App\Models\Date', $request);
    // Create and attach prices to the event.
    $this->storeEntity($event, 'prices', 'App\Models\Price', $request);
    // Attach venues to the event.
    $this->attachEntity($event, 'venues', 'Venue', 'App\Models\Venue', $request);
    // Attach people to the event.
    $this->attachEntity($event, 'people', 'Person', 'App\Models\Person', $request);
    // Create and attach addresses to the event.
    $this->storeEntity($event, 'addresses', 'App\Models\Address', $request);
    // Create and attach emails to the event.
    $this->storeEntity($event, 'emails', 'App\Models\Email', $request);
    // Create and attach phones to the event.
    $this->storeEntity($event, 'phones', 'App\Models\Phone', $request);
    // Attach files to the event.
    $this->attachEntity($event, 'files', 'File', 'App\Models\File', $request);
    // Attach submitted taxonomies to the event.
    $this->attachEntity($event, 'taxonomies', 'Taxonomy', 'App\Models\Taxonomy', $request);
    // Create and attach websites to the event.
    $this->storeWebsite($event, $request);
    // Add warning messages to the response.
    if ($this->warning != null) {
      $this->messages[] = $this->warning;
    }
    // Returns the newly created event data with response messages.
    return $this->success($this->messages, new EventResource($event), 201);
  }

  /**
   * Display the specified event.
   *
   * @param  string  $id
   * @return Response
   */
  public function show($id)
  {
    // Check if the event exists.
    $event = Event::find($id);
    if (!$event) {
      return $this->failure('Event ' . $id . ' not found.', 404);
    }
    // Success message.
    $message = 'OK';
    // Returns the event data with success message.
    return $this->success($message, new EventResource($event), 200);
  }

  /**
   * Update the specified event.
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
    $this->messages[] = 'Event ' . $id . ' edited successfully.';
    // Load the event.
    $event = Event::find($id);
    // Check if the event exists.
    if (!$event) {
      return $this->failure('Event ' . $id . ' not found.', 404);
    }
    // Update the event's fields.
    $event->name = $request->input('name');
    $event->description = $request->input('description');
    // Delete current dates from the event.
    $this->deleteEntity($event, $this->related, 'dates');
    // Store new dates into the event.
    $this->storeEntity($event, 'dates', 'App\Models\Date', $request);
    // Delete current prices from the event.
    $this->deleteEntity($event, $this->related, 'prices');
    // Store new prices into the event.
    $this->storeEntity($event, 'prices', 'App\Models\Price', $request);
    // Detach current venues from the event.
    $event->venues()->detach();
    // Attach submitted venues to the event.
    $this->attachEntity($event, 'venues', 'Venue', 'App\Models\Venue', $request);
    // Detach current people from the event.
    $event->people()->detach();
    // Attach submitted people to the event.
    $this->attachEntity($event, 'people', 'Person', 'App\Models\Person', $request);
    // Detach current addresses from the event.
    $this->detachEntity($event, 'event', 'addresses');
    // Delete current addresses from the event.
    $this->deleteEntity($event, $this->related, 'addresses');
    // Store new addresses into the event.
    $this->storeEntity($event, 'addresses', 'App\Models\Address', $request);
    // Detach current emails from the event.
    $this->detachEntity($event, 'event', 'emails');
    // Delete current emails from the event.
    $this->deleteEntity($event, $this->related, 'emails');
    // Store new emails into the event.
    $this->storeEntity($event, 'emails', 'App\Models\Email', $request);
    // Detach current phones from the event.
    $this->detachEntity($event, 'event', 'phones');
    // Delete current phones from the event.
    $this->deleteEntity($event, $this->related, 'phones');
    // Store new phones into the event.
    $this->storeEntity($event, 'phones', 'App\Models\Phone', $request);
    // Detach current taxonomies from the event.
    $event->taxonomies()->detach();
    // Attach submitted taxonomies to the event.
    $this->attachEntity($event, 'taxonomies', 'Taxonomy', 'App\Models\Taxonomy', $request);
    // Detach current websites from the event.
    $this->detachEntity($event, 'event', 'websites');
    // Delete current websites from the event.
    $this->deleteEntity($event, $this->related, 'websites');
    // Store new websites into the event.
    $this->storeWebsite($event, $request);
    // Save the event.
    $event->save();
    // Add warning messages to the response.
    if ($this->warning != null) {
      $this->messages[] = $this->warning;
    }
    // Returns the edited event data with response messages.
    return $this->success($this->messages, new EventResource(Event::find($id)), 201);
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
    // Load the event.
    $event = Event::find($id);
    // Check if the event exists.
    if (!$event) {
      return $this->failure('Event ' . $id . ' not found.', 404);
    }
    // Success message.
    $this->messages[] = 'Avatar of event ' . $id . ' edited successfully.';
    // Delete the current event's avatar.
    $this->deleteAvatar($event);
    // Store the new event's avatar.
    $this->storeAvatar('event', $request);
    // Update the event's avatar field.
    $event->avatar = $request->file('upload') ? $this->file_name : null;
    $event->save();
    // Add warning messages to the response.
    if ($this->warning != null) {
      $this->messages[] = $this->warning;
    }
    // Returns the edited event data with response messages.
    return $this->success($this->messages, new EventResource(Event::find($id)), 201);
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
    // Load the event.
    $event = Event::find($id);
    // Check if the event exists.
    if (!$event) {
      return $this->failure('Event ' . $id . ' not found.', 404);
    }
    // Success message.
    $this->messages[] = 'File uploaded successfully.';
    // Store the new comment.
    $this->addFile($event, 'event', $request);
    // Add warning messages to the response.
    if ($this->warning != null) {
      $this->messages[] = $this->warning;
    }
    // Returns the edited event data with response messages.
    return $this->success($this->messages, new EventResource(Event::find($id)), 201);
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
    // Load the event.
    $event = Event::find($id);
    // Check if the event exists.
    if (!$event) {
      return $this->failure('Event ' . $id . ' not found.', 404);
    }
    // Success message.
    $this->messages[] = 'Comment created successfully.';
    // Store the new comment.
    $this->addComment($event, 'event', $request);
    // Add warning messages to the response.
    if ($this->warning != null) {
      $this->messages[] = $this->warning;
    }
    // Returns the edited event data with response messages.
    return $this->success($this->messages, new EventResource(Event::find($id)), 201);
  }

  /**
   * Remove the specified event.
   *
   * @param  string  $id
   * @return Response
   */
  public function destroy($id)
  {
    // Load the event.
    $event = Event::find($id);
    // Check if the event exists.
    if (!$event) {
      return $this->failure('Event ' . $id . ' not found.', 404);
    }
    // Delete the event's avatar.
    $this->deleteAvatar($event);
    // Delete dates from the event.
    $this->deleteEntity($event, $this->related, 'dates');
    // Delete prices from the event.
    $this->deleteEntity($event, $this->related, 'prices');
    // Detach venues from the event.
    $event->venues()->detach();
    // Detach people from the event.
    $event->people()->detach();
    // Detach addresses from the event.
    $this->detachEntity($event, 'event', 'addresses');
    // Delete addresses from the event.
    $this->deleteEntity($event, $this->related, 'addresses');
    // Detach emails from the event.
    $this->detachEntity($event, 'event', 'emails');
    // Delete emails from the event.
    $this->deleteEntity($event, $this->related, 'emails');
    // Detach phones from the event.
    $this->detachEntity($event, 'event', 'phones');
    // Delete phones from the event.
    $this->deleteEntity($event, $this->related, 'phones');
    // Detach files from the event.
    $this->detachEntity($event, 'event', 'files');
    // Delete files from the event.
    $this->deleteEntity($event, $this->related, 'files');
    // Detach taxonomies from the event.
    $event->taxonomies()->detach();
    // Detach websites from the event.
    $this->detachEntity($event, 'event', 'websites');
    // Delete websites from the event.
    $this->deleteEntity($event, $this->related, 'websites');
    // Delete the event.
    $event->delete();
    // Success message.
    $message = 'Event ' . $id . ' removed successfully.';
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
    // Validator rules for all submitted fields.
    $validatorRules = [
      'name' => 'required|string|max:100',
      'description' => 'string|nullable',
      'upload' => 'file|nullable',
      'user_id' => 'required|string|max:36',
      'dates.*.start_date' => 'required|date',
      'dates.*.end_date' => 'required|date|after_or_equal:dates.*.start_date',
      'dates.*.start_time' => 'required|date_format:H:i:s',
      'dates.*.end_time' => 'required|date_format:H:i:s',
      'prices.*.type' => 'required|in:adult,child,family,group,primary,secondary',
      'prices.*.cost' => 'required|regex:/^\d*(\.\d{1,2})?$/|max:10',
      'venues.*.id' => 'required|string|max:36',
      'people.*.id' => 'required|string|max:36',
      'addresses.*.type' => 'required|in:event',
      'addresses.*.street1' => 'required|string|max:100',
      'addresses.*.street2' => 'string|max:100|nullable',
      'addresses.*.zip' => 'required|string|max:10',
      'addresses.*.canton' => 'required|in:AG,AI,AR,BE,BL,BS,FR,GE,GL,GR,JU,LU,NE,NW,OW,SG,SH,SO,SZ,TG,TI,UR,VD,VS,ZG,ZH',
      'addresses.*.region' => 'string|max:30|nullable',
      'addresses.*.city' => 'required|string|max:30',
      'addresses.*.country' => 'required|string|max:4',
      'addresses.*.firstname' => 'string|max:30|nullable',
      'addresses.*.lastname' => 'string|max:30|nullable',
      'addresses.*.latitude' => 'string|max:30|nullable',
      'addresses.*.longitude' => 'string|max:30|nullable',
      'addresses.*.company' => 'string|max:100|nullable',
      'emails.*.type' => 'required|in:main,secondary,pro',
      'emails.*.address' => 'required|email|max:100',
      'phones.*.type' => 'required|in:mobile,home,pro',
      'phones.*.number' => 'required|string|max:30',
      'phones.*.firstname' => 'string|max:30|nullable',
      'phones.*.lastname' => 'string|max:30|nullable',
      'phones.*.company' => 'string|max:100|nullable',
      'websites.*.type' => 'required|in:website,social network',
      'websites.*.url' => 'required|string|max:255',
      'websites.*.name' => 'required|string|max:30',
      'files.*.id' => 'required|string|max:36',
      'taxonomies.*.id' => 'required|string|max:36',
    ];
    // Validator rules for comments.
    if ($comment) {
      $validatorRules = [
        'text' => 'required|string|min:10|max:255',
        'user_id' => 'required|string|max:36',
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
