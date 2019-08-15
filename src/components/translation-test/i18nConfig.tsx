import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: {
                    "Welcome to React": "Welcome to React and react-i18next",
                    "title": {
                        "success": "success"
                    }
                }
            },
            zh: {
                translations: {
                    "Welcome to React": "Willkommen bei React und react-i18next",
                    "title": {
                        "success": "成功"
                    }
                }
            }
        },
        fallbackLng: "en",
        debug: true,
        lng: navigator.language.includes("en") ? "en" : "zh",
        // have a common namespace used around the full app
        defaultNS: "translations",


        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
