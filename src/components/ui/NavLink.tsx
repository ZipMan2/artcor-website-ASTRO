import { cn } from '../../lib/cn'

type Props = {
  href: string
  label: string
  active: boolean
  onClick?: () => void
  mobile?: boolean
}

export function NavLink({ href, label, active, onClick, mobile = false }: Props) {
  // on mobile
  if (mobile) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={cn(
          'text-3xl font-semibold tracking-wide transition-colors duration-200',
          active ? 'text-brand-red' : 'text-brand-black hover:text-brand-red',
        )}
      >
        {label}
      </a>
    )
  }

  // on desktop
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'group relative pb-1 text-sm font-medium uppercase tracking-widest transition-colors duration-200',
        active ? 'text-brand-red' : 'text-brand-black hover:text-brand-red',
      )}
    >
      {label}
      <span
        className={cn(
          'absolute bottom-0 left-0 block h-[2.7px] transition-all duration-300 ease-out',
          active ? 'w-full bg-brand-red' : 'w-0 bg-brand-red group-hover:w-full',
        )}
      />
    </a>
  )
}
