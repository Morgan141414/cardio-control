<template>
    <div class="py-5">
        <div class="container">
            <div class="row align-items-center mb-5">
                <div class="col-lg-7">
                    <h1 class="mb-3">
                        <i class="bi bi-person-heart me-2 text-info"></i>
                        Для пациентов и родственников
                    </h1>
                    <p class="lead text-muted">
                        Простое внесение показателей, понятные графики и спокойствие:
                        врач видит динамику и быстрее реагирует при ухудшении.
                    </p>
                    <div class="d-flex flex-wrap gap-2 mt-4">
                        <router-link to="/" class="btn btn-outline-secondary">
                            <i class="bi bi-arrow-left me-2"></i>На главную
                        </router-link>
                        <router-link to="/dashboard" class="btn btn-info text-white">
                            <i class="bi bi-eye me-2"></i>Посмотреть демо
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-5 mt-4 mt-lg-0">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body p-4">
                            <h5 class="mb-3">Что получает пациент</h5>
                            <ul class="list-unstyled mb-0">
                                <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Дневник давления и пульса</li>
                                <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Напоминания (MVP)</li>
                                <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Простые графики прогресса</li>
                                <li><i class="bi bi-check-circle text-success me-2"></i>Безопасная передача данных</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body p-4">
                            <h5 class="mb-3"><i class="bi bi-graph-up me-2"></i>Наглядная динамика</h5>
                            <p class="text-muted mb-0">
                                Давление и пульс отображаются в виде трендов — проще понять,
                                что меняется и когда стоит обратиться к врачу.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body p-4">
                            <h5 class="mb-3"><i class="bi bi-shield-check me-2"></i>Конфиденциальность</h5>
                            <p class="text-muted mb-0">
                                Данные защищены, а доступ управляется клиникой.
                                В демо используются синтетические данные.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-5 p-4 bg-light rounded-3">
                <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                    <div>
                        <h4 class="mb-1">Клиника хочет подключить мониторинг?</h4>
                        <div class="text-muted">Передайте ссылку ответственному врачу или администратору.</div>
                    </div>
                    <router-link to="/#request-demo" class="btn btn-primary btn-lg">
                        <i class="bi bi-envelope-paper me-2"></i>Запросить демо
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
