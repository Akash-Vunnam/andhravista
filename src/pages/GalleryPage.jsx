import { useCallback, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import PageHelmet from '../components/PageHelmet'
import Lightbox from '../components/Lightbox'
import SmartImage from '../components/SmartImage'
import { getAllGalleryItems } from '../data/places'

export default function GalleryPage() {
  const items = getAllGalleryItems()
  const [lbOpen, setLbOpen] = useState(false)
  const [lbIndex, setLbIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    if (!q) return items
    return items.filter(item => item.alt.toLowerCase().includes(q))
  }, [items, searchQuery])

  const openAt = (i) => {
    setLbIndex(i)
    setLbOpen(true)
  }

  const close = () => setLbOpen(false)
  const prev = useCallback(() => {
    setLbIndex((i) => (i - 1 + filteredItems.length) % filteredItems.length)
  }, [filteredItems.length])
  const next = useCallback(() => {
    setLbIndex((i) => (i + 1) % filteredItems.length)
  }, [filteredItems.length])

  return (
    <>
      <PageHelmet
        title="Travel Gallery | Explore Andhra Pradesh"
        description="Masonry gallery of Andhra Pradesh travel moods—coast, ghats, caves, and temples—with lightbox previews."
      />
      <section className="px-4 pb-28 pt-12 sm:px-6 lg:px-10" aria-labelledby="gallery-page-heading">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-600 dark:text-violet-300">
              Visual journey
            </p>
            <h1
              id="gallery-page-heading"
              className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white"
            >
              Masonry gallery
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
              Hover for lift and glow. Click any tile for a cinematic lightbox—keyboard
              arrows and Escape supported.
            </p>
          </motion.div>

          <div className="relative mx-auto mt-14 max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search images by destination or keyword…"
              className="w-full rounded-full border border-white/55 bg-white/55 py-3.5 pl-11 pr-4 text-sm text-slate-800 shadow-inner outline-none ring-sky-400/25 focus:ring-2 dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-100"
              aria-label="Filter gallery"
            />
          </div>

          <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filteredItems.map((img, i) => (
              <motion.button
                type="button"
                key={`gallery-${img.src}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
                onClick={() => openAt(i)}
                className="group mb-4 w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/55 bg-white/30 text-left shadow-lg shadow-sky-500/10 outline-none ring-offset-2 ring-offset-transparent transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(56,189,248,0.35)] focus-visible:ring-2 focus-visible:ring-sky-400 dark:border-white/10 dark:bg-slate-900/35 dark:shadow-violet-500/10 dark:hover:shadow-[0_24px_60px_-30px_rgba(99,102,241,0.35)]"
              >
                <span className="relative block w-full min-h-[11rem] sm:min-h-[13rem]">
                  <SmartImage
                    src={img.src}
                    fallbackSrc={img.fallbackSrc}
                    lastResortSrc={img.lastResortSrc}
                    useGlobalLastResort={false}
                    alt={img.alt}
                    width={1000}
                    height={667}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="min-h-[11rem] w-full object-cover object-center transition duration-700 group-hover:scale-110 group-hover:brightness-105 sm:min-h-[13rem]"
                  />
                  <span className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                    <span className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                    <span className="absolute inset-0 shadow-[inset_0_0_60px_rgba(56,189,248,0.2)] dark:shadow-[inset_0_0_60px_rgba(167,139,250,0.25)]" />
                  </span>
                </span>
              </motion.button>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <p className="mt-16 text-center text-sm text-slate-500">No images match your search.</p>
          )}
        </div>
      </section>

      <Lightbox items={filteredItems} index={lbIndex} open={lbOpen} onClose={close} onPrev={prev} onNext={next} />
    </>
  )
}
