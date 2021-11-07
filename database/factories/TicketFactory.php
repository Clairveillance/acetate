<?php

namespace Database\Factories;

use App\Models\Ticket;
use Illuminate\Database\Eloquent\Factories\Factory;

class TicketFactory extends Factory
{
  /**
   * The name of the factory's corresponding model.
   *
   * @var string
   */
  protected $model = Ticket::class;

  /**
   * Define the model's default state.
   *
   * @return array
   */
  public function definition()
  {
    return [
      'name' => $this->faker->sentence(4),
      'description' => $this->faker->text,
      'cost' => $this->faker->randomFloat(2, 1, 1000),
      'status' => $this->faker->randomElement(['current', 'sold out', 'promo', 'gift']),
    ];
  }
}
