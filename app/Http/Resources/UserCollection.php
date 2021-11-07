<?php

namespace App\Http\Resources;

use App\Http\Traits\CreditTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;

class UserCollection extends ResourceCollection
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
        $role = $item->roles->pluck('name')->first();
        return collect([
          'id' => $item->id,
          'role' => $role,
          'created_at' => date('Y-m-d H:i:s', strtotime($item['created_at'])),
          'updated_at' => date('Y-m-d H:i:s', strtotime($item['updated_at'])),
          'username' => $item->username,
          'email' => $item->email,
          'firstname' => $item->firstname,
          'lastname' => $item->lastname,
          'language' => $item->language,
          'theme' => $item->theme,
          'avatar' => $item->avatar,
          'company' => $item->company,
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
  public static $wrap = 'users';
}
