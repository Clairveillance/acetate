<?php

namespace App\Http\Traits;

use App\Models\Comment;
use Illuminate\Http\Request;

trait CommentTrait
{
  /**
   * Store a new $controller's comment.
   *
   * @param  object  $controller
   * @param  string  $entity
   * @param  Request  $request
   * @return void
   */
  protected function addComment($controller, $entity, Request $request)
  {
    // Create a new comment.
    $comment = new Comment([
      'text' => $request->input('text'),
      'user_id' => $request->input('user_id')
    ]);
    // Attach $entities to the $controller.
    $comment->$entity()->associate($controller);
    $comment->save();
  }
}
