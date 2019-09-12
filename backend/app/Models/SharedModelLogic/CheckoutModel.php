<?php

namespace App\Models\SharedModelLogic;

use Faker\Provider\DateTime;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;


class CheckoutModel
{
    public $cart_id;
    public $user_id;
    public $created_at;
    public $product_id;
    public $quantity;

    private $table = "checkout";

    public function store()
    {
        return DB::table($this->table)
            ->insert(
                [
                    'cart_id' => $this->cart_id,
                    'user_id' => $this->user_id,
                    'created_at' => date('Y-m-d'),
                    'product_id' => $this->product_id,
                    'quantity' => $this->quantity
                ]
            );
    }

     public function userCurrentCheckout($id)
     {
        $currentDate = Carbon::now()->toDateString();

         return DB::table($this->table) 
             ->join('products', 'checkout.product_id', '=', 'products.id')
             ->join('product_images', 'products.id_image', '=', 'product_images.id')
             ->where('user_id', $id)
             ->where('created_at', $currentDate)
             ->select('checkout.quantity as quantity', 'product_images.path as picture', 'products.name as name' ,'products.price as price', 'checkout.created_at')
             ->orderBy('checkout.created_at', 'desc')
             ->get();      
     }
}
