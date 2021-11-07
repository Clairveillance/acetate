<?php

namespace App\Http\Resources;

use App\Http\Traits\CreditTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;

class EventCollection extends ResourceCollection
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
      $this::$wrap => $this->collection->map(function ($item) {
        return collect([
          'id' => $item->event->id,
          'name' => $item->event->name,
          'avatar' => $item->event->avatar,
          'created_at' => date('Y-m-d H:i:s', strtotime($item['created_at'])),
          'updated_at' => date('Y-m-d H:i:s', strtotime($item['updated_at'])),
          'start_date' => $item->start_date,
          'end_date' => $item->end_date,
          'start_time' => $item->start_time,
          'end_time' => $item->end_time,
          'prices' => $item->event->prices,
          'people' => $item->event->people,
          'venues' => $item->event->venues,
          'taxonomies' => $item->event->taxonomies,
          'likes_count' => $item->event->likes_count,
          'dislikes_count' => $item->event->dislikes_count,
          'likes' => $item->likes,
          'comments_count' => $item->event->comments_count,
          'favorites' => $item->event->favorites,
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
  public static $wrap = 'events';
}
