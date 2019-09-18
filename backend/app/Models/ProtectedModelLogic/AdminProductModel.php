<?php

namespace App\Models\ProtectedModelLogic;
use Illuminate\Support\Facades\DB;

class AdminProductModel
{
    public $name;
    public $id_category;
    public $price;
    public $color;
    public $id_image;
    public $date_arrive;
    public $popular_rating;

    public function store()
    {
        return DB::table($this->table)
        ->insert([
            'name' => $this->name,
            'id_category' => $this->id_category,
            'price' => $this->price,
            'color' => $this->color,
            'id_image' => $this->id_image,
            'date_arrive' => $this->date_arrive,
            'popular_rating' => $this->popular_rating,
        ]);
    }

}
