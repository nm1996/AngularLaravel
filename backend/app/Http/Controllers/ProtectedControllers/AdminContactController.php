<?php

namespace App\Http\Controllers\ProtectedControllers;

use App\Models\ProtectedModelLogic\AdminContactModel;
use Illuminate\Http\Request;

class AdminContactController
{
    public function getAllContacts()
    {
        $model = new AdminContactModel();

        $items = $model->getAllContact();

        if (!empty($items)) {
            return response()->json($items, 200);
        } else {
            abort(404);
        }
    }

    public function getAllAnswered()
    {
        $model = new AdminContactModel();

        $items = $model->getAllAnswers();

        if (!empty($items)) {
            return response()->json($items, 200);
        } else {
            abort(404);
        }
    }
}