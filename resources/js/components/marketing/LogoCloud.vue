<template>
    <section class="cc-section--tight">
        <div class="container">
            <div class="text-center mb-4">
                <span class="cc-kicker">
                    <i class="bi bi-buildings"></i>
                    MVP для клиник Казахстана
                </span>
                <div class="mt-3 text-muted">
                    Подходит для кардиоотделений, частных клиник, страховых и медсетей.
                </div>
            </div>

            <div class="row g-3 justify-content-center">
                <div v-for="(item, idx) in items" :key="idx" class="col-6 col-md-4 col-lg-2">
                    <div class="cc-glass rounded-4 py-3 px-3 text-center h-100">
                        <div class="fw-semibold">{{ item }}</div>
                        <div class="small text-muted">demo</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const items = ['Кардиоцентр', 'ГКБ', 'Частная клиника', 'Страховая', 'Медсеть', 'Партнёры']
</script>
