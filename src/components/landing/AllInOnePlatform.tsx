import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, ChevronRight, MapPin, Scale, Users2 } from "lucide-react"

const FEATURES = [
  {
    id: "farmers",
    Icon: Users2,
    title: "Effortlessly manage every farmer record",
    desc:
      "Zenithra organises your entire farmer base — KYC documents, contact details, land records, and payment history — so you stay in control without the coordination hassle.",
    tags: ["KYC Verified", "Payment History", "Land Mapping"],
    mockup: (
      <div className="space-y-2.5">
        {[
          { name: "Ramesh Kumar",   village: "Nashik · Plot 3.2 ha", status: "Active",   amt: "₹12,400" },
          { name: "Priya Deshmukh", village: "Pune · Plot 1.8 ha",   status: "Active",   amt: "₹8,200" },
          { name: "Suresh Patil",   village: "Nagpur · Plot 5.1 ha", status: "Pending",  amt: "₹0" },
          { name: "Anita Shinde",   village: "Aurangabad · 2.4 ha",  status: "Active",   amt: "₹9,800" },
        ].map((f) => (
          <div key={f.name} className="flex items-center justify-between rounded-lg bg-white/[0.04] px-3.5 py-2.5">
            <div className="flex items-center gap-2.5">
              <div className="h-7 w-7 rounded-full bg-emerald-950/60 flex items-center justify-center text-[0.7rem] font-bold text-emerald-400">
                {f.name[0]}
              </div>
              <div>
                <div className="text-[0.75rem] font-semibold text-white">{f.name}</div>
                <div className="text-[0.62rem] text-white/35">{f.village}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[0.72rem] font-semibold text-white">{f.amt}</div>
              <div className={`text-[0.58rem] font-medium ${f.status === "Active" ? "text-emerald-400" : "text-amber-400"}`}>{f.status}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "logistics",
    Icon: MapPin,
    title: "Stay on top of your logistics in real time",
    desc:
      "Stay on top of vehicle dispatches, live ETAs, and delivery confirmations — all in one place, never miss a collection window again.",
    tags: ["Live Tracking", "ETA Alerts", "Delivery Proof"],
    mockup: (
      <div className="space-y-2.5">
        <div className="rounded-xl bg-white/[0.04] p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[0.72rem] font-semibold text-white">Today's Routes</span>
            <span className="text-[0.62rem] text-emerald-400">8 Active</span>
          </div>
          {[
            { id: "R-119", driver: "Manoj V.", load: "12 MT", eta: "2h 15m", pct: 65 },
            { id: "R-120", driver: "Ravi K.",  load: "8 MT",  eta: "3h 40m", pct: 30 },
            { id: "R-121", driver: "Anil P.",  load: "15 MT", eta: "0h 45m", pct: 88 },
          ].map((r) => (
            <div key={r.id} className="mb-3 last:mb-0">
              <div className="flex justify-between text-[0.68rem] mb-1">
                <span className="text-white/60">{r.id} · {r.driver} · {r.load}</span>
                <span className="text-amber-400">ETA {r.eta}</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-emerald-500" style={{ width: `${r.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "quality",
    Icon: Scale,
    title: "Hit your feedstock targets with ease",
    desc:
      "Zenithra's smart approach to feedstock scheduling and quality control makes achieving your daily intake targets simple — with predictive alerts before shortfalls happen.",
    tags: ["Quality Grading", "Intake Forecast", "Shortage Alerts"],
    mockup: (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          {[
            { l: "Today's Target", v: "200 MT", c: "text-white" },
            { l: "Already Received", v: "148 MT", c: "text-emerald-400" },
            { l: "In Transit", v: "38 MT", c: "text-amber-400" },
            { l: "Forecast Gap", v: "14 MT", c: "text-red-400" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl bg-white/[0.04] p-3">
              <div className="text-[0.6rem] text-white/35 mb-1">{s.l}</div>
              <div className={`text-[0.95rem] font-semibold ${s.c}`}>{s.v}</div>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-white/[0.04] p-3">
          <div className="text-[0.65rem] text-white/40 mb-2">Quality Distribution (today)</div>
          <div className="flex gap-1.5">
            {[{ l: "A Grade", pct: 62, c: "bg-emerald-500" }, { l: "B Grade", pct: 28, c: "bg-amber-500" }, { l: "Rejected", pct: 10, c: "bg-red-500/60" }].map((g) => (
              <div key={g.l} className="flex-1">
                <div className="h-14 rounded-md flex items-end overflow-hidden bg-white/5">
                  <div className={`w-full rounded-md ${g.c}`} style={{ height: `${g.pct}%` }} />
                </div>
                <div className="mt-1 text-[0.55rem] text-center text-white/35">{g.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
]

export function AllInOnePlatform() {
  const [active, setActive] = React.useState(0)

  return (
    <section className="bg-[#040f08] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-emerald-400">
            <span className="h-px w-6 bg-emerald-500" />
            Platform
          </div>
          <h2
            className="font-serif text-white leading-[1.05]"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)" }}
          >
            All Feedstock.
            <br />
            Single Platform.
          </h2>
          <p className="mt-4 text-[0.92rem] leading-relaxed text-white/40 max-w-lg">
            One platform that takes care of it all. Switch to a unified view of all your farmers, logistics, quality control and plant intake.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

          {/* Left — feature tabs */}
          <div className="space-y-3">
            {FEATURES.map(({ id, Icon, title, desc, tags }, i) => (
              <motion.button
                key={id}
                type="button"
                onClick={() => setActive(i)}
                className={[
                  "w-full text-left rounded-2xl border p-5 transition-all duration-300",
                  active === i
                    ? "border-emerald-700/50 bg-emerald-950/30"
                    : "border-white/[0.07] bg-white/[0.02] hover:border-white/15",
                ].join(" ")}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-start gap-3">
                  <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border transition-colors ${active === i ? "border-emerald-700/50 bg-emerald-950/60" : "border-white/10 bg-white/5"}`}>
                    <Icon className={`h-4.5 w-4.5 ${active === i ? "text-emerald-400" : "text-white/40"}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-[0.88rem] font-semibold transition-colors ${active === i ? "text-white" : "text-white/65"}`}>
                      {title}
                    </div>
                    <AnimatePresence>
                      {active === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-2 text-[0.8rem] leading-relaxed text-white/45">{desc}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {tags.map((t) => (
                              <span key={t} className="inline-flex items-center gap-1 rounded-full bg-emerald-950/50 border border-emerald-800/40 px-3 py-1 text-[0.65rem] font-medium text-emerald-400">
                                <CheckCircle2 className="h-3 w-3" />
                                {t}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <ChevronRight className={`h-4 w-4 flex-shrink-0 mt-1 transition-transform ${active === i ? "rotate-90 text-emerald-400" : "text-white/20"}`} />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right — mockup panel */}
          <motion.div
            className="sticky top-24 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Mock header bar */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.07]">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/50" />
              </div>
              <div className="flex-1 text-center text-[0.65rem] text-white/25">
                Zenithra · {FEATURES[active].title}
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {FEATURES[active].mockup}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
