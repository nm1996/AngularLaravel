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

        if (empty($items)) {
            abort(404);
        } else {
            return response()->json($items, 200);
        }
    }

    public function getOneProduct($id)
    {
        $model = new AdminProductModel();

        $items = $model->getOne($id);

        if (!empty($items)) {
            return response()->json($items, 200);
        } else {
            abort(404);
        }
    }

    public function productStore(Request $request)
    {
        $modelProduct = new AdminProductModel();
        $modelPicture = new AdminPictureModel();

        #picture

        $picturePath = $request->file('picture');
        $pictureDirectory = public_path('images/products/');
        $pictureName = "product_" . time() . $picturePath->getClientOriginalName();
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


    public function deleteProduct(Request $request)
    {
        $picId = null;
        $id = $request->getContent();
        $product = new AdminProductModel();
        $picture = new AdminPictureModel();

        $productItem = $product->getOne($id);

        $pictureId = $productItem->picture_id;

        $pictureItem = $picture->getOne($pictureId);
        // try {

        //     $picture->delete($pictureId);
        //     $product->delete($id);
        // } catch (\Exception $e) {
        //     \Log::error('message' . $e->getMessage());
        // }


        return response()->json([$productItem, $pictureItem], 200);
    }


    public function updateProduct(Request $request, $id)
    {
        $oldPic = null;
        $product = new AdminProductModel();
        $picture = new AdminPictureModel();

        $product->id_category = $request->id_category;
        $product->name = $request->name;
        $product->id_category = $request->id_category;
        $product->price = $request->price;
        $product->color = $request->color;
        $product->popular_rating = $request->popular_rating;
        if ($request->hasFile('picture')) {
            $oldPic = $product->pictureId($id);

            try {
                $picturePath = $request->file('picture');
                $pictureDirectory = public_path('images/products/');
                $pictureName = "product_" . time() . $picturePath->getClientOriginalName();
                $picturePath->move($pictureDirectory, $pictureName);

                $picture->path = "images/products/" . $pictureName;
                $picture->name = "picture";
                $product->id_image = $picture->store();
            } catch (QueryException $e) {
                \Log::error("message" . $e->getMessage());
            } catch (FileException $e) {
                \Log::error("error" . $e->getMessage());
            }
        }



        try {
            $items =  $product->update($id);
            if (!empty($items)) {
                return response()->json($items, 200);
            } else {
                abort(404);
            }
            // if ($oldPic) {
            //     $picture = new AdminPictureModel();
            //     $pic = $picture->getOne($oldPic);
            //     $directory = public_path();
            //     unlink($directory . '/' . $picture->path);
            //     $picture->delete($oldPic);
            // }
        } catch (QueryException $e) {
            \Log::error("message" . $e->getMessage());
        }
    }
}