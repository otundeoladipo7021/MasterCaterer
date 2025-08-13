import { motion } from 'framer-motion'

export default function QuoteStatsBand() {
  return (
    <section className="full-bleed bg-brand-surface/20">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-ink">You’re in good hands</h2>

        <div className="mt-6 grid gap-8 md:grid-cols-3 items-start">
          {/* Big testimonial (edit this text anytime) */}
          <motion.blockquote
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 text-xl md:text-2xl leading-relaxed text-brand-ink"
          >
            “The Jollof was a showstopper and service was flawless from setup to cleanup.
            Our guests are still talking about it!”
            <footer className="mt-4 text-sm text-brand-ink/70">— Placeholder Name, Corporate Event</footer>
          </motion.blockquote>

          {/* Three simple stats (no cards, no images) */}
          <div className="grid grid-cols-3 md:grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: 0.05 }}
            >
              <div className="text-3xl font-extrabold text-brand-primary">250+</div>
              <div className="text-sm text-brand-ink/70">Events catered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              <div className="text-3xl font-extrabold text-brand-primary">5★</div>
              <div className="text-sm text-brand-ink/70">Avg. client rating</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: 0.15 }}
            >
              <div className="text-3xl font-extrabold text-brand-primary">24h</div>
              <div className="text-sm text-brand-ink/70">Response time</div>
            </motion.div>
          </div>
        </div>

        {/* Optional CTA strip under (kept light) */}
        <div className="mt-10">
          <a
            href="/contact"
            className="inline-block px-5 py-3 rounded-2xl bg-brand-primary text-white shadow-[var(--shadow-soft)] hover:translate-y-[-1px] transition"
          >
            Get a custom quote
          </a>
        </div>
      </div>
    </section>
  )
}
