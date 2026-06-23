import { Timeline } from '../../../components/ui/Timeline'
import { timeline, timelineVisual } from '../../../data/siteContent'

export function TrajectorySection() {
  return (
    <section className="min-h-screen bg-slate-950">
      <Timeline
        items={timeline}
        backgroundImage={timelineVisual.background}
        backgroundAlt={timelineVisual.backgroundAlt}
        year={timelineVisual.year}
      />
    </section>
  )
}
