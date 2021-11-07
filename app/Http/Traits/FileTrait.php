<?php

namespace App\Http\Traits;

use App\Models\File;
use Illuminate\Http\Request;
use \Illuminate\Http\Response;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use App\Http\Traits\RespondsWithHttpStatus;

trait FileTrait
{
  use RespondsWithHttpStatus;

  /**
   * Store a newly created file in database.
   *
   * @param  object  $controller
   * @param  string  $entity
   * @param  Request  $request
   * @return Response
   */
  protected function addFile($controller, $entity, Request $request)
  {
    // Check if $controller's upload is submitted.
    if ($request->file('upload')) {
      // Prepare the file to upload.
      $upload = $request->file('upload');
      // Retrieve the current datetime.
      $current = Carbon::now()->format('Ymd-His_');
      // Format the file's name.
      $clean_filename = preg_replace("/[^A-Za-z0-9\_\-\.]/", '_', $upload->getClientOriginalName());
      // Add the current datetime to formatted filename.
      $file_name =  $current . $clean_filename;
      // Create a new file.
      $file = new File([
        'name' => $request->input('name'),
        'encoding' => mb_detect_encoding($upload, mb_list_encodings(), true),
        'mimetype' => $upload->getClientMimeType(),
        'path' => $file_name,
        'size' => $upload->getSize(),
        'user_id' => $request->input('user_id')
      ]);
      // Create file/$controller folder if doesn't exist
      if (!Storage::directories('public/file/' . $entity)) {
        Storage::makeDirectory('public/file/' . $entity);
      }
      // Store the file into storage file/$controller folder.
      $upload->storeAs('public/file/', $file_name);
      // Attach $entities to the $controller.
      $file->$entity()->associate($controller);
      // Save the new file.
      $file->save();
    }
  }
}
