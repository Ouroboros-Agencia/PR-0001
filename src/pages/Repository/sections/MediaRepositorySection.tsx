import { MediaCard } from '../../../components/ui/MediaCard'
import { SectionHeader } from '../../../components/ui/SectionHeader'
import { mediaRepository } from '../../../data/siteContent'

export function MediaRepositorySection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Repositorio"
          title="Fotos, videos y piezas de trabajo"
          description="Un espacio ordenado para mostrar actividades, recorridos, propuestas visuales y contenido publicado."
          align="center"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {mediaRepository.map((item) => (
            <MediaCard
              key={item.id}
              title={item.title}
              type={item.type}
              description={item.description}
              image={item.image}
              url={'url' in item ? item.url : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
