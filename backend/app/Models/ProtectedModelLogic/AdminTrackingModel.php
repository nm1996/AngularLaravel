<?php

namespace App\Models\ProtectedModelLogic;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class AdminTrackingModel
{
    public $cart_id;
    public $user_id;
    public $created_at;
    public $product_id;
    public $quantity;

    private $table = "checkout";

    public function getAll()
    {
        return DB::table($this->table)
            ->join('products', 'checkout.product_id', '=', 'products.id')
            ->join('users', 'checkout.user_id', '=', 'users.id')
            ->join('product_images', 'products.id_image', '=', 'product_images.id')
            ->select('users.name as user_name', 'checkout.id', 'checkout.quantity as quantity', 'product_images.path as picture', 'products.name as name', 'products.price as price', 'checkout.created_at')
            ->orderByDesc('checkout.created_at')
            ->get();
    }

    public function deleteOne($id)
    {
        return DB::table($this->table)
            ->where('id', $id)
            ->delete();
    }

    public function deleteAll()
    {
        return DB::table($this->table)
            ->delete();
    }
}