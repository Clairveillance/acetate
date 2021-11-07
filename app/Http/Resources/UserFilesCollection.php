<?php

namespace App\Http\Resources;

use App\Http\Traits\CreditTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;

class UserFilesCollection extends ResourceCollection
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
            'type' => $item->type,
            'mimetype' => $item->mimetype,
            'encoding' => $item->encoding,
            'size' => $item->size,
            'path' => $item->path,
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
  public static $wrap = 'user_files';
}
