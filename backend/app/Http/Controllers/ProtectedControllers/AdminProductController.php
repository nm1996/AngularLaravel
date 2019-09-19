<?php

namespace App\Http\Controllers\ProtectedControllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use App\Models\ProtectedModelLogic\AdminPictureModel;
use App\Models\ProtectedModelLogic\AdminProductModel;

class AdminProductController

{
    public function productStore(Request $request)
    {
        $modelProduct = new AdminProductModel();
        $modelPicture = new AdminPictureModel();

        #picture
        $pictureDirectory = 'C:/xampp/htdocs/xampp/AngularLaravel/frontend/src/assets/images/products/';
        $picturePath = $request->file('picture');
        $pictureName = "product_" . time(). ".jpg";
        $picturePath->move($pictureDirectory, $pictureName);

        $modelPicture->path = "images/products/" . $pictureName;
        $modelPicture->name = "picture";

        $modelProduct->id_image = $modelPicture->store();
        $modelProduct->id_category = $request->id_category;
        $modelProduct->name = $request->name;
        $modelProduct->price = $request->price;
        $modelProduct->color = $request->color;
        $modelProduct->popular_rating = $request->popular_rating;

        $items = $modelProduct->store();
        return response()->json($items, 200);
    }
}
