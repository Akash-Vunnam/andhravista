import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHelmet from '../components/PageHelmet'
import DestinationCard from '../components/DestinationCard'
import { placesFull } from '../data/places'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

function searchBlob(p) {
  return [p.name, p.location, p.description, p.tag, ...(p.famousFor || []), ...(p.tips || [])]
    .join(' ')
    .toLowerCase()
}

export default function DestinationsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const urlQuery = searchParams.get('q') ?? ''

  const filtered = useMemo(() => {
    const q = urlQuery.trim().toLowerCase()
    if (!q) return placesFull
    return placesFull.filter((p) => searchBlob(p).includes(q))
  }, [urlQuery])

  return (
    <>
      <PageHelmet
        title="Destinations | Explore Andhra Pradesh"
        description="All flagship Andhra Pradesh destinations—Araku Valley, Borra Caves, RK Beach, Tirumala, Belum Caves, Horsley Hills—with photos and deep-dive pages."
      />
      <section className="relative px-4 pb-28 pt-10 sm:px-6 lg:px-10" aria-labelledby="dest-heading">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-300">
              Destination library
            </p>
            <h1
              id="dest-heading"
              className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white"
            >
              Andhra Pradesh, place by place
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-slate-600 dark:text-slate-300">
              Each card opens a dedicated page with seasonal advice, food notes, nearby
              add-ons, galleries, and map links—designed for premium trip planning.
            </p>
          </motion.div>

          <div className="relative mx-auto mt-14 max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={urlQuery}
              onChange={(e) => {
                const v = e.target.value
                setSearchParams(v ? { q: v } : {}, { replace: true })
              }}
              placeholder="Search coast, cave, temple, coffee…"
              className="w-full rounded-full border border-white/55 bg-white/55 py-3.5 pl-11 pr-4 text-sm text-slate-800 shadow-inner outline-none ring-sky-400/25 focus:ring-2 dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-100"
              aria-label="Filter destinations"
            />
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((place, i) => (
              <DestinationCard key={place.id} place={place} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-16 text-center text-sm text-slate-500">No matches—try clearing the search.</p>
          )}
        </div>
      </section>
    </>
  )
}
