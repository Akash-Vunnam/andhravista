import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/destinations', label: 'Destinations' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const linkClass = ({ isActive }) =>
  [
    'rounded-full px-3 py-2 text-[11px] font-semibold transition-colors sm:text-xs xl:text-sm xl:px-3.5',
    isActive
      ? 'bg-gradient-to-r from-sky-500/25 via-violet-500/20 to-rose-400/25 text-slate-900 shadow-inner shadow-sky-500/10 dark:text-white dark:from-sky-500/15 dark:via-violet-500/15 dark:to-rose-400/10'
      : 'text-slate-600 hover:bg-white/55 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white',
  ].join(' ')

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const glass = scrolled
    ? 'border-white/50 bg-white/60 shadow-[0_18px_60px_-28px_rgba(14,165,233,0.35)] dark:border-white/10 dark:bg-slate-950/60 dark:shadow-[0_18px_60px_-28px_rgba(99,102,241,0.35)]'
    : 'border-white/40 bg-white/30 dark:border-white/10 dark:bg-slate-950/30'

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10"
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center gap-3 rounded-2xl border px-3 py-2.5 backdrop-blur-2xl transition-all duration-500 sm:px-5 ${glass}`}
          aria-label="Primary"
        >
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-2 rounded-xl px-1 py-1"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-violet-400 to-rose-300 font-display text-sm font-bold text-white shadow-lg shadow-sky-500/30 transition-transform duration-300 group-hover:scale-105">
              AP
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-tight text-slate-800 sm:block dark:text-white">
              Explore Andhra
            </span>
          </Link>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/45 text-slate-700 transition hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20 dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-100"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/45 text-slate-800 lg:hidden dark:border-white/10 dark:bg-slate-900/50 dark:text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-gradient-to-b from-white/95 to-sky-50/95 px-6 pb-10 pt-24 backdrop-blur-xl dark:from-slate-950/98 dark:to-indigo-950/95 lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32 }}
          >
            <div className="flex flex-col gap-1">
              {nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <NavLink
                    to={item.to}
                    end={item.end}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      [
                        'block rounded-2xl px-4 py-3.5 text-lg font-medium transition',
                        isActive
                          ? 'bg-white/80 text-sky-700 dark:bg-white/10 dark:text-sky-200'
                          : 'text-slate-700 hover:bg-white/70 dark:text-slate-100 dark:hover:bg-white/10',
                      ].join(' ')
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
