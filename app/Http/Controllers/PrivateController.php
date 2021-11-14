<?php


namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Display;
use App\Category;

class PrivateController extends Controller
{
    public function index(){
        return view('private');
    }
}

