<?php

namespace Database\Seeders;

use App\Models\Date;
use App\Models\File;
use App\Models\Like;
use App\Models\User;
use App\Models\Email;
use App\Models\Event;
use App\Models\Phone;
use App\Models\Price;
use App\Models\Venue;
use App\Models\Person;
use App\Models\Ticket;
use App\Models\Address;
use App\Models\Comment;
use App\Models\Website;
use App\Models\Favorite;
use App\Models\Taxonomy;
use App\Models\SocialNetwork;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   *
   * @return void
   */
  public function run()
  {
    // Reset the application's storage folders.
    $this->call(FolderReset::class);

    // Create roles and permissions.
    $this->call(RoleAndPermission::class);

    //Create a super-admin.
    $this->call(SuperAdminSeeder::class);

    // Create users.
    $users = User::factory()
      ->count(97)
      // Assign a random role to each user.
      ->make()->each(function ($user) {
        $random = rand(1, 2);
        // Create members.
        if ($random == 1) {
          $user->assignRole('member');
          $user->save();
          // Create an api-token and attach it to the member.
          $user->createToken('api_token', ['role:member']);
        }
        // Create contributors.
        if ($random == 2) {
          $user->assignRole('contributor');
          $user->save();
          // Create an api-token and attach it to the contributor.
          $user->createToken('api_token', ['role:contributor']);
        }
      });

    // Create events.
    $events = Event::factory()
      ->count(500)
      ->make()->each(function ($event) use ($users) {
        // Attach a random user_id to each event.
        $event->user_id = $users->random()->id;
        $event->save();
        // Create a date.
        $date = Date::factory()->make();
        // Attach the event_id to the date.
        $date->event_id = $event->id;
        $date->save();
        if (rand(1, 2) == 1) {
          // Create an optional date.
          $date = Date::factory()->make();
          // Attach the event_id to the optional date.
          $date->event_id = $event->id;
          $date->save();
        }
        if (rand(1, 2) == 1) {
          // Create another optional date.
          $date = Date::factory()->make();
          // Attach the event_id to the optional date.
          $date->event_id = $event->id;
          $date->save();
        }
        if (rand(1, 2) == 1) {
          // Create another optional date.
          $date = Date::factory()->make();
          // Attach the event_id to the optional date.
          $date->event_id = $event->id;
          $date->save();
        }
        // Create an adult price.
        $price = Price::factory()->make();
        if (rand(1, 2) == 1) {
          // Attach the event_id to the adult price.
          $price->type = 'adult';
          $price->event_id = $event->id;
          $price->save();
          if (rand(1, 2) == 1) {
            // Create an optional child price.
            $price = Price::factory()->make();
            // Attach the event_id to the optional child price.
            $price->type = 'child';
            $price->event_id = $event->id;
            $price->save();
          }
          if (rand(1, 2) == 1) {
            // Create an optional group price.
            $price = Price::factory()->make();
            // Attach the event_id to the optional group price.
            $price->type = 'group';
            $price->event_id = $event->id;
            $price->save();
          }
        } else {
          // Create a primary price.
          $price = Price::factory()->make();
          // Attach the event_id to the primary price.
          $price->type = 'primary';
          $price->event_id = $event->id;
          $price->save();
          if (rand(1, 2) == 1) {
            // Create an optional secondary price.
            $price = Price::factory()->make();
            // Attach the event_id to the optional secondary price.
            $price->type = 'secondary';
            $price->event_id = $event->id;
            $price->save();
          }
        }
      });

    // Create venues.
    $venues = Venue::factory()
      ->count(250)
      ->make()->each(function ($venue) use ($users, $events) {
        // Attach a random user_id to each venue.
        $venue->user_id = $users->random()->id;
        $venue->save();
        // Attach some random events to each venue.
        $venue->events()->attach(
          $events->random(rand(1, 10))->pluck('id')->toArray()
        );
      });

    // Create people.
    $people = Person::factory()
      ->count(250)
      ->make()->each(function ($person) use ($users, $events, $venues) {
        // Attach a random user_id to each person.
        $person->user_id = $users->random()->id;
        $person->save();
        if (rand(1, 2) == 1) {
          // Attach some random events to the person.
          $person->events()->attach(
            $events->random(rand(1, 8))->pluck('id')->toArray()
          );
        } else {
          // Attach some random venues to the person.
          $person->venues()->attach(
            $venues->random(rand(1, 8))->pluck('id')->toArray()
          );
        }
      });

    // Create comments.
    $comments = Comment::factory()
      ->count(5000)
      ->make()->each(function ($comment) use ($users, $events, $people, $venues) {
        // Attach a random user_id to each comment.
        $comment->user_id = $users->random()->id;
        $comment->save();
        $random = rand(1, 3);
        if ($random == 1) {
          // Attach a random event_id to the comment.
          $comment->event_id = $events->random()->id;
          $comment->save();
        } elseif ($random == 2) {
          // Attach a random person_id to the comment.
          $comment->person_id = $people->random()->id;
          $comment->save();
        } else {
          // Attach a random venue_id to the comment.
          $comment->venue_id = $venues->random()->id;
          $comment->save();
        }
      });

    // Create likes.
    $likes = Like::factory()
      ->count(5000)
      ->make()->each(function ($like) use ($users, $events, $people, $venues, $comments) {
        // Attach a random user_id to each like.
        $like->user_id = $users->random()->id;
        $like->save();
        $random = rand(1, 4);
        if ($random == 1) {
          // Attach a random event_id to the like.
          $like->event_id = $events->random()->id;
          $like->save();
        } elseif ($random == 2) {
          // Attach a random person_id to the like.
          $like->person_id = $people->random()->id;
          $like->save();
        } elseif ($random == 3) {
          // Attach a random venue_id to the like.
          $like->venue_id = $venues->random()->id;
          $like->save();
        } else {
          // Attach a random comment_id to the like.
          $like->comment_id = $comments->random()->id;
          $like->save();
        }
      });

    // Create favorites.
    $favorites = Favorite::factory()
      ->count(1000)
      ->make()->each(function ($favorite) use ($users, $events, $people, $venues) {
        // Attach a random user_id to each favorite.
        $favorite->user_id = $users->random()->id;
        $favorite->save();
        $random = rand(1, 3);
        if ($random == 1) {
          // Attach a random event_id to the favorite.
          $favorite->event_id = $events->random()->id;
          $favorite->save();
        } elseif ($random == 2) {
          // Attach a random person_id to the favorite.
          $favorite->person_id = $people->random()->id;
          $favorite->save();
        } else {
          // Attach a random venue_id to the favorite.
          $favorite->venue_id = $venues->random()->id;
          $favorite->save();
        }
      });

    // Create files.
    $files = File::factory()
      ->count(1000)
      ->make()->each(function ($file) use ($users, $events, $people, $venues) {
        $random = rand(1, 4);
        if ($random == 1) {
          // Attach a random event_id to the file.
          $file->event_id = $events->random()->id;
          $file->save();
        } elseif ($random == 2) {
          // Attach a random person_id to the file.
          $file->person_id = $people->random()->id;
          $file->save();
        } elseif ($random == 3) {
          // Attach a random venue_id to the file.
          $file->venue_id = $venues->random()->id;
          $file->save();
        } else {
          // Attach a random user_id to the file.
          $file->user_id = $users->random()->id;
          $file->save();
        }
      });

    // Create tickets.
    $tickets = Ticket::factory()
      ->count(500)
      ->make()->each(function ($ticket) use ($users, $events) {
        // Attach a random user_id to each ticket.
        $ticket->user_id = $users->random()->id;
        // Attach a random event_id to each ticket.
        $ticket->event_id = $events->random()->id;
        $ticket->save();
      });

    // Create addresses.
    $addresses = Address::factory()
      ->count(500)
      ->make()->each(function ($address) use ($users, $events, $people, $venues, $tickets) {
        if ($address->type == 'event') {
          // Attach a random event_id to the address.
          $address->event_id = $events->random()->id;
          $address->save();
        } elseif ($address->type == 'person') {
          // Attach a random person_id to the address.
          $address->person_id = $people->random()->id;
          $address->save();
        } elseif ($address->type == 'venue') {
          // Attach a random venue_id to the address.
          $address->venue_id = $venues->random()->id;
          $address->save();
        } elseif ($address->type == 'ticket') {
          // Attach a random ticket_id to the address.
          $address->ticket_id = $tickets->random()->id;
          $address->save();
        } else {
          // Attach a random user_id to the address.
          $address->user_id = $users->random()->id;
          $address->save();
        }
      });

    // Create emails.
    $emails = Email::factory()
      ->count(500)
      ->make()->each(function ($email) use ($users, $events, $people, $venues, $tickets) {
        $random = rand(1, 5);
        if ($random == 1) {
          // Attach a random event_id to the email.
          $email->event_id = $events->random()->id;
          $email->save();
        } elseif ($random == 2) {
          // Attach a random person_id to the email.
          $email->person_id = $people->random()->id;
          $email->save();
        } elseif ($random == 3) {
          // Attach a random venue_id to the email.
          $email->venue_id = $venues->random()->id;
          $email->save();
        } elseif ($random == 4) {
          // Attach a random ticket_id to the email.
          $email->ticket_id = $tickets->random()->id;
          $email->save();
        } else {
          // Attach a random user_id to the email.
          $email->user_id = $users->random()->id;
          $email->save();
        }
      });

    // Create phones.
    $phones = Phone::factory()
      ->count(500)
      ->make()->each(function ($phone) use ($users, $events, $people, $venues, $tickets) {
        $random = rand(1, 5);
        if ($random == 1) {
          // Attach a random event_id to the phone.
          $phone->event_id = $events->random()->id;
          $phone->save();
        } elseif ($random == 2) {
          // Attach a random person_id to the phone.
          $phone->person_id = $people->random()->id;
          $phone->save();
        } elseif ($random == 3) {
          // Attach a random venue_id to the phone.
          $phone->venue_id = $venues->random()->id;
          $phone->save();
        } elseif ($random == 4) {
          // Attach a random ticket_id to the phone.
          $phone->ticket_id = $tickets->random()->id;
          $phone->save();
        } else {
          // Attach a random user_id to the phone.
          $phone->user_id = $users->random()->id;
          $phone->save();
        }
      });

    // Create websites.
    $websites = Website::factory()
      ->count(500)
      ->make()->each(function ($website) use ($users, $events, $people, $venues) {
        $random = rand(1, 4);
        if ($random == 1) {
          // Attach a random event_id to the website.
          $website->event_id = $events->random()->id;
          $website->save();
        } elseif ($random == 2) {
          // Attach a random person_id to the website.
          $website->person_id = $people->random()->id;
          $website->save();
        } elseif ($random == 3) {
          // Attach a random venue_id to the website.
          $website->venue_id = $venues->random()->id;
          $website->save();
        } else {
          // Attach a random user_id to the website.
          $website->user_id = $users->random()->id;
          $website->save();
        }
        if ($website->type == 'social network') {
          // Create a social_network.
          $social_network = SocialNetwork::factory()->make();
          // Attach the website_id to the social_network.
          $social_network->website_id = $website->id;
          $social_network->save();
        }
      });

    // Create taxonomies.
    $taxonomies = Taxonomy::factory()
      ->count(100)
      ->create()
      ->each(function ($taxonomy) use ($people, $venues) {
        if ($taxonomy->type == 'venue') {
          // Attach some random venues to the taxonomy.
          $taxonomy->venues()->attach(
            $venues->random(rand(1, 10))->pluck('id')->toArray()
          );
        } elseif ($taxonomy->type == 'people') {
          // Attach some random people to the taxonomy.
          $taxonomy->people()->attach(
            $people->random(rand(1, 10))->pluck('id')->toArray()
          );
        }
      });
    // Attach taxonomies to the events.
    foreach ($events as $event) {
      $random = rand(1, 4);
      if ($random == 1) {
        // Attach conference taxonomy type to some random events.
        $event->taxonomies()->attach(
          $taxonomies->where('type', 'conference')
            ->random(rand(1, 5))->pluck('id')->toArray()
        );
      }
      if ($random == 2) {
        // Attach exhibition taxonomy type to some random events.
        $event->taxonomies()->attach(
          $taxonomies->where('type', 'exhibition')
            ->random(rand(1, 5))->pluck('id')->toArray()
        );
      }
      if ($random == 3) {
        // Attach music taxonomy type to some random events.
        $event->taxonomies()->attach(
          $taxonomies->where('type', 'music')
            ->random(rand(1, 5))->pluck('id')->toArray()
        );
      }
      if ($random == 4) {
        // Attach theater taxonomy type to some random events.
        $event->taxonomies()->attach(
          $taxonomies->where('type', 'theater')
            ->random(rand(1, 5))->pluck('id')->toArray()
        );
      }
    }
  }
}
