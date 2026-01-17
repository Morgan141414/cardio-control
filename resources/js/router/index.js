import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../components/Dashboard.vue'
import MarketingHome from '../components/marketing/MarketingHome.vue'
import ForClinics from '../components/marketing/ForClinics.vue'
import ForPatients from '../components/marketing/ForPatients.vue'
import Security from '../components/marketing/Security.vue'
import Blog from '../components/marketing/Blog.vue'
import PrivacyPolicy from '../components/marketing/PrivacyPolicy.vue'
import TermsOfUse from '../components/marketing/TermsOfUse.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: MarketingHome,
        meta: { title: 'CardioControl – Платформа для дистанционного мониторинга' },
    },
    {
        path: '/for-clinics',
        name: 'for-clinics',
        component: ForClinics,
        meta: { title: 'Для клиник – CardioControl' },
    },
    {
        path: '/for-patients',
        name: 'for-patients',
        component: ForPatients,
        meta: { title: 'Для пациентов – CardioControl' },
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: { title: 'Демо-панель CardioControl' },
    },
    {
        path: '/security',
        name: 'security',
        component: Security,
        meta: { title: 'Безопасность – CardioControl' },
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog,
        meta: { title: 'Блог – CardioControl' },
    },
    {
        path: '/privacy-policy',
        name: 'privacy-policy',
        component: PrivacyPolicy,
        meta: { title: 'Политика конфиденциальности – CardioControl' },
    },
    {
        path: '/terms-of-use',
        name: 'terms-of-use',
        component: TermsOfUse,
        meta: { title: 'Пользовательское соглашение – CardioControl' },
    },
    {
        path: '/demo',
        redirect: '/dashboard',
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound,
        meta: { title: '404 – CardioControl' },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return { el: to.hash, behavior: 'smooth' }
        }
        return { top: 0 }
    },
})

router.beforeEach((to, from, next) => {
    document.title = to.meta?.title || 'CardioControl Demo'
    next()
})

export default router
