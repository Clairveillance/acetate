<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonTaxonomyTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('person_taxonomy', function (Blueprint $table) {

      $table->uuid('person_id')->index();
      $table->foreign('person_id')
        ->references('id')
        ->on('people')
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
    Schema::dropIfExists('person_taxonomy');
  }
}
