<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/', 'PageController@getIndex');

Route::get('product', 'ProductController@getAllProduct');
Route::get('product/{id}', 'ProductController@getProduct');
Route::post('product', 'ProductController@createProduct');
Route::put('product/{id}', 'ProductController@updateProduct');
Route::delete('product/{id}','ProductController@deleteProduct');

Route::get('/clear-cache', function() {
    Artisan::call('cache:clear');
    return "Cache is cleared";
});
