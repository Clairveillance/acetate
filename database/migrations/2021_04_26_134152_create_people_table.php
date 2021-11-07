<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePeopleTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('people', function (Blueprint $table) {
      $table->uuid('id')->primary();
      $table->timestamps();
      $table->string('nickname', 30)->unique();
      $table->string('firstname', 30)->nullable();
      $table->string('lastname', 30)->nullable();
      $table->text('description')->nullable();
      $table->string('company', 100)->nullable();
      $table->string('avatar', 100)->nullable();

      $table->uuid('user_id');
      $table->foreign('user_id')
        ->references('id')
        ->on('users')
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
    Schema::dropIfExists('people');
  }
}
