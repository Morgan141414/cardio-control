<template>
    <div class="py-5">
        <div class="container">
            <h1 class="mb-3"><i class="bi bi-shield-lock me-2 text-success"></i>Безопасность</h1>
            <p class="lead text-muted">Коротко о подходе к защите данных в CardioControl (демо).</p>

            <div class="row g-4 mt-1">
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body p-4">
                            <h5><i class="bi bi-lock me-2"></i>CSRF защита</h5>
                            <p class="text-muted mb-0">POST запросы защищены CSRF-токеном Laravel.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body p-4">
                            <h5><i class="bi bi-speedometer2 me-2"></i>Rate limiting</h5>
                            <p class="text-muted mb-0">Форма демо-запроса ограничена по частоте.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body p-4">
                            <h5><i class="bi bi-incognito me-2"></i>Синтетические данные</h5>
                            <p class="text-muted mb-0">В демо-панели нет реальных персональных данных.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-4">
                <router-link to="/" class="btn btn-outline-secondary">
                    <i class="bi bi-arrow-left me-2"></i>На главную
                </router-link>
            </div>
        </div>
    </div>
</template>
