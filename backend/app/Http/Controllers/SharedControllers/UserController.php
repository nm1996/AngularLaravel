<?php

namespace App\Http\Controllers\SharedControllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\SharedModelLogic\UserModel;

class UserController
{
    public function getUser($id)
    {
        $model = new UserModel();
        $items = $model->getUser($id);

        if (!empty($items)) {
            return response()->json($items, 200);
        } else {
            abort(404);
        }
    }

    public function getUserCheckout($id)
    {
        $model = new UserModel();

        $items = $model->getUserCheckouts($id);

        if (!empty($items)) {
            return response()->json($items, 200);
        } else {
            abort(404);
        }
    }
}