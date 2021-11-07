<?php

namespace App\Http\Controllers\Api;

use App\Models\File;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\FileCollection;
use Illuminate\Support\Facades\Storage;
use App\Http\Traits\RespondsWithHttpStatus;

class FileController extends Controller
{
  // Import custom response trait.
  use RespondsWithHttpStatus;

  /**
   * Display the list of all files.
   *
   * @param  Request  $request
   * @return FileCollection
   */
  public function index()
  {
    // TODO
  }

  /**
   * Display the specified file.
   *
   * @param  string  $id
   * @return Response
   */
  public function show($id)
  {
    // TODO
  }

  /**
   * Remove the specified file.
   *
   * @param  string  $id
   * @return Response
   */
  public function destroy($id)
  {
    $file = File::find($id);
    // Check if the file exists.
    if (!$file) {
      return $this->failure('File ' . $id . ' not found.', 404);
    }
    // Delete the file.
    Storage::delete($file->path);
    $file->delete();
    // Success message.
    $message = 'File ' . $id . ' removed successfully.';
    // Returns success message.
    return $this->success($message, null, 200);
  }

  /**
   * Validators.
   *
   * @return array
   */
  protected function validators()
  {
    $validatorRules = [];
    // Validator rules for all submitted fields.
    $validatorRules = [
      'text' => 'required|string|min:10|max:255',
      'user_id' => 'required|string|max:36',
    ];
    return $validatorRules;
  }
}
