<?php

use Illuminate\Contracts\Http\Kernel;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

/*
|--------------------------------------------------------------------------
| Serve React Frontend If Exists
|--------------------------------------------------------------------------
|
| If the request is not for an API route or Laravel-specific file, serve
| the React index.html file from the frontend build folder.
|
*/
$reactIndex = __DIR__ . '/../frontend/build/index.html';
$requestUri = $_SERVER['REQUEST_URI'];

// Allow Laravel API and backend routes to function normally
if (!preg_match('/^\/api\//', $requestUri) && file_exists($reactIndex)) {
    // Serve static files (CSS, JS, images, etc.)
    if (preg_match('/\.(?:js|css|json|map|ico|png|jpg|jpeg|gif|svg|woff2?|ttf|eot|otf)$/', $requestUri)) {
        $filePath = __DIR__ . '/../frontend/build' . $requestUri;
        if (file_exists($filePath)) {
            return readfile($filePath);
        }
    }
    
    // Serve the React app for all non-static routes
    readfile($reactIndex);
    exit;
}

/*
|--------------------------------------------------------------------------
| Check If The Application Is Under Maintenance
|--------------------------------------------------------------------------
*/
if (file_exists($maintenance = __DIR__.'/../storage/framework/maintenance.php')) {
    require $maintenance;
}

/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
*/
require __DIR__.'/../vendor/autoload.php';

/*
|--------------------------------------------------------------------------
| Run The Application
|--------------------------------------------------------------------------
*/
$app = require_once __DIR__.'/../bootstrap/app.php';

$kernel = $app->make(Kernel::class);

$response = $kernel->handle(
    $request = Request::capture()
)->send();

$kernel->terminate($request, $response);