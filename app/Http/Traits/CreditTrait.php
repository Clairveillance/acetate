<?php

namespace App\Http\Traits;

use \Illuminate\Http\Response;

trait CreditTrait
{
  /**
   * Returns API credit.
   *
   * @return Response
   */
  protected function apiCredit()
  {
    return collect(
      [
        'APP name' => 'Acetate',
        'APP url' => 'https://acetate.unitysound.ch',
        'APP timezone' => 'Europe/Paris',
        'developed by' => 'Axel Duret 2021 ©',
        'license' => 'MIT License',
      ]
    );
  }
}
