import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

/** Floating button — scrolls the window to the top (same route). */
export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.35 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollUp}
          className="fixed bottom-6 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/55 text-slate-800 shadow-[0_18px_50px_-12px_rgba(56,189,248,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 dark:text-white dark:shadow-[0_18px_50px_-12px_rgba(99,102,241,0.4)] sm:bottom-10 sm:right-8"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
