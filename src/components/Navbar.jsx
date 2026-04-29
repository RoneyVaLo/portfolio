import { useTranslation } from "react-i18next";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const theme = localStorage.getItem("portfolioTheme");
  const [isDark, setIsDark] = useState(theme === "dark");
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [lang, setLang] = useState(
    localStorage.getItem("portfolioLang") || "es"
  );
  const { t, i18n } = useTranslation("navbar");

  const links = t("links", { returnObjects: true });

  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("portfolioLang", newLang);
    setLang(newLang);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("portfolioTheme", isDark ? "dark" : "light");
  }, [isDark]);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = Array.isArray(links)
      ? links.map((l) => l.id)
      : ["home", "about-me", "projects", "skills", "education", "contact"];

    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const linkClass = (id) =>
    `text-sm font-medium transition-colors capitalize ${
      activeSection === id
        ? "text-brand-blue"
        : "text-foreground/70 hover:text-foreground"
    }`;

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
        {/* Theme toggle */}
        <button
          aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-accent hover:text-foreground mr-2 cursor-pointer"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? (
            <Sun className="h-4 w-4 animate-rotate-in" />
          ) : (
            <Moon className="h-4 w-4 animate-rotate-in" />
          )}
        </button>

        {/* Nav links */}
        <ul className="flex items-center gap-1">
          {Array.isArray(links) &&
            links.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`${linkClass(item.id)} px-3 py-1.5 rounded-md hover:bg-accent transition-all`}
                >
                  {t(item.name).replace(/-/g, " ")}
                </a>
              </li>
            ))}
        </ul>

        {/* Language selector */}
        <div
          className="flex items-center gap-0.5 ml-2 rounded-lg border border-border p-0.5"
          role="group"
          aria-label="Selector de idioma"
        >
          <button
            onClick={() => changeLang("es")}
            aria-pressed={lang === "es"}
            className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              lang === "es"
                ? "bg-brand-blue text-white shadow-sm"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            ES
          </button>
          <button
            onClick={() => changeLang("en")}
            aria-pressed={lang === "en"}
            className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              lang === "en"
                ? "bg-brand-blue text-white shadow-sm"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            EN
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <div className="md:hidden flex items-center gap-2">
        {/* Theme toggle mobile */}
        <button
          aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-accent cursor-pointer"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Abrir menú"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-accent cursor-pointer"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute top-16 left-0 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-lg animate-fade-in"
        >
          <nav aria-label="Menú móvil">
            <ul className="flex flex-col py-4">
              {Array.isArray(links) &&
                links.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center px-6 py-3 text-base font-medium capitalize transition-colors ${
                        activeSection === item.id
                          ? "text-brand-blue bg-brand-blue/5 border-l-2 border-brand-blue"
                          : "text-foreground/70 hover:text-foreground hover:bg-accent border-l-2 border-transparent"
                      }`}
                    >
                      {t(item.name).replace(/-/g, " ")}
                    </a>
                  </li>
                ))}

              {/* Language selector mobile */}
              <li className="flex items-center gap-2 px-6 py-4 border-t border-border mt-2">
                <span className="text-xs text-muted-foreground mr-1">Idioma:</span>
                <button
                  onClick={() => changeLang("es")}
                  aria-pressed={lang === "es"}
                  className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all cursor-pointer ${
                    lang === "es"
                      ? "bg-brand-blue text-white"
                      : "text-foreground/60 hover:text-foreground border border-border"
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => changeLang("en")}
                  aria-pressed={lang === "en"}
                  className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all cursor-pointer ${
                    lang === "en"
                      ? "bg-brand-blue text-white"
                      : "text-foreground/60 hover:text-foreground border border-border"
                  }`}
                >
                  EN
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
