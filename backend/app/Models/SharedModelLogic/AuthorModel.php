<?php

namespace App\Models\SharedModelLogic;

use Illuminate\Support\Facades\DB;

class AuthorModel
{
    public $name;
    public $description;
    public $image;
    public $address;
    public $school;
    private $table = "author";

    public function author() {
        return DB::table($this->table)
        ->select('*')
        ->get();
    }
}
