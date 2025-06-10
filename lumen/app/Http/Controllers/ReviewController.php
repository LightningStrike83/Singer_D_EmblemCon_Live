<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Review;


class ReviewController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $review = Review::select('name', 'review', 'consent', 'id')->orderBy('id', 'asc')->get();
        return response()->json($review);
    }
}