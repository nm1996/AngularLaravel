<?php

namespace App\Models\SharedModelLogic;

use Illuminate\Support\Facades\DB;


class CheckoutModel
{
    public $cart_id;
    public $user_id;
    public $created_at;
    public $product_id;

    private $table = "checkout";

    public function store()
    {
        return DB::table($this->table)
            ->insert(
                [
                    'cart_id' => $this->cart_id,
                    'user_id' => $this->user_id,
                    'created_at' => date('Y-m-d'),
                    'product_id' => $this->product_id
                ]
            );
    }
}
