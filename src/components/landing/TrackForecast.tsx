import * as React from "react"
import { motion } from "framer-motion"
import { BarChart3, Search, Sprout, TrendingUp } from "lucide-react"

const SIDE_CARDS = [
  {
    id: "netfeedstock",
    Icon: Sprout,
    title: "Track your net feedstock at a glance",
    desc:
      "See your available biomass, in-transit volumes, and plant-gate accumulations grow over time with Zenithra's simple supply tracking tools.",
    preview: (
      <div className="space-y-3">
        <div className="flex items-end justify-between">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => {
            const h = [40, 60, 55, 82, 70, 95, 100][i]
            return (
              <div key={d} className="flex flex-col items-center gap-1">
                <div
                  className={`w-7 rounded-t-sm transition-all ${i === 6 ? "bg-emerald-400" : "bg-white/20"}`}
                  style={{ height: `${h * 0.5}px` }}
                />
                <span className="text-[0.55rem] text-white/30">{d}</span>
              </div>
            )
          })}
        </div>
        <div className="text-[0.62rem] text-white/30 text-center">Weekly feedstock collected (MT)</div>
      </div>
    ),
  },
  {
    id: "pipeline",
    Icon: TrendingUp,
    title: "Monitor your supply pipeline performance",
    desc:
      "Keep track of farmer supply commitments and see your biomass pipeline grow — all in one clear view, with predictive gap alerts.",
    preview: (
      <div className="space-y-2">
        {[
          { label: "Committed supply",  val: 320, max: 400, c: "bg-emerald-500" },
          { label: "Confirmed pickups", val: 210, max: 400, c: "bg-sky-500" },
          { label: "Already received",  val: 148, max: 400, c: "bg-amber-400" },
        ].map((s) => (
          <div key={s.label}>
            <div className="flex justify-between text-[0.65rem] mb-1">
              <span className="text-white/45">{s.label}</span>
              <span className="text-white/60 font-medium">{s.val} MT</span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <div className={`h-full rounded-full ${s.c}`} style={{ width: `${(s.val / s.max) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
]

export function TrackForecast() {
  const [_activeCard, setActiveCard] = React.useState(0)

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
            Analytics
          </div>
          <h2
            className="font-serif text-white leading-[1.05]"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)" }}
          >
            Track Everything.
            <br />
            Forecast Accurately.
          </h2>
          <p className="mt-4 text-[0.92rem] leading-relaxed text-white/40 max-w-lg">
            Just type in a farmer name, cluster, or batch ID and see all supply records. Get a summary of how much you've collected this week, last week, and all time!
          </p>
        </motion.div>

        {/* Search bar mockup */}
        <motion.div
          className="mb-12 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Mock header */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.07]">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/50" />
            </div>
            <BarChart3 className="h-3.5 w-3.5 text-emerald-400 ml-2" />
            <span className="text-[0.65rem] text-white/25">Zenithra Analytics</span>
          </div>

          {/* Fake search */}
          <div className="flex items-center gap-3 rounded-xl bg-white/[0.06] border border-white/[0.08] px-4 py-3 mb-6">
            <Search className="h-4 w-4 text-white/30" />
            <span className="text-[0.85rem] text-white/35">Search farmer, cluster, batch ID…</span>
            <span className="ml-auto text-[0.62rem] text-white/20 border border-white/10 rounded px-1.5 py-0.5">⌘K</span>
          </div>

          {/* Summary cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {[
              { l: "This week",  v: "148 MT",  d: "+42% vs last week",  c: "text-emerald-400" },
              { l: "Last week",  v: "104 MT",  d: "4 batches",          c: "text-white/60" },
              { l: "This month", v: "580 MT",  d: "On track ✓",         c: "text-emerald-400" },
              { l: "All time",   v: "8,240 MT", d: "Since Jan 2024",    c: "text-white/60" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl bg-white/[0.04] p-4">
                <div className="text-[0.62rem] text-white/35 mb-1">{s.l}</div>
                <div className="text-[1rem] font-semibold text-white">{s.v}</div>
                <div className={`mt-0.5 text-[0.6rem] ${s.c}`}>{s.d}</div>
              </div>
            ))}
          </div>

          {/* Fake transaction rows */}
          <div className="space-y-2">
            <div className="text-[0.68rem] font-semibold text-white/30 uppercase tracking-wider mb-2">Recent batches</div>
            {[
              { batch: "#FC-2841", farmer: "Ramesh Kumar",   cluster: "Nashik", qty: "12 MT",  grade: "A", status: "Approved" },
              { batch: "#FC-2840", farmer: "Priya Deshmukh", cluster: "Pune",   qty: "8 MT",   grade: "B", status: "Pending" },
              { batch: "#FC-2839", farmer: "Suresh Patil",   cluster: "Nagpur", qty: "15 MT",  grade: "A", status: "Approved" },
            ].map((b) => (
              <div key={b.batch} className="flex items-center justify-between rounded-lg bg-white/[0.03] px-4 py-2.5">
                <div className="flex items-center gap-3">
                  <span className="text-[0.68rem] font-mono text-emerald-400">{b.batch}</span>
                  <span className="text-[0.72rem] text-white/60">{b.farmer}</span>
                  <span className="text-[0.62rem] text-white/30">{b.cluster}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[0.72rem] text-white/60">{b.qty}</span>
                  <span className={`text-[0.62rem] font-semibold rounded-full px-2 py-0.5 ${b.grade === "A" ? "bg-emerald-950/60 text-emerald-400" : "bg-amber-950/60 text-amber-400"}`}>
                    Grade {b.grade}
                  </span>
                  <span className={`text-[0.62rem] font-medium ${b.status === "Approved" ? "text-emerald-400" : "text-amber-400"}`}>
                    {b.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Side cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {SIDE_CARDS.map(({ id, Icon, title, desc, preview }, i) => (
            <motion.div
              key={id}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 hover:border-emerald-700/30 transition-colors duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              onClick={() => setActiveCard(i)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-950/60 border border-emerald-800/40">
                  <Icon className="h-4.5 w-4.5 text-emerald-400" />
                </div>
                <h3 className="text-[0.88rem] font-semibold text-white">{title}</h3>
              </div>
              <p className="text-[0.78rem] leading-relaxed text-white/40 mb-4">{desc}</p>
              <div className="rounded-xl border border-white/[0.07] bg-black/20 p-4">
                {preview}
              </div>
            </motion.div>
          ))}
        </div>

        {/* "That's not all" callout */}
        <motion.div
          className="rounded-2xl border border-white/[0.08] bg-gradient-to-r from-emerald-950/30 to-transparent p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="font-serif text-2xl text-white font-normal mb-1">That's not all…</h3>
            <p className="text-[0.85rem] text-white/40 max-w-lg">
              Zenithra is packed with smart features — cash-flow dashboards, compliance reports, biomass price benchmarks, and co-operative payment workflows.
            </p>
          </div>
          <a
            href="/modules"
            className="shrink-0 inline-flex items-center gap-2 rounded-full border border-emerald-700/50 bg-emerald-950/40 px-6 py-3 text-[0.8rem] font-semibold text-emerald-400 hover:bg-emerald-950/70 transition-colors"
          >
            See upcoming features →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
