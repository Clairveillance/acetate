<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class FolderReset extends Seeder
{
  /**
   * Reset the application's storage folders.
   *
   * @return void
   */
  public function run()
  {

    // Delete 'public/avatar/event' directory before seeding files.
    Storage::deleteDirectory('public/avatar/event');

    // Delete 'public/avatar/person' directory before seeding files.
    Storage::deleteDirectory('public/avatar/person');

    // Delete 'public/avatar/user' directory before seeding files.
    Storage::deleteDirectory('public/avatar/user');

    // Delete 'public/avatar/venue' directory before seeding files.
    Storage::deleteDirectory('public/avatar/venue');

    // Delete 'public/file' directory before seeding files.
    Storage::deleteDirectory('public/file');

    // Create 'public/avatar/event' directory.
    Storage::makeDirectory('public/avatar/event');

    // Create 'public/avatar/person' directory.
    Storage::makeDirectory('public/avatar/person');

    // Create 'public/avatar/user' directory.
    Storage::makeDirectory('public/avatar/user');

    // Create 'public/avatar/venue' directory.
    Storage::makeDirectory('public/avatar/venue');

    // Create 'public/file' directory.
    Storage::makeDirectory('public/file');
  }
}
