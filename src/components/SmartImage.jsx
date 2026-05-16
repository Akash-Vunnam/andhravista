import { useCallback, useEffect, useState } from 'react'
import { AP_WIDE_FALLBACK } from '../data/imageRefs'

/**
 * Image with optional chained fallbacks. Masonry grids set useGlobalLastResort={false}
 * so many failed tiles do not all swap to the same global photo; per-tile lastResortSrc
 * still applies when provided.
 */
export default function SmartImage({
  src,
  fallbackSrc,
  lastResortSrc,
  useGlobalLastResort = true,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  fetchPriority,
  decoding = 'async',
  sizes,
  onLoad,
  ...rest
}) {
  const [active, setActive] = useState(src)

  useEffect(() => {
    // Reset chain when the primary URL changes (prop-driven).
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional sync of `active` to `src`
    setActive(src)
  }, [src])

  const handleError = useCallback(() => {
    setActive((current) => {
      if (current === src && fallbackSrc && fallbackSrc !== src) return fallbackSrc
      if (
        lastResortSrc &&
        current !== lastResortSrc &&
        (current === src || current === fallbackSrc)
      ) {
        return lastResortSrc
      }
      if (useGlobalLastResort && current !== AP_WIDE_FALLBACK) return AP_WIDE_FALLBACK
      return current
    })
  }, [src, fallbackSrc, lastResortSrc, useGlobalLastResort])

  return (
    <img
      src={active}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding={decoding}
      sizes={sizes}
      onError={handleError}
      onLoad={onLoad}
      className={className}
      {...rest}
    />
  )
}
