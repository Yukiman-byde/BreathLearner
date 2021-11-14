<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function displays(){
        return $this->belongsToMany('App\Display', 'display_id');
    }
}
