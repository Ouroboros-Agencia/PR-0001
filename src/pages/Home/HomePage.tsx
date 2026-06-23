import { HeroSection } from './sections/HeroSection'
import { ProfileSection } from './sections/ProfileSection'
import { ProposalsOverviewSection } from './sections/ProposalsOverviewSection'
import { TrajectorySection } from './sections/TrajectorySection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProposalsOverviewSection />
      <TrajectorySection />
      <ProfileSection />
    </>
  )
}
