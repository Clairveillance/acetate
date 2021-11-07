<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventTaxonomyTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('event_taxonomy', function (Blueprint $table) {

      $table->uuid('event_id')->index();
      $table->foreign('event_id')
        ->references('id')
        ->on('events')
        ->onDelete('restrict')
        ->onUpdate('restrict');

      $table->uuid('taxonomy_id')->index();
      $table->foreign('taxonomy_id')
        ->references('id')
        ->on('taxonomies')
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
    Schema::dropIfExists('event_taxonomy');
  }
}
