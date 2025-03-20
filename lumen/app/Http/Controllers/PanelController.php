<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Panel;


class PanelController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getDay($day){
        $panel = Panel::select('title', 'day', 'time', 'description')->where('panels.day', '=', $day)->where('panels.year', '=', '2024')->orderBy('time', 'asc')->get();
        return response()->json($panel);
    }

    public function getAll() {
        $panel = Panel::select('title', 'day', 'time', 'description', 'id', 'year')->orderBy('year', 'asc')->get();
        return response()->json($panel);
    }
}

