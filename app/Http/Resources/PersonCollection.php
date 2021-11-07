<?php

namespace App\Http\Resources;

use App\Http\Traits\CreditTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;

class PersonCollection extends ResourceCollection
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
          'id' => $item->id,
          'nickname' => $item->nickname,
          'firstname' => $item->firstname,
          'lastname' => $item->lastname,
          'company' => $item->company,
          'avatar' => $item->avatar,
          'created_at' => date('Y-m-d H:i:s', strtotime($item['created_at'])),
          'updated_at' => date('Y-m-d H:i:s', strtotime($item['updated_at'])),/* 
          'events' => $item->events->map(function ($item) {
            return [
              'id' => $item['id'],
              'name' => $item['name'],
              'dates' => $item['dates']->map(function ($item) {
                return [
                  'start_date' => $item['start_date'],
                  'end_date' => $item['end_date'],
                  'start_time' => $item['start_time'],
                  'end_time' => $item['end_time'],
                ];
              }),
            ];
          }),
          'venues' => $item->venues->map(function ($item) {
            return [
              'id' => $item['id'],
              'name' => $item['name']
            ];
          }), 
          'taxonomies' => $item->taxonomies, */
          'likes_count' => $item->likes_count,
          'dislikes_count' => $item->dislikes_count,
          'comments_count' => $item->comments_count,
          'favorites' => $item->favorites,
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
  public static $wrap = 'people';
}
