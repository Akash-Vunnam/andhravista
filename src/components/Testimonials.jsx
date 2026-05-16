import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/places'

export default function Testimonials({ sectionId = 'stories' }) {
  return (
    <section
      id={sectionId}
          aria-labelledby={`${sectionId}-heading`}
      className="relative scroll-mt-28 px-4 py-28 sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-600 dark:text-fuchsia-300">
            Visitor testimonials
          </p>
          <h2
            id={`${sectionId}-heading`}
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
          >
            Recent travellers on the Andhra circuit
          </h2>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            Quotes are illustrative composites based on common visitor feedback themes;
            your own story may differ—and we hope it does, in the best way.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative flex h-full flex-col rounded-[1.75rem] border border-white/55 bg-white/45 p-8 shadow-[0_28px_80px_-44px_rgba(236,72,153,0.3)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/50 dark:shadow-[0_28px_80px_-44px_rgba(99,102,241,0.28)]"
            >
              <Quote className="h-8 w-8 text-rose-300/90 dark:text-violet-400/90" aria-hidden />
              <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                “{t.quote}”
              </p>
              <footer className="mt-10 border-t border-white/50 pt-6 dark:border-white/10">
                <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                  {t.name}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
