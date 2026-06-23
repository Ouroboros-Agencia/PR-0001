import { FaArrowRight } from 'react-icons/fa'
import { LinkButton } from '../../../components/ui/LinkButton'

const metrics = [
  { value: '6', label: 'propuestas centrales' },
  { value: '3h', label: 'agua diaria como meta' },
  { value: 'I-4', label: 'centro de salud propuesto' },
  { value: '4', label: 'pisos para comercio local' },
]

export function ProposalsOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-slate-200 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-5xl font-black leading-none text-blue-900">{metric.value}</p>
              <p className="mt-3 text-sm font-semibold text-slate-500">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="relative min-h-[420px] py-16">
          <p className="pointer-events-none absolute left-0 top-12 select-none text-[5.5rem] font-black leading-none text-slate-100 sm:text-[9rem] lg:text-[12rem]">
            Huancán
          </p>

          <div className="relative ml-auto max-w-3xl">
            <p className="text-sm font-black uppercase text-red-600">Plan de gobierno</p>
            <p className="mt-4 text-xl font-semibold leading-8 text-blue-950">
              La misión es convertir necesidades urgentes en proyectos ordenados:
              servicios básicos, seguridad, salud, reactivación económica y espacios
              públicos administrados con participación vecinal.
            </p>
          </div>

          <div className="relative mt-20 max-w-xl">
            <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-bold text-slate-600">
              Propuestas
            </span>
            <h2 className="mt-5 text-4xl font-black leading-tight text-blue-950 sm:text-5xl">
              Propuestas generales para Huancán y una ruta clara hacia las acciones
              específicas.
            </h2>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              Revisa cada eje de trabajo con sus alcances, prioridades y beneficios para el
              distrito.
            </p>
            <div className="mt-7">
              <LinkButton to="/propuestas" icon={FaArrowRight}>
                Ver propuestas específicas
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
