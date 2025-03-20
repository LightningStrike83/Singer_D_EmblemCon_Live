<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Commission;


class CommissionController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $commisssion = Commission::select('name', 'id')->orderBy('name', 'asc')->get();
        return response()->json($commisssion);
    }
}

