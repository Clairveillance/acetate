<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFilesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('files', function (Blueprint $table) {
      $table->uuid('id')->primary();
      $table->timestamps();
      $table->enum('type', ['image', 'audio', 'video'])->default('image');
      $table->string('mimetype', 100);
      $table->string('encoding', 100);
      $table->string('path', 100);
      $table->string('name', 30);
      $table->unsignedBigInteger('size');

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
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('files');
  }
}
