<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Validator;

class DemoRequestController extends Controller
{
    public function store(Request $request)
    {
        $executed = RateLimiter::attempt(
            'demo-request:' . $request->ip(),
            $perMinute = 5,
            function () {
                // Only checking rate limit.
            }
        );

        if (! $executed) {
            return response()->json([
                'message' => 'Слишком много запросов. Попробуйте через минуту.',
            ], 429);
        }

        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string|min:2|max:100',
                'email' => 'required|email|max:100',
                'phone' => 'required|string|max:30',
                'company' => 'nullable|string|max:200',
                'agree' => 'accepted',
                'source' => 'nullable|string|max:50',
            ],
            [
                'name.required' => 'Пожалуйста, введите ваше имя',
                'name.min' => 'Имя должно содержать минимум 2 символа',
                'email.required' => 'Пожалуйста, введите email',
                'email.email' => 'Введите корректный email адрес',
                'phone.required' => 'Пожалуйста, введите телефон',
                'agree.accepted' => 'Необходимо согласиться с условиями',
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Пожалуйста, исправьте ошибки в форме',
                'errors' => $validator->errors(),
            ], 422);
        }

        $ip = (string) ($request->ip() ?? '');
        $ipHash = $ip !== ''
            ? hash('sha256', $ip . '|' . (string) config('app.key'))
            : null;

        Log::channel('demo_requests')->info('New demo request', [
            'name' => $request->string('name')->toString(),
            'email' => $request->string('email')->toString(),
            'phone' => $request->string('phone')->toString(),
            'company' => $request->string('company')->toString(),
            'source' => $request->string('source')->toString(),
            'ip_hash' => $ipHash,
            'timestamp' => now()->toDateTimeString(),
        ]);

        $demoId = 'demo_' . time() . '_' . random_int(1000, 9999);
        $demoPassword = 'demo_' . substr(md5(uniqid('', true)), 0, 8);

        return response()->json([
            'success' => true,
            'message' => 'Демо-доступ успешно предоставлен',
            'demo_credentials' => [
                'login_url' => url('/dashboard'),
                'login' => $demoId,
                'password' => $demoPassword,
                'expires_at' => now()->addDays(7)->toDateTimeString(),
            ],
        ], 201);
    }
}
