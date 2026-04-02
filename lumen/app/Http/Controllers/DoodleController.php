<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Doodle;


class DoodleController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $doodle = Doodle::select('name', 'image_name', 'name_consent', "doodle_consent", 'id')->orderBy('id', 'asc')->get();
        return response()->json($doodle);
    }
}
