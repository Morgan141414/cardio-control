# CardioDemo (Marketing SPA + Demo Dashboard)

Demo web app (Laravel + Vue) for showcasing a cardiology-oriented product concept: marketing pages + a synthetic demo dashboard.

**Important:** this repository is a **demo prototype**. It must be treated as **NOT a medical device** and **NOT a medical service**. The dashboard uses **synthetic data** only.

## What’s inside

- Vue 3 SPA (marketing pages + dashboard) mounted via a Laravel Blade SPA host
- Demo request form → Laravel API endpoint → privacy-minimized logging
- “Tilda-like” design system (Bootstrap 5 + custom theme)
- Legal pages (Privacy Policy / Terms of Use) + global disclaimer banner

## Tech stack

- Backend: Laravel (PHP)
- Frontend: Vue 3, Vue Router, Vite
- UI: Bootstrap 5, Bootstrap Icons
- Charts: ApexCharts

## Local setup (Windows)

From the project root (this folder):

1) Install PHP dependencies

```bash
composer install
```

2) Install JS dependencies

```bash
npm install
```

3) Environment

```bash
copy .env.example .env
php artisan key:generate
```

4) Run dev servers

```bash
php artisan serve --port=8000
npm run dev
```

Open: `http://127.0.0.1:8000`

### Recommended env defaults

- For a “no-DB-required” demo: `SESSION_DRIVER=cookie`, `CACHE_STORE=file`, `QUEUE_CONNECTION=sync`.
- `CONTACT_EMAIL` and `LEGAL_NOTICE` control the footer/disclaimer text.

## GitHub public repo safety

- `.env` is ignored by git (do not commit it).
- `vendor/`, `node_modules/`, `public/build/` are ignored.
- A local accidental nested copy folder `cardio-demo-backend/` is ignored (it should not appear in the public repo).

## Production / public live link (Docker)

This repo includes a Dockerfile so you can deploy on container hosts (Render/Railway/Fly/etc.).

### Render (recommended)

- This repo includes a blueprint: `render.yaml`.
- In Render: **New** → **Blueprint** → select this repository.
- Set `APP_KEY` and `APP_URL` in the service environment.
- Health check endpoint: `/health`.

### Required env vars

- `APP_KEY` (generate locally: `php artisan key:generate --show`)
- `APP_ENV=production`
- `APP_DEBUG=false`
- `APP_URL=https://YOUR-DOMAIN`

Optional (recommended for demo pages):

- `SESSION_DRIVER=cookie`
- `CACHE_STORE=file`
- `QUEUE_CONNECTION=sync`
- `CONTACT_EMAIL=...`
- `LEGAL_NOTICE="..."`

### Build & run locally with Docker

```bash
docker build -t cardiodemo .
docker run -p 8080:80 -e APP_KEY=base64:YOUR_KEY -e APP_ENV=production -e APP_DEBUG=false -e APP_URL=http://localhost:8080 cardiodemo
```

Open: `http://127.0.0.1:8080`

## Notes

- No real medical data is stored or processed in the demo dashboard.
- Demo requests are logged with privacy minimization (no raw IP storage; hashed IP).
