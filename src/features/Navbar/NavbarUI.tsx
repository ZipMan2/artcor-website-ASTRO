import { HamburgerButton } from '../../components/ui/HamburgerButton'
import { NavLink } from '../../components/ui/NavLink'
import { NAV_LINKS } from '../../data/nav'
import { cn } from '../../lib/cn'

import LOGOPNG from '../../assets/img/logo.png'

type Props = {
  scrolled: boolean
  menuOpen: boolean
  currentPath: string
  onToggle: () => void
  onClose: () => void
}

export function NavbarUI({ scrolled, menuOpen, currentPath, onToggle, onClose }: Props) {
  return (
    <>
      {/* Desktop view */}
      <nav
        className={cn(
          'fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-brand-white transition-all duration-400',
          scrolled
            ? 'h-[55px] md:h-[60px] border-b border-brand-beige px-4 md:px-16  shadow-sm'
            : 'h-[70px] md:h-[90px] px-4 md:px-21',
        )}
      >
        {/* Logo */}
        <a href='/' className='group flex shrink-0 items-center gap-3'>
          <img
            src={LOGOPNG.src}
            alt='Artott logo'
            className={cn(
              'object-contain transition-all duration-400',
              scrolled ? 'h-12 md:h-10' : 'h-14 md:h-14 md:w-44',
            )}
          />
        </a>

        {/* Desktop links */}
        <ul className='hidden items-center gap-11 md:flex'>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <NavLink href={link.href} label={link.label} active={currentPath === link.href} />
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <HamburgerButton open={menuOpen} onClick={onToggle} />
      </nav>

      {/* Spacer */}
      <div
        aria-hidden='true'
        className={cn('transition-all duration-400', scrolled ? 'h-[55px] md:h-[60px]' : 'h-[70px] md:h-[90px]')}
      />

      {/* Opened menu on mobile */}
      <div
        onClick={e => {
          if (e.target === e.currentTarget) onClose()
        }}
        className={cn(
          'fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-brand-white transition-opacity duration-300',
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        {/* Links */}
        {NAV_LINKS.map((link, i) => (
          <div
            key={link.href}
            className='transition-all duration-500 py-2'
            style={{
              transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
              opacity: menuOpen ? 1 : 0,
              transitionDelay: `${i * 70}ms`,
            }}
          >
            <NavLink href={link.href} label={link.label} active={currentPath === link.href} onClick={onClose} mobile />
          </div>
        ))}
      </div>
    </>
  )
}
