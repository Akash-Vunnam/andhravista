import { motion } from 'framer-motion'
import { quickFacts } from '../data/places'

export default function QuickFacts() {
  return (
    <section
      id="quick-facts"
      aria-labelledby="facts-heading"
      className="relative scroll-mt-28 px-4 py-24 sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-300">
            Quick facts
          </p>
          <h2
            id="facts-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
          >
            Andhra Pradesh at a glance
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-600 dark:text-slate-300">
            Handy reference points for itinerary planning—pair them with the destination
            cards below for depth.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="rounded-[1.75rem] border border-white/55 bg-gradient-to-br from-white/60 via-sky-50/35 to-violet-50/45 p-7 text-left shadow-[0_28px_85px_-40px_rgba(14,165,233,0.38)] backdrop-blur-2xl transition-shadow hover:shadow-[0_32px_90px_-36px_rgba(167,139,250,0.32)] dark:border-white/10 dark:from-slate-900/65 dark:via-slate-900/45 dark:to-indigo-950/55 dark:shadow-[0_28px_85px_-40px_rgba(79,70,229,0.28)]"
            >
              <p className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                {item.value}
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-800 dark:text-slate-100">
                {item.label}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {item.hint}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
