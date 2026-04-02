<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mod extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ["id", "name", "handle", "pic", "position", "mod_date", "bio", "pronouns", "character_stan"];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
