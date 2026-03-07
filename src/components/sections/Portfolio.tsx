import { useState } from 'react'
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react'

interface Project {
  id: number
  title: string
  shortDescription: string
  fullDescription: string
  image: string
  technologies: string[]
  github: string
  live: string
}

const PROJECTS: Project[] = [
  {
  id: 1,
  title: 'AutoStock',
  shortDescription:
    'Sistema de gestión para taller mecánico y venta de repuestos, enfocado en inventario, ventas y pedidos a proveedores.',
  fullDescription:
    'Sistema integral para la administración de un taller mecánico y proveedor de repuestos automotrices. La plataforma optimiza la gestión de inventario, el control de stock y la coordinación de ventas y pedidos a proveedores, reduciendo errores operativos y mejorando la disponibilidad de piezas. Incluye registro y administración de productos, seguimiento de órdenes y generación de reportes para apoyar la toma de decisiones.\n\nDesarrollado con React y TypeScript en el frontend, utilizando TailwindCSS para una interfaz moderna y responsiva. El backend fue implementado con .NET Core y SQL Server como base de datos, integrando funcionalidades mediante APIs REST. Mi rol fue desarrolladora fullstack, a cargo de la arquitectura del frontend y la integración cliente-servidor.',
  image: '/images/Autostock.jpeg',
  technologies: ['React', 'TypeScript', '.NET', 'SQL Server', 'Tailwind CSS', 'REST API'],
  github: 'https://github.com',
  live: 'https://example.com',
},
  {
  id: 2,
  title: 'Bomberos de Nosara',
  shortDescription:
    'Sistema web para mejorar la gestión administrativa y operativa del Cuerpo de Bomberos de Nosara.',
  fullDescription:
    'Sistema web desarrollado para la gestión de contenido y comunicación comunitaria del Cuerpo de Bomberos de Nosara. La plataforma incluye módulos para la publicación de noticias y comunicados, administración de material educativo, gestión de donantes, entre otras funcionalidades, permitiendo organizar y difundir información relevante de forma estructurada.\n\nEl sistema fue desarrollado utilizando React y TypeScript en el frontend, implementando TailwindCSS para la construcción de la interfaz y diseño responsivo. En el backend se utilizó Node.js con TypeORM para la gestión de entidades y persistencia de datos, exponiendo funcionalidades mediante APIs REST para la comunicación entre cliente y servidor.',
  image: '/images/bomberos.png',
  technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'TypeORM', 'REST API'],
  github: 'https://github.com',
  live: 'https://bomberosnosara.cloud',
},
 {
  id: 3,
  title: 'Black Jack',
  shortDescription:
    'Juego de cartas Black Jack multijugador en tiempo real con sistema de turnos.',
  fullDescription:
    'Aplicación web que implementa el clásico juego de cartas Black Jack en modalidad multijugador y en tiempo real. El sistema permite a varios jugadores participar en partidas simultáneamente, gestionando turnos, acciones de juego y sincronización del estado de la partida entre todos los participantes.\n\nEl frontend fue desarrollado con React, proporcionando una interfaz interactiva para la gestión de las partidas y la visualización de cartas y turnos. El backend fue implementado en .NET, utilizando SignalR para la comunicación en tiempo real entre el servidor y los clientes, y una API para la gestión de la lógica del juego y las sesiones de partida.',
  image: '/images/black jack.jpeg',
  technologies: ['React', '.NET', 'SignalR', 'WebSockets', 'REST API'],
  github: 'https://github.com',
  live: 'https://example.com',
},
]

export default function Portfolio() {
  // Controla qué tarjeta tiene la descripción expandida
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggle = (id: number): void => setExpandedId(expandedId === id ? null : id)

  return (
    <section
      id="portafolio"
      aria-label="Portafolio de proyectos"
      className="px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            Mis Proyectos
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Portafolio de <span className="text-primary">Proyectos</span>
          </h2>
          <p className="mx-auto max-w-xl text-heather leading-relaxed">
            Selección de proyectos realizados durante mi carrera universitaria.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-heather/30 bg-white dark:bg-sapphire/50
                transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Imagen con links en hover */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Captura del proyecto ${project.title}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay con botones al hacer hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-sapphire/0 opacity-0 transition-all duration-300 group-hover:bg-sapphire/40 group-hover:opacity-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Código fuente de ${project.title}`}
                    className="p-3 rounded-full bg-white/90 text-sapphire hover:bg-primary hover:text-white transition-colors shadow-lg"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Demo de ${project.title}`}
                    className="p-3 rounded-full bg-white/90 text-sapphire hover:bg-primary hover:text-white transition-colors shadow-lg"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Contenido */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-bold">{project.title}</h3>

                {/* Descripción corta o expandida */}
                <p className="mb-4 text-sm leading-relaxed text-heather">
                  {expandedId === project.id ? project.fullDescription : project.shortDescription}
                </p>

                {/* Tecnologías */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Acciones */}
                <div className="mt-auto flex items-center gap-3">
                  <button
                    onClick={() => toggle(project.id)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 px-4 py-2 text-xs font-medium text-primary hover:border-primary hover:bg-primary/10 transition-all"
                  >
                    {expandedId === project.id ? (
                      <>Ver menos <ChevronUp size={14} /></>
                    ) : (
                      <>Ver más detalles <ChevronDown size={14} /></>
                    )}
                  </button>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-medium text-white hover:bg-accent hover:shadow-md transition-all"
                  >
                    Demo <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
