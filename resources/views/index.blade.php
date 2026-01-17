<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'CardioControl Demo') }}</title>

    @vite(['resources/sass/app.scss', 'resources/js/app.js'])

    <script>
        window.__APP_CONFIG__ = {{ \Illuminate\Support\Js::from([
            'appName' => config('app.name', 'CardioControl Demo'),
            'contactEmail' => config('app.contact_email'),
            'legalNotice' => config('app.legal_notice'),
        ]) }};
    </script>
</head>
<body>
    <div id="app"></div>
</body>
</html>
