<?php

namespace App\Http\Controllers\SharedControllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\SignUpRequest;
use App\Models\SharedModelLogic\UserModel;
use Illuminate\Http\Request;
use App\User;


class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'signup']]);
    }
    public function login(Request $request)
    {
        $credentials = $request->json()->all();

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Email or password does\'t exist'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function signup(SignUpRequest $request)
    {
        $model = new UserModel();
        $model->name = $request->name;
        $model->email = $request->email;
        $model->password = $request->password;
        $model->city = $request->city;
        $model->address = $request->address;

        $item = $model->create();

        return response()->json($item, 200);
    }
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()->id,
            'role_id' => auth()->user()->role_id
        ]);
    }
}