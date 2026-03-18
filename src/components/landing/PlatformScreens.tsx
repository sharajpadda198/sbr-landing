import { motion, useReducedMotion } from "framer-motion"

type Screen = {
  title: string
  desc: string
  placeholder: string
}

const screens: Screen[] = [
  {
    title: "Farmer network dashboard",
    desc: "Onboarding, participation, contracts, and live supplier status in one view.",
    placeholder: "Farmer Network",
  },
  {
    title: "Harvest prediction map",
    desc: "Where and when residue becomes collectible — prioritized by readiness.",
    placeholder: "Harvest Map",
  },
  {
    title: "Route optimization",
    desc: "Optimized pickup routes to reduce fuel burn and missed collections.",
    placeholder: "Routes",
  },
  {
    title: "Logistics tracking",
    desc: "Vehicle status, pickups, delays, and plant intake confirmations.",
    placeholder: "Logistics",
  },
  {
    title: "Feedstock availability chart",
    desc: "Day-wise supply forecast with alerts for shortfalls.",
    placeholder: "Supply Forecast",
  },
]

export function PlatformScreens() {
  const reduce = useReducedMotion()

  return (
    <section id="screens" aria-label="Platform screens" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[hsl(var(--primary))]" />
          <span className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-[hsl(var(--primary))]">
            Inside the platform
          </span>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-end">
          <h2 className="font-serif text-4xl font-normal leading-tight text-[hsl(var(--foreground))] sm:text-5xl">
            Inside the Feedstock Operations Platform.
          </h2>
          <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))] lg:max-w-md lg:ml-auto">
            Replace these placeholders with real screenshots whenever ready — visuals make the platform feel operational.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {screens.map((s, i) => (
            <motion.div
              key={s.title}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl border border-[hsl(var(--border))] bg-white shadow-sm overflow-hidden"
            >
              <div className="aspect-[16/10] bg-[linear-gradient(135deg,hsl(150,25%,96%),hsl(0,0%,100%))] border-b border-[hsl(var(--border))] flex items-center justify-center">
                <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[hsl(var(--primary))]">
                  {s.placeholder}
                </div>
              </div>
              <div className="p-5">
                <div className="text-sm font-semibold text-[hsl(var(--foreground))]">{s.title}</div>
                <div className="mt-1 text-[0.78rem] leading-relaxed text-[hsl(var(--muted-foreground))]">
                  {s.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
