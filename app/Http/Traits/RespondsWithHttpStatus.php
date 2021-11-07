<?php

namespace App\Http\Traits;

use App\Http\Traits\CreditTrait;

trait RespondsWithHttpStatus
{
  // Import custom credit trait.
  use CreditTrait;

  /**
   * Return success message.
   *
   * @param  string $message
   * @param  array $data
   * @param  int $status
   * @return Respone
   */
  protected function success($message, $data = [], $status = 200)
  {
    return  response([
      'success' => true,
      'message' => $message,
      'data' => $data
    ], $status);
  }

  /**
   * Return error message.
   *
   * @param  string $message
   * @param  int $status
   * @return Response
   */
  protected function failure($message, $status = 422)
  {
    return response([
      'success' => false,
      'message' => $message,
      'credit' => $this->apiCredit()
    ], $status);
  }
}
