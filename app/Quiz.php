<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    public function fetchQuestions(){
        return $this->belongsTO(Display::class);
    }
}
