<?php

namespace App\Http\Controllers\SharedControllers;

use App\Models\SharedModelLogic\CartModel;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CartController 
{

    # show user cart

    public function showUserCart($userId)
    {
        $cartModel = new CartModel();
        $cartItems = $cartModel->getUserCart($userId);

        return response()->json($cartItems, 200);
    }

    # method for adding item to cart

    public function addToCart(Request $request)
    {
        $cartModel = New CartModel();

        $cartModel->user_id = $request->user_id;
        $cartModel->product_id = $request->product_id;
        $cartModel->quantity = $request->quantity;
        $cartModel->number = $request->number;

        $cartItems = $cartModel->addToCart();

        return response()->json($cartItems, 200);
    }

    public function deleteUserItem($id)
    {
        $cartModel = new CartModel();
        $cartModel->deleteUserItem($id);
        return response()->json(200);
    }
}
