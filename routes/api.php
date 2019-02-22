<?php

Route::group(['middleware' => 'api'], function () {

    Route::get('get-items-by-category', 'CategoryController@index' );
    Route::get('check-voucher/{code}', 'ItemsController@checkVoucher' );
    Route::post('save-order', 'OrdersController@store' );

    Route::group(['middleware' => 'auth:api'], function () { });
});
