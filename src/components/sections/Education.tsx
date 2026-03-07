import { GraduationCap, Calendar } from 'lucide-react'

interface EducationItem {
  degree: string
  institution: string
  period: string
  description: string
}

const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachillerato en Educación Media',
    institution: 'Colegio Bocas de Nosara',
    period: '2017 – 2021',
    description: 'Educación secundaria completa con formación integral.',
  },
  {
    degree: 'Diplomado en Programación de Aplicaciones Informáticas',
    institution: 'Universidad Nacional',
    period: '2022 – 2025',
    description:
      'Formación profesional en desarrollo de aplicaciones, programación, bases de datos y tecnologías web modernas.',
  },
]

export default function Education() {
  return (
    <section
      id="educacion"
      aria-label="Educación y formación académica"
      className="bg-primary/5 dark:bg-accent/10 px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Educación y <span className="text-primary">Formación</span>
          </h2>
          <p className="mx-auto max-w-md text-heather">
            Mi trayectoria académica y formación profesional.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea central (solo desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden w-0.5 -translate-x-1/2 bg-primary/20 md:block" />

          <div className="flex flex-col gap-8">
            {EDUCATION.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Punto en la línea (desktop) */}
                <div className="absolute left-1/2 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-primary bg-alabaster dark:bg-sapphire md:block" />

                {/* Tarjeta */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="rounded-xl border border-heather/30 bg-white dark:bg-sapphire/50 p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <GraduationCap size={20} className="text-primary" />
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-heather">
                        <Calendar size={14} />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    <h3 className="mb-1 font-semibold">{item.degree}</h3>
                    <p className="mb-2 text-sm font-medium text-primary">{item.institution}</p>
                    <p className="text-sm leading-relaxed text-heather">{item.description}</p>
                  </div>
                </div>

                {/* Espaciador lado opuesto */}
                <div className="hidden w-1/2 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
