import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="full-bleed bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16 grid md:grid-cols-12 gap-6 md:gap-10 items-center">
        {/* Left: text (layered above just in case) */}
        <div className="md:col-span-6 lg:col-span-5 z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            Experience the Passion for Great Food!
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-slate-600 max-w-prose"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.45 }}
          >
            From smoky Jollof to fluffy pounded yam with rich egusi soup.
            Corporate, school meals, and private events covered.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-3 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.35 }}
          >
            <a
              href="/contact"
              className="px-5 py-3 rounded-2xl text-white shadow-[var(--shadow-soft)] hover:translate-y-[-1px] transition bg-brand-primary"
            >
              Get a Quote
            </a>
            <a
              href="/gallery"
              className="px-5 py-3 rounded-2xl border border-brand-surface hover:shadow-[var(--shadow-soft)] transition"
            >
              View Gallery
            </a>
          </motion.div>
        </div>

        {/* Right: image (capped width, gentle nudge only) */}
        <div className="md:col-span-6 lg:col-span-7 md:justify-self-end">
          <motion.img
            src="src/components/Hero-image.jpeg"
            alt="Signature dishes"
            className="
              rounded-2xl shadow-[var(--shadow-soft)]
              w-full max-w-[520px] md:max-w-[600px] lg:max-w-[680px]
              md:translate-x-2 lg:translate-x-6 xl:translate-x-10
              object-cover
            "
            loading="lazy"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
          />
        </div>
      </div>
    </section>
  )
}
