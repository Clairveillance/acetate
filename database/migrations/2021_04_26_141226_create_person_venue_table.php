<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonVenueTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('person_venue', function (Blueprint $table) {

      $table->uuid('person_id')->index();
      $table->foreign('person_id')
        ->references('id')
        ->on('people')
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
    Schema::dropIfExists('person_venue');
  }
}
