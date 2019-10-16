<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class TimelineController extends Controller
{
    //
    public function index(){
        $data['following'] = Auth::user()->following;
        $data['followers'] = Auth::user()->followers;
        return view('home', $data);
    }
}
