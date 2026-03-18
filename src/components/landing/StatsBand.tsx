import * as React from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"

const stats = [
  { value: 18, suffix: "", label: "Integrated modules" },
  { value: 5,  suffix: "", label: "AI-powered workflows" },
  { value: 100, suffix: "%", label: "Mobile-first field app" },
  { value: 1,  suffix: "", label: "Platform — zero silos" },
]

function Counter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = React.useState(0)
  const reduce = useReducedMotion()

  React.useEffect(() => {
    if (!active || reduce) { setCount(target); return }
    let start = 0
    const duration = 1600
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) { setCount(target); clearInterval(timer) }
      else { setCount(Math.floor(start)) }
    }, step)
    return () => clearInterval(timer)
  }, [active, target, reduce])

  return <span className="tabular-nums">{count}{suffix}</span>
}

export function StatsBand() {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section
      ref={ref}
      className="stats-band-section relative overflow-hidden bg-[hsl(var(--dark-band))]"
      aria-label="Platform stats"
    >
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_130%,hsl(150,60%,18%,0.4),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 divide-x divide-y divide-white/8 lg:grid-cols-4 lg:divide-y-0">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="stats-band-cell group relative flex flex-col gap-2 px-8 py-12 transition-colors duration-300 hover:bg-white/[0.03]"
            >
              {/* Animated top accent */}
              <motion.div
                className="absolute left-8 top-0 h-[2px] bg-[hsl(var(--primary))]"
                initial={{ width: 0 }}
                animate={inView ? { width: 36 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              />
              <div className="font-serif text-5xl font-normal tracking-tight text-white lg:text-6xl">
                <Counter target={s.value} suffix={s.suffix} active={inView} />
              </div>
              <div className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-white/35 transition-colors duration-300 group-hover:text-white/60">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
