<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Guest;


class GuestController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $guest = Guest::select('name', 'social_media', 'image_path', 'id')->orderBy('id', 'desc')->get();
        return response()->json($guest);
    }
}

