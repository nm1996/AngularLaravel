<?php

namespace App\Models\SharedModelLogic;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class InfoModel
{
    # props
    public $city;
    public $street;
    public $work_time;
    public $email;
    public $phone;

    private $table = "info";

    public function getInfos() {
        return DB::table($this->table)
        ->get()
        ->first();
    }
}
