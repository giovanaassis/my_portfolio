import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptHome from "@/locales/pt/home.json";
import ptAbout from "@/locales/pt/aboutMe.json";
import ptProjects from "@/locales/pt/projects.json";
import ptTechs from "@/locales/pt/techStack.json";
import ptContact from "@/locales/pt/contact.json";
import ptFooter from "@/locales/pt/footer.json";

import enHome from "@/locales/en/home.json";
import enAbout from "@/locales/en/aboutMe.json";
import enProjects from "@/locales/en/projects.json";
import enTechs from "@/locales/en/techStack.json";
import enContact from "@/locales/en/contact.json";
import enFooter from "@/locales/en/footer.json";

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      home: ptHome,
      aboutMe: ptAbout,
      projects: ptProjects,
      techs: ptTechs,
      contact: ptContact,
      footer: ptFooter,
    },
    en: {
      home: enHome,
      aboutMe: enAbout,
      projects: enProjects,
      techs: enTechs,
      contact: enContact,
      footer: enFooter,
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
