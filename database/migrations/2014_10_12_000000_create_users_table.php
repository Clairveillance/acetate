<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('users', function (Blueprint $table) {
      $table->uuid('id')->primary();
      $table->timestamps();
      $table->string('username', 30)->unique();
      $table->string('email', 100)->unique();
      $table->timestamp('email_verified_at')->nullable();
      $table->string('password', 100);
      $table->rememberToken();
      $table->string('firstname', 30);
      $table->string('lastname', 30);
      $table->enum('language', ['fr', 'en'])->default('fr');
      $table->enum('theme', ['dark', 'light'])->default('dark');
      $table->string('avatar', 100)->nullable();
      $table->string('company', 100)->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('users');
  }
}
