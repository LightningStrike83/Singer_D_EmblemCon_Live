<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Doodle extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ["name", "image_name", "doodle_consent", "name_consent"];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
