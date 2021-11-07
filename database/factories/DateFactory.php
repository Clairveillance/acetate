<?php

namespace Database\Factories;

use App\Models\Date;
use Illuminate\Database\Eloquent\Factories\Factory;

class DateFactory extends Factory
{
  /**
   * The name of the factory's corresponding model.
   *
   * @var string
   */
  protected $model = Date::class;

  /**
   * Define the model's default state.
   *
   * @return array
   */
  public function definition()
  {
    $startDate = $this->faker->date('Y-m-d', '+3 years');
    $random = rand(0, 3);
    return [
      'start_date' => $startDate,
      'end_date' => date('Y-m-d', strtotime($startDate . '+' . $random . ' days')),
      'start_time' => $this->faker->time('H:i:s'),
      'end_time' => $this->faker->time('H:i:s'),
    ];
  }
}
