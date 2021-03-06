<?php

use Illuminate\Support\Facades\Route;

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
Route::get('/user-login', function () {
    return view('user/user_auth');
});
Route::get('/admin-login', function () {
    return view('admin/login');
});

Route::post('admin/get_login', 'AdminLoginController@adminLogin');

Route::get('admin/logout', 'AdminLoginController@adminLogout');
    // Route::get('/Dashboard', function () {
    //     return view('admin/dashboard');
    // });


    Route::resource('Dashboard','ItemController');