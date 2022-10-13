import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationDE from "../src/assets/translations/de.json";
import translationEN from "../src/assets/translations/en.json";

const fallbackLng = ["en"];
const availableLanguages = ["en", "de"];

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "de",

    detection: {
      checkWhitelist: true,
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: true,
    },
  });

export default i18n;
