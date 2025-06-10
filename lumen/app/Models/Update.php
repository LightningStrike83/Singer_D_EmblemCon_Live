<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Update extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ["id", "image_path", "title", "body", "link", "date"];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
