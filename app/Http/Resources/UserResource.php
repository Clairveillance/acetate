<?php

namespace App\Http\Resources;

use App\Http\Traits\CreditTrait;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
    $role = $this->roles->pluck('name')->first();
    return [
      'id' => $this->id,
      'role' => $role,
      'created_at' => date('Y-m-d H:i:s', strtotime($this->created_at)),
      'updated_at' => date('Y-m-d H:i:s', strtotime($this->updated_at)),
      'username' => $this->username,
      'email' => $this->email,
      'firstname' => $this->firstname,
      'lastname' => $this->lastname,
      'language' => $this->language,
      'theme' => $this->theme,
      'avatar' => $this->avatar,
      'company' => $this->company,
    ];
  }

  /**
   * Get additional data that should be returned with the resource array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function with($request)
  {
    return [
      $this::$wrap => [
        'addresses' => $this->addresses,
        'emails' => $this->emails,
        'phones' => $this->phones,
        'websites' => $this->websites->load('socialNetwork'),
      ],
      'credit' => $this->apiCredit()
    ];
  }

  /**
   * The "data" wrapper that should be applied.
   *
   * @var string
   */
  public static $wrap = 'user';
}
