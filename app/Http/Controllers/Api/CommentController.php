<?php

namespace App\Http\Controllers\Api;

use App\Models\Comment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\CommentResource;
use App\Http\Resources\CommentCollection;
use Illuminate\Support\Facades\Validator;
use App\Http\Traits\RespondsWithHttpStatus;

class CommentController extends Controller
{
  // Import custom response trait.
  use RespondsWithHttpStatus;

  // Pagination.
  const PER_PAGE = 50;

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
   * Sortable fields.
   *
   * @var array
   */
  protected $sortFields = ['created_at', 'updated_at', 'likes_count', 'dislikes_count', 'user_id'];

  /**
   * Display the list of all comments.
   *
   * @param  Request  $request
   * @return CommentCollection
   */
  public function index(Request $request)
  {
    // Retrieve data with requested relationships.
    $query = Comment::
      // Returns the total number of likes.
      // TODO show likes of the logged user.
      withCount([
        'likes as likes_count' => function ($filter) {
          $filter
            ->where('is_dislike', 0);
        },
        // Returns the total number of dislikes.
        // TODO show dislikes of the logged user.
        'likes as dislikes_count' => function ($filter) {
          $filter
            ->where('is_dislike', 1);
        }
      ])
      ->with([
        // Returns event:id and event:name.
        'event' => function ($filter) {
          $filter
            ->select('id', 'name')
            // Order events by name.
            ->orderBy('name');
        },
        // Returns people:id and people:nickname.
        'person' => function ($filter) {
          $filter
            ->select('id', 'nickname')
            // Order people by nickname.
            ->orderBy('nickname');
        },
        // Returns venues:id and venues:name.
        'venue' => function ($filter) {
          $filter
            ->select('id', 'name')
            // Order venues by name.
            ->orderBy('name');
        }
      ]);
    // Sort data.
    $sortField = in_array(
      $request->input('sort_by'),
      $this->sortFields
    ) // Accepted values.
      ? $request->input('sort_by') // Submitted value.
      : 'created_at'; // Default value.
    $sortOrder = in_array(
      $request->input('order_by'),
      ['asc', 'desc']
    ) // Accepted values.
      ? $request->input('order_by') // Submitted value.
      : 'asc'; // Default value.
    $query = $query->orderBy($sortField, $sortOrder);
    // Pagination.
    $perPage = $request->input('per_page') ?? self::PER_PAGE;
    $comments = $query->paginate((int)$perPage);
    // Check if users exist.
    if ($comments == '') {
      return $this->failure('No comments were found.', 404);
    }
    // Format data.
    return new CommentCollection($comments);
  }

  /**
   * Display the specified comment.
   *
   * @param  string  $id
   * @return Response
   */
  public function show($id)
  {
    // Check if the comment exists.
    $comment = Comment::find($id);
    if (!$comment) {
      return $this->failure('Comment ' . $id . ' not found.', 404);
    }
    // Success message.
    $message = 'OK';
    // Returns the comment data with success message.
    return $this->success($message, new CommentResource($comment), 200);
  }

  /**
   * Update the specified comment.
   *
   * @param  string  $id
   * @param  Request  $request
   * @return Response
   */
  public function update($id, Request $request)
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
    $this->messages[] = 'Comment ' . $id . ' edited successfully.';
    // Load the comment.
    $comment = Comment::find($id);
    // Check if the comment exists.
    if (!$comment) {
      return $this->failure('Comment ' . $id . ' not found.', 404);
    }
    // Update the comment's fields.
    $comment->text = $request->input('text');
    // Save the comment.
    $comment->save();
    // Add warning messages to the response.
    if ($this->warning != null) {
      $this->messages[] = $this->warning;
    }
    // Returns the edited comment data with response messages.
    return $this->success($this->messages, new CommentResource(Comment::find($id)), 201);
  }

  /**
   * Remove the specified comment.
   *
   * @param  string  $id
   * @return Response
   */
  public function destroy($id)
  {
    $comment = Comment::find($id);
    // Check if the comment exists.
    if (!$comment) {
      return $this->failure('Comment ' . $id . ' not found.', 404);
    }
    $comment->delete();
    // Success message.
    $message = 'Comment ' . $id . ' removed successfully.';
    // Returns success message.
    return $this->success($message, null, 200);
  }

  /**
   * Validators.
   *
   * @return array
   */
  protected function validators()
  {
    $validatorRules = [];
    // Validator rules for all submitted fields.
    $validatorRules = [
      'text' => 'required|string|min:10|max:255',
      'user_id' => 'required|string|max:36',
    ];
    return $validatorRules;
  }
}
