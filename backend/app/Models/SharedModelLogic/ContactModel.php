<?php

namespace App\Models\SharedModelLogic;

use Illuminate\Support\Facades\DB;

class ContactModel
{
    public $name;
    public $email;
    public $subject;
    public $message;
    public $created_at;

    private $table = 'contact';

    public function create() {
        return DB::table($this->table)
        ->insert([
            'name' => $this->name,
            'email' => $this->email,
            'subject' => $this->subject,
            'message' => $this->message,
            'created_at' => date('Y-m-d')
        ]);
    }
}
