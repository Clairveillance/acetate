<?php

namespace Database\Factories;

use App\Models\Person;
use Illuminate\Database\Eloquent\Factories\Factory;

class PersonFactory extends Factory
{
  /**
   * The name of the factory's corresponding model.
   *
   * @var string
   */
  protected $model = Person::class;

  /**
   * Define the model's default state.
   *
   * @return array
   */
  public function definition()
  {
    return [
      'nickname' => $this->faker->unique()->userName,
      'firstname' => $this->faker->firstName,
      'lastname' => $this->faker->lastName,
      'description' => $this->faker->text,
      'avatar' => $this->faker->image('public/storage/avatar/person', 640, 480, null, false),
      'company' => $this->faker->company,
    ];
  }
}
