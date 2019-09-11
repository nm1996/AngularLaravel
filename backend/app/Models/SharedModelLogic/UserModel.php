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
}
