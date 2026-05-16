import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useCallback } from 'react'
import { ArrowLeft, CalendarRange, MapPin, UtensilsCrossed, Sparkles, Lightbulb, Compass, ImageIcon } from 'lucide-react'
import PageHelmet from '../components/PageHelmet'
import SmartImage from '../components/SmartImage'
import Lightbox from '../components/Lightbox'
import { getPlaceBySlug } from '../data/places'

export default function DestinationDetailPage() {
  const { slug } = useParams()
  const place = getPlaceBySlug(slug || '')

  const [lbOpen, setLbOpen] = useState(false)
  const [lbIndex, setLbIndex] = useState(0)

  if (!place) {
    return (
      <>
        <PageHelmet title="Destination not found" description="No destination matches this link." />
        <section className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-20 text-center">
          <h1 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">Destination not found</h1>
          <p className="mt-3 max-w-md text-sm text-slate-600 dark:text-slate-300">
            Check the URL slug, or return to the full library.
          </p>
          <Link
            to="/destinations"
            className="mt-8 inline-flex rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-8 py-3 text-sm font-semibold text-white"
          >
            ← All destinations
          </Link>
        </section>
      </>
    )
  }

  const desc =
    `${place.name} — travel guide for Andhra Pradesh. ${place.description} Best season notes, food, nearby sights, and gallery.`

  const reservedHero = new Set(
    [place.image, place.imageFallback, place.imageLastResort].filter(Boolean),
  )
  const miniGallery = (place.detailGallery || []).filter((img) => !reservedHero.has(img.src))

  const openAt = (i) => { setLbIndex(i); setLbOpen(true) }
  const close = () => setLbOpen(false)
  const prev = useCallback(() => setLbIndex((i) => (i - 1 + miniGallery.length) % miniGallery.length), [miniGallery.length])
  const next = useCallback(() => setLbIndex((i) => (i + 1) % miniGallery.length), [miniGallery.length])

  return (
    <>
      <PageHelmet title={place.name} description={desc} />
      <article>
        <header className="relative isolate flex min-h-[min(52vh,100dvh)] flex-col justify-start overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-10">
          <div className="pointer-events-none absolute inset-0 -z-10 min-h-[min(52vh,100dvh)]">
            <SmartImage
              src={place.image}
              fallbackSrc={place.imageFallback}
              lastResortSrc={place.imageLastResort}
              alt={place.imageAlt || place.name}
              width={1920}
              height={1080}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              sizes="100vw"
              className={
                place.id === 'tirumala'
                  ? 'absolute inset-0 h-full min-h-[min(52vh,100dvh)] w-full object-cover object-[center_22%] sm:object-[center_28%] lg:object-[center_32%]'
                  : 'absolute inset-0 h-full min-h-[min(52vh,100dvh)] w-full object-cover object-[center_32%] sm:object-center'
              }
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/55 to-violet-900/35" />
          </div>
          <div className="mx-auto max-w-6xl">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/25"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              All destinations
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mt-8 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl"
            >
              {place.name}
            </motion.h1>
            <p className="mt-4 flex items-start gap-2 text-sm text-white/85 sm:text-base">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden />
              {place.location}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-6xl space-y-16 px-4 py-20 sm:px-6 lg:px-10">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/55 bg-white/45 p-8 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/50"
          >
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">Overview</h2>
            <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {place.longDescription || place.description}
            </p>
          </motion.section>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[1.75rem] border border-white/55 bg-white/40 p-7 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/45"
            >
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-slate-900 dark:text-white">
                <CalendarRange className="h-5 w-5 text-sky-500" aria-hidden />
                Best time to visit
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{place.bestTime}</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="rounded-[1.75rem] border border-white/55 bg-white/40 p-7 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/45"
            >
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-slate-900 dark:text-white">
                <UtensilsCrossed className="h-5 w-5 text-violet-500" aria-hidden />
                Famous foods
              </h3>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-600 marker:text-violet-400 dark:text-slate-300">
                {(place.famousFoods || []).map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </motion.section>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[1.75rem] border border-white/55 bg-white/40 p-7 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/45"
            >
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-slate-900 dark:text-white">
                <Compass className="h-5 w-5 text-cyan-500" aria-hidden />
                Nearby attractions
              </h3>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-600 marker:text-cyan-500 dark:text-slate-300">
                {place.nearbyAttractions.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[1.75rem] border border-white/55 bg-white/40 p-7 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/45"
            >
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-slate-900 dark:text-white">
                <Lightbulb className="h-5 w-5 text-rose-500" aria-hidden />
                Travel tips
              </h3>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-600 marker:text-rose-400 dark:text-slate-300">
                {place.tips.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </motion.section>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[1.75rem] border border-white/55 bg-gradient-to-br from-violet-50/80 to-sky-50/80 p-7 dark:border-white/10 dark:from-slate-900/60 dark:to-indigo-950/50"
          >
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-slate-900 dark:text-white">
              <Sparkles className="h-5 w-5 text-violet-500" aria-hidden />
              Fun facts
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {(place.funFacts || []).map((fact) => (
                <li
                  key={fact}
                  className="rounded-2xl border border-white/50 bg-white/50 px-4 py-3 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-200"
                >
                  {fact}
                </li>
              ))}
            </ul>
          </motion.section>

          <section aria-labelledby="gallery-mini-heading">
            <h2 id="gallery-mini-heading" className="flex items-center gap-2 font-display text-xl font-semibold text-slate-900 dark:text-white">
              <ImageIcon className="h-6 w-6 text-sky-500" aria-hidden />
              Image gallery
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Click any image to open full-screen preview</p>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
              {miniGallery.map((img, gi) => (
                <motion.button
                  type="button"
                  key={`${place.id}-gallery-${gi}`}
                  onClick={() => openAt(gi)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group overflow-hidden rounded-2xl border border-white/50 shadow-lg outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-sky-400 dark:border-white/10 cursor-pointer"
                  aria-label={`View ${img.alt} in full screen`}
                >
                  <SmartImage
                    src={img.src}
                    fallbackSrc={img.fallbackSrc}
                    lastResortSrc={img.lastResortSrc}
                    useGlobalLastResort={Boolean(img.lastResortSrc)}
                    alt={img.alt}
                    width={800}
                    height={533}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className={
                      place.id === 'tirumala'
                        ? 'aspect-[3/2] min-h-[10rem] w-full object-cover object-[center_30%] transition duration-500 group-hover:brightness-110 sm:min-h-0 sm:object-[center_25%]'
                        : 'aspect-[3/2] min-h-[10rem] w-full object-cover object-center transition duration-500 group-hover:brightness-110 sm:min-h-0'
                    }
                  />
                </motion.button>
              ))}
            </div>
          </section>

          <section className="rounded-[1.75rem] border border-dashed border-sky-300/60 bg-sky-50/40 p-10 text-center dark:border-violet-500/30 dark:bg-slate-900/40">
            <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Map</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Interactive map embed can be dropped here (Google Maps / Mapbox). For now, open directions in Google Maps:
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.mapsQuery)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg"
            >
              Open in Google Maps
            </a>
          </section>
        </div>
      </article>

      <Lightbox
        items={miniGallery}
        index={lbIndex}
        open={lbOpen}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </>
  )
}
