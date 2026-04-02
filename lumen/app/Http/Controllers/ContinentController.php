<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Continent;


class ContinentController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $continent = Continent::select('id', 'continent')->orderBy('id', 'asc')->get();
        return response()->json($continent);
    }

    public function getOne($id){
        $continent = Continent::find($id);
        return response()->json($continent);
    }
}

