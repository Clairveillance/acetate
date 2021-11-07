<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleAndPermission extends Seeder
{
  /**
   * Create roles and permissions. 
   *
   * @return void
   */
  public function run()
  {
    // Reset cached roles and permissions.
    app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
    // Create roles.
    $member = Role::create(['name' => 'member']);
    $contributor = Role::create(['name' => 'contributor']);
    $admin = Role::create(['name' => 'super-admin']);
    // Create C.R.U.D. permissions.
    Permission::create(['name' => 'users']);
    Permission::create(['name' => 'users.create']);
    Permission::create(['name' => 'users.read']);
    Permission::create(['name' => 'users.update']);
    Permission::create(['name' => 'users.delete']);
    Permission::create(['name' => 'events']);
    Permission::create(['name' => 'events.create']);
    Permission::create(['name' => 'events.read']);
    Permission::create(['name' => 'events.update']);
    Permission::create(['name' => 'events.delete']);
    Permission::create(['name' => 'people']);
    Permission::create(['name' => 'people.create']);
    Permission::create(['name' => 'people.read']);
    Permission::create(['name' => 'people.update']);
    Permission::create(['name' => 'people.delete']);
    Permission::create(['name' => 'venues']);
    Permission::create(['name' => 'venues.create']);
    Permission::create(['name' => 'venues.read']);
    Permission::create(['name' => 'venues.update']);
    Permission::create(['name' => 'venues.delete']);
    Permission::create(['name' => 'files']);
    Permission::create(['name' => 'files.create']);
    Permission::create(['name' => 'files.read']);
    Permission::create(['name' => 'files.update']);
    Permission::create(['name' => 'files.delete']);
    Permission::create(['name' => 'tickets']);
    Permission::create(['name' => 'tickets.create']);
    Permission::create(['name' => 'tickets.read']);
    Permission::create(['name' => 'tickets.update']);
    Permission::create(['name' => 'tickets.delete']);
    Permission::create(['name' => 'comments']);
    Permission::create(['name' => 'comments.create']);
    Permission::create(['name' => 'comments.read']);
    Permission::create(['name' => 'comments.update']);
    Permission::create(['name' => 'comments.delete']);
    Permission::create(['name' => 'likes']);
    Permission::create(['name' => 'likes.create']);
    Permission::create(['name' => 'likes.read']);
    Permission::create(['name' => 'likes.update']);
    Permission::create(['name' => 'likes.delete']);
    Permission::create(['name' => 'favorites']);
    Permission::create(['name' => 'favorites.create']);
    Permission::create(['name' => 'favorites.read']);
    Permission::create(['name' => 'favorites.update']);
    Permission::create(['name' => 'favorites.delete']);
    Permission::create(['name' => 'taxonomies']);
    Permission::create(['name' => 'taxonomies.create']);
    Permission::create(['name' => 'taxonomies.read']);
    Permission::create(['name' => 'taxonomies.update']);
    Permission::create(['name' => 'taxonomies.delete']);
    // Attach permissions to roles.
    $member->syncPermissions(
      'users.read',
      'events.read',
      'people.read',
      'venues.read',
      'files.read',
      'comments',
      'likes',
      'favorites'
    );
    $contributor->syncPermissions(
      'users.read',
      'events',
      'people',
      'venues',
      'files',
      'comments',
      'likes',
      'favorites'
    );
  }
}
