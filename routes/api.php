<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\FileController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\EventController;
use App\Http\Controllers\Api\VenueController;
use App\Http\Controllers\Api\PersonController;
use App\Http\Controllers\Api\TicketController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\TaxonomyController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Protected routes.
Route::group(['middleware' => 'auth:sanctum'], function () {

  // Dashboard API endpoints.
  Route::get('dashboard', [UserController::class, 'dashboard']);

  // Users API endpoints
  Route::apiResource('users', UserController::class);
  Route::prefix('users')->group(function () {
    Route::get('{user}/{content}', [UserController::class, 'show']);
    Route::post('{user}/avatar', [UserController::class, 'updateAvatar']);
    Route::post('{user}/comments', [UserController::class, 'storeComment']);
    Route::post('{user}/files', [UserController::class, 'storeFile']);
  });

  // Events API endpoints.
  Route::apiResource('events', EventController::class);
  Route::prefix('events')->group(function () {
    Route::post('{event}/avatar', [EventController::class, 'updateAvatar']);
    Route::post('{event}/comments', [EventController::class, 'storeComment']);
    Route::post('{event}/files', [EventController::class, 'storeFile']);
  });

  // People API endpoints.
  Route::apiResource('people', PersonController::class);
  Route::prefix('people')->group(function () {
    Route::post('{person}/avatar', [PersonController::class, 'updateAvatar']);
    Route::post('{person}/comments', [PersonController::class, 'storeComment']);
    Route::post('{person}/files', [PersonController::class, 'storeFile']);
  });

  // Venues API endpoints.
  Route::apiResource('venues', VenueController::class);
  Route::prefix('venues')->group(function () {
    Route::post('{venue}/avatar', [VenueController::class, 'updateAvatar']);
    Route::post('{venue}/comments', [VenueController::class, 'storeComment']);
    Route::post('{venue}/files', [VenueController::class, 'storeFile']);
  });

  // Comments API endpoints.
  Route::apiResource('comments', CommentController::class);

  // Files API endpoints.
  Route::apiResource('files', FileController::class);

  // Taxonomies API endpoints.
  Route::apiResource('taxonomies', TaxonomyController::class);

  // Tickets API endpoints.
  Route::apiResource('tickets', TicketController::class);
});

// Public routes.
Route::post('login', [UserController::class, 'login'])->name('login');
Route::post('register', [UserController::class, 'register']);
Route::post('logout', [UserController::class, 'logout']);
