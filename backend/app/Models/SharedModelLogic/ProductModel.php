<?php

namespace App\Models\SharedModelLogic;
use Illuminate\Support\Facades\DB;


class ProductModel
{
    # define properties

    public $name;
    public $id_category;
    public $price;
    public $color;
    public $id_image;
    public $date_arrive;
    public $popular_rating;

    private $table = 'products';

    # get methods 

    public function getMenProducts()
    {
        return DB::table($this->table)
            ->join('product_images', 'products.id_image', '=', 'product_images.id')
            ->join('category', 'products.id_category', '=', 'category.id')
            ->where('products.id_category', '=', '1')
            ->select('products.*', 'product_images.path as image_path')
            ->get();
    }

    public function getKidsProducts()
    {
        return DB::table($this->table)
            ->join('product_images', 'products.id_image', '=', 'product_images.id')
            ->join('category', 'products.id_category', '=', 'category.id')
            ->where('products.id_category', '=', '3')
            ->select('products.*', 'product_images.path as image_path')
            ->get();
    }

    public function geSportProducts()
    {
        return DB::table($this->table)
            ->join('product_images', 'products.id_image', '=', 'product_images.id')
            ->join('category', 'products.id_category', '=', 'category.id')
            ->where('products.id_category', '=', '4')
            ->select('products.*', 'product_images.path as image_path')
            ->get();
    }

    public function getWomenProducts()
    {
        return DB::table($this->table)
            ->join('product_images', 'products.id_image', '=', 'product_images.id')
            ->join('category', 'products.id_category', '=', 'category.id')
            ->where('products.id_category', '=', '2')
            ->select('products.*', 'product_images.path as image_path')
            ->get();
    }


    public function getOneProduct($id){
        return DB::table($this->table)
            ->join('product_images', 'products.id_image', '=', 'product_images.id')
            ->join('category', 'products.id_category', '=', 'category.id')
            ->where('products.id', $id)
            ->select('products.*', 'product_images.path as image_path')
            ->get()
            ->first();
    }

    
    
}
