import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/about',    label: 'About' },
  { href: '/gallery',  label: 'Gallery' },
  { href: '/contact',  label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      {/* Top ribbon — gradient + centered logo + tagline */}
      <div className="bg-gradient-to-b from-brand-deep to-brand-primary border-b border-brand-ink/15">
        <div className="mx-auto max-w-6xl px-4 py-4 md:py-5 flex flex-col items-center gap-2">
          <motion.a
            href="/"
            className="block w-40 md:w-52"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src="src/components/logo.png"
              alt="MasterCaterer logo"
              className="w-full h-auto rounded"
              loading="lazy"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
            />
          </motion.a>

          {/* Tagline (edit this text anytime) */}
          <motion.p
            className="text-white/90 text-sm md:text-base tracking-wide text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            Authentic Nigerian Cuisine...
          </motion.p>
        </div>
      </div>

      

      {/* Dark nav bar */}
      <div className={`bg-brand-ink transition-shadow ${scrolled ? 'shadow-[var(--shadow-soft)]' : ''}`}>
        <nav className="mx-auto max-w-6xl px-4">
          <div className="flex items-center md:justify-center justify-between py-3">
            {/* (Desktop brand text removed to keep links perfectly centered) */}

            {/* Desktop links */}
            <ul className="hidden md:flex gap-12 text-white">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="uppercase tracking-wide link-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white text-2xl"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </nav>

        {/* Mobile slide-down menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="px-6 pb-4 space-y-3 text-white">
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="block py-2 text-lg" onClick={() => setOpen(false)}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
