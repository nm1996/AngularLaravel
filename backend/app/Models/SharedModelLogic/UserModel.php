<?php

namespace App\Models\SharedModelLogic;

use Illuminate\Support\Facades\DB;


class UserModel
{
    public $name;
    public $email;
    public $password;
    public $city;
    public $address;
    public $role_id;

    private $table = 'users';

    public function create()
    {
        return DB::table($this->table)
            ->insert([
                'name' => $this->name,
                'email' => $this->email,
                'password' => bcrypt($this->password),
                'city' => $this->city,
                'address' => $this->address,
                'role_id' => 1
            ]);
    }

    public function getUser($id)
    {
        return DB::table($this->table)
            ->join('roles', 'users.role_id', '=', 'roles.id')
            ->where('users.id', $id)
            ->select('users.*', 'roles.name as role_name')
            ->first();
    }

    public function getUserCheckouts($id)
    {
        return DB::table($this->table)
            ->join('checkout', 'users.id', '=', 'checkout.user_id')
            ->join('products', 'checkout.product_id', '=', 'products.id')
            ->join('product_images', 'products.id_image', '=', 'product_images.id')
            ->where('users.role_id', 1)
            ->select('users.*', 'products.name as product_name', 'products.price as price', 'checkout.*', 'product_images.path as picture')
            ->get();
    }
}