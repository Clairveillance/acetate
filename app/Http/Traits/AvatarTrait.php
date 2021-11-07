<?php

namespace App\Http\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;

trait AvatarTrait
{
  /**
   * Store new $controller's avatars.
   *
   * @param  string  $controller
   * @param  Request  $request
   * @return void
   */
  protected function storeAvatar($controller, Request $request)
  {
    // Check if $controller's avatar is submitted.
    if ($request->file('upload')) {
      // Prepare the avatar's file to upload.
      $upload = $request->file('upload');
      // Retrieve the current datetime.
      $current = Carbon::now()->format('YmdHis_');
      // Format the avatar's filename.
      $clean_filename = preg_replace("/[^A-Za-z0-9\_\-\.]/", '_', $upload->getClientOriginalName());
      // Add the current datetime to the avatar's formatted filename.
      $this->file_name =  $current . $clean_filename;
      // Create avatar/$controller folder if doesn't exist.
      if (!Storage::directories('public/avatar/' . $controller)) {
        Storage::makeDirectory('public/avatar/' . $controller);
      }
      // Store the avatar's file into storage avatar/$controller folder.
      $upload->storeAs('public/avatar/' . $controller, $this->file_name);
    }
  }

  /**
   * Delete the specified $controller's avatar.
   *
   * @param  object  $controller
   * @return void
   */
  protected function deleteAvatar($controller)
  {
    // Delete the avatar.
    $avatar = $controller->avatar;
    if (isset($avatar)) {
      Storage::delete($avatar);
    }
  }
}
