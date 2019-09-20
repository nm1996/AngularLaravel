<?php

namespace App\Http\Controllers\AdminControllers;

use App\Models\ProtectedModelLogic\PictureModel;
use App\Models\ProtectedModelLogic\ProductModel;
use Illuminate\Http\Request;

class ProductController
{
    public function __construct() {
        $productModel = new ProductModel();
        $pictureModel = new PictureModel();
    }
    

    public function store(Request $request) {
        $path = $request->file('picture');
        $directory = 'frontend/src/assets/images/picture';
        $picName = time() . "_" . $path->getClientOriginalName();
        $path->move($directory, $picName);

        $pictureModel->name = "images/products/" . $picName;
        $pictureModel->alt = "post image";

        

    }
}
