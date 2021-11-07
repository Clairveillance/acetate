<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Venue extends Model
{
  use HasFactory;
  use Uuids;

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'name',
    'description',
    'avatar',
    'user_id'
  ];

  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
    "user_id",
    "address_id",
    "email_id",
    "phone_id",
    "website_id",
    "comment_id",
    "like_id",
    "favorite_id",
    "file_id",
    "person_id",
    "event_id",
    "taxonomy_id",
    "pivot",
    "created_at",
    "updated_at"
  ];

  public function user()
  {
    return $this->belongsTo(User::class);
  }

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

  public function comments()
  {
    return $this->hasMany(Comment::class)->orderBy('created_at');
  }

  public function likes()
  {
    return $this->hasMany(Like::class);
  }

  public function favorites()
  {
    return $this->hasMany(Favorite::class);
  }

  public function files()
  {
    return $this->hasMany(File::class);
  }

  public function events()
  {
    return $this->belongsToMany(Event::class);
  }

  public function people()
  {
    return $this->belongsToMany(Person::class);
  }

  public function taxonomies()
  {
    return $this->belongsToMany(Taxonomy::class);
  }
}
