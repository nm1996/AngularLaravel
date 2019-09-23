<?php

namespace App\Models\ProtectedModelLogic;

use Illuminate\Support\Facades\DB;

class AdminContactModel
{
    public $name;
    public $email;
    public $subject;
    public $message;
    public $created_at;
    public $answred;
    public $contact_id;

    private $table_contact = "contact";
    private $table_answered = "answered_questions";


    public function getAllContact()
    {
        return DB::table($this->table_contact)
            ->get();
    }

    public function getAllAnswers()
    {
        return DB::table($this->table_answered)
            ->get();
    }

    public function getOneContact($id)
    {
        return DB::table($this->table_contact)
        ->where('id', $id)
        ->get()
        ->first();
    }

    public function deleteOneContact($id)
    {
        return DB::table($this->table_contact)
        ->where('id', $id)
        ->delete();
    }

    public function deleteOneAnswer($id)
    {
        return DB::table($this->table_answered)
        ->where('id', $id)
        ->delete();
    }

    public function insertAnswer()
    {
        return DB::table($this->table_answered)
        ->insertGetId([
            'name' => $this->name,
            'email' => $this->email,
            'subject' => $this->subject,
            'message' => $this->message,
            'answered' => date('Y-m-d'),
            'contact_id' => $this->contact_id
        ]);
    }
}
