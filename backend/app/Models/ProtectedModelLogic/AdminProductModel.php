<?php

namespace App\Models\ProtectedModelLogic;

use Illuminate\Support\Facades\DB;

class AdminProductModel
{
    #props

    public $name;
    public $id_category;
    public $price;
    public $color;
    public $id_image;
    public $date_arrive;
    public $popular_rating;

    private $table = "products";

    #logic

    public function getAll()
    {
        return DB::table($this->table)
            ->join('product_images', 'products.id_image', '=', 'product_images.id')
            ->join('category', 'products.id_category', '=', 'category.id')
            ->select('products.*', 'product_images.path as image_path', 'category.name as category_name', DB::raw("(SELECT count(*) FROM likes WHERE product_id = products.id) as likes"))
            ->orderBy('date_arrive', 'desc')
            ->get();
    }

    public function getOne($id)
    {
        return DB::table($this->table)
            ->join('product_images', 'products.id_image', '=', 'product_images.id')
            ->join('category', 'products.id_category', '=', 'category.id')
            ->where('products.id', $id)
            ->select('products.*', 'products.id_image as id_image', 'product_images.id as picture_id', 'product_images.path as image_path', 'category.name as category_name')
            ->get()
            ->first();
    }

    public function store()
    {
        return DB::table($this->table)
            ->insertGetId([
                'name' => $this->name,
                'id_category' => $this->id_category,
                'price' => $this->price,
                'color' => $this->color,
                'id_image' => $this->id_image,
                'date_arrive' => date('Y-m-d'),
                'popular_rating' => $this->popular_rating
            ]);
    }

    public function delete($id)
    {
        return DB::table($this->table)
            ->where('id', $id)
            ->delete();
    }

    public function update($id)
    {
        $updated = [
            'name' => $this->name,
            'id_category' => $this->id_category,
            'price' => $this->price,
            'color' => $this->color,
            'popular_rating' => $this->popular_rating,

        ];
        if ($this->id_image != null) {
            $updated = ['id_image' => $this->id_image];
        }

        return DB::table($this->table)
            ->where('id', $id)
            ->update($updated);
    }

    public function pictureId($id)
    {
        return DB::table($this->table)
            ->where('id', $id)
            ->select('products.id_image as id')
            ->get()
            ->first()
            ->id;
    }
}