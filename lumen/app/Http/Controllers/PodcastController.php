<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Podcast;


class PodcastController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function getAll() {
        $panel = Podcast::select('id', 'name', 'file_location')->orderBy('id', 'desc')->get();
        return response()->json($panel);
    }
}

