import { useState, useEffect } from 'react'
import { NavbarUI } from './NavbarUI'

export function useNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return { scrolled, menuOpen, setMenuOpen }
}

export default function Navbar({ currentPath = '/' }: { currentPath?: string }) {
  const { scrolled, menuOpen, setMenuOpen } = useNavbar()

  return (
    <NavbarUI
      scrolled={scrolled}
      menuOpen={menuOpen}
      currentPath={currentPath}
      onToggle={() => setMenuOpen(v => !v)}
      onClose={() => setMenuOpen(false)}
    />
  )
}
