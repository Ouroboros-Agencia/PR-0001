import { FaTiktok } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { candidate, siteRoutes } from '../../data/siteContent'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-4 px-4 py-3 sm:px-6 lg:grid-cols-[340px_1fr_180px] lg:px-8">
        <NavLink
          to="/"
          className="flex w-fit items-center gap-3 rounded-md"
          aria-label="Ir al inicio"
        >
          <img
            src={candidate.headerPortrait.src}
            width="48"
            height="64"
            alt={candidate.headerPortrait.alt}
            className="h-14 w-11 object-contain"
            decoding="async"
          />
          <img
            src={candidate.logo.src}
            width="42"
            height="42"
            alt={candidate.logo.alt}
            className="h-9 w-auto"
            decoding="async"
          />
          <span className="max-w-36 text-xs font-black uppercase leading-tight text-blue-900">
            {candidate.party}
          </span>
        </NavLink>

        <nav
          className="flex flex-wrap items-center justify-start gap-1 lg:justify-center"
          aria-label="Navegación principal"
        >
          {siteRoutes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                [
                  'rounded-full px-4 py-2 text-xs font-black uppercase tracking-wide transition-colors',
                  isActive
                    ? 'bg-blue-700 text-white'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-blue-800',
                ].join(' ')
              }
            >
              {route.label}
            </NavLink>
          ))}
        </nav>

        <a
          href={candidate.tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 w-fit items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-black uppercase tracking-wide text-slate-900 transition-colors hover:border-blue-700 hover:bg-blue-50 lg:justify-self-end"
        >
          <FaTiktok className="h-4 w-4" aria-hidden="true" />
          TikTok
        </a>
      </div>
    </header>
  )
}
