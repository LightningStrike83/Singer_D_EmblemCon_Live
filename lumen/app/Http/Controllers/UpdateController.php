<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Update;


class UpdateController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $update = Update::select('id', 'image_path', 'title', 'body', 'date', 'link')->orderBy('id', 'desc')->get();
        return response()->json($update);
    }

     public function getThree() {
        $update = Update::select('id', 'image_path', 'title', 'body', 'date', 'link')->orderBy('id', 'desc')->limit('3')->get();
        return response()->json($update);
    }
}

