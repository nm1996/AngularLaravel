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
            ->join('roles', 'users.role_id', '=', 'roles.id')
            ->select('users.*', 'roles.name as role_name')
            ->get();
    }

    public function store()
    {
        return DB::table($this->table)
            ->insertGetId([
                'name' => $this->name,
                'email' => $this->email,
                'password' => bcrypt($this->password),
                'created_at' => date('Y-m-d'),
                'updated_at' => date('Y-m-d-'),
                'city' => $this->city,
                'address' => $this->address,
                'role_id' => $this->role_id
            ]);
    }

    public function delete($id)
    {
        return DB::table($this->table)
            ->where('id', $id)
            ->delete();
    }

    public function getOne($id)
    {
        return DB::table($this->table)
            ->where('id', $id)
            ->select()
            ->get()
            ->first();
    }

    public function update($id)
    {
        $update = [
            'name' => $this->name,
            'email' => $this->email,
            'password' => bcrypt($this->password),
            'city' => $this->city,
            'address' => $this->address,
            'updated_at' => date('Y-m-d'),
            'role_id' => $this->role_id
        ];
        return DB::table($this->table)
            ->where('id', $id)
            ->update($update);
    }
}