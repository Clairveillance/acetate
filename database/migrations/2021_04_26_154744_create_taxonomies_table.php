<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaxonomiesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('taxonomies', function (Blueprint $table) {
      $table->uuid('id')->primary();
      $table->timestamps();
      $table->enum('type', ['conference', 'exhibition', 'music', 'theater', 'people', 'venue']);
      $table->string('category', 30)->unique();
      $table->string('sub_category', 30)->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('taxonomies');
  }
}
