#!/usr/bin/env sh
set -eu

# Render provides the externally reachable URL via RENDER_EXTERNAL_URL (https).
# Use it as a safe default for URL generation and assets.
if [ -n "${RENDER_EXTERNAL_URL:-}" ]; then
  if [ -z "${APP_URL:-}" ] || [ "${APP_URL#http://}" != "${APP_URL}" ]; then
    export APP_URL="$RENDER_EXTERNAL_URL"
  fi
  if [ -z "${ASSET_URL:-}" ] || [ "${ASSET_URL#http://}" != "${ASSET_URL}" ]; then
    export ASSET_URL="$RENDER_EXTERNAL_URL"
  fi
fi

# Ensure writable dirs
mkdir -p storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache || true

# If APP_KEY is missing, fail fast with a clear message.
if [ -z "${APP_KEY:-}" ]; then
  echo "ERROR: APP_KEY is not set. Set APP_KEY (base64:...) in your service environment." >&2
  echo "Generate locally with: php artisan key:generate --show" >&2
  exit 1
fi

# Clear caches on boot (safe for demo deployments)
php artisan optimize:clear || true

# Run package discovery (composer scripts are disabled during image build)
php artisan package:discover --ansi || true

# If using SQLite, ensure the database file exists.
if [ "${DB_CONNECTION:-}" = "sqlite" ]; then
  DB_PATH="${DB_DATABASE:-/var/www/html/database/database.sqlite}"
  mkdir -p "$(dirname "$DB_PATH")" || true
  touch "$DB_PATH" || true
  chown -R www-data:www-data "$(dirname "$DB_PATH")" || true
fi

exec apache2-foreground
