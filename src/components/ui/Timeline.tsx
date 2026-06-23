import { useState } from 'react'
import { OptimizedImage } from './OptimizedImage'

type TimelineItem = {
  id: string
  label: string
  period: string
  badge: string
  title: string
  description: string
  position: number
  placement: 'top' | 'bottom'
}

type TimelineProps = {
  items: TimelineItem[]
  backgroundImage: string
  backgroundAlt: string
  year: string
}

export function Timeline({ items, backgroundImage, backgroundAlt, year }: TimelineProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')
  const activeItem = items.find((item) => item.id === activeId) ?? items[0]
  const yearParts = [year.slice(0, 2), year.slice(2)]

  if (!activeItem) {
    return null
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      <OptimizedImage
        src={backgroundImage}
        alt={backgroundAlt}
        className="absolute inset-0 h-full w-full object-cover"
        width={1800}
        height={900}
      />
      <div className="absolute inset-0 bg-slate-950/68" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-blue-950/70" />

      <div className="relative z-10 flex min-h-screen flex-col px-5 py-8 sm:px-8 lg:p-10">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase text-blue-200">Cronología</p>
          <h3 className="mt-3 text-3xl font-black sm:text-4xl">
            Trayectoria de vida y gestión
          </h3>
        </div>

        <div className="mt-8 lg:hidden">
          <div className="space-y-3">
            {items.map((item) => {
              const isActive = item.id === activeId

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={[
                    'flex w-full items-center gap-3 rounded-md border px-4 py-3 text-left transition-colors',
                    isActive
                      ? 'border-red-400 bg-red-600 text-white'
                      : 'border-white/20 bg-white/10 text-white hover:bg-white/20',
                  ].join(' ')}
                  aria-pressed={isActive}
                >
                  <span className="h-4 w-4 rounded-full border-2 border-white bg-white/20" />
                  <span>
                    <span className="block text-xs font-black uppercase text-blue-100">
                      {item.label}
                    </span>
                    <span className="block text-sm font-bold">{item.title}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="relative mt-12 hidden flex-1 lg:block">
          <div className="absolute left-0 top-20 select-none text-[9rem] font-black leading-[0.82] text-white/20">
            <span className="block">{yearParts[0]}</span>
            <span className="block">{yearParts[1]}</span>
          </div>

          <div className="absolute left-44 right-0 top-[34%] h-px bg-white/55">
            {items.map((item) => {
              const isActive = item.id === activeId
              const isTop = item.placement === 'top'

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className="absolute top-0 -translate-x-1/2 text-left"
                  style={{ left: `${item.position}%` }}
                  aria-pressed={isActive}
                >
                  <span
                    className={[
                      'absolute left-1/2 block w-px -translate-x-1/2 bg-white/35',
                      isTop ? '-top-16 h-16' : 'top-0 h-32',
                    ].join(' ')}
                  />
                  <span
                    className={[
                      'absolute left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-all',
                      isActive
                        ? 'border-blue-200 bg-blue-500 shadow-[0_0_0_14px_rgba(59,130,246,0.22)]'
                        : 'border-white/70 bg-white/20 hover:bg-white/35',
                    ].join(' ')}
                  >
                    <span className="h-4 w-4 rounded-full bg-white" />
                  </span>
                  <span
                    className={[
                      'absolute left-1/2 w-40 -translate-x-1/2 text-center',
                      isTop ? '-top-28' : 'top-16',
                    ].join(' ')}
                  >
                    <span className="block text-xs font-black uppercase text-white">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-[0.7rem] font-bold uppercase text-blue-100">
                      {item.period}
                    </span>
                  </span>
                  <span
                    className={[
                      'absolute left-1/2 inline-flex min-w-44 -translate-x-1/2 items-center justify-center rounded-sm px-3 py-2 text-center text-[0.7rem] font-black uppercase text-white shadow-lg',
                      isTop ? 'top-24' : 'top-36',
                      isActive ? 'bg-red-600' : 'bg-blue-600',
                    ].join(' ')}
                  >
                    {item.badge}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <article className="mt-8 max-w-3xl rounded-md border border-white/15 bg-white/95 p-6 text-slate-950 shadow-2xl lg:absolute lg:bottom-10 lg:left-72 lg:right-10 lg:mt-0">
          <p className="text-sm font-black uppercase text-blue-700">{activeItem.period}</p>
          <h4 className="mt-2 text-2xl font-black">{activeItem.title}</h4>
          <p className="mt-3 text-sm leading-6 text-slate-700">{activeItem.description}</p>
        </article>
      </div>
    </div>
  )
}
