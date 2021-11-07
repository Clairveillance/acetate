<?php

namespace Database\Factories;

use App\Models\Phone;
use Illuminate\Database\Eloquent\Factories\Factory;

class PhoneFactory extends Factory
{
  /**
   * The name of the factory's corresponding model.
   *
   * @var string
   */
  protected $model = Phone::class;

  /**
   * Define the model's default state.
   *
   * @return array
   */
  public function definition()
  {
    return [
      'type' => $this->faker->randomElement(['mobile', 'home', 'pro']),
      'number' => $this->faker->phoneNumber,
      'firstname' => $this->faker->firstName,
      'lastname' => $this->faker->lastName,
      'company' => $this->faker->company,
    ];
  }
}
