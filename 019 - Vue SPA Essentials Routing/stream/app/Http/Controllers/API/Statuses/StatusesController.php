<?php

namespace App\Http\Controllers\API\Statuses;

use Illuminate\Http\Request;
use App\Status;
use App\User;
use App\Http\Controllers\Controller;

class StatusesController extends Controller
{
    public function index () {
        return Status::with('user')->latest()->get();
    }

    public function store (Request $request) {
        // middleware

        // validation

        $this->validate($request, ['body' => 'required']);

        // create the status

        // $status = User::findOrFail(1)
        //     ->statuses()
        //     ->create($request->only(['body']));
        $status = new Status;
        $status->user_id = 1;
        $status->body = $request->body;
        $status->save();

        // return it, and also include the user
        return $status->load('user');
    }
}
