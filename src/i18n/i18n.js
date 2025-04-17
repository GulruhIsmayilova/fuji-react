import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import az from "./az.json";
import jp from "./jp.json";

i18n.use(initReactI18next).init({
  resources: {
    az: { translation: az },
    jp: { translation: jp },
  },
  lng: "jp", // Başlanğıc dil
  fallbackLng: "jp",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
