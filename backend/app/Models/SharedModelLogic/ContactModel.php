<?php

namespace App\Models\SharedModelLogic;

use Illuminate\Support\Facades\DB;

class ContactModel
{
    public $name;
    public $email;
    public $subject;
    public $message;

    private $table = 'contact';

    public function create() {
        return DB::table($this->table)
        ->insert([
            'name' => $this->name,
            'email' => $this->email,
            'subject' => $this->subject,
            'message' => $this->message,
        ]);
    }
}
