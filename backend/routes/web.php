<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ContactController;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



Route::get('/contacts', [ContactController::class, 'index'])->name('contacts.index');

Route::get('/frontend/build/{path}', function ($path) {
    $file = public_path("frontend/build/{$path}");
    if (File::exists($file)) {
        return Response::file($file);
    }
    abort(404);
})->where('path', '.*');