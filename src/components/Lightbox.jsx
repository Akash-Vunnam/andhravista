import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useCallback } from 'react'
import SmartImage from './SmartImage'

/**
 * Full-screen lightbox for gallery images.
 * items: { src, alt, fallbackSrc?, lastResortSrc? }[]
 */
export default function Lightbox({ items, index, open, onClose, onPrev, onNext }) {
  const handleKey = useCallback(
    (e) => {
      if (!open) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [open, onClose, onPrev, onNext],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!items || items.length === 0) return null
  const item = items[index]
  if (!item) return null

  const showNav = items.length > 1

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[500] flex items-center justify-center bg-slate-950/92 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}
        >
          {/* ── Close button ── */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onClose() }}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25 sm:right-6 sm:top-6"
            aria-label="Close preview"
          >
            <X className="h-5 w-5" />
          </button>

          {/* ── Left arrow ── */}
          {showNav && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onPrev() }}
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25 sm:left-6"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* ── Image container ── */}
          <motion.div
            initial={{ scale: 0.93, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.93, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-14 flex max-h-[92vh] max-w-[92vw] flex-col items-center sm:mx-20"
            onClick={(e) => e.stopPropagation()}
          >
            <SmartImage
              key={`lb-${item.src}-${index}`}
              src={item.src}
              fallbackSrc={item.fallbackSrc}
              lastResortSrc={item.lastResortSrc}
              alt={item.alt}
              width={1600}
              height={1067}
              loading="eager"
              decoding="async"
              sizes="(max-width: 1920px) 92vw, 1600px"
              className="max-h-[82vh] w-auto max-w-full rounded-2xl object-contain shadow-[0_32px_80px_-20px_rgba(0,0,0,0.7)]"
            />
            {/* Caption */}
            <p className="mt-4 text-center text-sm text-white/75 px-4">{item.alt}</p>
            {/* Counter */}
            {showNav && (
              <p className="mt-2 text-xs text-white/45">
                {index + 1} / {items.length}
              </p>
            )}
          </motion.div>

          {/* ── Right arrow ── */}
          {showNav && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onNext() }}
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25 sm:right-6"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
