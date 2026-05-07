import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SITE_URL = "https://portfolio-4r86.vercel.app";

const seoData = {
  es: {
    title:
      "RVaLo | Roney Valdelomar – Ingeniero de Software & Desarrollador Fullstack",
    description:
      "Portafolio de Roney Valdelomar López – Ingeniero de Software y Desarrollador Fullstack especializado en React.js, Next.js, ASP.NET Core, Node.js, C#, y bases de datos SQL y NoSQL.",
  },
  en: {
    title: "RVaLo | Roney Valdelomar – Software Engineer & Fullstack Developer",
    description:
      "Portfolio of Roney Valdelomar López – Software Engineer and Fullstack Developer specialized in React.js, Next.js, ASP.NET Core, Node.js, C#, and SQL & NoSQL databases.",
  },
};

const SEO = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith("es") ? "es" : "en";
  const data = seoData[lang];

  useEffect(() => {
    document.title = data.title;

    const setMeta = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", data.description);

    setMeta("og:title", data.title, "property");
    setMeta("og:description", data.description, "property");
    setMeta("og:locale", lang === "es" ? "es_ES" : "en_US", "property");

    setMeta("twitter:title", data.title);
    setMeta("twitter:description", data.description);

    const canonical =
      lang === "es"
        ? `${SITE_URL}/?lang=es`
        : lang === "en"
          ? `${SITE_URL}/?lang=en`
          : SITE_URL;
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) {
      canonicalEl.setAttribute("href", canonical);
    }

    document.documentElement.lang = lang;
  }, [lang, data]);

  return null;
};

export default SEO;
