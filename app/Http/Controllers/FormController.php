<?php

namespace App\Http\Controllers;

use App\Models\Registers;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function index()
    {
        return view('form.index');
    }

    public function create(Request $request)
    {
        $validFormValues = $request->validate([
            'first_name'        => 'required',
            'last_name'         => 'required',
            'company'           => 'required',
            'email'             => ['required', 'email'],
            'phone_number'      => 'required|numeric|min:10',
            'meal_preference'   => 'required',
            'payment'           => 'required',
            'chequeno'          => 'required|numeric',
            'blank_name'        => 'required',
            'payable'           => 'required',
        ]);

        //set lost value
        $validFormValues['value_lower'] = $request['value_lower'];

        Registers::create($validFormValues);

        return redirect('/')->with('message', 'Your Donation has been register successfully!');
    }
}
