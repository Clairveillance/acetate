<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventVenueTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('event_venue', function (Blueprint $table) {

      $table->uuid('event_id')->index();
      $table->foreign('event_id')
        ->references('id')
        ->on('events')
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
    Schema::dropIfExists('event_venue');
  }
}
