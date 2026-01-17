<template>
    <div class="marketing-home">
        <HeroSection @scroll-to-form="scrollToForm" />

        <LogoCloud />

        <FeatureHighlights />

        <section class="cc-section" id="for-whom">
            <div class="container">
                <div class="text-center mb-4">
                    <span class="cc-kicker"><i class="bi bi-people"></i> Для кого</span>
                    <h2 class="cc-title mt-3 mb-2">Для клиник, врачей и пациентов</h2>
                    <p class="cc-lead mb-0">Сценарии после выписки и контроля хронических пациентов (демо).</p>
                </div>

                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="cc-card cc-hover h-100 rounded-4 p-0">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center mb-3">
                                    <div class="icon-wrapper bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                                        <i class="bi bi-hospital fs-2 text-primary"></i>
                                    </div>
                                    <h4 class="mb-0">Для клиник и отделений</h4>
                                </div>
                                <ul class="list-unstyled text-muted">
                                    <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Мониторинг после выписки</li>
                                    <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Снижение повторных госпитализаций</li>
                                    <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Автоматизация отчетности</li>
                                    <li><i class="bi bi-check-circle text-success me-2"></i>Цветовая маркировка пациентов</li>
                                </ul>
                                <div class="mt-4">
                                    <router-link to="/for-clinics" class="btn btn-outline-primary">
                                        <i class="bi bi-arrow-right me-2"></i>Подробнее для клиник
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-4">
                        <div class="cc-card cc-hover h-100 rounded-4 p-0">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center mb-3">
                                    <div class="icon-wrapper bg-info bg-opacity-10 p-3 rounded-circle me-3">
                                        <i class="bi bi-person-heart fs-2 text-info"></i>
                                    </div>
                                    <h4 class="mb-0">Для пациентов и родственников</h4>
                                </div>
                                <ul class="list-unstyled text-muted">
                                    <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Удобный дневник самочувствия</li>
                                    <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Напоминания о измерениях</li>
                                    <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Связь с лечащим врачом</li>
                                    <li><i class="bi bi-check-circle text-success me-2"></i>Графики показателей</li>
                                </ul>
                                <div class="mt-4">
                                    <router-link to="/for-patients" class="btn btn-outline-info">
                                        <i class="bi bi-arrow-right me-2"></i>Подробнее для пациентов
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <HowItWorks />

        <section class="cc-section" id="demo-preview">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5 mb-4 mb-lg-0">
                        <h2 class="mb-4">Демо-панель врача</h2>
                        <p class="text-muted mb-4">
                            Быстрый просмотр демо-интерфейса с синтетическими данными.
                            Для полного доступа — запросите демо-доступ.
                        </p>
                        <div class="d-flex gap-3">
                            <button @click="scrollToForm" class="btn btn-primary px-4">
                                <i class="bi bi-key me-2"></i>Получить доступ
                            </button>
                            <router-link to="/dashboard" class="btn btn-outline-secondary px-4">
                                <i class="bi bi-eye me-2"></i>Быстрый просмотр
                            </router-link>
                        </div>
                    </div>

                    <div class="col-lg-7">
                        <div class="cc-card cc-hover rounded-4 overflow-hidden">
                            <div class="card-header bg-dark text-white py-3">
                                <div class="d-flex align-items-center">
                                    <span class="badge bg-warning me-2">ДЕМО</span>
                                    <span>CardioControl Dashboard</span>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-sm mb-0">
                                        <thead>
                                            <tr class="text-muted small">
                                                <th>Пациент</th>
                                                <th>Статус</th>
                                                <th>Давление</th>
                                                <th>Последнее</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="i in 3" :key="i" class="small">
                                                <td><i class="bi bi-person-circle me-2"></i>{{ getDemoPatient(i).name }}</td>
                                                <td>
                                                    <span :class="`badge bg-${getDemoPatient(i).statusColor}`">{{ getDemoPatient(i).status }}</span>
                                                </td>
                                                <td>{{ getDemoPatient(i).pressure }}</td>
                                                <td class="text-muted">{{ getDemoPatient(i).time }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FAQ />

        <FinalCTA />

        <section ref="demoFormSection" class="cc-section" id="request-demo">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="cc-card cc-hover rounded-4 overflow-hidden">
                            <div class="card-body p-4 p-lg-5">
                                <div class="d-flex align-items-start justify-content-between gap-3 mb-3">
                                    <div>
                                        <span class="cc-kicker"><i class="bi bi-envelope-paper"></i> Запрос демо</span>
                                        <h3 class="cc-title mt-3 mb-2">Получите демо‑доступ за 1 минуту</h3>
                                        <p class="text-muted mb-0">
                                            Мы собираем только контактные данные. Медицинские данные не запрашиваются.
                                        </p>
                                    </div>
                                    <div class="d-none d-lg-block">
                                        <span class="badge text-bg-success"><i class="bi bi-shield-check me-1"></i>Privacy by Design</span>
                                    </div>
                                </div>

                                <DemoRequestForm @submitted="handleDemoSubmit" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from './HeroSection.vue'
import DemoRequestForm from '../ui/DemoRequestForm.vue'
import LogoCloud from './LogoCloud.vue'
import FeatureHighlights from './FeatureHighlights.vue'
import HowItWorks from './HowItWorks.vue'
import FAQ from './FAQ.vue'
import FinalCTA from './FinalCTA.vue'

const demoFormSection = ref(null)

const scrollToForm = () => {
    demoFormSection.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const getDemoPatient = (index) => {
    const patients = [
        { name: 'Иванов А.С.', status: 'Норма', statusColor: 'success', pressure: '125/82', time: '2 часа назад' },
        { name: 'Петрова М.И.', status: 'Внимание', statusColor: 'warning', pressure: '148/95', time: '5 часов назад' },
        { name: 'Сидоров В.П.', status: 'Критично', statusColor: 'danger', pressure: '165/105', time: '1 час назад' },
    ]
    return patients[index - 1] || patients[0]
}

const handleDemoSubmit = (response) => {
    // Optional: you can redirect immediately; the form already shows credentials.
    // window.location.href = response.demo_credentials.login_url
    console.log('Demo access granted', response)
}
</script>

<style scoped>
.marketing-home {
    overflow-x: hidden;
}
</style>
