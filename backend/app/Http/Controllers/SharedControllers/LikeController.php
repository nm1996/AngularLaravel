<?php

namespace App\Http\Controllers\SharedControllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\SharedModelLogic\LikeModel;

class LikeController
{
    public function like(Request $request)
    {
        $model = new LikeModel();

        $model->product_id = $request->product_id;
        $model->user_id = $request->user_id;

        $voted = $model->voted($model->product_id, $model->user_id);

        if (!empty($voted)) {
            $model->delete($model->product_id, $model->user_id);
        } else {
            $items = $model->store();
            return response()->json($items, 200);
        }
    }
}