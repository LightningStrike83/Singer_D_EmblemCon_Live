<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\PreviousGuest;


class PreviousGuestController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $previousguest = PreviousGuest::select('image_path', 'id', 'name')->orderBy('name', 'asc')->get();
        return response()->json($previousguest);
    }
}

