import PageHelmet from '../components/PageHelmet'
import Hero from '../components/Hero'
import QuickFacts from '../components/QuickFacts'
import DestinationCard from '../components/DestinationCard'
import Testimonials from '../components/Testimonials'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { placesFull } from '../data/places'

const preview = placesFull.slice(0, 3)

export default function HomePage() {
  return (
    <>
      <PageHelmet
        title="Explore Andhra Pradesh | Coast, Caves & Ghats"
        description="Premium travel guide to Andhra Pradesh—Visakhapatnam, Araku Valley, Borra & Belum caves, Tirumala, Horsley Hills—with itineraries, tips, and galleries."
      />
      <Hero />

      <section className="relative px-4 py-20 sm:px-6 lg:px-10" aria-labelledby="intro-heading">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-300">
              Welcome
            </p>
            <h2
              id="intro-heading"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
            >
              One state, many rhythms—curated like a boutique travel studio
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              We combine soft glass UI with research-backed copy so you can move from
              beach mornings to cave afternoons and hill-station sunsets without tab
              overload. Start with the highlights below, then open any destination for a
              full briefing.
            </p>
          </motion.div>
        </div>
      </section>

      <QuickFacts />

      <section className="relative px-4 py-24 sm:px-6 lg:px-10" aria-labelledby="featured-heading">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-500 dark:text-rose-300">
                Featured this season
              </p>
              <h2
                id="featured-heading"
                className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
              >
                Popular places preview
              </h2>
            </div>
            <Link
              to="/destinations"
              className="rounded-full border border-white/55 bg-white/45 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur-xl transition hover:bg-white/70 dark:border-white/10 dark:bg-slate-900/45 dark:text-slate-100"
            >
              View all destinations →
            </Link>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {preview.map((place, i) => (
              <DestinationCard key={place.id} place={place} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials sectionId="home-testimonials" />

      <section className="relative px-4 py-24 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/55 bg-gradient-to-br from-sky-500/15 via-violet-500/15 to-rose-400/15 p-10 text-center shadow-[0_32px_90px_-50px_rgba(56,189,248,0.45)] backdrop-blur-2xl dark:border-white/10 dark:from-sky-500/10 dark:via-violet-500/10 dark:to-rose-400/10"
        >
          <h2 className="font-display text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-white">
            Ready to shape your Andhra itinerary?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-600 dark:text-slate-300">
            Browse the full destination library, drift through the visual gallery, or
            message us with dates—we will point you to the right season and route.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/destinations"
              className="inline-flex rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-rose-400 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:scale-[1.03]"
            >
              Open destination library
            </Link>
            <Link
              to="/contact"
              className="inline-flex rounded-full border border-white/60 bg-white/50 px-8 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-100"
            >
              Plan with us
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}
