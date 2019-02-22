<?php

namespace App\Http\Middleware;

use Closure;

class VerifyAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $url)
    {
        $has_access = $this->has_access(auth()->user()->user_access, $url, $request);
        if ($has_access) {
            return $next($request);
        }
        return response()->json(['error' => 'Unauthorized action.'], 401);
    }

    private function has_access($arr, $url, $request)
    {

        foreach ($arr as $access) {
            if ($access->url === $url) {
                if ($request->isMethod('post')) {
                    return $access->pivot->can_add;
                } elseif ($request->isMethod('put')) {
                    return $access->pivot->can_edit;
                } elseif ($request->isMethod('get')) {
                    return $access->pivot->can_add || $access->pivot->can_edit || $access->pivot->can_delete;
                } elseif ($request->isMethod('delete')) {
                    return $access->pivot->can_delete;
                }
            }
        }
        return false;

    }
}
