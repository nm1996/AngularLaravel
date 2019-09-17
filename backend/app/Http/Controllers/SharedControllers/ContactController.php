<?php

namespace App\Http\Controllers\SharedControllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactRequest;
use App\Models\SharedModelLogic\ContactModel;

class ContactController extends Controller
{
    public function insert(ContactRequest $request) {
        $model = new ContactModel();

        $model->name = $request->name;
        $model->email = $request->email;
        $model->subject = $request->subject;
        $model->message = $request->message;

        $model->create();

        return response()->json( 200);
    }
}
