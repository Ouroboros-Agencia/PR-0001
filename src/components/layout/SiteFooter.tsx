import { FaTiktok } from 'react-icons/fa'
import { LinkButton } from '../ui/LinkButton'
import { candidate } from '../../data/siteContent'

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm font-bold text-slate-950">
            {candidate.name} para {candidate.district}
          </p>
          <p className="mt-1 max-w-2xl text-sm text-slate-600">
            {candidate.slogan}
          </p>
        </div>

        <LinkButton to={candidate.tiktokUrl} external icon={FaTiktok} variant="secondary">
          Ver videos
        </LinkButton>
      </div>
    </footer>
  )
}
