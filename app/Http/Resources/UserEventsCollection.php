<?php

namespace App\Http\Resources;

use App\Http\Traits\CreditTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;

class UserEventsCollection extends ResourceCollection
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
          return collect([
            'id' => $item->id,
            'created_at' => date('Y-m-d H:i:s', strtotime($item->created_at)),
            'updated_at' => date('Y-m-d H:i:s', strtotime($item->updated_at)),
            'name' => $item->name,
            // TODO show likes of the logged user.
            'likes_count' => $item->likes->where('is_dislike', 0)->count(),
            // TODO show dislikes of the logged user.
            'dislikes_count' => $item->likes->where('is_dislike', 1)->count(),
            // TODO show favorites only if the user is logged in.
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
  public static $wrap = 'user_events';
}
