<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Display extends Model
{
    public function categories(){
        return $this->belongsToMany('App\Category');
    }

    public function fetchQuestions(){
       return $this->hasMany(Quiz::class);
    }
}
