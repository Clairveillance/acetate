<?php

namespace Database\Factories;

use App\Models\Venue;
use Illuminate\Database\Eloquent\Factories\Factory;

class VenueFactory extends Factory
{
  /**
   * The name of the factory's corresponding model.
   *
   * @var string
   */
  protected $model = Venue::class;

  /**
   * Define the model's default state.
   *
   * @return array
   */
  public function definition()
  {
    return [
      'name' => $this->faker->unique()->sentence(4),
      'description' => $this->faker->text,
      'avatar' => $this->faker->image('public/storage/avatar/venue', 640, 480, null, false),
    ];
  }
}
