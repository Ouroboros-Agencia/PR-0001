import { FaMapMarkedAlt, FaRegImages, FaVideo } from 'react-icons/fa'

const repositoryUses = [
  {
    icon: FaRegImages,
    title: 'Fotos de actividades',
    text: 'Registro visual de visitas, reuniones y jornadas con vecinos.',
  },
  {
    icon: FaVideo,
    title: 'Videos públicos',
    text: 'Mensajes y recorridos publicados para mantener comunicación constante.',
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Evidencia por zonas',
    text: 'Contenido organizado por barrio, propuesta y frente de trabajo.',
  },
]

export function WorkMapSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {repositoryUses.map((item) => {
          const Icon = item.icon

          return (
            <article key={item.title} className="rounded-md border border-slate-200 bg-white p-6">
              <Icon className="h-6 w-6 text-blue-700" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
