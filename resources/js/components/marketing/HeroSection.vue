<template>
    <section class="cc-hero cc-gradient text-white">
        <div class="container position-relative" style="z-index: 1">
            <div class="row align-items-center g-5">
                <div class="col-lg-6">
                    <span class="cc-kicker text-white-50 border-0" style="background: rgba(255,255,255,0.12)">
                        <i class="bi bi-shield-check"></i>
                        Демо‑прототип • только синтетические данные
                    </span>
                    <h1 class="display-5 fw-bold mt-3 mb-3 cc-title">
                        Дистанционный мониторинг
                        <span class="d-block" style="opacity: 0.92">кардиологических пациентов</span>
                    </h1>
                    <p class="lead mb-4" style="opacity: 0.92">
                        Красивый маркетинговый лендинг + демо‑панель врача, чтобы клиника увидела концепцию,
                        а вы собрали лиды и обратную связь.
                    </p>
                    <div class="d-flex flex-wrap gap-2">
                        <button class="btn btn-light btn-lg" @click="$emit('scroll-to-form')">
                            <i class="bi bi-envelope-paper me-2"></i>
                            Запросить демо
                        </button>
                        <router-link class="btn btn-outline-light btn-lg" to="/dashboard">
                            <i class="bi bi-eye me-2"></i>
                            Смотреть демо
                        </router-link>
                    </div>
                    <div class="d-flex flex-wrap gap-2 mt-4">
                        <span class="badge bg-white text-dark"><i class="bi bi-people me-1"></i>Клиники РК</span>
                        <span class="badge bg-white text-dark"><i class="bi bi-lock me-1"></i>Privacy by Design</span>
                        <span class="badge bg-white text-dark"><i class="bi bi-lightning-charge me-1"></i>MVP за дни</span>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="cc-glass rounded-5 p-3 p-lg-4">
                        <div class="cc-card cc-hover rounded-4 overflow-hidden">
                            <div class="px-4 py-3" style="background: rgba(15,23,42,0.94); color: white">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="fw-semibold"><i class="bi bi-speedometer2 me-2"></i>Dashboard preview</div>
                                    <span class="badge bg-warning text-dark">DEMO</span>
                                </div>
                            </div>
                            <div class="p-4">
                                <div class="row g-3">
                                    <div class="col-6">
                                        <div class="cc-glass rounded-4 p-3">
                                            <div class="text-muted small">Пациентов</div>
                                            <div class="h4 mb-0">10</div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="cc-glass rounded-4 p-3">
                                            <div class="text-muted small">Алертов</div>
                                            <div class="h4 mb-0">3</div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="cc-glass rounded-4 p-3">
                                            <div class="d-flex justify-content-between">
                                                <div class="fw-semibold">Иванов А.С.</div>
                                                <span class="badge bg-success">Норма</span>
                                            </div>
                                            <div class="text-muted small mt-1">Последнее АД: 125/82 • Пульс: 72</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-muted small mt-3">
                                    В демо используются синтетические данные. Не является медицинским изделием.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HeroSection',
    emits: ['scroll-to-form'],
}
</script>

<style scoped>
.cc-hero {
    min-height: 620px;
    display: flex;
    align-items: center;
}
</style>
