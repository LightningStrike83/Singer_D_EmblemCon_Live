<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Artist;


class ArtistController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $artist = Artist::select('id', 'name', 'link')->orderBy('name', 'asc')->get();
        return response()->json($artist);
    }
}

