<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return view('welcome');
});

Route::get('/display', function(){
    return view('display');
});

//privateへ送信
Route::prefix('private')->group(function(){
    Route::get('/', 'PrivateController@index');
});


//privateのjson
Route::prefix('json')->group(function(){
    Route::get('displays', 'DisplayController@display');
    Route::get('shows', 'DisplayController@shows');
    Route::get('displays/{id}', 'DisplayController@displaydetail');
    Route::get('displaygroup', 'DisplayController@displaygroup');
    Route::get('categories/{id}', 'DisplayController@categorydetail');
    Route::get('categories', 'DisplayController@category');
    Route::get('contents', 'DisplayController@content');
    Route::post('contents', 'DisplayController@content');
    Route::get('classifications', 'DisplayController@classify');
    Route::post('classifications', 'DisplayController@classify');
    Route::get('question', 'DisplayController@question');
    Route::post('question', 'DisplayController@question');
    Route::get('transcriptions', 'DisplayController@transcriptions');
    Route::post('transcriptions', 'DisplayController@transcriptions');
    Route::get('tips', 'DisplayController@tips');
    Route::post('tips', 'DisplayController@tips');
    Route::get('fetchquestion', 'DisplayController@fetchquestion');
});



Auth::routes();

Route::get('home', 'HomeController@index')->name('home');

// Route::get('line_login', 'LineLoginController@index')->name('line_login');

