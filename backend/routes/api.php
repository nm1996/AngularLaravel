<?php
Route::group([
    'middleware' => 'api',
], function () {
    # log and reg routes 
    Route::post('login', 'SharedControllers\AuthController@login');
    Route::post('signup', 'SharedControllers\AuthController@signup');

    # products routes

    Route::get('showMenProducts', 'SharedControllers\ProductsController@showMenProducts');
    Route::get('showWomenProducts', 'SharedControllers\ProductsController@showWomenProducts');
    Route::get('showKidsProducts', 'SharedControllers\ProductsController@showKidsProducts');
    Route::get('showSportProducts', 'SharedControllers\ProductsController@showSportProducts');

    Route::get('showProductDetails/{id}', 'SharedControllers\ProductsController@showProductDetails');
    
    # cart routes
    Route::post('addToCart/{id}', 'SharedControllers\CartController@addToCart');
    Route::get('showUserCart/{id}', 'SharedControllers\CartController@showUserCart');
    Route::post('deleteUserItem', 'SharedControllers\CartController@deleteUserItem');

    # checkout routes
    Route::post('checkout', 'SharedControllers\CartController@checkout');
    Route::get('userCurrentCheckoutList/{id}', 'SharedControllers\CartController@userCurrentCheckoutList');
});