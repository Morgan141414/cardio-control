<template>
    <form @submit.prevent="submit" class="demo-request-form">
        <div class="row g-3">
            <div class="col-md-6">
                <label class="form-label" for="name">Имя и фамилия *</label>
                <input
                    id="name"
                    v-model.trim="form.name"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.name }"
                    placeholder="Иван Иванов"
                />
                <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
            </div>

            <div class="col-md-6">
                <label class="form-label" for="email">Email *</label>
                <input
                    id="email"
                    v-model.trim="form.email"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': errors.email }"
                    placeholder="ivan@example.com"
                />
                <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
            </div>

            <div class="col-md-6">
                <label class="form-label" for="phone">Телефон *</label>
                <input
                    id="phone"
                    v-model.trim="form.phone"
                    type="tel"
                    class="form-control"
                    :class="{ 'is-invalid': errors.phone }"
                    placeholder="+7 777 123 4567"
                />
                <div v-if="errors.phone" class="invalid-feedback">{{ errors.phone }}</div>
            </div>

            <div class="col-md-6">
                <label class="form-label" for="company">Клиника / организация</label>
                <input
                    id="company"
                    v-model.trim="form.company"
                    type="text"
                    class="form-control"
                    placeholder="ГКБ №1"
                />
            </div>

            <div class="col-12">
                <div class="form-check">
                    <input
                        id="agree"
                        v-model="form.agree"
                        type="checkbox"
                        class="form-check-input"
                        :class="{ 'is-invalid': errors.agree }"
                    />
                    <label class="form-check-label small text-muted" for="agree">
                        Я согласен с
                        <router-link to="/terms-of-use">Пользовательским соглашением</router-link>
                        и
                        <router-link to="/privacy-policy">Политикой конфиденциальности</router-link>
                    </label>
                    <div v-if="errors.agree" class="invalid-feedback d-block">{{ errors.agree }}</div>
                </div>
            </div>

            <div class="col-12">
                <div class="text-muted small">
                    Мы собираем только контактные данные (без сведений о пациентах).
                </div>
            </div>

            <div class="col-12">
                <button class="btn btn-primary w-100 py-3" type="submit" :disabled="loading">
                    <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                    <i v-else class="bi bi-send me-2"></i>
                    {{ loading ? 'Отправка...' : 'Получить демо-доступ' }}
                </button>
            </div>
        </div>

        <div v-if="success" class="alert alert-success mt-4">
            <h6 class="alert-heading">✅ Доступ предоставлен!</h6>
            <div class="bg-dark text-white p-3 rounded">
                <div><strong>Логин:</strong> <code class="ms-2">{{ success.demo_credentials.login }}</code></div>
                <div><strong>Пароль:</strong> <code class="ms-2">{{ success.demo_credentials.password }}</code></div>
                <div class="mt-3">
                    <a :href="success.demo_credentials.login_url" class="btn btn-sm btn-light">
                        <i class="bi bi-box-arrow-in-right me-2"></i>
                        Перейти в демо-панель
                    </a>
                </div>
            </div>
        </div>

        <div v-else-if="errorMessage" class="alert alert-danger mt-3">
            <i class="bi bi-exclamation-triangle me-2"></i>
            {{ errorMessage }}
        </div>
    </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'

const emit = defineEmits(['submitted'])

const form = reactive({
    name: '',
    email: '',
    phone: '',
    company: '',
    agree: false,
})

const errors = reactive({ name: '', email: '', phone: '', agree: '' })
const loading = ref(false)
const errorMessage = ref('')
const success = ref(null)

const validate = () => {
    errors.name = form.name ? '' : 'Введите имя и фамилию'
    errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Введите корректный email'
    errors.phone = form.phone ? '' : 'Введите телефон'
    errors.agree = form.agree ? '' : 'Необходимо согласиться с условиями'

    return !errors.name && !errors.email && !errors.phone && !errors.agree
}

const submit = async () => {
    success.value = null
    errorMessage.value = ''

    if (!validate()) return

    loading.value = true
    try {
        const { data } = await axios.post('/api/demo-request', {
            name: form.name,
            email: form.email,
            phone: form.phone,
            company: form.company,
            source: 'marketing',
        })

        success.value = data
        emit('submitted', data)
    } catch (err) {
        if (err?.response?.status === 422 && err.response.data?.errors) {
            const serverErrors = err.response.data.errors
            errors.name = serverErrors.name?.[0] || errors.name
            errors.email = serverErrors.email?.[0] || errors.email
            errors.phone = serverErrors.phone?.[0] || errors.phone
        } else if (err?.response?.status === 429) {
            errorMessage.value = 'Слишком много запросов. Попробуйте позже.'
        } else {
            errorMessage.value = 'Ошибка при отправке формы. Попробуйте еще раз.'
        }
    } finally {
        loading.value = false
    }
}
</script>
