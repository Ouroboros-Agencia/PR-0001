import { OptimizedImage } from '../../../components/ui/OptimizedImage'
import { profileVisual } from '../../../data/siteContent'

export function ProfileSection() {
  return (
    <section className="min-h-screen bg-white">
      <div className="grid min-h-screen overflow-hidden border-y border-slate-200 lg:grid-cols-2">
          <OptimizedImage
            src={profileVisual.src}
            alt={profileVisual.alt}
            className="h-full min-h-[55svh] w-full object-cover object-center lg:min-h-screen"
            width={800}
            height={1000}
          />

          <article className="flex flex-col justify-center bg-slate-50 px-6 py-12 sm:px-10 sm:py-16 lg:border-l lg:border-slate-200 lg:px-14 xl:px-16">
            <div className="flex items-center gap-4">
              <p className="shrink-0 text-xs font-bold uppercase text-slate-600">Orlando Loardo Sacha</p>
              <span className="h-px w-full bg-slate-300" aria-hidden="true" />
            </div>

            <h2 className="mt-8 max-w-xl text-3xl uppercase font-black leading-tight text-slate-950 sm:text-4xl">
              Un nuevo futuro para HUANCAN
            </h2>

            <div className="mt-10 border-t border-slate-300 pt-6">
              <p className="text-xs font-bold uppercase text-blue-800">Sobre mis estudios</p>
              <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
                Licenciado en Administración de Empresas y magíster en Planificación y
                Proyectos de Inversión, actualmente continúa su preparación como estudiante
                de doctorado en la UNCP. Su vocación de servicio también se formó en la
                Policía Nacional, donde egresó con el segundo puesto de su promoción y fue
                brigadier general. Sus primeros años de estudio transcurrieron en Auray,
                etapa en la que recibió diplomas de reconocimiento cada año.
              </p>
            </div>

            <div className="mt-8 border-t border-slate-300 pt-6">
              <p className="text-xs font-bold uppercase text-red-600">Empresas fundadas</p>
              <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
                Como emprendedor, fundó <strong>ESPECTRACOLOR Publicidad y Marketing</strong>,
                <strong> TAYTA Restaurante Turístico</strong> y <strong>KATTRINA</strong>,
                empresa dedicada a la venta de productos de belleza. Estas iniciativas le
                permitieron conocer de cerca los retos de crear empresa y generar actividad
                económica local.
              </p>
            </div>

            <div className="mt-8 border-t border-slate-300 pt-6">
              <p className="text-xs font-bold uppercase text-blue-800">Experiencia en el Sector público</p>
              <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
                Entre <strong>2021 y 2022</strong> fue Gerente de Seguridad Ciudadana de la
                provincia de Huancayo, responsabilidad desde la que aportó experiencia en
                gestión, coordinación operativa y protección de la ciudadanía.
              </p>
            </div>
          </article>
      </div>
    </section>
  )
}
