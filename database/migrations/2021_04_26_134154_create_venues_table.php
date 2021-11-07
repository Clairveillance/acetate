<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVenuesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('venues', function (Blueprint $table) {
      $table->uuid('id')->primary();
      $table->timestamps();
      $table->string('name', 100)->unique();
      $table->text('description')->nullable();
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
    Schema::dropIfExists('venues');
  }
}
