<?php

namespace App\Http\Controllers\SharedControllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\SharedModelLogic\LikeModel;
use Illuminate\Support\Facades\DB;

class LikeController
{
    public function like(Request $request)
    {
        $model = new LikeModel();

        $model->product_id = $request->product_id;
        $model->user_id = $request->user_id;
        $userId = $request->user_id;
        $productId = $request->product_id;

        $count = DB::table('likes')->where('user_id', $model->user_id)->where('product_id', $model->product_id)->count();

        if($count > 0) {
            $model->delete($userId, $productId);
        }
        else{

            $items = $model->store();
            return response()->json($items, 200);
        }
    }
}
