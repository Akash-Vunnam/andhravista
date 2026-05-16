import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SmartImage from './SmartImage'

/** Premium destination card for listing grids. */
export default function DestinationCard({ place, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-[1.85rem] border border-white/55 bg-white/40 shadow-[0_28px_90px_-48px_rgba(14,165,233,0.4)] backdrop-blur-2xl transition-shadow duration-500 hover:shadow-[0_32px_100px_-40px_rgba(167,139,250,0.38)] dark:border-white/10 dark:bg-slate-900/45 dark:shadow-[0_28px_90px_-48px_rgba(99,102,241,0.32)]"
    >
      <Link to={`/destinations/${place.id}`} className="relative block aspect-[16/10] overflow-hidden">
        <SmartImage
          src={place.image}
          fallbackSrc={place.imageFallback}
          lastResortSrc={place.imageLastResort}
          alt={place.imageAlt || place.name}
          width={1200}
          height={750}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={
            place.id === 'tirumala'
              ? 'h-full w-full object-cover object-[center_24%] sm:object-[center_30%] transition duration-700 group-hover:scale-110'
              : 'h-full w-full object-cover object-center transition duration-700 group-hover:scale-110'
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90" />
        <span className="absolute left-4 top-4 rounded-full border border-white/35 bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
          {place.tag}
        </span>
        <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-md transition group-hover:scale-110">
          <ArrowUpRight className="h-5 w-5" aria-hidden />
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h2 className="font-display text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
          <Link to={`/destinations/${place.id}`} className="transition hover:text-sky-600 dark:hover:text-sky-300">
            {place.name}
          </Link>
        </h2>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {place.description}
        </p>
        <Link
          to={`/destinations/${place.id}`}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-rose-400 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:scale-[1.02] dark:shadow-violet-500/25"
        >
          Explore
        </Link>
      </div>
    </motion.article>
  )
}
