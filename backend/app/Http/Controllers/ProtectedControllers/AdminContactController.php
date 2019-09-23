<?php

namespace App\Http\Controllers\ProtectedControllers;

use App\Models\ProtectedModelLogic\AdminContactModel;
use Illuminate\Http\Request;

class AdminContactController
{
    public function getAllContacts()
    {
        $model = new AdminContactModel();

        $items = $model->getAllContact();

        if (!empty($items)) {
            return response()->json($items, 200);
        } else {
            abort(404);
        }
    }

    public function getAllAnswered()
    {
        $model = new AdminContactModel();

        $items = $model->getAllAnswers();

        if (!empty($items)) {
            return response()->json($items, 200);
        } else {
            abort(404);
        }
    }

    public function getOneQuestion($id)
    {
        $model = new AdminContactModel();

        $item = $model->getOneContact($id);

        if(!empty($item)){
            return $item;
        }
        else{
            abort (404);
        }
    }

    public function insertAnswer(Request $request)
    {
        $id = $request->getContent();

        $model = new AdminContactModel();

        $question = $this->getOneQuestion($id);

        if(!empty($question)) {
            $model->name = $question->name;
            $model->email = $question->email;
            $model->subject = $question->subject;
            $model->message = $question->message;
            $model->contact_id = $question->id;

            $item = $model->insertAnswer();
        }

        if($item != 0) {
            $model->deleteOneContact($id);
        }

        return response()->json($item, 200);
    }

    public function deleteContact(Request $request)
    {
        $model = new AdminContactModel();
        $id = $request->getContent();

        if($id != 0) {
            $model->deleteOneContact($id);
            return response()->json(200);
        }
        else{
            abort (404);
        }
    }

    public function deleteAnswer(Request $request)
    {
        $model = new AdminContactModel();
        $id = $request->getContent();

        if($id != 0) {
            $model->deleteOneAnswer($id);
            return response()->json(200);
        }
        else{
            abort (404);
        }
    }
}
