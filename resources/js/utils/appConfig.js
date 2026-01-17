export const getAppConfig = () => {
    const cfg = typeof window !== 'undefined' ? window.__APP_CONFIG__ : null
    return {
        appName: cfg?.appName || 'CardioControl Demo',
        contactEmail: cfg?.contactEmail || 'demo@cardio-control.kz',
        legalNotice: cfg?.legalNotice || 'Демо-режим. Не является медицинским изделием.',
    }
}
