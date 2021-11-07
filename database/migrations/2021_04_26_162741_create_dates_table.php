<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDatesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('dates', function (Blueprint $table) {
      $table->uuid('id')->primary();
      $table->timestamps();
      $table->date('start_date');
      $table->date('end_date');
      $table->time('start_time');
      $table->time('end_time');

      $table->uuid('event_id');
      $table->foreign('event_id')
        ->references('id')
        ->on('events')
        ->onDelete('cascade')
        ->onUpdate('cascade');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('dates');
  }
}
