<?php

namespace Database\Seeders;

use App\Models\User;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class SuperAdminSeeder extends Seeder
{
  /**
   * Create a super-admin.
   *
   * @return void
   */
  public function run()
  {
    $faker = Factory::create(config('app.faker_locale'));
    // Create a super-admin user.
    $admin = new User([
      'username' => env('ADMIN_USERNAME'),
      'firstname' => env('ADMIN_FIRSTNAME'),
      'lastname' => env('ADMIN_LASTNAME'),
      'language' => env('ADMIN_LANG'),
      'theme' => env('ADMIN_THEME'),
      'avatar' => $faker->image('public/storage/avatar/user', 640, 480, null, false),
      'company' => env('ADMIN_COMPANY'),
      'email' => env('ADMIN_EMAIL'),
      'email_verified_at' => now(),
      'password'  => Hash::make(env('ADMIN_PASSWORD')),
    ]);
    $admin->save();
    // Assign super-admin role to the super-admin user.
    $admin->assignRole('super-admin');
    // Create a super-admin api-token and attach it to the super-admin user.
    $admin->createToken('api_token', ['*']);
    // Create a global api-token and attach it to the super-admin user.
    $app_token = $admin->createToken('api_token', ['role:anonymous']);
    $admin->remember_token = $app_token->plainTextToken;
    $admin->save();

    // Create a member user.
    $member = new User([
      'username' => env('MEMBER_USERNAME'),
      'firstname' => env('MEMBER_FIRSTNAME'),
      'lastname' => env('MEMBER_LASTNAME'),
      'language' => env('MEMBER_LANG'),
      'theme' => env('MEMBER_THEME'),
      'avatar' => $faker->image('public/storage/avatar/user', 640, 480, null, false),
      'company' => env('MEMBER_COMPANY'),
      'email' => env('MEMBER_EMAIL'),
      'email_verified_at' => now(),
      'password'  => Hash::make(env('MEMBER_PASSWORD')),
    ]);
    $member->save();
    // Assign member role to the member user.
    $member->assignRole('member');
    // Create a member api-token and attach it to the member user.
    $member->createToken('api_token', ['member']);

    // Create a contributor user.
    $contributor = new User([
      'username' => env('CONTRIBUTOR_USERNAME'),
      'firstname' => env('CONTRIBUTOR_FIRSTNAME'),
      'lastname' => env('CONTRIBUTOR_LASTNAME'),
      'language' => env('CONTRIBUTOR_LANG'),
      'theme' => env('CONTRIBUTOR_THEME'),
      'avatar' => $faker->image('public/storage/avatar/user', 640, 480, null, false),
      'company' => env('CONTRIBUTOR_COMPANY'),
      'email' => env('CONTRIBUTOR_EMAIL'),
      'email_verified_at' => now(),
      'password'  => Hash::make(env('CONTRIBUTOR_PASSWORD')),
    ]);
    $contributor->save();
    // Assign contributor role to the contributor user.
    $contributor->assignRole('contributor');
    // Create a contributor api-token and attach it to the contributor user.
    $contributor->createToken('api_token', ['contributor']);
  }
}
