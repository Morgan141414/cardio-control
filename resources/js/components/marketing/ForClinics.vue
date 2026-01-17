<template>
    <div class="py-5">
        <div class="container">
            <div class="row align-items-center mb-5">
                <div class="col-lg-7">
                    <h1 class="mb-3">
                        <i class="bi bi-hospital me-2 text-primary"></i>
                        Для клиник и отделений
                    </h1>
                    <p class="lead text-muted">
                        CardioControl помогает организовать дистанционное наблюдение после выписки,
                        быстро выявлять ухудшения и снижать нагрузку на персонал.
                    </p>
                    <div class="d-flex flex-wrap gap-2 mt-4">
                        <router-link to="/" class="btn btn-outline-secondary">
                            <i class="bi bi-arrow-left me-2"></i>На главную
                        </router-link>
                        <router-link to="/dashboard" class="btn btn-primary">
                            <i class="bi bi-speedometer2 me-2"></i>Посмотреть демо
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-5 mt-4 mt-lg-0">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body p-4">
                            <h5 class="mb-3">Ключевые возможности</h5>
                            <ul class="list-unstyled mb-0">
                                <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Панель пациентов с приоритизацией</li>
                                <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Триггеры и цветовая маркировка</li>
                                <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Графики давления и пульса</li>
                                <li><i class="bi bi-check-circle text-success me-2"></i>Экспорт и отчеты (MVP)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body p-4">
                            <div class="mb-3">
                                <span class="badge bg-primary">1</span>
                            </div>
                            <h5>Подключение пациента</h5>
                            <p class="text-muted mb-0">Создайте карточку и назначьте протокол мониторинга.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body p-4">
                            <div class="mb-3">
                                <span class="badge bg-primary">2</span>
                            </div>
                            <h5>Сбор измерений</h5>
                            <p class="text-muted mb-0">Пациент вводит показатели, система сохраняет историю.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body p-4">
                            <div class="mb-3">
                                <span class="badge bg-primary">3</span>
                            </div>
                            <h5>Реакция на риски</h5>
                            <p class="text-muted mb-0">Отклонения подсвечиваются, можно быстро связаться с пациентом.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-5 p-4 bg-light rounded-3">
                <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                    <div>
                        <h4 class="mb-1">Хотите демо-доступ?</h4>
                        <div class="text-muted">Оставьте заявку на главной странице — доступ выдаётся мгновенно.</div>
                    </div>
                    <router-link to="/#request-demo" class="btn btn-primary btn-lg">
                        <i class="bi bi-envelope-paper me-2"></i>Запросить демо
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
