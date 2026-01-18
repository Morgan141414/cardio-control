<template>
    <div v-if="isLoading" class="vue-app-loading">
        <div class="text-center">
            <div class="spinner-border text-primary" role="status"></div>
            <p class="mt-3">Загрузка CardioControl...</p>
        </div>
    </div>

    <div v-else>
        <DisclaimerBanner />

        <nav v-if="isMarketingPage" class="navbar navbar-expand-lg cc-navbar sticky-top">
            <div class="container">
                <router-link class="navbar-brand fw-bold text-primary" to="/">
                    <span class="me-2">❤️</span> CardioControl
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Главная</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/for-clinics" class="nav-link">Для клиник</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/for-patients" class="nav-link">Для пациентов</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/security" class="nav-link">Безопасность</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/blog" class="nav-link">Блог</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/dashboard" class="btn btn-primary ms-2">Демо-панель</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <router-view />

        <footer v-if="isMarketingPage" class="cc-footer py-5 mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h5>CardioControl</h5>
                        <p class="text-muted small">
                            Демо-версия платформы для дистанционного мониторинга.<br>
                            <strong>Не является медицинским изделием.</strong>
                        </p>
                    </div>
                    <div class="col-md-6 text-md-end">
                        <router-link to="/privacy-policy" class="text-muted small me-3">Политика конфиденциальности</router-link>
                        <router-link to="/terms-of-use" class="text-muted small">Пользовательское соглашение</router-link>
                        <div class="text-muted small mt-2">
                            Контакт: <a :href="`mailto:${contactEmail}`" class="text-muted">{{ contactEmail }}</a>
                        </div>
                        <div class="text-muted small mt-2">made by: Korgan Amanat</div>
                        <p class="text-muted small mt-2">© 2024. Все данные синтетические.</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import DisclaimerBanner from './components/ui/DisclaimerBanner.vue'
import { getAppConfig } from './utils/appConfig'

export default {
    name: 'App',
    components: { DisclaimerBanner },
    setup() {
        const isLoading = ref(true)
        const route = useRoute()
        const contactEmail = computed(() => getAppConfig().contactEmail)

        const isMarketingPage = computed(() => {
            return (
                route.name === 'home' ||
                route.name === 'for-clinics' ||
                route.name === 'for-patients' ||
                route.name === 'security' ||
                route.name === 'blog' ||
                route.name === 'privacy-policy' ||
                route.name === 'terms-of-use'
            )
        })

        onMounted(() => {
            setTimeout(() => {
                isLoading.value = false
            }, 500)
        })

        return { isLoading, isMarketingPage, contactEmail }
    },
}
</script>

<style scoped>
.navbar-brand {
    font-size: 1.5rem;
}
.vue-app-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f8f9fa;
}
</style>
