<?php

namespace App\Http\Controllers\ProtectedControllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\ProtectedModelLogic\AdminTrackingModel;

class AdminTrackingController
{
    public function getAllCheckouts()
    {
        $model = new AdminTrackingModel();

        $items = $model->getAll();

        if(!empty($items)) {
            return response()->json($items, 200);
        }
        else{
            abort (404);
        }
    }
}
