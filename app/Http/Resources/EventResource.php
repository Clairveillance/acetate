<?php

namespace App\Http\Resources;

use Illuminate\Support\Carbon;
use App\Http\Traits\CreditTrait;
use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
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
        'dates' => $this->dates,
        'current_dates' => $this->dates->where('start_date', '>=', Carbon::now()->toDateString())->all(),
        'old_dates' => $this->dates->where('start_date', '<', Carbon::now()->toDateString())->all(),
        'prices' => $this->prices,
        'venues' => $this->venues->load('addresses')->load('emails')->load('phones')->load('websites')->load('websites.socialNetwork'),
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
            'likes_count' => $item->likes->where('is_dislike', 0)->count(),
            'dislikes_count' => $item->likes->where('is_dislike', 1)->count(),
            'user_name' => $item->user['username'],
            'user_avatar' => $item->user['avatar'],
            'user_id' => $item['user_id'],
          ];
        })->sortByDesc('created_at')->all(),
        'likes_count' => $this->likes->where('is_dislike', 0)->count(),
        'dislikes_count' => $this->likes->where('is_dislike', 1)->count(),
        'likes' => $this->likes,
        'favorites' => $this->favorites,
        'user_name' => $this->user['username'],
        'user_avatar' => $this->user['avatar'],
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
  public static $wrap = 'event';
}
