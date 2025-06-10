<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Comic;


class ComicController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $comic = Comic::select('title', 'number', 'image', 'id')->orderBy('number', 'asc')->get();
        return response()->json($comic);
    }
}

