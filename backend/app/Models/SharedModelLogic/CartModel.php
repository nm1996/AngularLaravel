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

    # method to see one item

    public function getOneItem($id)
    {
        return DB::table($this->table)
        ->join('products', 'cart.product_id', '=', 'products.id')
        ->join('product_images', 'products.id_image', '=', 'product_images.id')
        ->where('cart.id', $id)
        ->select('cart.*', 'products.name as name', 'products.price as price', 'product_images.path as picture')
        ->get()
        ->first();
    }

    # method to delete item from cart

    public function deleteUserItem ($id) {
        return DB::table($this->table)
        ->delete($id);
    }

    # method to update item in cart

    public function updateUserItem($id) {
        return DB::table ($this->table)
        ->where('id', $id)
        ->update([
            'quantity' => $this->quantity,
            'number' => $this->number
        ]);
    }


    # checkout methods

    public function checkoutSelect($id)
    {
        return DB::table($this->table)
        ->where('user_id', $id)
        ->select('cart.id as cart_id', 'cart.user_id as user_id', 'cart.product_id as product_id', 'cart.quantity as quantity')
        ->get();
    }

    public function checkoutDelete($id)
    {
        return DB::table($this->table)
        ->where('user_id', $id)
        ->delete();
    }



    

}
