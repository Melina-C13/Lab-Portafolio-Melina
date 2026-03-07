import { Briefcase, Calendar, MapPin } from 'lucide-react'

interface ExperienceItem {
  role: string
  company: string
  location: string
  period: string
  description: string
  technologies: string[]
}

const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Proyecto de Ingeniería',
    company: 'Bomberos de Nosara',
    location: 'Nicoya, Guanacaste',
    period: 'Febrero 2025 – Junio 2026',
    description:
      'Desarrollo de una plataforma web para la gestión de información y comunicación comunitaria del Cuerpo de Bomberos de Nosara. Implementación de interfaces responsivas con React y TypeScript, e integración con servicios backend desarrollados en NestJS y manejo de datos con SQL Server dentro de un entorno de trabajo colaborativo.',
    technologies: ['React', 'TypeScript', 'NestJs', 'SQL Server'],
  },
]

export default function Experience() {
  return (
    <section
      id="experiencia"
      aria-label="Experiencia laboral"
      className="bg-primary/5 dark:bg-accent/10 px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Experiencia <span className="text-primary">Laboral</span>
          </h2>
          <p className="mx-auto max-w-md text-heather">
            Proyectos y experiencias profesionales en el mundo del desarrollo web.
          </p>
        </div>

        {/* Lista de experiencias */}
        <div className="flex flex-col gap-6">
          {EXPERIENCE.map((item, index) => (
            <article
              key={index}
              className="rounded-xl border border-heather/30 bg-white dark:bg-sapphire/50 p-6 md:p-8
                transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                {/* Info principal */}
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Briefcase size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.role}</h3>
                      <p className="text-sm font-medium text-primary">{item.company}</p>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-heather">{item.description}</p>
                  {/* Tecnologías usadas */}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Período y ubicación */}
                <div className="flex flex-col gap-1.5 text-sm text-heather md:text-right md:shrink-0">
                  <div className="flex items-center gap-1.5 md:justify-end">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 md:justify-end">
                    <MapPin size={14} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}