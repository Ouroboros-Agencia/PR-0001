import { FaChartLine, FaCity, FaUsers } from 'react-icons/fa'
import { SectionHeader } from '../../../components/ui/SectionHeader'

const focusItems = [
  {
    icon: FaCity,
    title: 'Distrito ordenado',
    text: 'Obras priorizadas, espacios públicos recuperados y servicios con metas claras.',
  },
  {
    icon: FaChartLine,
    title: 'Economía activa',
    text: 'Formalización, comercio moderno, turismo local y nuevos puntos de encuentro.',
  },
  {
    icon: FaUsers,
    title: 'Gestión cercana',
    text: 'Barrios organizados, seguridad articulada y seguimiento visible de avances.',
  },
]

export function ManagementFocusSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Propuestas específicas"
          title="Seis compromisos para convertir planificación en resultados"
          description="La ruta de trabajo combina servicios básicos, seguridad, salud, economía y espacios públicos para todo Huancán."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {focusItems.map((item) => {
            const Icon = item.icon

            return (
              <article key={item.title} className="rounded-md border border-slate-200 p-6">
                <Icon className="h-6 w-6 text-red-600" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
