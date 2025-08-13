import { motion } from 'framer-motion'

type Service = {
  slug: string
  title: string
  blurb: string
  image: string
  alt: string
}

const services: Service[] = [
  {
    slug: 'corporate',
    title: 'Corporate Catering',
    blurb: 'Board meetings to conferences with reliable delivery and elegant presentation.',
    image: 'src/components/corpcatering.jpeg', // <-- put a placeholder image
    alt: 'Corporate catering buffet',
  },
  {
    slug: 'school-meals',
    title: 'School Meals',
    blurb: 'Nutritious, kid-approved menus with allergy-aware options.',
    image: 'src/components/school-catering.jpg', // <-- put a placeholder image
    alt: 'School meals trays',
  },
  {
    slug: 'private-events',
    title: 'Private Events',
    blurb: 'Birthdays, weddings, and intimate gatherings, crafted to your taste.',
    image: 'src/components/private-catering.jpeg', // <-- put a placeholder image
    alt: 'Private dining table spread',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

export default function Services() {
  return (
    // Dark “ink” bar section (inverted)
    <section className="full-bleed bg-brand-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-extrabold">Our Services</h2>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.li
              key={s.slug}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="group rounded-2xl bg-white text-brand-ink overflow-hidden border border-brand-surface"
            >
              <a href={`/services/${s.slug}`} className="block h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-brand-primary font-medium">
                    Learn more <span aria-hidden>→</span>
                  </span>
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
