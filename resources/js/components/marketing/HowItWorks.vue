<template>
    <section class="cc-section cc-section--tight" id="how-it-works">
        <div class="container">
            <div class="row align-items-center g-4">
                <div class="col-lg-6">
                    <span class="cc-kicker"><i class="bi bi-diagram-3"></i> Архитектура MVP</span>
                    <h2 class="cc-title mt-3">"Демо-режим как легальный прототип"</h2>
                    <p class="cc-lead">
                        Маркетинг → форма запроса → API → демо-панель. Контакты — в CRM/коммуникации.
                        Никаких реальных медицинских данных на этапе валидации спроса.
                    </p>

                    <div class="row g-3 mt-2">
                        <div class="col-md-6">
                            <div class="cc-glass rounded-4 p-3 h-100">
                                <div class="fw-semibold"><i class="bi bi-megaphone me-2"></i>Маркетинг</div>
                                <div class="text-muted small">Лендинг с ценностью и дисклеймерами</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="cc-glass rounded-4 p-3 h-100">
                                <div class="fw-semibold"><i class="bi bi-envelope-check me-2"></i>Форма запроса</div>
                                <div class="text-muted small">Имя, email, телефон, организация</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="cc-glass rounded-4 p-3 h-100">
                                <div class="fw-semibold"><i class="bi bi-braces me-2"></i>API (Laravel)</div>
                                <div class="text-muted small">Валидация, rate-limit, логирование лидов</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="cc-glass rounded-4 p-3 h-100">
                                <div class="fw-semibold"><i class="bi bi-speedometer2 me-2"></i>Демо-панель</div>
                                <div class="text-muted small">Синтетические пациенты и графики</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="cc-card cc-hover rounded-4 p-4">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <div class="fw-semibold"><i class="bi bi-check2-circle me-2"></i>Что получает клиника</div>
                            <span class="badge text-bg-primary">MVP</span>
                        </div>

                        <ul class="mb-0 text-muted">
                            <li class="mb-2">Быстрое понимание UX будущей платформы</li>
                            <li class="mb-2">Обсуждение интеграций и пилота на следующем этапе</li>
                            <li class="mb-2">Оценка сценариев: после выписки, хронические пациенты</li>
                            <li>Основа для LOI и инвестиционного питча</li>
                        </ul>

                        <div class="mt-4 d-flex gap-2 flex-wrap">
                            <a href="#request-demo" class="btn btn-primary">
                                <i class="bi bi-key me-2"></i>Получить демо
                            </a>
                            <router-link to="/for-clinics" class="btn btn-outline-secondary">
                                <i class="bi bi-hospital me-2"></i>Подробнее
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
