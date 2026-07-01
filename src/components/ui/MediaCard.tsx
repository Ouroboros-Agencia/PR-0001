import { FaExternalLinkAlt } from 'react-icons/fa'
import { LinkButton } from './LinkButton'
import { OptimizedImage } from './OptimizedImage'

type MediaCardProps = {
  title: string
  type: string
  description: string
  image: string
  url?: string
}

export function MediaCard({ title, type, description, image, url }: MediaCardProps) {
  return (
    <article className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
      <OptimizedImage
        src={image}
        alt={title}
        className="aspect-[4/3] w-full object-cover"
        width={900}
        height={675}
      />
      <div className="p-5">
        <p className="text-xs font-bold uppercase text-red-600">{type}</p>
        <h3 className="mt-2 text-lg font-black text-slate-950">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
        {url ? (
          <div className="mt-5">
            <LinkButton to={url} external icon={FaExternalLinkAlt} variant="secondary">
              Abrir enlace
            </LinkButton>
          </div>
        ) : null}
      </div>
    </article>
  )
}
