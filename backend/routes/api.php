<?php
Route::group([
    'middleware' => 'api',
], function () {
    # log and reg routes 
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');

    # products routes

    Route::get('showMenProducts', 'ProductsController@showMenProducts');
    Route::get('showWomenProducts', 'ProductsController@showWomenProducts');
    Route::get('showKidsProducts', 'ProductsController@showKidsProducts');
    Route::get('showSportProducts', 'ProductsController@showSportProducts');

    Route::get('showProductDetails/{id}', 'ProductsController@showProductDetails');
});