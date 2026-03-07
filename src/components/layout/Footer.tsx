import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-heather/30 bg-white/30 dark:bg-sapphire/50 px-6 py-10"
    >
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Nombre */}
        <div className="text-center md:text-left">
          <p className="font-bold text-primary">Melina Cabalceta H.</p>
          <p className="text-sm text-heather">Desarrolladora Web</p>
        </div>

        {/* Links rápidos */}
        <nav aria-label="Links pie de página" className="flex gap-5 text-sm text-heather">
          {['#inicio', '#habilidades', '#portafolio', '#contacto'].map((href) => (
            <a key={href} href={href} className="hover:text-primary transition-colors capitalize">
              {href.replace('#', '')}
            </a>
          ))}
        </nav>

        {/* Redes sociales */}
        <div className="flex gap-3">
          {[
            { icon: Github,   href: 'https://github.com',   label: 'GitHub'   },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Mail,     href: 'mailto:melina@email.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-full bg-heather/20 text-heather hover:bg-primary hover:text-white transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-heather/20 pt-5 text-center">
        <p className="text-xs text-heather flex items-center justify-center gap-1">
          © 2026 Melina Cabalceta Hernández - Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}
