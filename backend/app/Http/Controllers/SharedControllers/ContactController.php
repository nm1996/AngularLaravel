<?php

namespace App\Http\Controllers\SharedControllers;

use App\Http\Controllers\Controller;
use App\Models\SharedModelLogic\ContactModel;
use App\Models\SharedModelLogic\InfoModel;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    #infos
    public function infos() {
        $model = new InfoModel();

        $items = $model->getInfos();

        if(!empty($items)) {
            return response()->json($items, 200);
        }

        else{
            abort (404);
        }
    }


    #Contact Logic
    public function insert(Request $request) {
        $model = new ContactModel();

        $rules = [ 
            'name' => 'required',
            'email' => 'required|email',
            'subject' => 'required|alpha|min:2|max:15',
            'message' => 'required'
        ];

        $message =[];

        $validator = \Validator::make($request->all(), $rules, $message);
        $validator->validate();

        $model->name = $request->name;
        $model->email = $request->email;
        $model->subject = $request->subject;
        $model->message = $request->message;

        $model->create();

        return response()->json(200);
    }
}
