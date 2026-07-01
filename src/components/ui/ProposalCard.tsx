import {
  FaBriefcase,
  FaFutbol,
  FaHospital,
  FaShieldAlt,
  FaStore,
  FaWater,
} from 'react-icons/fa'
import type { IconType } from 'react-icons'
import type { Proposal, ProposalIcon } from '../../data/siteContent'

const icons: Record<ProposalIcon, IconType> = {
  water: FaWater,
  economy: FaBriefcase,
  security: FaShieldAlt,
  health: FaHospital,
  commerce: FaStore,
  sports: FaFutbol,
}

type ProposalCardProps = {
  proposal: Proposal
  compact?: boolean
}

export function ProposalCard({ proposal, compact = false }: ProposalCardProps) {
  const Icon = icons[proposal.icon]

  return (
    <article className="h-full rounded-md border border-slate-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-blue-700 text-white">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <span className="rounded-md bg-red-50 px-3 py-1 text-sm font-black text-red-700">
          {proposal.number}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-black text-slate-950">{proposal.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{proposal.summary}</p>

      {!compact ? (
        <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
          {proposal.details.map((detail) => (
            <li key={detail} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-600" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}
