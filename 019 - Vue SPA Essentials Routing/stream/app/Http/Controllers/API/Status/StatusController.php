<?php

namespace App\Http\Controllers\API\Status;

use Illuminate\Http\Request;
use App\Status;
use App\Http\Controllers\Controller;

class StatusController extends Controller
{
    public function index () {

        return Status::with('user')->latest()->get();

    }
}
