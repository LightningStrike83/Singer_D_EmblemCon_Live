<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Mod;


class ModController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $mod = Mod::select('name', 'handle', 'pic', 'position', 'mod_date', 'bio', 'pronouns', 'character_stan', 'id')->orderBy('name', 'asc')->get();
        return response()->json($mod);
    }
}

