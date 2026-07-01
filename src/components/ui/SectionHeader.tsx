type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-xs font-bold uppercase tracking-wide text-red-600">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">{description}</p>
      ) : null}
    </div>
  )
}
