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

    public function getStamps() {
        $artist = Artist::select('id', 'name', 'link')->where('stamp_rally', '=', 'y')->orderBy('name', 'asc')->get();
        return response()->json($artist);
    }
}

