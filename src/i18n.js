import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

const savedLang = localStorage.getItem("portfolioLang");

let initialLang = "es";

if (savedLang) {
  initialLang = savedLang;
} else {
  // System language
  const browserLang = navigator.language.slice(0, 2);

  if (browserLang === "es" || browserLang === "en") {
    initialLang = browserLang;
  }
}

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: initialLang,
    fallbackLng: "en",
    ns: [
      "common",
      "hero",
      "about",
      "projects",
      "skills",
      "education",
      "contact",
    ],
    defaultNS: "common",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
