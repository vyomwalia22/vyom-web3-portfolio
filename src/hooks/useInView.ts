import { useEffect, useRef, useState } from 'react'

/** Flips to true once the element enters the viewport, then stops observing. */
export function useInView<T extends Element>(rootMargin = '0px 0px -8% 0px') {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin, threshold: 0.08 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])

  return { ref, inView }
}
