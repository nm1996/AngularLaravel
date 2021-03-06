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

        if (!empty($items)) {
            return response()->json($items, 200);
        } else {
            abort(404);
        }
    }

    public function deleteOne(Request $request)
    {
        $model = new AdminTrackingModel();

        $id = $request->getContent();
        try {
            $item = $model->deleteOne($id);
            if ($item) {
                return response()->json($item, 200);
            } else {
                abort(404);
            }
        } catch (Exception $e) { }
    }


    public function deleteAll()
    {
        $model = new AdminTrackingModel();

        $model->deleteAll();
    }

    public function getDelivered()
    {
        $model = new AdminTrackingModel();

        $items = $model->getDelivered();

        if (!empty($items)) {
            return response()->json($items, 200);
        } else {
            abort(404);
        }
    }

    public function makeDeliver(Request $request)
    {
        $id = $request->getContent();
        $model = new AdminTrackingModel();
        if (!empty($id)) {
            $items = $model->deliver($id);
            if ($items) {
                return response()->json($items, 200);
            } else {
                abort(404);
            }
        } else {
            abort(404);
        }
    }
}