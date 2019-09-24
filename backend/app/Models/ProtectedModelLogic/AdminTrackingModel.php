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
    public $delivered;

    private $table = "checkout";

    public function getAll()
    {
        return DB::table($this->table)
            ->join('products', 'checkout.product_id', '=', 'products.id')
            ->join('users', 'checkout.user_id', '=', 'users.id')
            ->join('product_images', 'products.id_image', '=', 'product_images.id')
            ->where('checkout.delivered', 0)
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

    public function deliver($id)
    {
        $update = [
            'created_at' => date('Y-m-d'),
            'delivered' => 1
        ];
        return DB::table($this->table)
            ->where('id', $id)
            ->update($update);
    }

    public function getDelivered()
    {
        return DB::table($this->table)
            ->join('products', 'checkout.product_id', '=', 'products.id')
            ->join('users', 'checkout.user_id', '=', 'users.id')
            ->join('product_images', 'products.id_image', '=', 'product_images.id')
            ->where('checkout.delivered', 1)
            ->select('users.name as user_name', 'checkout.id', 'checkout.quantity as quantity', 'product_images.path as picture', 'products.name as name', 'products.price as price', 'checkout.created_at')
            ->orderByDesc('checkout.created_at')
            ->get();
    }
}