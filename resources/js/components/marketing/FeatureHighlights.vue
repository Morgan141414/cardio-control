<template>
    <section class="cc-section" id="features">
        <div class="container">
            <div class="row align-items-end mb-4">
                <div class="col-lg-7">
                    <span class="cc-kicker"><i class="bi bi-stars"></i> Ценность без медицинских обещаний</span>
                    <h2 class="cc-title mt-3 mb-2">Показываем, как может выглядеть мониторинг после выписки</h2>
                    <p class="cc-lead mb-0">
                        Прототип интерфейса для демонстрации концепции: приоритизация, алерты, тренды показателей,
                        и удобная коммуникация по процессу.
                    </p>
                </div>
                <div class="col-lg-5 text-lg-end mt-3 mt-lg-0">
                    <router-link to="/dashboard" class="btn btn-outline-secondary me-2">
                        <i class="bi bi-eye me-2"></i>Посмотреть демо
                    </router-link>
                    <a href="#request-demo" class="btn btn-primary">
                        <i class="bi bi-envelope-paper me-2"></i>Запросить доступ
                    </a>
                </div>
            </div>

            <div class="row g-4">
                <div v-for="f in features" :key="f.title" class="col-md-6 col-lg-4">
                    <div class="cc-card cc-hover h-100 rounded-4 p-4">
                        <div class="cc-badge-soft mb-3">
                            <i :class="f.icon"></i>
                            {{ f.kicker }}
                        </div>
                        <h5 class="mb-2">{{ f.title }}</h5>
                        <div class="text-muted">{{ f.text }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const features = [
    {
        kicker: 'Приоритизация',
        icon: 'bi bi-traffic-cone',
        title: 'Цветовая маркировка пациентов',
        text: 'Зелёный/жёлтый/красный статус для быстрого внимания команды.',
    },
    {
        kicker: 'Динамика',
        icon: 'bi bi-graph-up-arrow',
        title: 'Графики давления и пульса',
        text: 'Тренды за период и быстрое понимание, что меняется.',
    },
    {
        kicker: 'Алерты',
        icon: 'bi bi-bell',
        title: 'События и уведомления (MVP)',
        text: 'Подсветка отклонений и фокус на приоритетных случаях.',
    },
    {
        kicker: 'Демо-режим',
        icon: 'bi bi-shield-check',
        title: 'Только синтетические данные',
        text: 'На этапе валидации спроса — без реальных медданных и интеграций.',
    },
    {
        kicker: 'Workflow',
        icon: 'bi bi-kanban',
        title: 'Единая панель наблюдения',
        text: 'Список пациентов, последние измерения, статус и обновления — в одном месте.',
    },
    {
        kicker: 'Privacy',
        icon: 'bi bi-lock',
        title: 'Privacy by Design',
        text: 'Сбор лидов = только контактные данные, прозрачные документы и дисклеймеры.',
    },
]
</script>
