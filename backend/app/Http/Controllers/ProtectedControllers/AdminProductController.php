<?php

namespace App\Http\Controllers\ProtectedControllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use App\Models\ProtectedModelLogic\AdminPictureModel;
use App\Models\ProtectedModelLogic\AdminProductModel;
use Illuminate\Database\QueryException;

class AdminProductController

{

    public function productsIndex()
    {
        $model = new AdminProductModel();
        $items = $model->getAll();

        if(empty($items)) {
            abort (404);
        }

        else {
            return response()->json($items, 200);
        }
    }

    public function productStore(Request $request)
    {
        $modelProduct = new AdminProductModel();
        $modelPicture = new AdminPictureModel();

        #picture
        $pictureDirectory = public_path('images/products/');
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


    public function deleteProduct($id) {
        $productModel = new AdminProductModel();
        $pictureModel = new AdminPictureModel();

        $items = $productModel->getOne($id);
            $oldPic = $items->picture_id;
            $directory = public_path('images/products/');
            $picturePath = $items->image_path;
            $pic = $pictureModel->getOne($oldPic);
            unlink($directory,$picturePath);
            $pictureModel->delete($oldPic);

        $item = $items->delete($id);
        return response()->json($item, 200);
    }


    public function updateProduct(Request $request, $id)
    {
        $oldPic = null;
        $product = new AdminProductModel();
        $picture = new AdminPictureModel();

        $product->name = $request->name;
        $product->id_category = $request->id_category;
        $product->price = $request->price;
        $product->color = $request->color;
        $product->popular_rating = $request->popular_rating;


        if($request->hasFile('picture')) {
            $oldPic = $product->id_image($id);
            try{ 
                $path = $request->file('picture');
                $directory = public_path('images/products/');
                $picName = "product" . "_" . time() . $path->getClientOriginalName();
                $path->move($directory, $picName);

                $picture->path = "images/products/" .$picName;
                $picture->name = "product" . time();
                $product->id_image = $picture->store();
            }
            catch(QueryException $e) {
                \Log::error($e->getMessage());
            }
        }

        try {
            $product->update($id);

            try {
                if($oldPic) {
                    $picture = new AdminPictureModel();
                    $pic = $picture->getOne($oldPic);
                    unlink(public_path($picture->path));
                    $picture->delete($oldPic);
                }
            }
            catch(Exception $e) {
                \Log::error("error". $e->getMessage());
            }
        }
        catch(Exception $e){}
    }
}

