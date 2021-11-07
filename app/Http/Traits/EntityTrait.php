<?php

namespace App\Http\Traits;

use Illuminate\Http\Request;

trait EntityTrait
{
  /**
   * Create new $controller's $entities.
   *
   * @param  object  $controller
   * @param  string  $entities
   * @param  object  $model
   * @param  Request  $request
   * @return void
   */
  protected function storeEntity($controller, $entities, $model, Request $request)
  {
    // Check if $controller's $entities are submitted.
    if ($request->input($entities)) {
      // Create new $entities.
      $array = [];
      foreach ($request->input($entities) as $entity) {
        $array[] = new $model($entity);
      }
      // Attach $entities to the $controller.
      $controller->$entities()->saveMany($array);
    }
  }

  /**
   * Attach specified $controller's $entities.
   *
   * @param  object  $controller
   * @param  string  $entities
   * @param  string  $name
   * @param  object  $model
   * @param  Request  $request
   * @return void
   */
  protected function attachEntity($controller, $entities, $name, $model, Request $request)
  {
    // Check if $controller's $entities are submitted.
    if ($request->input($entities)) {
      // Collect $entities.
      $array = [];
      foreach ($request->input($entities) as $entity) {
        $warning = false;
        // Check if the $entity exists.
        $id = $entity['id'];
        // Load the $entity.
        $entity = $model::find($id);
        // Check if $entity exists.
        if (!$entity) {
          $warning = true;
          // Add warning message to the response.
          $this->warning[] = $name . ' ' . $id . ' not found.';
        }
        if ($warning == false) {
          $array[] = $entity;
        }
      }
      // Attach $entities to the $controller.
      if ($array != null) {
        $controller->$entities()->saveMany($array);
      }
    }
  }

  /**
   * Detach specified $controller's entities.
   *
   * @param  object  $controller
   * @param  string  $method
   * @param  string  $entities
   * @return void
   */
  protected function detachEntity($controller, $method, $entities)
  {
    // Detach $entities from the $controller.
    foreach ($controller->$entities as $entity) {
      $entity->$method()->dissociate()->save();
    }
  }

  /**
   * Delete specified $controller's $entities.
   *
   * @param  object  $controller
   * @param  array  $related
   * @param  string  $entities
   * @return void
   */
  protected function deleteEntity($controller, $related, $entities)
  {
    // Delete $entities only if it has no other attached relationships.
    foreach ($controller->$entities as $entity) {
      $deleteRelated = [];
      for ($i = 0; $i < count($related); ++$i) {
        $item = $related[$i];
        if (!$entity->$item) {
          $deleteRelated[] = $item;
        }
      }
      if (count($related) == count($deleteRelated))
        $entity->delete();
    }
  }
}
