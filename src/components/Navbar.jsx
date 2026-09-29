import { useEffect, useState } from 'react'
import { navLinks } from '../data.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 rounded-b-[28px] bg-mint text-forest transition-shadow duration-300 lg:rounded-b-[40px] ${
        scrolled ? 'shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)]' : ''
      }`}
    >
      <div className="container-x flex h-16 items-center lg:h-[72px]">
        <a href="#" aria-label="TrailHive home" className="-ml-0.5 shrink-0 transition-opacity hover:opacity-80">
          <img src="/logos/trailhive-dark.png" alt="TrailHive" width="112" height="28" className="h-7 w-28" />
        </a>

        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-[57px]">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="link-underline text-base leading-6">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto hidden items-center gap-[30px] lg:ml-[44px] lg:flex">
          <a href="#" className="btn-outline-forest h-[42px] w-[118px] !px-0">Contact us</a>
          <a href="#" className="btn-forest h-[42px] w-[171px] !px-0">Download the app</a>
        </div>

        <button
          type="button"
          className="-mr-2 ml-auto grid size-11 place-items-center rounded-full lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-6" aria-hidden="true">
            <span className={`absolute left-0 h-0.5 w-6 rounded bg-forest transition-all duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute top-1.5 left-0 h-0.5 w-6 rounded bg-forest transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 h-0.5 w-6 rounded bg-forest transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-[grid-template-rows,opacity,visibility] duration-400 ease-out-soft lg:hidden ${
          open ? 'visible grid-rows-[1fr] opacity-100' : 'invisible pointer-events-none grid-rows-[0fr] opacity-0'
        }`}
        inert={!open}
      >
        <div className="min-h-0">
          <ul className="container-x flex flex-col pt-2">
            {navLinks.map((l) => (
              <li key={l.label} className="border-b border-forest/10">
                <a href={l.href} onClick={() => setOpen(false)} className="block py-4 text-lg">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="container-x flex flex-col gap-3 pt-6 pb-8 min-[420px]:flex-row">
            <a href="#" onClick={() => setOpen(false)} className="btn-outline-forest h-12 min-[420px]:flex-1">Contact us</a>
            <a href="#" onClick={() => setOpen(false)} className="btn-forest h-12 min-[420px]:flex-1">Download the app</a>
          </div>
        </div>
      </div>
    </header>
  )
}
