import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
    <div className="flex flex-col min-h-dvh">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60 animate-fade-in-down shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <a
            href="/"
            className="flex items-center space-x-3 group"
            aria-label="Ir al inicio"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue text-sm font-bold text-white shadow-md shadow-brand-blue/30 transition-transform group-hover:scale-105">
              RV
            </div>
            <span className="text-sm font-semibold text-foreground/80 hidden sm:block tracking-wide">
              Roney Valdelomar
            </span>
          </a>
          <Navbar />
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
