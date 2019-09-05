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

    public function addToCart(Request $request, $productId)
    {
        $cartItem = new CartModel();
        $cartItem->user_id = $request->get('user_id');
        $cartItem->product_id = $productId;
        $cartItem->quantity = $request->get('quantity');
        $cartItem->number = $request->get('number');

        try {
            $cartItem->addToCart();
            return  $this->showUserCart($request);
        }
        catch(QueryException $e) {
            Log::error($e->getMessage());
        }

    }
}
