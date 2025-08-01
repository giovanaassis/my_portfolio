import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptHome from "../public/locales/pt/home.json";
import enHome from "../public/locales/en/home.json";

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      home: ptHome,
    },
    en: {
      home: enHome,
    },
  },
  lng: "pt",
  fallbackLng: "pt",
  ns: ["home"],
  defaultNS: "home",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
