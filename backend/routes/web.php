<?php

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ContactController;

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

Route::get('/{any}', function () {
    $path = public_path('../frontend/build/index.html');

    if (File::exists($path)) {
        return Response::file($path);
    }

    abort(404);
})->where('any', '.*');