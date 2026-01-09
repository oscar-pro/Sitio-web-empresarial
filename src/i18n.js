import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar archivos de traducción separados (Import separate translation files)
import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';

// Recursos de traducción (Translation resources)
const resources = {
    es: {
        translation: translationES
    },
    en: {
        translation: translationEN
    }
};

// Obtener idioma guardado o detectar del navegador (Get saved language or detect from browser)
const savedLanguage = localStorage.getItem('i18nextLng');
const browserLanguage = navigator.language.split('-')[0]; // 'es-ES' -> 'es'
const defaultLanguage = savedLanguage || (browserLanguage === 'en' || browserLanguage === 'es' ? browserLanguage : 'es');

i18n
    .use(LanguageDetector) // Detecta idioma del navegador
    .use(initReactI18next) // Pasa i18n a react-i18next
    .init({
        resources,
        lng: defaultLanguage, // Idioma inicial
        fallbackLng: 'es', // Idioma de respaldo

        // Detección de idioma
        detection: {
            order: ['localStorage', 'navigator'], // Prioridad: localStorage > navegador
            caches: ['localStorage'], // Guardar en localStorage
            lookupLocalStorage: 'i18nextLng',
        },

        interpolation: {
            escapeValue: false // React ya escapa por defecto
        },

        react: {
            useSuspense: true // Usar con Suspense
        },

        // Debug solo en desarrollo
        debug: false,
    });

// Evento para guardar idioma cuando cambia
i18n.on('languageChanged', (lng) => {
    localStorage.setItem('i18nextLng', lng);
    document.documentElement.lang = lng; // Actualizar atributo lang del HTML
});

export default i18n;
