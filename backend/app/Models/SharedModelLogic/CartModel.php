<?php

namespace App\Models\SharedModelLogic;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Schema\Blueprint;

class CartModel
{
    # define properties

    public $user_id;
    public $product_id;
    public $quantity;
    public $created_at;
    public $number;

    private $table = "cart";

    # method to add items to cart

    public function addToCart() {
        return DB::table($this->table)
        ->insert([
            'user_id' => $this->user_id,
            'product_id' => $this->product_id,
            'quantity' => $this->quantity,
            'number' => $this->number,
            'created_at' => date('Y-m-d H:i:s')
        ]);
    }

    # method to see list of items from logged user cart

    public function getUserCart($userId) {
        return DB::table($this->table)
        ->join('users', 'cart.user_id', '=', 'users.id')
        ->join('products', 'cart.product_id', '=', 'products.id')
        ->join('product_images', 'products.id_image', '=', 'product_images.id')
        ->where('cart.user_id', $userId)
        ->select('cart.*', 'products.name as name', 'products.price as price', 'product_images.path as picture')
        ->get();
    }

    # method to find one item from cart

    public function deleteUserItem ($productId) {
        return DB::table($this->table)
        ->delete($productId);
    }

    # method to update item in cart


}
