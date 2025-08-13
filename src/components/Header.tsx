import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { withBase, base } from '../lib/path'

const LINKS = [
  { href: withBase('services'), label: 'Services' },
  { href: withBase('about'),    label: 'About'    },
  { href: withBase('gallery'),  label: 'Gallery'  },
  { href: withBase('contact'),  label: 'Contact'  },
]

// Public logo (in /public/logo.png)
const logoUrl = withBase('logo.png')

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <div className="bg-gradient-to-b from-brand-deep to-brand-primary border-b border-brand-ink/15">
        <div className="mx-auto max-w-6xl px-4 py-6 md:py-8 flex flex-col items-center gap-2">
          <motion.a
            href={base}  // ← home link is the normalized base
            className="block w-32 md:w-40"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img src={logoUrl} alt="MasterCaterer logo" className="w-full h-auto rounded" loading="lazy" />
          </motion.a>
          <motion.p className="text-white/90 text-sm md:text-base tracking-wide text-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.4 }}>
            Authentic Nigerian Cuisine
          </motion.p>
        </div>
      </div>

      
      <div className="bg-brand-ink">
        <nav className="mx-auto max-w-6xl px-4">
          <div className="flex items-center md:justify-center justify-between py-3">
            <ul className="hidden md:flex gap-12 text-white">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="uppercase tracking-wide link-underline">{l.label}</a>
                </li>
              ))}
            </ul>
            <button className="md:hidden text-white text-2xl" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
              {open ? '✕' : '☰'}
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="md:hidden overflow-hidden">
              <ul className="px-6 pb-4 space-y-3 text-white">
                {LINKS.map((l) => (
                  <li key={l.href}><a href={l.href} className="block py-2 text-lg" onClick={() => setOpen(false)}>{l.label}</a></li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
