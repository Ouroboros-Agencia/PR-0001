import type { IconType } from 'react-icons'
import { Link } from 'react-router-dom'

type LinkButtonProps = {
  to: string
  children: React.ReactNode
  external?: boolean
  icon?: IconType
  variant?: 'primary' | 'secondary' | 'light'
}

const variants = {
  primary: 'bg-red-600 text-white hover:bg-red-700',
  secondary: 'border border-blue-700 bg-white text-blue-800 hover:bg-blue-50',
  light: 'bg-white text-blue-900 hover:bg-slate-100',
}

export function LinkButton({
  to,
  children,
  external = false,
  icon: Icon,
  variant = 'primary',
}: LinkButtonProps) {
  const className = [
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold shadow-sm transition-colors',
    variants[variant],
  ].join(' ')

  const content = (
    <>
      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
      <span>{children}</span>
    </>
  )

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    )
  }

  return (
    <Link to={to} className={className}>
      {content}
    </Link>
  )
}
