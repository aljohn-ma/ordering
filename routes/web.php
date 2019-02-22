<?php

Route::get('/login', 
  function () { return view('base'); })
  ->name('login');

Route::get('/reset-password/{token}', 
  function($token) { return view('reset-password')
    ->with(['token' => $token]); 
  });

Route::any('{query}', 
  function() { return view('base'); })
  ->where('query', '.*');