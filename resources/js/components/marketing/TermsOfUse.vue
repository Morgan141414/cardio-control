<template>
    <div class="py-5">
        <div class="container">
            <h1 class="mb-3"><i class="bi bi-file-earmark-text me-2 text-primary"></i>Пользовательское соглашение</h1>
            <p class="text-muted">
                Данный ресурс является демонстрационным MVP, предназначенным для презентации концепции.
                Используя сайт, вы подтверждаете, что понимаете ограничения демо-режима.
            </p>

            <div class="row g-4 mt-1">
                <div class="col-lg-8">
                    <h5>1) Важные дисклеймеры</h5>
                    <ul class="text-muted">
                        <li><strong>Не является медицинским изделием</strong>.</li>
                        <li><strong>Не оказывает медицинские услуги</strong> и не заменяет консультацию врача.</li>
                        <li>В демо-панели используются <strong>только синтетические данные</strong>.</li>
                        <li>Мы <strong>не интегрируемся</strong> с реальными МИС на этапе MVP.</li>
                    </ul>

                    <h5 class="mt-4">2) Демо-доступ</h5>
                    <p class="text-muted mb-0">
                        Демо-доступ предоставляется для ознакомления с интерфейсом и логикой прототипа.
                        Функциональность может изменяться без уведомления.
                    </p>

                    <h5 class="mt-4">3) Ограничение ответственности</h5>
                    <p class="text-muted mb-0">
                        Любая информация на сайте носит ознакомительный характер. Запрещено использовать демо
                        для принятия медицинских решений.
                    </p>

                    <h5 class="mt-4">4) Персональные данные</h5>
                    <p class="text-muted mb-0">
                        При отправке заявки вы предоставляете только контактные данные организации/представителя.
                        Условия обработки описаны в «Политике конфиденциальности».
                    </p>
                </div>

                <div class="col-lg-4">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body p-4">
                            <h6 class="mb-2"><i class="bi bi-info-circle me-2"></i>Цель MVP</h6>
                            <div class="text-muted small">
                                Валидация спроса и сбор обратной связи от клиник в РК.
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
