<?php

namespace App\Http\Controllers\SharedControllers;

use App\Http\Controllers\Controller;
use App\Models\SharedModelLogic\AuthorModel;

class AuthorController
{
    public function author() {
        $model = new AuthorModel();
        $items = $model->author();

        return response()->json($items, 200);
    }
}
