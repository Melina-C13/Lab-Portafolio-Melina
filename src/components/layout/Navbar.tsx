import { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useScroll } from '../../hooks/useScroll'

interface NavbarProps {
  darkMode: boolean
  toggleTheme: () => void
}

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#educacion', label: 'Educación' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#portafolio', label: 'Portafolio' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar({ darkMode, toggleTheme }: NavbarProps) {
  const scrolled = useScroll(20)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <nav
      role="navigation"
      aria-label="Navegación principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? 'bg-alabaster/95 dark:bg-sapphire/95 backdrop-blur-md shadow-lg'
            : 'bg-alabaster/80 dark:bg-sapphire/80 backdrop-blur-sm border-b border-heather/30'
        }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="text-xl font-bold text-primary transition-colors hover:text-accent"
        >
          MC <span className="text-sm font-normal text-heather">| Dev</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            aria-label="Alternar modo claro/oscuro"
            className="rounded-full border border-primary/30 bg-primary/10 p-2 text-primary transition-all hover:bg-primary hover:text-white"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Alternar modo claro/oscuro"
            className="rounded-full border border-primary/30 bg-primary/10 p-2 text-primary transition-all hover:bg-primary hover:text-white"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            className="rounded-lg p-2 transition-colors hover:bg-heather/20"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-heather/30 bg-alabaster/95 backdrop-blur-md dark:bg-sapphire/95 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-heather/20 px-6 py-3 text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}