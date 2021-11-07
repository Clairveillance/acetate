<?php

namespace App\Http\Resources;

use App\Http\Traits\CreditTrait;
use Illuminate\Http\Resources\Json\JsonResource;

class PersonResource extends JsonResource
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
        'nickname' => $this->nickname,
        'firstname' => $this->firstname,
        'lastname' => $this->lastname,
        'description' => $this->description,
        'company' => $this->company,
        'avatar' => $this->avatar,
        'events' => $this->events->load('dates'),
        'venues' => $this->venues->load('addresses')->load('emails')->load('phones')->load('websites')->load('websites.socialNetwork'),
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
  public static $wrap = 'person';
}
