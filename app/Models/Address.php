<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Address extends Model
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
    'street1',
    'street2',
    'canton',
    'region',
    'zip',
    'city',
    'country',
    'firstname',
    'lastname',
    'company',
    'longitude',
    'latitude',
  ];

  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
    "user_id",
    "event_id",
    "person_id",
    "venue_id",
    "ticket_id",
    "created_at",
    "updated_at"
  ];

  public function user()
  {
    return $this->belongsTo(User::class);
  }

  public function event()
  {
    return $this->belongsTo(Event::class);
  }

  public function person()
  {
    return $this->belongsTo(Person::class);
  }

  public function venue()
  {
    return $this->belongsTo(Venue::class);
  }

  public function ticket()
  {
    return $this->belongsTo(Ticket::class);
  }
}
