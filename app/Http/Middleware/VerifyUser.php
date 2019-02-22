<?php

namespace App\Http\Middleware;

use Closure;

class VerifyUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $user_type)
    {
        if (auth()->user()->user_type == $user_type) {
            return $next($request);
        }
        return response()->json(['error' => 'User not authorized to access this page.'], 401);
    }
}
