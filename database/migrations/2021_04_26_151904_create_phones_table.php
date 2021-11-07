<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePhonesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('phones', function (Blueprint $table) {
      $table->uuid('id')->primary();
      $table->timestamps();
      $table->enum('type', ['mobile', 'home', 'pro'])->default('mobile');
      $table->string('number', 30);
      $table->string('firstname', 30)->nullable();
      $table->string('lastname', 30)->nullable();
      $table->string('company', 100)->nullable();

      $table->uuid('user_id')->nullable();
      $table->foreign('user_id')
        ->references('id')
        ->on('users')
        ->onDelete('cascade')
        ->onUpdate('cascade');

      $table->uuid('event_id')->nullable();
      $table->foreign('event_id')
        ->references('id')
        ->on('events')
        ->onDelete('cascade')
        ->onUpdate('cascade');

      $table->uuid('person_id')->nullable();
      $table->foreign('person_id')
        ->references('id')
        ->on('people')
        ->onDelete('cascade')
        ->onUpdate('cascade');

      $table->uuid('venue_id')->nullable();
      $table->foreign('venue_id')
        ->references('id')
        ->on('venues')
        ->onDelete('cascade')
        ->onUpdate('cascade');

      $table->uuid('ticket_id')->nullable();
      $table->foreign('ticket_id')
        ->references('id')
        ->on('tickets')
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
    Schema::dropIfExists('phones');
  }
}
