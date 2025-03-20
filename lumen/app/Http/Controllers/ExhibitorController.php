<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Exhibitor;


class ExhibitorController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $exhibitor = Exhibitor::select('name', 'id')->orderBy('name', 'asc')->get();
        return response()->json($exhibitor);
    }
}

