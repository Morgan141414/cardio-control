<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DemoRequestController;
use App\Http\Controllers\PageController;

// Главная страница маркетинга (будет отдавать index.blade.php с Vue)
Route::get('/', [PageController::class, 'home'])->name('home');

// Страницы сайта (отдают тот же index.blade.php - Vue Router обработает)
Route::get('/for-clinics', [PageController::class, 'home']);
Route::get('/for-patients', [PageController::class, 'home']);
Route::get('/security', [PageController::class, 'home']);
Route::get('/blog', [PageController::class, 'home']);
Route::get('/privacy-policy', [PageController::class, 'home']);
Route::get('/terms-of-use', [PageController::class, 'home']);

// API для формы запроса демо
Route::post('/api/demo-request', [DemoRequestController::class, 'store']);

// Все остальные маршруты для Vue Router
Route::get('/dashboard/{any?}', [PageController::class, 'home'])->where('any', '.*');