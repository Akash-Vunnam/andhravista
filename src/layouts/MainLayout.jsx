import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTopOnRoute from '../components/ScrollToTopOnRoute'
import ScrollToTopButton from '../components/ScrollToTopButton'
import RouteProgress from '../components/RouteProgress'

/** Shell: ambient background, sticky nav, animated outlet, footer. */
export default function MainLayout() {
  const { pathname } = useLocation()

  return (
    <>
      <ScrollToTopOnRoute />
      <RouteProgress />
      <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-gradient-to-br from-sky-50 via-violet-50/90 to-rose-50/95 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
        <div
          className="pointer-events-none fixed inset-0 -z-10 animate-gradient-shift opacity-80 dark:hidden"
          style={{
            background:
              'linear-gradient(125deg, #e0f2fe 0%, #ede9fe 40%, #ffe4e6 70%, #ecfeff 100%)',
            backgroundSize: '200% 200%',
          }}
        />
        <div
          className="pointer-events-none fixed inset-0 -z-10 hidden animate-gradient-shift opacity-90 dark:block"
          style={{
            background:
              'linear-gradient(125deg, rgb(15 23 42) 0%, rgb(30 27 75 / 0.95) 45%, rgb(15 23 42) 100%)',
            backgroundSize: '200% 200%',
          }}
        />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-24 focus:z-[200] focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow-xl dark:focus:bg-slate-800 dark:focus:text-white"
        >
          Skip to main content
        </a>

        <Navbar />

        <motion.main
          id="main-content"
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>

        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  )
}
