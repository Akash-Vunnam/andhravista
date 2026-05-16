import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()
  const parallaxRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2])

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-4 pb-24 pt-28 sm:px-6 sm:pb-28 lg:px-10 lg:pb-32"
    >
      {/* ── Permanent CSS gradient background – no image load, no flicker ── */}
      <div ref={parallaxRef} className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 min-h-full will-change-transform">

          {/* Light mode: base pastel gradient — warm white → pale sky → soft lavender → blush */}
          <div
            className="absolute inset-0 dark:hidden"
            style={{
              background:
                'linear-gradient(155deg, #f8fbff 0%, #e0f2fe 22%, #dbeafe 40%, #ede9fe 62%, #fce7f3 82%, #f0f9ff 100%)',
            }}
          />

          {/* Light mode: misty ocean haze rising from bottom */}
          <div
            className="absolute inset-0 dark:hidden"
            style={{
              background:
                'linear-gradient(to top, rgba(186,230,255,0.70) 0%, rgba(224,242,254,0.45) 28%, transparent 60%)',
            }}
          />

          {/* Light mode: bright centre-top glow (simulates sunlight/sky) */}
          <div
            className="absolute inset-0 dark:hidden"
            style={{
              background:
                'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(255,255,255,0.90) 0%, transparent 72%)',
            }}
          />

          {/* Light mode: right-side lavender accent */}
          <div
            className="absolute inset-0 dark:hidden"
            style={{
              background:
                'radial-gradient(ellipse 55% 65% at 92% 38%, rgba(216,180,254,0.30) 0%, transparent 65%)',
            }}
          />

          {/* Light mode: left-side soft cyan tint */}
          <div
            className="absolute inset-0 dark:hidden"
            style={{
              background:
                'radial-gradient(ellipse 50% 70% at 0% 50%, rgba(186,230,255,0.28) 0%, transparent 65%)',
            }}
          />

          {/* Dark mode: deep navy base */}
          <div
            className="absolute inset-0 hidden dark:block"
            style={{
              background:
                'linear-gradient(155deg, #0f172a 0%, #0c1a2e 30%, #1e1b4b 60%, #0f172a 100%)',
            }}
          />

          {/* Dark mode: subtle teal glow from bottom */}
          <div
            className="absolute inset-0 hidden dark:block"
            style={{
              background:
                'linear-gradient(to top, rgba(8,145,178,0.18) 0%, transparent 50%)',
            }}
          />

          {/* Dark mode: violet radial accent */}
          <div
            className="absolute inset-0 hidden dark:block"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 85% 30%, rgba(109,40,217,0.15) 0%, transparent 70%)',
            }}
          />

        </motion.div>
      </div>

      {/* ── Ambient floating orbs ── */}
      <div
        className="pointer-events-none absolute left-[8%] top-[22%] h-40 w-40 rounded-full blur-3xl animate-float"
        style={{ backgroundColor: 'rgba(147,197,253,0.45)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[10%] top-[30%] h-48 w-48 rounded-full blur-3xl animate-float-delayed"
        style={{ backgroundColor: 'rgba(196,181,253,0.38)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[20%] left-[28%] h-36 w-36 rounded-full blur-3xl dark:hidden"
        style={{ backgroundColor: 'rgba(186,230,255,0.50)', animation: 'float 8s ease-in-out 2s infinite' }}
        aria-hidden
      />

      {/* ── Hero content ── */}
      <motion.div
        style={{ opacity }}
        className="relative mx-auto flex w-full max-w-6xl justify-center xl:max-w-7xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full max-w-3xl flex-col items-start text-left lg:items-center lg:text-center"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/55 bg-white/45 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 shadow-lg shadow-sky-500/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/45 dark:text-slate-200">
            <Sparkles className="h-3.5 w-3.5 text-sky-500" aria-hidden />
            Premium Andhra tourism guide · 2026
          </p>

          <h1
            id="hero-heading"
            className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.35rem] dark:text-white"
          >
            Explore Andhra Pradesh —{' '}
            <span className="bg-gradient-to-r from-sky-600 via-violet-500 to-rose-400 bg-clip-text text-transparent dark:from-sky-300 dark:via-violet-300 dark:to-rose-200">
              coast, caves &amp; ghats
            </span>{' '}
            in one relaxed trip.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-700 lg:mx-auto dark:text-slate-200">
            Plan beaches in Visakhapatnam, coffee mornings in Araku, limestone drama at
            Borra and Belum, and a Tirumala darshan—with timings, tips, and maps on
            dedicated pages built for slow browsing.
          </p>

          <div className="mt-11 flex w-full flex-wrap items-center justify-start gap-4 lg:justify-center">
            <Link
              to="/destinations"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-rose-400 px-8 py-4 text-sm font-semibold text-white shadow-[0_22px_55px_-12px_rgba(56,189,248,0.55)] transition hover:scale-[1.03] hover:shadow-[0_26px_60px_-12px_rgba(167,139,250,0.5)]"
            >
              Browse destinations
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
            </Link>
            <button
              type="button"
              onClick={() => navigate('/destinations')}
              className="rounded-full border border-white/60 bg-white/50 px-7 py-4 text-sm font-semibold text-slate-800 backdrop-blur-xl transition hover:border-sky-300/80 hover:bg-white/75 dark:border-white/15 dark:bg-slate-900/45 dark:text-slate-100 dark:hover:border-violet-400/40"
            >
              Discover Places
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 2.4, repeat: Infinity }}
        aria-hidden
      >
        <div className="h-12 w-7 rounded-full border border-white/50 bg-white/35 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/35" />
      </motion.div>
    </section>
  )
}
