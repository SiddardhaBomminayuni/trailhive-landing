import { useEffect, useRef } from 'react'

/** Adds `is-visible` to the element the first time it scrolls into view. */
export default function useReveal({ threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        // also reveal anything already scrolled past (fast scrolls, anchor jumps)
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          el.classList.add('is-visible')
          io.disconnect()
        }
      },
      { threshold: [0, threshold], rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin])

  return ref
}
