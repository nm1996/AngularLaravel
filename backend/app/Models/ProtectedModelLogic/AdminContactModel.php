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
}