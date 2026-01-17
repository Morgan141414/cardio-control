# syntax=docker/dockerfile:1

# 1) Composer deps
FROM composer:2 AS composer_deps
WORKDIR /app
COPY composer.json composer.lock ./
RUN composer install \
  --no-dev \
  --prefer-dist \
  --no-interaction \
  --no-progress \
  --no-scripts \
  --optimize-autoloader

# 2) Frontend build
FROM node:20-alpine AS frontend_build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY vite.config.js ./
COPY resources ./resources
RUN npm run build

# 3) Runtime (Apache)
FROM php:8.2-apache

# System deps + PHP extensions
RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    git \
    unzip \
    libcurl4-openssl-dev \
    libonig-dev \
    libsqlite3-dev \
    libxml2-dev \
    libzip-dev \
  && docker-php-ext-install \
    bcmath \
    curl \
    mbstring \
    opcache \
    pdo \
    pdo_sqlite \
    xml \
    zip \
  && a2enmod rewrite \
  && rm -rf /var/lib/apt/lists/*

# Point Apache to /public
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf \
  && sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

WORKDIR /var/www/html

# App source
COPY . .

# Vendor + built assets
COPY --from=composer_deps /app/vendor ./vendor
COPY --from=frontend_build /app/public/build ./public/build

# Permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Entrypoint
COPY docker/entrypoint.sh /usr/local/bin/app-entrypoint
RUN chmod +x /usr/local/bin/app-entrypoint

EXPOSE 80
ENTRYPOINT ["/usr/local/bin/app-entrypoint"]
