import { useState } from 'react'
import { FaBars, FaTimes, FaTiktok } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { candidate, siteRoutes } from '../../data/siteContent'

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:grid lg:grid-cols-[360px_1fr_180px] lg:px-8">
        <NavLink
          to="/"
          className="flex min-w-0 w-fit items-center gap-2 rounded-md sm:gap-3"
          aria-label="Ir al inicio"
          onClick={() => setIsMenuOpen(false)}
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
          <span className="hidden max-w-36 text-xs font-black uppercase leading-tight text-blue-900 sm:block">
            {candidate.party}
          </span>
        </NavLink>

        <nav
          className="hidden items-center justify-center gap-7 lg:flex"
          aria-label="Navegación principal"
        >
          {siteRoutes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                [
                  'relative px-1 py-2 text-sm font-semibold transition-colors sm:text-base',
                  isActive
                    ? 'text-blue-700 after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-blue-700'
                    : 'text-slate-900 hover:text-blue-700',
                ].join(' ')
              }
            >
              {route.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden w-fit justify-self-end lg:block">
          <p className="mb-1 text-center text-[0.7rem] font-bold uppercase tracking-wide text-slate-500">
            Síguenos en:
          </p>
          <a
            href={candidate.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-black text-white shadow-sm transition-colors hover:bg-slate-800"
          >
            <FaTiktok className="h-4 w-4" aria-hidden="true" />
            TikTok
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-950 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 lg:hidden"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? (
            <FaTimes className="h-5 w-5" aria-hidden="true" />
          ) : (
            <FaBars className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-4 py-5 shadow-lg sm:px-6 lg:hidden"
        >
          <div className="mx-auto max-w-7xl">
            <nav className="grid sm:grid-cols-3" aria-label="Navegación para móviles y tablets">
              {siteRoutes.map((route) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    [
                      'border-b border-slate-200 px-3 py-4 text-sm font-bold transition-colors sm:border-b-0 sm:border-r sm:last:border-r-0',
                      isActive
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-slate-900 hover:bg-slate-50 hover:text-blue-700',
                    ].join(' ')
                  }
                >
                  {route.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-5 flex items-center justify-between gap-4 border-t border-slate-200 pt-5">
              <p className="text-xs font-bold uppercase text-slate-500">Síguenos en:</p>
              <a
                href={candidate.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-black text-white transition-colors hover:bg-slate-800"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaTiktok className="h-4 w-4" aria-hidden="true" />
                TikTok
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
