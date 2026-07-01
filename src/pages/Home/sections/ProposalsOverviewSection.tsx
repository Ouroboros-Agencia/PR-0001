import {
  FaArrowRight,
  FaChartLine,
  FaCheckCircle,
  FaShieldAlt,
  FaTint,
} from 'react-icons/fa'
import { LinkButton } from '../../../components/ui/LinkButton'

const metrics = [
  {
    value: '6',
    label: 'propuestas centrales',
    description: 'Ejes concretos para transformar las prioridades del distrito.',
  },
  {
    value: '3h',
    label: 'agua diaria como meta',
    description: 'Servicio de agua y avance ordenado del sistema de desagüe.',
  },
  {
    value: 'I-4',
    label: 'centro de salud propuesto',
    description: 'Atención integral y mayor capacidad de respuesta para Huancán.',
  },
  {
    value: '4',
    label: 'pisos para comercio local',
    description: 'Banca, gastronomía, tiendas y cine en un centro moderno.',
  },
]

const proposalAxes = [
  { label: 'Agua y servicios para todos', icon: FaTint },
  { label: 'Seguridad ciudadana mejorada', icon: FaShieldAlt },
  { label: 'Economía local impulsada', icon: FaChartLine },
  { label: 'Compromiso y resultados', icon: FaCheckCircle },
]

const divisionClasses = [
  'border-b border-slate-200 sm:border-r',
  'border-b border-slate-200',
  'border-b border-slate-200 sm:border-b-0 sm:border-r',
  '',
]

export function ProposalsOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-x-10 gap-y-12 border-b border-slate-200 pb-16 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <div className="flex items-center gap-2 border-b border-slate-300 pb-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" aria-hidden="true" />
                <p className="text-[0.7rem] font-bold uppercase text-slate-600">
                  {metric.label}
                </p>
              </div>
              <p className="mt-5 text-6xl font-black leading-none text-slate-950 sm:text-7xl">
                {metric.value}
              </p>
              <p className="mt-3 max-w-56 text-sm leading-5 text-slate-500">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid items-center gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="max-w-xl">
            <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-bold text-slate-600">
              Propuestas
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight text-blue-950 sm:text-4xl">
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

          <div className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm sm:grid-cols-2">
            {proposalAxes.map(({ label, icon: Icon }, index) => (
              <div
                key={label}
                className={`flex min-h-44 flex-col justify-between p-6 sm:p-8 ${divisionClasses[index]}`}
              >
                <Icon className="h-8 w-8 text-red-600" aria-hidden="true" />
                <h3 className="mt-8 max-w-48 text-lg font-black leading-snug text-blue-950">
                  {label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
