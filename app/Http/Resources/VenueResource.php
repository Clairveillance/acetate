<?php

namespace App\Http\Resources;

use App\Http\Traits\CreditTrait;
use Illuminate\Http\Resources\Json\JsonResource;

class VenueResource extends JsonResource
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
    return [
      $this::$wrap => [
        'id' => $this->id,
        'created_at' => date('Y-m-d H:i:s', strtotime($this->created_at)),
        'updated_at' => date('Y-m-d H:i:s', strtotime($this->updated_at)),
        'name' => $this->name,
        'description' => $this->description,
        'avatar' => $this->avatar,
        'events' => $this->events->load('dates'),
        'people' => $this->people,
        'addresses' => $this->addresses,
        'emails' => $this->emails,
        'phones' => $this->phones,
        'websites' => $this->websites->load('socialNetwork'),
        'files' => $this->files,
        'taxonomies' => $this->taxonomies,
        'comments' => $this->comments->map(function ($item) {
          return [
            'id' => $item['id'],
            'created_at' => date('Y-m-d H:i:s', strtotime($item['created_at'])),
            'updated_at' => date('Y-m-d H:i:s', strtotime($item['updated_at'])),
            'text' => $item['text'],
            // TODO show likes of the logged user.
            'likes_count' => $item->likes->where('is_dislike', 0)->count(),
            // TODO show dislikes of the logged user.
            'dislikes_count' => $item->likes->where('is_dislike', 1)->count(),
            'user_id' => $item['user_id'],
          ];
        }),
        // TODO show likes of the logged user.
        'likes_count' => $this->likes->where('is_dislike', 0)->count(),
        // TODO show dislikes of the logged user.
        'dislikes_count' => $this->likes->where('is_dislike', 1)->count(),
        // TODO show favorites only if the user is logged in.
        'favorites' => $this->favorites,
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
  public static $wrap = 'venue';
}
