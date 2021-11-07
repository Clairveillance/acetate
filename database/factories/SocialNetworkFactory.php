<?php

namespace Database\Factories;

use App\Models\SocialNetwork;
use Illuminate\Database\Eloquent\Factories\Factory;

class SocialNetworkFactory extends Factory
{
  /**
   * The name of the factory's corresponding model.
   *
   * @var string
   */
  protected $model = SocialNetwork::class;

  /**
   * Define the model's default state.
   *
   * @return array
   */
  public function definition()
  {
    return [
      'type' => $this->faker->randomElement(['twitter', 'facebook', 'instagram', 'linkedin', 'youtube', 'twitch', 'snapchat', 'reddit', 'tiktok']),
    ];
  }
}
