<?php

namespace App\Http\Resources;

use App\Http\Traits\CreditTrait;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
  // Import custom credit trait.
  use CreditTrait;

  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request)
  {
    $person = null;
    if ($this->person) {
      $person = [
        'id' => $this->person['id'],
        'nickname' => $this->person['nickname'],
      ];
    }
    $event = null;
    if ($this->event) {
      $event = [
        'id' => $this->event['id'],
        'name' => $this->event['name'],
      ];
    }
    $venue = null;
    if ($this->venue) {
      $venue = [
        'id' => $this->venue['id'],
        'name' => $this->venue['name'],
      ];
    }
    return [
      $this::$wrap => [
        'id' => $this->id,
        'created_at' => date('Y-m-d H:i:s', strtotime($this->created_at)),
        'updated_at' => date('Y-m-d H:i:s', strtotime($this->updated_at)),
        'text' => $this->text,
        'event' => $event,
        'person' => $person,
        'venue' => $venue,
        // TODO show likes of the logged user.
        'likes_count' => $this->likes->where('is_dislike', 0)->count(),
        // TODO show dislikes of the logged user.
        'dislikes_count' => $this->likes->where('is_dislike', 1)->count(),
        'user_id' => $this->user_id,
      ],
      'credit' => $this->apiCredit()
    ];
  }

  /**
   * The "data" wrapper that should be applied.
   *
   * @var string
   */
  public static $wrap = 'comment';
}
