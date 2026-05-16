import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHelmet from '../components/PageHelmet'
import SmartImage from '../components/SmartImage'
import { whyVisit } from '../data/places'
import { placePublicImage as p } from '../data/placeImagePaths'
import { Mountain, Palette, Heart } from 'lucide-react'

const cultureBlocks = [
  {
    title: 'Kuchipudi & village fairs',
    text: 'Classical dance and percussion still anchor village festivals—especially around coastal towns and Rayalaseema temple circuits.',
    icon: Palette,
  },
  {
    title: 'Coastal craft & cuisine',
    text: 'From net-repair harbours to spice-forward home kitchens, the Bay side of Andhra tastes boldly of chilli, tamarind, and the sea.',
    icon: Heart,
  },
  {
    title: 'Sacred geography',
    text: 'Seven hills at Tirumala, river shrines at Kapila Theertham, and cave hermitages remind travellers that faith here is woven into landscape—not confined to monuments.',
    icon: Mountain,
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHelmet
        title="About Andhra Pradesh Tourism"
        description="Culture, coast, and highlands—why Andhra Pradesh rewards slow travel, from Vizag’s museums to Araku coffee and Tirumala’s ghats."
      />

      <section className="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-10">
        <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-violet-300/40 blur-3xl dark:bg-violet-600/20" />
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] border border-white/55 shadow-2xl dark:border-white/10"
          >
            <SmartImage
              src={p('tirumala', 'tirumala-complex-courtyard.jpg')}
              fallbackSrc={p('tirumala', 'tirumala-pilgrims-courtyard.jpg')}
              lastResortSrc={p('tirumala', 'tirumala-night-lights.jpg')}
              alt="Sri Venkateswara Temple, Tirumala — temple and pilgrims"
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[4/3] w-full object-cover object-[center_28%] sm:object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-rose-400/20 mix-blend-overlay" />
          </motion.div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-300">
              About the state
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Andhra Pradesh tourism, re-framed
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Andhra balances long Bay of Bengal evenings with cool ghats and limestone
              depths. Amaravati’s Buddhist past, Vijayanagara-era forts, and a confident
              modern Visakhapatnam give travellers both nostalgia and now.
            </p>
            <Link
              to="/destinations"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-rose-400 px-8 py-3.5 text-sm font-semibold text-white shadow-lg"
            >
              Explore destinations
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-10" aria-labelledby="culture-heading">
        <div className="mx-auto max-w-6xl">
          <h2 id="culture-heading" className="text-center font-display text-3xl font-semibold text-slate-900 dark:text-white">
            Culture & living traditions
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {cultureBlocks.map((b, i) => (
              <motion.article
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-[1.75rem] border border-white/55 bg-white/45 p-7 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/45"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-violet-500 text-white">
                  <b.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-slate-900 dark:text-white">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{b.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-10" aria-labelledby="why-heading">
        <div className="mx-auto max-w-6xl">
          <h2 id="why-heading" className="text-center font-display text-3xl font-semibold text-slate-900 dark:text-white">
            Why visit Andhra Pradesh
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {whyVisit.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-[1.75rem] border border-white/55 bg-gradient-to-br from-white/55 via-sky-50/40 to-rose-50/40 p-8 backdrop-blur-2xl dark:border-white/10 dark:from-slate-900/55 dark:via-slate-900/35 dark:to-indigo-950/40"
              >
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-28 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-64 overflow-hidden rounded-[1.75rem] shadow-xl md:h-80"
          >
            <SmartImage
              src={p('rkBeach', 'sunrise-at-r-k-beach (1).jpg')}
              fallbackSrc={p('rkBeach', 'that-submarine-view.jpg')}
              alt="RK Beach (Ramakrishna Beach), Visakhapatnam"
              width={1100}
              height={733}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="h-64 overflow-hidden rounded-[1.75rem] shadow-xl md:h-80"
          >
            <SmartImage
              src={p('araku', 'araku-valley (4).jpg')}
              fallbackSrc={p('araku', 'araku-valley.jpg')}
              alt="Araku Valley hill station view, Andhra Pradesh"
              width={1100}
              height={733}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </div>
      </section>
    </>
  )
}
