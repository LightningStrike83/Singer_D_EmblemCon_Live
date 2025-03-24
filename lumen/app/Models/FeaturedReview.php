<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FeaturedReview extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ["name", "review"];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
