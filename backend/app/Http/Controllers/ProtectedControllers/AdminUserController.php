<?php

namespace App\Http\Controllers\protectedcontrollers;

use App\Models\ProtectedModelLogic\AdminUserModel;
use Illuminate\Http\Request;
use Mockery\Expectation;

class AdminUserController
{
    public function usersIndex()
    {
        $model = new AdminUserModel();
        $items = $model->getAll();

        if (!empty($items)) {
            return response()->json($items, 200);
        } else {
            abort(404);
        }
    }

    public function userStore(Request $request)
    {
        $rules = [
            'name' => 'required|alpha',
            'email' => 'required|email',
            'city' => 'required|alpha',
            'address' => 'required|alpha',
            'password' => 'required|min:2|max:20',
        ];

        $message = [];

        $validator = \Validator::make($request->all(), $rules, $message);
        $validator->validate();

        $model = new AdminUserModel();

        $model->name = $request->name;
        $model->email = $request->email;
        $model->password = $request->password;
        $model->city = $request->city;
        $model->address = $request->address;
        $model->role_id = $request->role_id;

        try {
            $items = $model->store();
            return response()->json($items, 200);
        } catch (\Exception $e) {
            \Log::error('message' . $e->getMessage());
        }
    }

    public function delete(Request $request)
    {
        $id = $request->getContent();
        $model = new AdminUserModel();



        try {
            $items = $model->delete($id);
            return response()->json($items, 200);
        } catch (Exception $e) {
            \Log::error('message' . $e->getMessage());
        }
    }

    public function getOneUser($id)
    {
        $model = new AdminUserModel();
        $items = $model->getOne($id);

        if (!empty($items)) {
            return response()->json($items, 200);
        } else {
            abort(404);
        }
    }


    public function userUpdate(Request $request, $id)
    {
        $rules = [
            'name' => 'required|alpha',
            'email' => 'required|email',
            'city' => 'required|alpha',
            'address' => 'required|alpha',
            'password' => 'required|min:2|max:20',
        ];

        $message = [];

        $validator = \Validator::make($request->all(), $rules, $message);
        $validator->validate();

        $model = new AdminUserModel();

        $model->name = $request->name;
        $model->email = $request->email;
        $model->password = $request->password;
        $model->city = $request->city;
        $model->address = $request->address;
        $model->role_id = $request->role_id;
        try {
            $items = $model->update($id);
            return response()->json($items, 200);
        } catch (Expectation $e) {
            \Log::error("message" . $e->getMessage());
        }
    }
}