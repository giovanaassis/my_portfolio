import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptHome from "../public/locales/pt/home.json";
import ptAbout from "../public/locales/pt/aboutMe.json";

import enHome from "../public/locales/en/home.json";
import enAbout from "../public/locales/en/aboutMe.json";

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      home: ptHome,
      aboutMe: ptAbout,
    },
    en: {
      home: enHome,
      aboutMe: enAbout,
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
