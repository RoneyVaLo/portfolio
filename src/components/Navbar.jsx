import { Menu } from "lucide-react";
import { Moon } from "lucide-react";
import { X } from "lucide-react";
import { Sun } from "lucide-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "inicio",
    "acerca-de-mi",
    "proyectos",
    "habilidades",
    "educacion",
    "contacto",
  ];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
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
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-foreground transition-colors hover:text-[#3498DB] capitalize"
              >
                {item.replace(/-/g, " ")}
              </a>
            </li>
          ))}
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
              {links.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-lg transition-colors hover:text-[#3498DB] capitalize"
                    onClick={() => setIsOpen(false)} // cerrar menú al hacer clic
                  >
                    {item.replace(/-/g, " ")}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
