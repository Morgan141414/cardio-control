<template>
    <div class="py-5">
        <div class="container">
            <h1 class="mb-3"><i class="bi bi-journal-text me-2 text-primary"></i>Блог</h1>
            <p class="lead text-muted">Заглушка страницы блога для демо-маркетинга.</p>

            <div class="row g-4 mt-1">
                <div v-for="post in posts" :key="post.title" class="col-md-6">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body p-4">
                            <div class="text-muted small mb-2">{{ post.date }}</div>
                            <h5 class="mb-2">{{ post.title }}</h5>
                            <p class="text-muted mb-0">{{ post.excerpt }}</p>
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

<script setup>
const posts = [
    {
        date: '2026-01-01',
        title: 'Дистанционный мониторинг после выписки: зачем и как',
        excerpt: 'Какие показатели важно отслеживать и как организовать процесс в клинике.',
    },
    {
        date: '2026-01-10',
        title: 'Цветовая маркировка пациентов: практический подход',
        excerpt: 'Как быстро выделять приоритетных пациентов и не терять время на рутину.',
    },
]
</script>
