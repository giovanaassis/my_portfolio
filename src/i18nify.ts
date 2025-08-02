import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptHome from "../public/locales/pt/home.json";
import ptAbout from "../public/locales/pt/aboutMe.json";
import ptProjects from "../public/locales/pt/projects.json";

import enHome from "../public/locales/en/home.json";
import enAbout from "../public/locales/en/aboutMe.json";
import enProjects from "../public/locales/en/projects.json";

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      home: ptHome,
      aboutMe: ptAbout,
      projects: ptProjects,
    },
    en: {
      home: enHome,
      aboutMe: enAbout,
      projects: enProjects,
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
