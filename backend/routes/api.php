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
    Route::post('addToCart', 'SharedControllers\CartController@addToCart');
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
    Route::get('profileCheckout/{id}', 'SharedControllers\UserController@getUserCheckout');

    # admin routes

    /* Product routes */
    Route::post('adminProductStore', 'ProtectedControllers\AdminProductController@productStore');
    Route::get('adminProductsIndex', 'ProtectedControllers\AdminProductController@productsIndex');
    Route::post('adminProductDelete', 'ProtectedControllers\AdminProductController@deleteProduct');
    Route::get('adminOneProduct/{id}', 'ProtectedControllers\AdminProductController@getOneProduct');
    Route::post('adminUpdateProduct/{id}', 'ProtectedControllers\AdminProductController@updateProduct');
    /* User routes */

    Route::get('adminUsersIndex', 'ProtectedControllers\AdminUserController@usersIndex');
    Route::get('adminUserGetOne/{id}', 'ProtectedControllers\AdminUserController@getOneUser');
    Route::post('adminUserStore', 'ProtectedControllers\AdminUserController@userStore');
    Route::post('adminUserDelete', 'ProtectedControllers\AdminUserController@delete');
    Route::post('adminUserUpdate/{id}', 'ProtectedControllers\AdminUserController@userUpdate');

    /*Contact routes */

    Route::get('adminContactQuestions', 'ProtectedControllers\AdminContactController@getAllContacts');
    Route::get('adminContactAnswered', 'ProtectedControllers\AdminContactController@getAllAnswered');
    Route::post('insertAnswer', 'ProtectedControllers\AdminContactController@insertAnswer');
    Route::post('deleteContact', 'ProtectedControllers\AdminContactController@deleteContact');
    Route::post('deleteAnswer', 'ProtectedControllers\AdminContactController@deleteAnswer');

    /* Tracking routes */

    Route::get('adminTrackingIndex', 'ProtectedControllers\AdminTrackingController@getAllCheckouts');
    Route::post('adminTrackingDeleteOne', 'ProtectedControllers\AdminTrackingController@deleteOne');
    Route::post('adminTrackingDeleteAll', 'ProtectedControllers\AdminTrackingController@deleteAll');
    Route::get('adminTrackingIndexDelivered', 'ProtectedControllers\AdminTrackingController@getDelivered');
    Route::post('adminTrackingDeliver', 'ProtectedControllers\AdminTrackingController@makeDeliver');
});