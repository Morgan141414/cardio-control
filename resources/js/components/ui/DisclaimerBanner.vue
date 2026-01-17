<template>
    <div class="cc-disclaimer" role="note">
        <div class="container py-2 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2">
            <div class="small">
                <i class="bi bi-shield-check me-2"></i>
                <strong class="me-2">Демо-режим.</strong>
                {{ legalNotice }}
                <span class="ms-1">Все данные — <strong>синтетические</strong>.</span>
            </div>
            <div class="small">
                <router-link to="/terms-of-use" class="me-3">Соглашение</router-link>
                <router-link to="/privacy-policy">Конфиденциальность</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { getAppConfig } from '../../utils/appConfig'

const legalNotice = computed(() => getAppConfig().legalNotice)
</script>
