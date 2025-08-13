import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

type Shot = { src: string; alt: string }

const shots: Shot[] = [
  { src: 'src/images/plated-food.jpeg', alt: 'Plated meals' },
  { src: 'src/images/plated-food2.jpeg', alt: 'Fried rice, shrimps, and chicken' },
  { src: 'src/images/platter3.jpeg', alt: 'Corporate trays ready to serve' },
  { src: 'src/images/setup2.jpeg', alt: 'Breakfast Buffet Line Setup' },
  { src: 'src/images/setup3.jpeg', alt: 'Private event setups' },
  { src: 'src/images/shrimp-platter.jpeg', alt: 'Shrimp platter' },
  { src: 'src/images/platter-netherlands4.jpeg', alt: 'Snacks and small chops' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

export default function GalleryStrip() {
  const scroller = useRef<HTMLDivElement>(null)
  const [hasPrev, setHasPrev] = useState(false)
  const [hasNext, setHasNext] = useState(true)

  const updateArrows = () => {
    const el = scroller.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setHasPrev(scrollLeft > 8)
    setHasNext(scrollLeft < scrollWidth - clientWidth - 8)
  }

  useEffect(() => {
    updateArrows()
    const el = scroller.current
    if (!el) return
    const onScroll = () => updateArrows()
    el.addEventListener('scroll', onScroll, { passive: true })
    const onResize = () => updateArrows()
    window.addEventListener('resize', onResize)
    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const scrollBy = (dir: 'left' | 'right') => {
    const el = scroller.current
    if (!el) return
    const cardWidth = el.querySelector<HTMLLIElement>('li')?.getBoundingClientRect().width || 300
    const step = Math.round(cardWidth * 1.1) // ~one card per click
    el.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' })
  }

  // Convert vertical wheel to horizontal scroll for convenience
  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const el = scroller.current
    if (!el) return
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      el.scrollLeft += e.deltaY
      e.preventDefault()
    }
  }

  return (
    <section className="full-bleed bg-brand-surface/20">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-ink">From the Kitchen</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-6"
        >
          {/* Edge fades (above scroller, below arrows) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-brand-surface/20 to-transparent hidden sm:block z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-brand-surface/20 to-transparent hidden sm:block z-20" />

          {/* Arrow buttons (sit on top) */}
          {hasPrev && (
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollBy('left')}
              className="hidden sm:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2
                         h-10 w-10 rounded-full bg-brand-ink/80 text-white backdrop-blur hover:bg-brand-ink
                         focus:outline-none z-30 pointer-events-auto"
            >
              ‹
            </button>
          )}
          {hasNext && (
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollBy('right')}
              className="hidden sm:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2
                         h-10 w-10 rounded-full bg-brand-ink/80 text-white backdrop-blur hover:bg-brand-ink
                         focus:outline-none z-30 pointer-events-auto"
            >
              ›
            </button>
          )}

          {/* Scroller (under arrows) */}
          <div
            ref={scroller}
            onWheel={onWheel}
            tabIndex={0}
            className="relative z-10 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
            aria-label="Featured photos"
          >
            <ul className="flex gap-4 md:gap-6 px-1">
              {shots.map((s, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="snap-start flex-none w-[260px] md:w-[300px] lg:w-[340px]
                             rounded-2xl overflow-hidden bg-white border border-brand-surface"
                >
                  {/* Fixed-ratio image wrapper (uniform tiles) */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <img
                      src={s.src}
                      alt={s.alt}
                      loading="lazy"
                      draggable="false"
                      className="absolute inset-0 block w-full h-full object-cover object-center
                                 transition-transform duration-300 hover:scale-[1.03]"
                    />
                  </div>
                  {/* Fixed-height caption row */}
                  <div className="p-3 h-10 flex items-center">
                    <p className="text-sm text-slate-600 truncate w-full">{s.alt}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="mt-8">
          <a
            href="#"
            className="px-5 py-3 rounded-2xl border border-brand-surface hover:shadow-[var(--shadow-soft)] transition inline-block"
            aria-disabled="true"
            title="Full gallery coming soon"
          >
            View full gallery
          </a>
        </div>
      </div>
    </section>
  )
}
