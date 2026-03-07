import { Code2, Server, Globe, LucideIcon } from 'lucide-react'

interface SkillCategory {
  icon: LucideIcon
  title: string
  description: string
  items: string[]
}

const SKILLS: SkillCategory[] = [
  {
    icon: Code2,
    title: 'Frontend',
    description: 'Construcción de sitios web responsivos y dinámicos.',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
  },
  {
    icon: Server,
    title: 'Backend',
    description: 'Desarrollo del lado del servidor con APIs robustas.',
    items: ['TypeORM', 'NestJS', 'SQL Server', 'REST APIs'],
  },
  {
    icon: Globe,
    title: 'Idiomas',
    description: 'Comunicación efectiva en entornos profesionales.',
    items: ['Español (Nativo)', 'Inglés (B2)'],
  },
]

export default function Skills() {
  return (
    <section
      id="habilidades"
      aria-label="Habilidades y destrezas"
      className="px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Mis <span className="text-primary">Habilidades</span>
          </h2>
          <p className="mx-auto max-w-md text-heather">
            Destrezas técnicas y herramientas para el desarrollo de soluciones digitales.
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid gap-6 md:grid-cols-3">
          {SKILLS.map(({ icon: Icon, title, description, items }) => (
            <div
              key={title}
              className="group rounded-xl border border-heather/30 bg-white dark:bg-sapphire/50 p-8
                transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3">
                <Icon size={28} className="text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-heather">{description}</p>

              {/* Chips de habilidades */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary
                      transition-colors hover:bg-primary hover:text-white cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
