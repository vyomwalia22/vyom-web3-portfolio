import { useEffect, useState } from 'react'
import { Menu, X as Close } from 'lucide-react'
import { navItems, profile, socials } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrolled } from '../hooks/useScrolled'
import { Logo } from './icons/Logo'
import { XLogo } from './icons/XLogo'

const sectionIds = navItems.map((n) => n.id)

export function Navbar() {
  const active = useActiveSection(sectionIds)
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        solid ? 'border-b border-line bg-bg/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:text-[#0b0a14]"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-2.5 rounded-md" onClick={() => setOpen(false)}>
          <Logo />
          <span className="text-sm font-semibold tracking-tight">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative block rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive ? 'text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-px h-px bg-accent transition-[opacity,transform] duration-300 ${
                      isActive ? 'scale-x-100 opacity-100' : 'scale-x-50 opacity-0'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={socials.x.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 items-center gap-2 rounded-lg border border-line-strong px-3.5 text-sm text-fg transition-colors hover:border-accent/60 sm:inline-flex"
          >
            <XLogo className="size-3.5" />
            Connect
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-line-strong text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <Close className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-bg px-5 pb-10 md:hidden">
          <ul className="flex flex-col py-4">
            {navItems.map((item, i) => (
              <li key={item.id} className="rise" style={{ ['--delay' as string]: `${i * 40}ms` }}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between border-b border-line py-4 text-2xl font-medium tracking-tight ${
                    active === item.id ? 'text-fg' : 'text-muted'
                  }`}
                >
                  {item.label}
                  <span className="font-mono text-xs text-faint">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={socials.x.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent text-sm font-medium text-[#0b0a14]"
          >
            <XLogo className="size-4" /> Connect on X
          </a>
        </div>
      )}
    </header>
  )
}
