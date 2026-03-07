# Portafolio & CV – Melina Cabalceta Hernández

Sitio web personal que incluye currículum vitae y portafolio de proyectos universitarios.  
Desarrollado con **Vite + React + Tailwind CSS**.

---

## Tecnologías

- **React 18** – Biblioteca UI
- **Vite** – Bundler y servidor de desarrollo
- **Tailwind CSS v3** – Estilos utilitarios
- **lucide-react** – Íconos

---

## Estructura del proyecto

```
src/
├── assets/images/        # Imágenes de perfil y proyectos
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx    # Barra de navegación fija con toggle de tema
│   │   ├── Footer.jsx    # Pie de página
│   │   └── ScrollToTop.jsx
│   └── sections/
│       ├── Hero.jsx       # Presentación
│       ├── Education.jsx  # Educación y formación
│       ├── Skills.jsx     # Habilidades e idiomas
│       ├── Experience.jsx # Experiencia laboral
│       ├── Portfolio.jsx  # Portafolio de proyectos
│       └── Contact.jsx    # Formulario de contacto
├── App.jsx               # Componente raíz, maneja el tema
├── main.jsx              # Punto de entrada
└── index.css             # Estilos globales (Tailwind)
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

Reemplazar los archivos en `src/assets/images/` con las imágenes reales:

| Archivo         | Uso                        |
|-----------------|----------------------------|
| `profile.jpg`   | Foto de perfil (Hero)      |
| `project-1.jpg` | Captura proyecto 1         |
| `project-2.jpg` | Captura proyecto 2         |
| `project-3.jpg` | Captura proyecto 3         |

---

## Deploy

Compatible con **GitHub Pages**, **Netlify** y **Vercel**.

Para GitHub Pages agregar en `vite.config.js`:
```js
base: '/nombre-del-repositorio/'
```

---

## Funcionalidades JavaScript

1. **Modo claro/oscuro** – Toggle en Navbar, aplica clase `dark` al `<html>`
2. **Formulario de contacto con validación** – Campos requeridos con mensajes de error
3. **Efectos hover en proyectos** – Overlay con links al pasar el mouse
