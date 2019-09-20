<?php

namespace App\Models\ProtectedModelLogic;

use Illuminate\Support\Facades\DB;

class AdminUserModel
{
    public $name;
    public $email;
    public $password;
    public $created_at;
    public $updated_at;
    public $city;
    public $address;
    public $role_id;

    private $table = "users";

    public function getAll()
    {
        return DB::table($this->table)
        ->join('roles', 'users.role_id' ,'=', 'roles.id')
        ->select('users.*', 'roles.name as role_name')
        ->get();
    }
}
