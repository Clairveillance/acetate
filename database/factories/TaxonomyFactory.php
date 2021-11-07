<?php

namespace Database\Factories;

use App\Models\Taxonomy;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaxonomyFactory extends Factory
{
  /**
   * The name of the factory's corresponding model.
   *
   * @var string
   */
  protected $model = Taxonomy::class;

  /**
   * Define the model's default state.
   *
   * @return array
   */
  public function definition()
  {
    return [
      'type' => $this->faker->randomElement(['conference', 'exhibition', 'music', 'theater', 'people', 'venue']),
      'category' => $this->faker->unique()->word,
      'sub_category' => $this->faker->word,
    ];
  }
}
