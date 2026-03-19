import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

const TABS = [
  {
    id: "collect",
    label: "Collect",
    headline: "Stay on Top of Your Feedstock",
    sub:
      "Simple, secure and easy-to-use farmer management for all your biomass supply in one single platform. No manual registers required.",
    bullets: [
      "Aadhaar-verified farmer onboarding",
      "Digital land records & crop mapping",
      "SMS & app-based supply commitments",
      "Real-time collection scheduling",
    ],
    mockup: (
      <div className="space-y-3">
        <div className="rounded-xl bg-white/[0.05] p-4">
          <div className="text-[0.65rem] text-white/35 mb-2 font-semibold uppercase tracking-wider">Today's Collection Plan</div>
          {[
            { time: "06:00 AM", farmer: "Ramesh Kumar",   qty: "4.2 MT", done: true },
            { time: "07:30 AM", farmer: "Priya Deshmukh", qty: "2.8 MT", done: true },
            { time: "09:00 AM", farmer: "Suresh Patil",   qty: "6.1 MT", done: false },
            { time: "11:00 AM", farmer: "Anita Shinde",   qty: "3.5 MT", done: false },
          ].map((c) => (
            <div key={c.time} className="flex items-center gap-3 py-2 border-b border-white/[0.05] last:border-0">
              <span className="text-[0.62rem] text-white/30 w-16 flex-shrink-0">{c.time}</span>
              <div className={`h-2 w-2 rounded-full flex-shrink-0 ${c.done ? "bg-emerald-400" : "bg-white/20"}`} />
              <span className="text-[0.75rem] text-white/70 flex-1">{c.farmer}</span>
              <span className="text-[0.72rem] font-semibold text-emerald-400">{c.qty}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <div className="flex-1 rounded-xl bg-emerald-950/40 border border-emerald-800/30 p-3 text-center">
            <div className="text-[1.1rem] font-serif text-white">147 MT</div>
            <div className="text-[0.6rem] text-emerald-400/70 mt-0.5">Collected</div>
          </div>
          <div className="flex-1 rounded-xl bg-white/[0.04] border border-white/[0.07] p-3 text-center">
            <div className="text-[1.1rem] font-serif text-white">53 MT</div>
            <div className="text-[0.6rem] text-amber-400/70 mt-0.5">Pending</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "analyse",
    label: "Analyse",
    headline: "See Where Your Feedstock Is Going",
    sub:
      "Gain insights into your supply chain and quality distribution with detailed reports, helping you make informed operational decisions.",
    bullets: [
      "Cluster-level supply heatmaps",
      "Quality grade trend analysis",
      "Farmer reliability scoring",
      "Seasonal forecasting models",
    ],
    mockup: (
      <div className="space-y-3">
        <div className="rounded-xl bg-white/[0.05] p-4">
          <div className="text-[0.65rem] text-white/35 mb-3 font-semibold uppercase tracking-wider">Supply Forecast — Next 30 Days</div>
          <div className="flex items-end gap-1 h-24 mb-2">
            {[65, 80, 72, 90, 85, 95, 100, 88, 78, 92, 95, 105, 98, 110, 115].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-sm ${i >= 12 ? "bg-emerald-400/40 border border-emerald-400/30" : "bg-white/20"}`}
                style={{ height: `${(h / 115) * 100}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between text-[0.58rem] text-white/25">
            <span>Today</span><span>+15 days</span><span>+30 days</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { l: "Avg Grade", v: "A/B", c: "text-emerald-400" },
            { l: "Top Cluster", v: "Nashik", c: "text-white" },
            { l: "Reliability", v: "87%", c: "text-emerald-400" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl bg-white/[0.04] p-3 text-center">
              <div className={`text-[0.9rem] font-semibold ${s.c}`}>{s.v}</div>
              <div className="text-[0.58rem] text-white/30 mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "dispatch",
    label: "Dispatch",
    headline: "Learn from Your Supply Journey",
    sub:
      "Review your feedstock flows, understand bottlenecks, and adjust your plant's sourcing strategy to achieve better daily intake performance.",
    bullets: [
      "AI route optimisation (km & cost)",
      "Driver performance & ETA tracking",
      "Plant-gate weighment & receipts",
      "End-to-end dispatch audit trail",
    ],
    mockup: (
      <div className="space-y-3">
        <div className="rounded-xl bg-white/[0.05] p-4">
          <div className="text-[0.65rem] text-white/35 mb-3 font-semibold uppercase tracking-wider">Live Dispatch Board</div>
          {[
            { id: "D-081", vehicle: "MH-04 AB 2241", status: "En Route",  eta: "45 min", load: "12 MT" },
            { id: "D-082", vehicle: "MH-09 CD 5518", status: "Loading",   eta: "2h",     load: "8 MT" },
            { id: "D-083", vehicle: "MH-12 EF 7890", status: "Delivered", eta: "Done",   load: "15 MT" },
          ].map((d) => (
            <div key={d.id} className="flex items-center justify-between py-2 border-b border-white/[0.05] last:border-0">
              <div>
                <div className="text-[0.72rem] font-semibold text-white">{d.id} · {d.vehicle}</div>
                <div className="text-[0.62rem] text-white/35 mt-0.5">{d.load} · ETA {d.eta}</div>
              </div>
              <span className={`text-[0.62rem] font-medium px-2 py-0.5 rounded-full ${
                d.status === "Delivered"
                  ? "bg-emerald-950/60 text-emerald-400"
                  : d.status === "En Route"
                  ? "bg-sky-950/60 text-sky-400"
                  : "bg-amber-950/60 text-amber-400"
              }`}>{d.status}</span>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-emerald-950/20 border border-emerald-800/25 p-3 flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-emerald-950/60 flex items-center justify-center text-lg">🗺️</div>
          <div>
            <div className="text-[0.75rem] font-semibold text-white">Routes saved today</div>
            <div className="text-[0.65rem] text-emerald-400">340 km · ₹4,200 diesel cost avoided</div>
          </div>
        </div>
      </div>
    ),
  },
]

export function NewWayTo() {
  const [active, setActive] = React.useState(0)

  return (
    <section className="bg-[#040f08] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-emerald-400">
            <span className="h-px w-6 bg-emerald-500" />
            Workflow
          </div>
          <h2
            className="font-serif text-white leading-[1.05]"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)" }}
          >
            A New Way To
            <br />
            <span className="text-white/50">Manage Feedstock</span>
          </h2>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1">
            {TABS.map((tab, i) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(i)}
                className={[
                  "relative rounded-full px-7 py-2.5 text-[0.82rem] font-semibold transition-all duration-300",
                  active === i ? "text-white" : "text-white/40 hover:text-white/70",
                ].join(" ")}
              >
                {active === i && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-emerald-700/40 border border-emerald-600/30"
                    transition={{ type: "spring", stiffness: 340, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid gap-10 lg:grid-cols-2 lg:items-start"
          >
            {/* Left — text */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-4 text-[0.68rem] font-bold tracking-[0.18em] uppercase text-emerald-400">
                <span
                  className={`h-2 w-2 rounded-full ${active === 0 ? "bg-emerald-400" : active === 1 ? "bg-sky-400" : "bg-amber-400"}`}
                />
                {TABS[active].label}
              </div>
              <h3 className="font-serif text-3xl text-white font-normal leading-snug mb-4">
                {TABS[active].headline}
              </h3>
              <p className="text-[0.92rem] leading-relaxed text-white/45 mb-6">
                {TABS[active].sub}
              </p>
              <ul className="space-y-2.5">
                {TABS[active].bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[0.85rem] text-white/60">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="/team"
                className="mt-8 inline-flex items-center gap-2 text-[0.82rem] font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Meet the team <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Right — mockup */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.07]">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/50" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/50" />
                </div>
                <span className="text-[0.65rem] text-white/25 ml-2">Zenithra · {TABS[active].label}</span>
              </div>
              {TABS[active].mockup}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
