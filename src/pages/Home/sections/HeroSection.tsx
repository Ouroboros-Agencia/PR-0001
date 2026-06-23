import { FaArrowRight, FaPlay } from 'react-icons/fa'
import { LinkButton } from '../../../components/ui/LinkButton'
import { OptimizedImage } from '../../../components/ui/OptimizedImage'
import { candidate, candidatePhoto } from '../../../data/siteContent'

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-blue-950 text-white">
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[36%] bg-red-600 lg:block" />
      <div className="absolute bottom-0 left-0 -z-10 h-3 w-full bg-red-600 lg:hidden" />

      <div className="mx-auto grid min-h-[74svh] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase text-red-200">{candidate.party}</p>
          <h1 className="mt-4 text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
            {candidate.name} para {candidate.district}
          </h1>
          <p className="mt-6 text-2xl font-bold text-white">{candidate.primaryPhrase}</p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-50">
            {candidate.slogan}. {candidate.supportPhrase}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton to="/propuestas" icon={FaArrowRight}>
              Ver propuestas
            </LinkButton>
            <LinkButton to="/repositorio" icon={FaPlay} variant="light">
              Fotos y videos
            </LinkButton>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-md bg-white/10" />
          <OptimizedImage
            src={candidatePhoto.src}
            alt={candidatePhoto.alt}
            className="aspect-[4/5] w-full rounded-md border border-white/20 object-cover shadow-2xl"
            eager
            width={720}
            height={900}
          />
        </div>
      </div>
    </section>
  )
}
