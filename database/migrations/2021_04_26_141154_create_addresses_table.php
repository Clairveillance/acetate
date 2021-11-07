<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddressesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('addresses', function (Blueprint $table) {
      $table->uuid('id')->primary();
      $table->timestamps();
      $table->enum('type', ['main', 'secondary', 'tertiary', 'company', 'user', 'event', 'venue', 'person', 'ticket'])->default('main');
      $table->string('street1', 100);
      $table->string('street2', 100)->nullable();
      $table->enum('canton', [
        'AG', 'AI', 'AR', 'BE', 'BL', 'BS', 'FR', 'GE', 'GL', 'GR', 'JU', 'LU', 'NE', 'NW',
        'OW', 'SG', 'SH', 'SO', 'SZ', 'TG', 'TI', 'UR', 'VD', 'VS', 'ZG', 'ZH'
      ]);
      $table->string('region', 30)->nullable();
      $table->string('zip', 10);
      $table->string('city', 30);
      $table->string('country', 4)->default('CH');
      $table->string('firstname', 30)->nullable();
      $table->string('lastname', 30)->nullable();
      $table->string('longitude', 30)->nullable();
      $table->string('latitude', 30)->nullable();
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
    Schema::dropIfExists('addresses');
  }
}
