import { cn } from '../../lib/cn'

type Props = { open: boolean; onClick: () => void }

export function HamburgerButton({ open, onClick }: Props) {
  const bar = 'block h-[2px] w-6 bg-brand-black transition-all duration-300 origin-center'

  return (
    <button
      onClick={onClick}
      aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
      className='relative z-50 flex flex-col justify-center gap-1.25 p-2 md:hidden'
    >
      <span className={cn(bar, open && 'translate-y-1.75 rotate-45')} />
      <span className={cn(bar, open && 'scale-x-0 opacity-0')} />
      <span className={cn(bar, open && '-translate-y-1.75 -rotate-45')} />
    </button>
  )
}
