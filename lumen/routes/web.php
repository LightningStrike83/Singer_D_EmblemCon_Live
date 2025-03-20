<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get("/continents", "ContinentController@getAll");
$router->get("/continents/{id}", "ContinentController@getOne");
$router->get("/artist-continents", "ArtistContinentController@getAll");
$router->get("/artist-continents/{id}", "ArtistContinentController@getArtist");
$router->get("/guest", "GuestController@getAll");
$router->get("/previous-guest", "PreviousGuestController@getAll");
$router->get("/mod", "ModController@getAll");
$router->get("/panel/{day}", "PanelController@getDay");
$router->get("/panel", "PanelController@getAll");
$router->get("/artist", "ArtistController@getAll");
$router->get("/exhibitor", "ExhibitorController@getAll");
$router->get("/commission", "CommissionController@getAll");
$router->get("/update", "UpdateController@getAll");
$router->get("/update-three", "UpdateController@getThree");
$router->get("/comics", "ComicController@getAll");
$router->get("/users", "UserController@getAll");