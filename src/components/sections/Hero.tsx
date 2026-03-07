import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Presentación"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/fondo.jpg')" }}
      />

      {/* Overlay degradado oscuro para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-sapphire/70 via-sapphire/60 to-sapphire/80" />

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Línea decorativa superior */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-12 bg-primary/70" />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary/90">
            Portafolio
          </span>
          <span className="h-px w-12 bg-primary/70" />
        </div>

        {/* Nombre */}
        <h1 className="mb-4 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
          Melina Cabalceta
          <br />
          <span className="text-primary">Hernández</span>
        </h1>

        {/* Rol */}
        <p className="mb-10 text-lg font-light tracking-wide text-white/70 md:text-xl">
          Estudiante de Ingeniería en Sistemas &nbsp;·&nbsp; Desarrolladora Web
        </p>

        {/* Botón CTA */}
        <a
          href="#sobre-mi"
          className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white
            transition-all hover:bg-accent hover:shadow-lg hover:shadow-primary/30"
        >
          Conoce más sobre mí
        </a>
      </div>

      {/* Indicador de scroll */}
      <a
        href="#sobre-mi"
        aria-label="Desplazarse hacia abajo"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 hover:text-primary transition-colors"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  )
}