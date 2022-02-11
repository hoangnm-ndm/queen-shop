<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function getIndex() {
        // $ads = new AdsModel::get()->toJson(JSON_PRETTY_PRINT);
        // $blog = new BlogModel::get()->toJson(JSON_PRETTY_PRINT);
        return view('welcome');
    }
}
