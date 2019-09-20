<?php

namespace App\Models\SharedModelLogic;

use Illuminate\Support\Facades\DB;

class LikeModel
{

    public $user_id;
    public $product_id;

    private $table = 'likes';

    public function store()
    {
        return DB::table($this->table)
            ->insertGetId([
                'user_id' => $this->user_id,
                'product_id' => $this->product_id
            ]);
    }

    public function voted($userId, $productId)
    {
        return DB::table($this->table)
            ->where('likes.user_id', $userId)
            ->where('likes.product_id', $productId)
            ->get()
            ->first();
    }

    public function delete($userId, $productId)
    {
        return DB::table($this->table)
            ->where('likes.user_id', $userId)
            ->where('likes.product_id', $productId)
            ->delete();
    }
}