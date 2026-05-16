import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

/** Slim top bar shown briefly on route changes (SPA “page load” feel). */
export default function RouteProgress() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const show = window.setTimeout(() => setVisible(true), 0)
    const hide = window.setTimeout(() => setVisible(false), 480)
    return () => {
      window.clearTimeout(show)
      window.clearTimeout(hide)
    }
  }, [pathname])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={pathname}
          className="pointer-events-none fixed left-0 right-0 top-0 z-[220] h-1 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="h-full w-full bg-gradient-to-r from-sky-400 via-violet-500 to-rose-400"
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
