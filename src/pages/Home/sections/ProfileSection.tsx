import { FaBuilding, FaGraduationCap, FaShieldAlt } from 'react-icons/fa'
import { OptimizedImage } from '../../../components/ui/OptimizedImage'
import { SectionHeader } from '../../../components/ui/SectionHeader'
import {
  companies,
  credentials,
  profileVisual,
  publicService,
} from '../../../data/siteContent'

export function ProfileSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Perfil"
            title="Formación, empresa y gestión con experiencia verificable"
            description="La propuesta se sostiene en administración, planificación, proyectos de inversión, seguridad ciudadana y emprendimiento."
          />
          <OptimizedImage
            src={profileVisual.src}
            alt={profileVisual.alt}
            className="mt-8 aspect-[3/4] w-full rounded-md border border-slate-200 object-cover shadow-sm"
            width={720}
            height={960}
          />
        </div>

        <div className="grid gap-5">
          <article className="rounded-md border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <FaGraduationCap className="h-5 w-5 text-blue-700" aria-hidden="true" />
              <h3 className="text-lg font-black text-slate-950">Formación</h3>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              {credentials.map((credential) => (
                <li key={credential}>{credential}</li>
              ))}
            </ul>
          </article>

          <div className="grid gap-5 sm:grid-cols-2">
            <article className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <FaBuilding className="h-5 w-5 text-red-600" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-black text-slate-950">Empresas fundadas</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                {companies.map((company) => (
                  <li key={company}>{company}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <FaShieldAlt className="h-5 w-5 text-blue-700" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-black text-slate-950">Servicio público</h3>
              {publicService.map((service) => (
                <p key={service.period} className="mt-4 text-sm leading-6 text-slate-700">
                  <span className="font-bold">{service.period}:</span> {service.role}
                </p>
              ))}
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
