import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "auto" });
      }
    }
  }, [i18n.language]);

  return (
    <div>
      <header className="sticky top-0 z-50 bg-background shadow-sm border-b-2 border-foreground/30 animate-fade-in-down">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <a href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3498DB] text-xl font-bold text-white">
              RV
            </div>
            <span class="text-sm font-medium text-foreground/70 hidden sm:block">
              Roney Valdelomar
            </span>
          </a>
          <Navbar />
        </div>
      </header>
      {children}
    </div>
  );
};

export default Layout;
