<?php

namespace App\Http\Controllers\SharedControllers;

use App\Models\SharedModelLogic\ProductModel;
use Exception;
use Illuminate\Http\Request;

class ProductsController
{

    # show products methods

    public function showMenProducts()
    {
        $model = new ProductModel();
        $products = $model->getMenProducts();
        return response()->json($products, 200);
    }

    public function showWomenProducts()
    {
        $model = new ProductModel();
        $products = $model->getWomenProducts();
        return response()->json($products, 200);
    }

    public function showKidsProducts()
    {
        $model = new ProductModel();
        $products = $model->getKidsProducts();

        return response()->json($products, 200);
    }

    public function showSportProducts()
    {
        $model = new ProductModel();
        $products = $model->geSportProducts();

        return response()->json($products, 200);
    }


    # show product details

    public function showProductDetails($id)
    {
        $model = new ProductModel();
        $product = $model->getOneProduct($id);
        return response()->json($product, 200);
    }

}
