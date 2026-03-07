import { GraduationCap, Code2, Sparkles, MapPin, Download } from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    label: 'Universidad',
    value: 'Universidad Nacional de Costa Rica',
  },
  {
    icon: Code2,
    label: 'Carrera',
    value: 'Ingeniería en Sistemas',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Nicoya, Guanacaste',
  },
  {
    icon: Sparkles,
    label: 'Enfoque',
    value: 'Desarrollo Web Full Stack',
  },
]

export default function AboutMe() {
  return (
    <section
      id="sobre-mi"
      aria-label="Sobre mí"
      className="px-6 py-24 bg-alabaster dark:bg-sapphire"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">

          {/* Columna izquierda: foto + decoración */}
          <div className="relative flex justify-center">

            {/* Resplandor de fondo */}
            <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-gradient-to-tr from-primary/30 via-accent/20 to-transparent blur-2xl md:h-80 md:w-80" />

            {/* Contenedor de la foto */}
            <div className="group relative z-10">
              {/* Borde degradado brillante */}
              <div className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-br from-primary via-accent to-primary/30 opacity-70 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur-md" />

              {/* Marco de la imagen */}
              <div className="relative h-80 w-64 overflow-hidden rounded-[2rem] border-2 border-primary/30 shadow-2xl md:h-96 md:w-72">
                <img
                  src="/images/profile.jpeg"
                  alt="Melina Cabalceta Hernández"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay degradado inferior */}
                <div className="absolute inset-0 bg-gradient-to-t from-sapphire/60 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-20" />

                {/* Badge flotante */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                  Desarrolladora Web
                </div>
              </div>
            </div>

            {/* Puntos decorativos */}
            <div className="absolute bottom-2 left-4 grid grid-cols-3 gap-1.5 opacity-30">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 rounded-full bg-primary" />
              ))}
            </div>

          </div>

          {/* Columna derecha: texto */}
          <div>
            <div className="mb-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Sobre mí
              </p>
              <h2 className="text-3xl font-bold md:text-4xl">
                Hola, soy <span className="text-primary">Melina</span>
              </h2>
            </div>

            <p className="mb-8 leading-relaxed text-sapphire/70 dark:text-alabaster/70">
              Estudiante de Ingeniería en Sistemas en la Universidad Nacional, apasionada por la tecnología
              y el desarrollo de software. Disfruto construir aplicaciones web modernas y accesibles,
              siempre en búsqueda de aprender y crecer con cada proyecto.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 rounded-xl border border-heather/20 bg-white dark:bg-sapphire/50 p-4 transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="rounded-lg bg-primary/10 p-2 shrink-0">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-heather">{label}</p>
                    <p className="text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#portafolio"
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent hover:shadow-md"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="rounded-full border border-primary/40 px-6 py-2.5 text-sm font-semibold text-primary transition-all hover:border-primary hover:bg-primary/10"
              >
                Contáctame
              </a>
              <a
                href="/CV-Melina-Cabalceta.pdf"
                download
                className="rounded-full border border-primary/40 px-6 py-2.5 text-sm font-semibold text-primary transition-all hover:border-primary hover:bg-primary/10 flex items-center gap-2"
              >
                <Download size={15} />
                Descargar CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}