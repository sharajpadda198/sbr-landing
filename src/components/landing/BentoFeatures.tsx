import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

const POINT_1_IMG = new URL("../../assets/point_1.jpg", import.meta.url).href
const POINT_2_IMG = new URL("../../assets/point_2.webp", import.meta.url).href
const POINT_3_IMG = new URL("../../assets/point_3.jpg", import.meta.url).href
const POINT_4_IMG = new URL("../../assets/point_4.jpg", import.meta.url).href
const POINT_5_IMG = new URL("../../assets/point_5.jpg", import.meta.url).href
const POINT_6_IMG = new URL("../../assets/point_6.avif", import.meta.url).href
const FALLBACK_IMG = new URL("../../assets/construction.jpg", import.meta.url).href

const FAILURES = [
  {
    number: "01",
    title: "Hidden costs",
    body: "Operational costs consistently exceed estimates — without clear visibility on why.",
    imageUrl: POINT_1_IMG,
  },
  {
    number: "02",
    title: "Output gap",
    body: "Feedstock input doesn’t translate into expected biogas output — and the gap remains unexplained.",
    imageUrl: POINT_2_IMG,
  },
  {
    number: "03",
    title: "No ground data",
    body: "No reliable, real-time data from ground-level operations.",
    imageUrl: POINT_3_IMG,
  },
  {
    number: "04",
    title: "Manual operations",
    body: "Critical workflows are still handled manually — leading to errors, delays, and inefficiencies.",
    imageUrl: POINT_4_IMG,
  },
  {
    number: "05",
    title: "Unstable supply",
    body: "Feedstock availability is unpredictable — driven by climate, seasonality, and market fluctuations.",
    imageUrl: POINT_5_IMG,
  },
  {
    number: "06",
    title: "No central control",
    body: "No centralized system connects ground operations to decision-making.",
    imageUrl: POINT_6_IMG,
  },
] as const

const FAILURE_LAYOUT = [
  "lg:col-span-4 lg:row-span-2",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-3 lg:row-span-1",
  "lg:col-span-3 lg:row-span-2",
  "lg:col-span-3 lg:row-span-1",
] as const

export function BentoFeatures() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const scrub = useMotionValue(0)

  // Scroll-scrubbed progress:
  // 0 when section hasn't entered viewport,
  // 1 when ~60% of the section height has entered the viewport (i.e., ~60% visible while entering).
  useEffect(() => {
    const el = sectionRef.current
    if (!el || typeof window === "undefined") return

    let raf = 0
    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 0
      const h = Math.max(1, rect.height)

      const enteredPx = vh - rect.top
      const targetPx = 0.6 * h
      const raw = enteredPx / Math.max(1, targetPx)
      const p = Math.max(0, Math.min(1, raw))
      scrub.set(p)
    }

    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      if (raf) window.cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [scrub])

  const gridY = useTransform(scrub, [0, 1], [72, 0])
  const gridOpacity = useTransform(scrub, [0, 1], [0, 1])

  // Preload bento images so decoding/network work doesn't stutter the first in-view animations.
  useEffect(() => {
    if (typeof window === "undefined") return

    const urls = FAILURES.map((f) => f.imageUrl)
    const preload = () => {
      for (const url of urls) {
        const img = new Image()
        img.src = url
      }
    }

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
      cancelIdleCallback?: (id: number) => void
    }

    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(preload, { timeout: 1500 })
      return () => w.cancelIdleCallback?.(id)
    }

    const t = window.setTimeout(preload, 350)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <section ref={sectionRef} className="bento-section py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <motion.h2
            className="mt-4 w-full text-balance font-black text-white leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4.4rem)" }}
          >
            Why Most CBG System Fails
          </motion.h2>

       
        </motion.div>

        {/* Breakdown grid */}
        <motion.div
          style={{ y: gridY, opacity: gridOpacity, willChange: "transform, opacity" }}
          className="mt-10 grid grid-cols-1 gap-4 auto-rows-[260px] sm:grid-cols-2 sm:auto-rows-[240px] lg:grid-cols-6 lg:auto-rows-[220px]"
        >
          {FAILURES.map((item, i) => (
            <div
              key={item.number}
              className={`group relative h-full min-h-[260px] overflow-hidden rounded-2xl border border-white/8 bg-white/5 transition-all duration-300 hover:border-white/15 sm:min-h-[240px] transform-gpu ${FAILURE_LAYOUT[i] ?? ""}`}
            >
              {/* Full-bleed image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  const img = e.currentTarget
                  // Fallback for unsupported formats (e.g., avif/webp) or network errors.
                  img.onerror = null
                  img.src = FALLBACK_IMG
                }}
                draggable={false}
              />

              {/* Bottom gradient for text readability */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

              {/* Subtle hover tint */}
              <div className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Text overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))] opacity-80" />
                    {item.number}
                  </span>
                </div>

                <h3 className="text-[1.05rem] font-semibold text-white leading-snug">{item.title}</h3>
                <p className="mt-2 text-[0.86rem] leading-relaxed text-white/75">{item.body}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
