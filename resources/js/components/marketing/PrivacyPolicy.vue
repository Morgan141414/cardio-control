<template>
    <div class="py-5">
        <div class="container">
            <h1 class="mb-3"><i class="bi bi-file-earmark-lock me-2 text-primary"></i>Политика конфиденциальности</h1>
            <p class="text-muted">
                Этот сайт — демонстрационный MVP для валидации спроса. Мы <strong>не обрабатываем медицинские данные</strong>
                и используем только <strong>синтетические</strong> данные в демо-панели.
            </p>

            <div class="row g-4 mt-1">
                <div class="col-lg-8">
                    <h5>1) Какие данные мы собираем</h5>
                    <ul class="text-muted">
                        <li>Имя</li>
                        <li>Email</li>
                        <li>Телефон</li>
                        <li>Организация (опционально)</li>
                    </ul>

                    <h5 class="mt-4">2) Зачем мы их собираем</h5>
                    <p class="text-muted mb-0">
                        Только для обратной связи по запросу демо и обсуждения потенциального пилота.
                        Мы не используем контактные данные для медицинских рекомендаций.
                    </p>

                    <h5 class="mt-4">3) Что мы не собираем</h5>
                    <p class="text-muted mb-0">
                        Мы не собираем и не обрабатываем сведения о здоровье, диагнозах, назначениях или результатах измерений реальных пациентов.
                    </p>

                    <h5 class="mt-4">4) Техническая обработка</h5>
                    <p class="text-muted mb-0">
                        Для защиты от злоупотреблений применяется ограничение частоты запросов. Мы минимизируем технические данные и не храним
                        необязательные сведения (например, User-Agent).
                    </p>

                    <h5 class="mt-4">5) Срок хранения</h5>
                    <p class="text-muted mb-0">
                        Контактные данные хранятся ровно столько, сколько необходимо для обработки запроса и коммуникации по демо.
                    </p>

                    <h5 class="mt-4">6) Контакты</h5>
                    <p class="text-muted mb-0">
                        По вопросам обработки персональных данных и удаления заявки напишите на контактный email, указанный в ваших коммуникациях.
                    </p>
                </div>

                <div class="col-lg-4">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body p-4">
                            <h6 class="mb-2"><i class="bi bi-shield-check me-2"></i>Ключевой принцип</h6>
                            <div class="text-muted small">
                                Privacy by Design: демо-режим, минимум собираемых данных,
                                отсутствие медицинских данных и интеграций на этапе MVP.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <router-link to="/" class="btn btn-outline-secondary mt-3">
                <i class="bi bi-arrow-left me-2"></i>На главную
            </router-link>
        </div>
    </div>
</template>
