<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\FeaturedDoodle;


class FeaturedDoodleController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $doodle = FeaturedDoodle::select('name', 'image_path')->orderBy('id', 'asc')->get();
        return response()->json($doodle);
    }
}

