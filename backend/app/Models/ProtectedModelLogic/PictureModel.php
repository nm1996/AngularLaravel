<?php

namespace App\Models\ProtectedModelLogic;

use Illuminate\Support\Facades\DB;

class PictureModel
{
    #props
    public $name;
    public $path;
    private $table = "product_images";

    public function store() {
        return DB::table($this->table)
        ->insert([
            'name' => $this->name,
            'path' => $this->path
        ]);
    }

    public function delete($id) {
        return DB::table($this->table)
        ->delete($id);
    }

    public function getOne($id) {
        return DB::table($this->table)
        ->where('id', $id)
        ->get()
        ->first();
    }
}
