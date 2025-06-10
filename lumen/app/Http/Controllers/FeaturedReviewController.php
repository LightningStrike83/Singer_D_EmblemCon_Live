<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\FeaturedReview;


class FeaturedReviewController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $review = FeaturedReview::select('name', 'review', 'id')->orderBy('id', 'asc')->get();
        return response()->json($review);
    }
}
