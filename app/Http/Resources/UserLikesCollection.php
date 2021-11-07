<?php

namespace App\Http\Resources;

use App\Http\Traits\CreditTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;

class UserLikesCollection extends ResourceCollection
{
  // Import custom credit trait.
  use CreditTrait;

  /**
   * Transform the resource collection into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request)
  {
    return [
      $this::$wrap => $this->collection
        ->map(function ($item) {
          $person = null;
          if ($item->person) {
            $person = [
              'id' => $item->person['id'],
              'nickname' => $item->person['nickname'],
            ];
          }
          $event = null;
          if ($item->event) {
            $event = [
              'id' => $item->event['id'],
              'name' => $item->event['name'],
            ];
          }
          $venue = null;
          if ($item->venue) {
            $venue = [
              'id' => $item->venue['id'],
              'name' => $item->venue['name'],
            ];
          }
          $comment = null;
          if ($item->comment) {
            $comment = [
              'id' => $item->comment['id'],
              'text' => $item->comment['text'],
            ];
          }
          return collect([
            'id' => $item->id,
            'created_at' => date('Y-m-d H:i:s', strtotime($item->created_at)),
            'updated_at' => date('Y-m-d H:i:s', strtotime($item->updated_at)),
            'is_dislike' => $item->is_dislike,
            'name' => $item->name,
            'event' => $event,
            'person' => $person,
            'venue' => $venue,
            'comments' => $comment,
          ]);
        }),
      'credit' => $this->apiCredit()
    ];
  }

  /**
   * The "data" wrapper that should be applied.
   *
   * @var string
   */
  public static $wrap = 'user_likes';
}
