<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
  /**
   * The name of the factory's corresponding model.
   *
   * @var string
   */
  protected $model = User::class;

  /**
   * Define the model's default state.
   *
   * @return array
   */
  public function definition()
  {
    return [
      'username' => $this->faker->unique()->userName,
      'firstname' => $this->faker->firstName,
      'lastname' => $this->faker->lastName,
      'language' => $this->faker->randomElement(['en', 'fr']),
      'theme' => $this->faker->randomElement(['dark', 'light']),
      'avatar' => $this->faker->image('public/storage/avatar/user', 640, 480, null, false),
      'company' => $this->faker->company,
      'email' => $this->faker->unique()->safeEmail,
      'email_verified_at' => now(),
      'password'  => Hash::make($this->faker->password),
      'remember_token' => Str::random(10),
    ];
  }

  /**
   * Indicate that the model's email address should be unverified.
   *
   * @return \Illuminate\Database\Eloquent\Factories\Factory
   */
  public function unverified()
  {
    return $this->state(function (array $attributes) {
      return [
        'email_verified_at' => null,
      ];
    });
  }
}
