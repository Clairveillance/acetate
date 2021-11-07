<?php

namespace Database\Factories;

use App\Models\Address;
use Illuminate\Database\Eloquent\Factories\Factory;

class AddressFactory extends Factory
{
  /**
   * The name of the factory's corresponding model.
   *
   * @var string
   */
  protected $model = Address::class;

  /**
   * Define the model's default state.
   *
   * @return array
   */
  public function definition()
  {
    return [
      'type' => $this->faker->randomElement(['main', 'secondary', 'tertiary', 'company', 'user', 'event', 'venue', 'person', 'ticket']),
      'street1' => $this->faker->streetAddress,
      'street2' => $this->faker->secondaryAddress,
      'zip' => $this->faker->postcode,
      'canton' => $this->faker->randomElement([
        'AG', 'AI', 'AR', 'BE', 'BL', 'BS', 'FR', 'GE', 'GL', 'GR', 'JU', 'LU', 'NE', 'NW',
        'OW', 'SG', 'SH', 'SO', 'SZ', 'TG', 'TI', 'UR', 'VD', 'VS', 'ZG', 'ZH'
      ]),
      'region' => $this->faker->region,
      'city' => $this->faker->city,
      'country' => 'CH',
      'firstname' => $this->faker->firstName,
      'lastname' => $this->faker->lastName,
      'longitude' => $this->faker->longitude,
      'latitude' => $this->faker->latitude,
      'company' => $this->faker->company,
    ];
  }
}
