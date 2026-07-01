import { FaArrowRight, FaPlay } from 'react-icons/fa'
import { LinkButton } from '../../../components/ui/LinkButton'
import { OptimizedImage } from '../../../components/ui/OptimizedImage'
import { candidate, heroVisual } from '../../../data/siteContent'


export function HeroSection() {
  return (
    <section className="relative isolate min-h-[calc(100svh-82px)] overflow-hidden bg-slate-950 text-white">
      <OptimizedImage
        src={heroVisual.src}
        alt={heroVisual.alt}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        eager
        width={1800}
        height={1100}
      />
      <div className="absolute inset-0 -z-10 bg-slate-950/58" />

      <div className="mx-auto flex min-h-[calc(100svh-82px)] max-w-7xl items-end px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="grid gap-8 border-b border-white/20 pb-8 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-blue-100">
                {candidate.party}
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                {candidate.name} para {candidate.district}. <br></br>Orden, gestión y resultados.
              </h1>
            </div>

            <p className="max-w-sm text-sm leading-6 text-blue-50/85">
              {candidate.slogan}. {candidate.supportPhrase}
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <LinkButton to="/propuestas" icon={FaArrowRight} variant="light">
              Ver propuestas
            </LinkButton>
            <LinkButton to="/repositorio" icon={FaPlay} variant="secondary">
              Ver resultados
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  )
}
