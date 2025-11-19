import { useTranslation } from "react-i18next";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  const theme = localStorage.getItem("portfolioTheme");
  const [isDark, setIsDark] = useState(theme === "dark");
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation("navbar");

  const links = t("links", { returnObjects: true });

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("portfolioLang", lang);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("portfolioTheme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          <li>
            <button
              className={`text-foreground transition-colors ${
                isDark ? "hover:text-[#3498DB]" : "hover:text-[#E67E22]"
              } capitalize cursor-pointer`}
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? (
                <Sun className="animate-rotate-in" />
              ) : (
                <Moon className="animate-rotate-in" />
              )}
            </button>
          </li>
          {Array.isArray(links) &&
            links.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-foreground transition-colors hover:text-[#3498DB] capitalize"
                >
                  {t(item.name).replace(/-/g, " ")}
                </a>
              </li>
            ))}

          {/* SELECTOR IDIOMA */}
          <li className="flex space-x-2 items-center">
            <button
              onClick={() => changeLang("es")}
              className="text-foreground transition-colors hover:text-[#3498DB] capitalize cursor-pointer"
            >
              {t("lang_es")}
            </button>
            <span className="text-foreground">|</span>
            <button
              onClick={() => changeLang("en")}
              className="text-foreground transition-colors hover:text-[#3498DB] capitalize cursor-pointer"
            >
              {t("lang_en")}
            </button>
          </li>
        </ul>
      </nav>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#3498DB]/50 size-9"
        >
          {isOpen ? <X /> : <Menu />}
          <span className="sr-only">Menú</span>
        </button>

        {/* Panel móvil */}
        {isOpen && (
          <div className="absolute top-14 left-0 w-full   bg-background text-foreground shadow-lg border-t border-gray-200 dark:border-gray-700 animate-fade-in">
            <ul className="flex flex-col items-center py-6 space-y-6">
              <li>
                <button
                  className={`transition-colors ${
                    isDark ? "hover:text-[#3498DB]" : "hover:text-[#E67E22]"
                  } capitalize cursor-pointer`}
                  onClick={() => setIsDark(!isDark)}
                >
                  {isDark ? <Sun /> : <Moon />}
                </button>
              </li>
              {Array.isArray(links) &&
                links.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-lg transition-colors hover:text-[#3498DB] capitalize"
                      onClick={() => setIsOpen(false)} // cerrar menú al hacer clic
                    >
                      {t(item.name).replace(/-/g, " ")}
                    </a>
                  </li>
                ))}

              {/* SELECTOR IDIOMA */}
              <li className="flex space-x-4">
                <button
                  onClick={() => changeLang("es")}
                  className="text-lg hover:text-[#3498DB] transition"
                >
                  {t("lang_es")}
                </button>
                <span className="text-foreground">|</span>
                <button
                  onClick={() => changeLang("en")}
                  className="text-lg hover:text-[#3498DB] transition"
                >
                  {t("lang_en")}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
