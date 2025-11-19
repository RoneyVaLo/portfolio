# Portfolio

Proyecto personal de portafolio web construido con React + Vite, preparado para i18n (es/en) y estilos con Tailwind.

## Descripción

Este repositorio contiene una página de portafolio personal con secciones típicas: Hero, Sobre mí, Educación, Habilidades, Proyectos y Contacto. Está pensado como un proyecto ligero y fácil de desplegar.

## Tecnologías

- **Framework:** React
- **Bundler / Dev server:** Vite
- **Estilos:** Tailwind CSS
- **Internacionalización:** i18next (soporta `en` y `es`)
- **Otras librerías:** `lucide-react`, `sonner`, `@emailjs/browser`

Las dependencias principales aparecen en `package.json`.

## Estructura del proyecto

```
portfolio/
├── src/                # Código fuente React
│   ├── components/     # Componentes principales (Hero, Navbar, AboutMe, Projects, etc.)
│   ├── assets/         # Datos estáticos (projects.json, skills.json)
├── public/             # Archivos estáticos
│   ├── locales/        # Archivos de traducción (`en/`, `es/`)
├── vite.config.js      # Configuración de Vite
```

## Instalación

Se recomienda usar `pnpm` (el proyecto incluye `pnpm-lock.yaml`). También funcionan `npm` o `yarn`.

Instalar dependencias:

```
pnpm install
# o
npm install
```

## Comandos útiles

- Iniciar el servidor de desarrollo:

```
pnpm dev
# o
npm run dev
```

- Construir para producción:

```
pnpm build
# o
npm run build
```

- Previsualizar build:

```
pnpm preview
# o
npm run preview
```

- Ejecutar linter:

```
pnpm lint
# o
npm run lint
```

## Localización

Las traducciones están en la carpeta `locales/` con dos subcarpetas `en/` y `es/`. El archivo `i18n.js` carga las traducciones y configura `react-i18next`.

## Autor y contacto

- **Autor:** RoneyVaLo
- **Repositorio:** `RoneyVaLo/portfolio`
