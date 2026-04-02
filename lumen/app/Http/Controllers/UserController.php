<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;


class UserController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $user = User::select('id', 'username', 'password')->orderBy('id', 'asc')->get();
        return response()->json($user);
    }
}

