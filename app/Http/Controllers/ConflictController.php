<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ConflictController extends Controller
{
    //
    public function index()
    {
        return view('conflicts.instructors.index');
    }
}
