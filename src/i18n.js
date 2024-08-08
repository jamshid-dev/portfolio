// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './components/languages/en.json'
import ru from './components/languages/ru.json'
import uz from './components/languages/uz.json'
// Sample translation resources
const resources = {
    en: {
        translation: en
    },
    ru: {
        translation: ru,
    },
    uz: {
        translation: uz,
    },
};

i18n
    .use(initReactI18next) // Passes i18n instance to react-i18next
    .init({
        resources,
        lng: "en", // Default language
        interpolation: {
            escapeValue: false, // Not needed for React
        },
    });

export default i18n;
