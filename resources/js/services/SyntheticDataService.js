const pad2 = (n) => String(n).padStart(2, '0')

const formatDateTime = (date) => {
    const d = new Date(date)
    return `${pad2(d.getDate())}.${pad2(d.getMonth() + 1)} ${pad2(d.getHours())}:${pad2(d.getMinutes())}`
}

const daysAgo = (n) => {
    const d = new Date()
    d.setDate(d.getDate() - n)
    d.setHours(12, 0, 0, 0)
    return d
}

export const SyntheticDataService = {
    getPatients() {
        const now = new Date()
        return [
            {
                id: 1,
                name: 'Иванов А.С.',
                age: 63,
                status: 'Норма',
                statusColor: 'success',
                lastPressure: '125/82',
                lastPulse: 72,
                updatedAt: formatDateTime(new Date(now.getTime() - 2 * 60 * 60 * 1000)),
            },
            {
                id: 2,
                name: 'Петрова М.И.',
                age: 58,
                status: 'Внимание',
                statusColor: 'warning',
                lastPressure: '148/95',
                lastPulse: 88,
                updatedAt: formatDateTime(new Date(now.getTime() - 5 * 60 * 60 * 1000)),
            },
            {
                id: 3,
                name: 'Сидоров В.П.',
                age: 70,
                status: 'Критично',
                statusColor: 'danger',
                lastPressure: '165/105',
                lastPulse: 96,
                updatedAt: formatDateTime(new Date(now.getTime() - 60 * 60 * 1000)),
            },
            {
                id: 4,
                name: 'Кузнецова Е.Н.',
                age: 66,
                status: 'Норма',
                statusColor: 'success',
                lastPressure: '130/84',
                lastPulse: 76,
                updatedAt: formatDateTime(new Date(now.getTime() - 9 * 60 * 60 * 1000)),
            },
        ]
    },

    getBpTrend() {
        const labels = [6, 5, 4, 3, 2, 1, 0].map((d) => {
            const date = daysAgo(d)
            return `${pad2(date.getDate())}.${pad2(date.getMonth() + 1)}`
        })

        return {
            labels,
            series: [
                { name: 'Систолическое', data: [132, 128, 130, 126, 129, 127, 125] },
                { name: 'Диастолическое', data: [86, 84, 85, 82, 83, 83, 82] },
            ],
        }
    },
}
