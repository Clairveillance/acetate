<?php

namespace App\Models;

use App\Traits\Uuids;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
  use HasFactory, Notifiable, HasRoles, HasApiTokens;
  use Uuids;

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'username',
    'firstname',
    'lastname',
    'email',
    'password',
    'language',
    'theme',
    'avatar',
    'company',
    'remember_token',
  ];

  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
    'password',
    'remember_token',
    "address_id",
    "email_id",
    "phone_id",
    "website_id",
    "event_id",
    "file_id",
    "venue_id",
    "person_id",
    "comment_id",
    "like_id",
    "favorite_id",
    "ticket_id",
    "pivot",
    "email_verified_at"
  ];

  /**
   * The attributes that should be cast to native types.
   *
   * @var array
   */
  protected $casts = [
    'email_verified_at' => 'datetime',
  ];

  public function addresses()
  {
    return $this->hasMany(Address::class);
  }

  public function emails()
  {
    return $this->hasMany(Email::class);
  }

  public function phones()
  {
    return $this->hasMany(Phone::class);
  }

  public function websites()
  {
    return $this->hasMany(Website::class);
  }

  public function events()
  {
    return $this->hasMany(Event::class);
  }

  public function people()
  {
    return $this->hasMany(Person::class);
  }

  public function venues()
  {
    return $this->hasMany(Venue::class);
  }

  public function files()
  {
    return $this->hasMany(File::class);
  }

  public function comments()
  {
    return $this->hasMany(Comment::class)->orderBy('created_at');
  }

  public function favorites()
  {
    return $this->hasMany(Favorite::class);
  }

  public function likes()
  {
    return $this->hasMany(Like::class);
  }

  public function tickets()
  {
    return $this->hasMany(Ticket::class);
  }
}
