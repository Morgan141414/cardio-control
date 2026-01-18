export const getAppConfig = () => {
    const cfg = typeof window !== 'undefined' ? window.__APP_CONFIG__ : null
    return {
        appName: cfg?.appName || 'CardioControl Demo',
        contactEmail: cfg?.contactEmail || 'amanatkorgan@icloud.com',
        legalNotice: cfg?.legalNotice || 'Демо-режим. Не является медицинским изделием.',
    }
}
