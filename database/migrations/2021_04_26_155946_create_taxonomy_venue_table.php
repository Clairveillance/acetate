<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaxonomyVenueTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('taxonomy_venue', function (Blueprint $table) {

      $table->uuid('taxonomy_id')->index();
      $table->foreign('taxonomy_id')
        ->references('id')
        ->on('taxonomies')
        ->onDelete('restrict')
        ->onUpdate('restrict');

      $table->uuid('venue_id')->index();
      $table->foreign('venue_id')
        ->references('id')
        ->on('venues')
        ->onDelete('restrict')
        ->onUpdate('restrict');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('taxonomy_venue');
  }
}
