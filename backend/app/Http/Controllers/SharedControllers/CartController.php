<?php

namespace App\Http\Controllers\SharedControllers;

use App\Models\SharedModelLogic\CartModel;
use App\Models\SharedModelLogic\CheckoutModel;
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

    # delete user item

    public function deleteUserItem(Request $request)
    {
        $body = $request->getContent();
        $cartModel = new CartModel();
        $cartModel->deleteUserItem($body);
        return response()->json(200);
    }


    # select one Item

    public function showItem($id)
    {
        $cartModel = new CartModel();
        $item = $cartModel->getOneItem($id);

        if(!$item){
            abort(404);
        }
        else{
            return response()->json($item, 200);
        }

    }

    # update Items

    public function updateItem(Request $request, $id)
    {
        $cartModel = new CartModel();
        $cartModel->quantity = $request->quantity;
        $cartModel->number = $request->number;
        $item = $cartModel->updateUserItem($id);
        return response()->json($item, 200);
    }

    # checkout Operations

    public function checkoutSelect($id)
    {
        $model = new CartModel();

        $items = $model->checkoutSelect($id);

        return $items;
    }

    public function checkout(Request $request)
    {
        $cartModel = new CartModel();
        $checkoutModel = new CheckoutModel();
        $id = $request->getContent();
        $items = $this->checkoutSelect($id);
        
        foreach($items as $item){

            $checkoutModel->user_id = $item->user_id;
            $checkoutModel->cart_id = $item->cart_id;
            $checkoutModel->product_id = $item->product_id;
            $checkoutModel->quantity = $item->quantity;

            $checkoutItems = $checkoutModel->store();
        }

        $cartModel->checkoutDelete($id);

        return response()->json($checkoutItems, 200);
    }

    public function userCurrentCheckoutList($id)
    {
        $model = new CheckoutModel();
        $items = $model->userCurrentCheckout($id);

        return response()->json($items, 200);
    }
}
