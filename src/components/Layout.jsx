import { React, useState } from "react";
import { Menu, Sun, Moon } from "lucide-react";

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      <header className="sticky top-0 z-50 bg-white shadow-sm animate-fade-in-down">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <a href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3498DB] text-xl font-bold text-white">
              RV
            </div>
            <span className="hidden text-xl font-bold text-[#333] sm:inline-block">
              Mi Portafolio
            </span>
          </a>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <button
                  className="text-[#333] transition-colors hover:text-[#3498DB] capitalize cursor-pointer"
                  onClick={() => setIsDark(!isDark)}
                >
                  {isDark ? (
                    <Moon className="animate-rotate-in" />
                  ) : (
                    <Sun className="animate-rotate-in" />
                  )}
                </button>
              </li>
              {[
                "inicio",
                "acerca-de-mi",
                "proyectos",
                "habilidades",
                "contacto",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-[#333] transition-colors hover:text-[#3498DB] capitalize"
                  >
                    {item.replace(/-/g, " ")}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* TODO: Crear el menú responsive */}
          <button className="inline-flex md:hidden items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-[#020817] focus-visible:ring-[#020817]/50 focus-visible:ring-[3px] hover:bg-[#f1f5f9] hover:text-[#0f172a] dark:hover:bg-[#f1f5f9]/50 size-9">
            <Menu />
            <span className="sr-only">Menú</span>
          </button>
        </div>
      </header>
      {children}
    </div>
  );
};

export default Layout;
