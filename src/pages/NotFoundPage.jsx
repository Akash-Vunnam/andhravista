import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Compass } from 'lucide-react'
import PageHelmet from '../components/PageHelmet'

export default function NotFoundPage() {
  return (
    <>
      <PageHelmet title="Page not found (404)" description="The page you requested does not exist on Explore Andhra Pradesh." />
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-lg rounded-[2rem] border border-white/55 bg-white/50 p-12 shadow-[0_40px_100px_-50px_rgba(56,189,248,0.45)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/55 dark:shadow-[0_40px_100px_-50px_rgba(99,102,241,0.35)]"
        >
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-sky-600 dark:text-sky-300">404</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-slate-900 dark:text-white">This view drifted off the map</h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            The URL may be mistyped, or the page moved. Let’s bring you back to soft skies
            and curated Andhra routes.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-rose-400 px-7 py-3.5 text-sm font-semibold text-white shadow-lg"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/55 px-7 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-100"
            >
              <Compass className="h-4 w-4" />
              Destinations
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}
