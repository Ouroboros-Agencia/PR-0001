import { MediaCard } from '../../../components/ui/MediaCard'
import { SectionHeader } from '../../../components/ui/SectionHeader'
import { mediaRepository } from '../../../data/siteContent'

export function MediaRepositorySection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Resultados"
          title="Trabajo territorial en fotos y videos"
          description="Un registro ordenado de recorridos, actividades, comités de apoyo y presencia directa con vecinos de Huancán."
          align="center"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
