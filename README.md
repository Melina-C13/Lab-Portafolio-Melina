# Portafolio & CV – Melina Cabalceta Hernández

Sitio web personal que incluye currículum vitae y portafolio de proyectos universitarios.  
Desarrollado con **Vite + React + TypeScript + Tailwind CSS**.

---

## Tecnologías

- **React 18** – Biblioteca UI
- **TypeScript** – Tipado estático
- **Vite** – Bundler y servidor de desarrollo
- **Tailwind CSS v3** – Estilos utilitarios
- **lucide-react** – Íconos

---

## Estructura del proyecto
```
public/
└── images/           # Imágenes de perfil y proyectos

src/
├── assets/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollToTop.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── AboutMe.tsx
│       ├── Education.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Portfolio.tsx
│       └── Contact.tsx
├── hooks/
│   ├── useContactForm.ts
│   ├── useScroll.ts
│   └── useTheme.ts
├── App.tsx
├── index.css
└── main.tsx
```

---

## Instalación y uso
```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build
```

---

## Imágenes

Las imágenes se encuentran en `public/images/`:

| Archivo           | Uso                    |
|-------------------|------------------------|
| `profile.jpeg`    | Foto de perfil         |
| `logo.png`        | Logo                   |
| `fondo.jpg`       | Imagen de fondo        |
| `Autostock.jpeg`  | Proyecto Autostock     |
| `black jack.jpeg` | Proyecto Black Jack    |
| `bomberos.png`    | Proyecto Bomberos      |

---

## Deploy

Compatible con **GitHub Pages**, **Netlify** y **Vercel**.

Para GitHub Pages agregar en `vite.config.js`:
```js
base: '/Lab-Portafolio-Melina/'
```

---

## Funcionalidades

1. **Modo claro/oscuro** – Toggle en Navbar, aplica clase `dark` al `<html>`
2. **Formulario de contacto con validación** – Campos requeridos con mensajes de error
3. **Efectos hover en proyectos** – Overlay con links al pasar el mouse