<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Taxonomy extends Model
{
  use HasFactory;
  use Uuids;

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'type',
    'category',
    'sub_category',
  ];

  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
    "event_id",
    "venue_id",
    "person_id",
    "pivot",
    "created_at",
    "updated_at"
  ];

  public function events()
  {
    return $this->belongsToMany(Event::class);
  }

  public function venues()
  {
    return $this->belongsToMany(Venue::class);
  }

  public function people()
  {
    return $this->belongsToMany(Person::class);
  }
}
