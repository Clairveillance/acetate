<?php

namespace App\Http\Traits;

use App\Models\Website;
use Illuminate\Http\Request;
use App\Models\SocialNetwork;
use Illuminate\Support\Facades\Validator;

trait WebsiteTrait
{
  /**
   * Create new $controller's websites.
   *
   * @param  object  $controller
   * @param  Request  $request
   * @return void
   */
  protected function storeWebsite($controller, Request $request)
  {
    // Check if $controller's websites are submitted.
    if ($request->input('websites')) {
      // Create new websites.
      $websites = [];
      foreach ($request->input('websites') as $website) {
        $newWebsite = new Website($website);
        $newWebsite->save();
        // Check if the new website is a social network.
        if ($newWebsite->type == 'social network') {
          // Validate submitted social network fields.
          $validator = Validator::make(
            $website['social_network'],
            ['type' => 'required|in:twitter,facebook,instagram,linkedin,youtube,twitch,snapchat,reddit,tiktok']
          );
          // If validation fails, add warning message to the response.
          if ($validator->fails()) {
            $this->warning[] = 'Wrong social network type in website ' . $newWebsite->id;
          } else {
            // Create a new social network.
            $socialNetwork = new SocialNetwork([
              'type' => $website['social_network']['type'],
              'website_id' => $newWebsite->id
            ]);
            $socialNetwork->save();
          }
        }
        $websites[] = $newWebsite;
      }
      // Attach websites to the $controller.
      $controller->websites()->saveMany($websites);
    }
  }
}
