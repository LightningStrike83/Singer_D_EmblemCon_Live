<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FeaturedDoodle extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ["name", "image_path"];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
