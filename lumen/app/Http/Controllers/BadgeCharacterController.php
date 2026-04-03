<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\BadgeCharacter;


class BadgeCharacterController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getCharacters() {
        $characters = BadgeCharacter::select('id', 'name')->orderBy('name', 'asc')->get();
        return response()->json($characters);
    }
}

