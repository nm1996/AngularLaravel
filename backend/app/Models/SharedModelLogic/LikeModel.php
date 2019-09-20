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
            ->insert([
                'user_id' => $this->user_id,
                'product_id' => $this->product_id
            ]);
    }


    public function delete($user_id, $product_id)
    {
        return DB::table($this->table)
            ->where('likes.user_id', $user_id)
            ->where('likes.product_id', $product_id)
            ->delete();
    }
}
