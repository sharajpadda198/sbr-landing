import * as React from "react"

/**
 * Small helper so we can avoid hard-coding framer-motion everywhere.
 * Returns true if the user prefers reduced motion.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false)

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = () => setReduced(!!mq.matches)

    onChange()
    mq.addEventListener?.("change", onChange)
    return () => mq.removeEventListener?.("change", onChange)
  }, [])

  return reduced
}
