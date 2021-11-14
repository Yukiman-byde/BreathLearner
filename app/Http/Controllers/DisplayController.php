<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Display;
use App\Category;
use App\Transcription;
use App\Tip;
use App\Quiz;

class DisplayController extends Controller
{
    public function display(){
       return Display::latest()->take(2)->get()->toJson();
    }

    public function shows(){
       return Display::get()->toJson();
    }

    public function category(){
        return Category::get()->toJson();
    }

    public function displaydetail($id){
        return Display::all()->find($id)->toJson();
    }

    public function categorydetail($id){
        return Display::find($id)->categories()->get()->toJson();
    }

    public function displaygroup(){
        $first = 6;
        $end = 16;
        return Category::whereBetween('id', [$first, $end])->take(10)->get()->toJson();
    }

    public function content(Request $request){
         $display = new Display;
         $display->videoURL= $request->videoURL;
         $display->title = $request->title;
         $display->description = $request->description;
         $display->thumbnail = $request->thumbnail;

         $display->save();
         return view('display');
    }

    public function classify(Request $request,Display $display, Category $category){
        $classifications[] = $request->classifications;
        foreach($classifications as $key => $class){
            $category_id = $class;
            $display = new Display;
            $display = $display->find($request->audio);
            $display->categories()->attach($category_id);
        }

         return view('display');
    }

    public function question(Request $request){
        $quiz = new Quiz;
        $quiz->display_id = $request->display_id;
        $quiz->question = $request->question;
        $quiz->answer = $request->answer;
        $quiz->choice1 = $request->choice1;
        $quiz->choice2 = $request->choice2;
        $quiz->choice3 = $request->choice3;

        $quiz->save();
    }

    public function transcriptions(Request $request){
           $transcription = new Transcription;
           $transcription->display_id = $request->audio;
           $transcription->content = $request->content;
           $transcription->save();

           return view('display');
    }

    public function tips(Request $request){
           $tip = new Tip;
           $tip->word = $request->tip;
           $tip->display_id = $request->audio;
           $tip->save();

           return view('display');
    }

    public function fetchquestion(Quiz $quiz, Display $display){
       $quiz = Display::find(1);
       $quiz = $quiz->fetchquestions;
       return $quiz->toJson();
    }
}