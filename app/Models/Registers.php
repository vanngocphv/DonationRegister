<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registers extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'company',
        'email',
        'phone_number',
        'meal_preference',
        'payment',
        'chequeno',
        'blank_name',
        'payable',
        'value_lower'
    ];
}
