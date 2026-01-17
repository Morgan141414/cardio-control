<template>
    <div class="py-4">
        <div class="container">
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mb-4">
                <div>
                    <h1 class="h3 mb-1"><i class="bi bi-speedometer2 me-2"></i>Демо-панель</h1>
                    <div class="text-muted">Синтетические данные, без реальных пациентов.</div>
                </div>
                <router-link to="/" class="btn btn-outline-secondary">
                    <i class="bi bi-arrow-left me-2"></i>Маркетинг
                </router-link>
            </div>

            <div class="alert alert-info" role="alert">
                <i class="bi bi-info-circle me-2"></i>
                Этот интерфейс — демонстрационный прототип. <strong>Не является медицинским изделием</strong>.
            </div>

            <div class="row g-3 mb-4">
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="me-3 text-primary"><i class="bi bi-people fs-2"></i></div>
                                <div>
                                    <div class="text-muted small">Пациентов под наблюдением</div>
                                    <div class="h4 mb-0">{{ patients.length }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="me-3 text-warning"><i class="bi bi-exclamation-triangle fs-2"></i></div>
                                <div>
                                    <div class="text-muted small">Требуют внимания</div>
                                    <div class="h4 mb-0">{{ attentionCount }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="me-3 text-danger"><i class="bi bi-heart-pulse fs-2"></i></div>
                                <div>
                                    <div class="text-muted small">Критичных</div>
                                    <div class="h4 mb-0">{{ criticalCount }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-4">
                <div class="col-lg-7">
                    <div class="card border-0 shadow-sm">
                        <div class="card-header bg-white py-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="fw-semibold"><i class="bi bi-graph-up me-2"></i>Тренд давления (пример)</div>
                                <span class="badge bg-secondary">7 дней</span>
                            </div>
                        </div>
                        <div class="card-body">
                            <ApexChart type="line" height="300" :options="chartOptions" :series="trend.series" />
                        </div>
                    </div>
                </div>

                <div class="col-lg-5">
                    <div class="card border-0 shadow-sm">
                        <div class="card-header bg-white py-3 fw-semibold">
                            <i class="bi bi-list-check me-2"></i>Пациенты
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-hover mb-0 align-middle">
                                    <thead class="table-light">
                                        <tr class="small text-muted">
                                            <th class="ps-3">Пациент</th>
                                            <th>Статус</th>
                                            <th>АД</th>
                                            <th class="pe-3">Обновлено</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="p in patients" :key="p.id" class="small">
                                            <td class="ps-3">
                                                <div class="fw-semibold">{{ p.name }}</div>
                                                <div class="text-muted">{{ p.age }} лет, пульс {{ p.lastPulse }}</div>
                                            </td>
                                            <td>
                                                <span :class="`badge bg-${p.statusColor}`">{{ p.status }}</span>
                                            </td>
                                            <td>{{ p.lastPressure }}</td>
                                            <td class="pe-3 text-muted">{{ p.updatedAt }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer bg-white text-muted small">
                            Данные сгенерированы локально для демонстрации.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import ApexChart from 'vue3-apexcharts'
import { SyntheticDataService } from '../services/SyntheticDataService'

const patients = SyntheticDataService.getPatients()
const trend = SyntheticDataService.getBpTrend()

const attentionCount = computed(() => patients.filter((p) => p.statusColor === 'warning').length)
const criticalCount = computed(() => patients.filter((p) => p.statusColor === 'danger').length)

const chartOptions = computed(() => ({
    chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        fontFamily: 'inherit',
    },
    stroke: { curve: 'smooth', width: 3 },
    markers: { size: 0 },
    xaxis: {
        categories: trend.labels,
        labels: { style: { colors: '#6c757d' } },
    },
    yaxis: {
        labels: { style: { colors: '#6c757d' } },
    },
    grid: { borderColor: 'rgba(0,0,0,0.08)' },
    colors: ['#0d6efd', '#20c997'],
    legend: { position: 'top' },
}))
</script>
