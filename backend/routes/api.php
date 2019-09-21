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
    Route::get('showItem/{id}', 'SharedControllers\CartController@showItem');
    Route::post('updateItem/{id}', 'SharedControllers\CartController@updateItem');

    # checkout routes
    Route::post('checkout', 'SharedControllers\CartController@checkout');

    #like route
    Route::post('like', 'SharedControllers\LikeController@like');

    # author route

    Route::get('author', 'SharedControllers\AuthorController@author');

    # contact route

    Route::get('infos', 'SharedControllers\ContactController@infos');
    Route::post('insertContact', 'SharedControllers\ContactController@insert');




    # profile route
    Route::get('profile/{id}', 'SharedControllers\UserController@getUser');

    # admin routes

        /* Product routes */
    Route::post('adminProductInsert', 'ProtectedControllers\AdminProductController@productStore');
    Route::get('adminProductsIndex', 'ProtectedControllers\AdminProductController@productsIndex');
    Route::post('adminProductDelete/{id}', 'ProtectedCOntrollers\AdminProductController@delete');

        /* User routes */

    Route::get('adminUsersIndex', 'ProtectedControllers\AdminUserController@usersIndex');
    Route::post('adminUserStore', 'ProtectedControllers\AdminUserController@userStore');
    Route::post('adminUserDelete', 'ProtectedControllers\AdminUserController@delete');
    Route::post('adminUserUpdate/{id}', 'ProtectedControllers\AdminUserController@userUpdate');
});
