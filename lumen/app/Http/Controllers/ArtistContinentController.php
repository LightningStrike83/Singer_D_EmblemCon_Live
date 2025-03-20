<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\ArtistContinent;


class ArtistContinentController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $artistcontinent = ArtistContinent::join('artists', 'artist_continents.artist', '=', 'artists.id')->join('continents', 'artist_continents.continent', '=', 'continents.id')->select('artist', 'artist_continents.continent', "name", "continents.continent", 'artist_continents.id')->orderBy('name', 'asc')->get();
        return response()->json($artistcontinent);
    }

    public function getArtist($id) {
        $artistcontinent = ArtistContinent::join('artists', 'artist_continents.artist', '=', 'artists.id')->join('continents', 'artist_continents.continent', '=', 'continents.id')->select('artist', 'artist_continents.continent', "name", "continents.continent")->orderBy('name', 'asc')->where('artist_continents.continent', '=', $id)->get();
        return response()->json($artistcontinent);
    }
}

