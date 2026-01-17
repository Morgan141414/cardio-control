<template>
    <section class="cc-section" id="faq">
        <div class="container cc-container-narrow">
            <div class="text-center mb-4">
                <span class="cc-kicker"><i class="bi bi-patch-question"></i> FAQ</span>
                <h2 class="cc-title mt-3">Частые вопросы от клиник</h2>
                <p class="cc-lead mb-0">Сразу снимаем ключевые риски: это не медизделие и не работа с медданными.</p>
            </div>

            <div class="accordion" id="faqAcc">
                <div v-for="(q, i) in items" :key="q.q" class="accordion-item cc-glass mb-3 rounded-4 overflow-hidden">
                    <h2 class="accordion-header">
                        <button
                            class="accordion-button" :class="{ collapsed: i !== 0 }"
                            type="button" data-bs-toggle="collapse"
                            :data-bs-target="`#faq-${i}`"
                        >
                            {{ q.q }}
                        </button>
                    </h2>
                    <div :id="`faq-${i}`" class="accordion-collapse collapse" :class="{ show: i === 0 }" data-bs-parent="#faqAcc">
                        <div class="accordion-body text-muted">
                            {{ q.a }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-4">
                <a href="#request-demo" class="btn btn-primary btn-lg">
                    <i class="bi bi-envelope-paper me-2"></i>Запросить демо
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
const items = [
    {
        q: 'Это медицинское изделие?',
        a: 'Нет. Это демонстрационный прототип (MVP) для валидации спроса. Не является медицинским изделием и не оказывает медицинских услуг.',
    },
    {
        q: 'Вы используете реальные медицинские данные?',
        a: 'Нет. В демо-панели используются только синтетические данные, сгенерированные алгоритмом.',
    },
    {
        q: 'Можно ли интегрировать с нашей МИС?',
        a: 'На этапе MVP — нет. Цель этапа: показать UX и собрать обратную связь. Интеграции обсуждаются на этапе пилота (этап 2).',
    },
    {
        q: 'Какие данные собираются через форму?',
        a: 'Только контактные данные: имя, email, телефон, организация. Без сведений о пациентах.',
    },
]
</script>
