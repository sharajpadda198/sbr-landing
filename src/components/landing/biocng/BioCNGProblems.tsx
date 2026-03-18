import { motion } from "framer-motion"
import { AlertTriangle, Clock, DollarSign, MapPin, TrendingDown, Users } from "lucide-react"

const PROBLEMS = [
  {
    icon: Users,
    accent: "#ef4444",
    lightBg: "#fff5f5",
    border: "#fecaca",
    number: "01",
    title: "Scattered farmer network",
    body: "Thousands of smallholder farmers across 50+ villages. No central record of who grows what, where, and when — procurement stays reactive and chaotic.",
    stat: "3–5 days",
    statLabel: "wasted chasing suppliers per week",
  },
  {
    icon: TrendingDown,
    accent: "#d97706",
    lightBg: "#fffbeb",
    border: "#fde68a",
    number: "02",
    title: "Unpredictable feedstock supply",
    body: "Seasonal availability gaps cause unplanned shutdowns. Without harvest visibility, idle digester costs run into lakhs every month.",
    stat: "18–24%",
    statLabel: "capacity lost to supply gaps",
  },
  {
    icon: MapPin,
    accent: "#0284c7",
    lightBg: "#f0f9ff",
    border: "#bae6fd",
    number: "03",
    title: "Inefficient collection logistics",
    body: "Sub-optimal routes, partially loaded trucks, no real-time vehicle visibility. Fuel and labour costs eat into margins on every trip.",
    stat: "₹6–9/km",
    statLabel: "avoidable logistics cost per trip",
  },
  {
    icon: Clock,
    accent: "#7c3aed",
    lightBg: "#f5f3ff",
    border: "#ddd6fe",
    number: "04",
    title: "Delayed farmer payments",
    body: "Manual weight-slip reconciliation takes days. Farmers lose trust when payments are slow, and disputes arise without a clear audit trail.",
    stat: "8–14 days",
    statLabel: "average payment delay",
  },
  {
    icon: AlertTriangle,
    accent: "#ea580c",
    lightBg: "#fff7ed",
    border: "#fed7aa",
    number: "05",
    title: "No quality control at source",
    body: "High-moisture, high-ash feedstock reduces biogas yield and clogs digesters. There's no system to enforce standards at the farm gate.",
    stat: "15–20%",
    statLabel: "biogas yield loss from poor feedstock",
  },
  {
    icon: DollarSign,
    accent: "#059669",
    lightBg: "#f0fdf4",
    border: "#bbf7d0",
    number: "06",
    title: "Hidden operational costs",
    body: "Without data, no one can pinpoint which clusters or routes cost the most. Cost-per-MT stays high and margins stay thin.",
    stat: "₹200–400",
    statLabel: "hidden cost per MT untracked",
  },
]

export function BioCNGProblems() {
  return (
    <section className="relative bg-[#f8fdf9] py-28 lg:py-36 overflow-hidden" aria-label="Bio-CNG challenges">
      {/* Faint accent blob */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-40"
        style={{ background: "radial-gradient(ellipse, #d1fae5 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-20 max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-widest text-red-600">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            The challenge
          </div>
          <h2
            className="font-extrabold leading-[1.1] tracking-[-0.02em] text-gray-900"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}
          >
            80% of Bio-CNG pain lives{" "}
            <span className="relative">
              <span className="relative z-10 text-red-500">before</span>
              <span
                className="absolute -inset-1 -bottom-0.5 z-0 block skew-x-[-3deg] rounded bg-red-100"
                aria-hidden="true"
              />
            </span>{" "}
            biogas is even produced.
          </h2>
          <p className="mt-6 text-[1rem] leading-relaxed text-gray-500 max-w-xl">
            The technology is proven. The chemistry works. But operational failures in the
            feedstock supply chain silently destroy margins and plant utilisation every single day.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ borderColor: p.border }}
            >
              {/* Accent corner */}
              <div
                className="absolute top-0 right-0 h-24 w-24 opacity-[0.07] rounded-bl-full"
                style={{ background: p.accent }}
              />

              {/* Number + icon row */}
              <div className="mb-4 flex items-center justify-between">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl shadow-sm"
                  style={{ backgroundColor: p.lightBg, border: `1px solid ${p.border}` }}
                >
                  <p.icon className="h-5 w-5" style={{ color: p.accent }} />
                </div>
                <span
                  className="text-[0.68rem] font-black tracking-[0.2em] opacity-20"
                  style={{ color: p.accent }}
                >
                  {p.number}
                </span>
              </div>

              <h3 className="text-[0.95rem] font-bold text-gray-900 leading-snug">{p.title}</h3>
              <p className="mt-2 text-[0.82rem] leading-relaxed text-gray-500">{p.body}</p>

              {/* Stat pill */}
              <div
                className="mt-5 inline-flex items-baseline gap-1.5 rounded-xl px-3 py-1.5"
                style={{ backgroundColor: p.lightBg, border: `1px solid ${p.border}` }}
              >
                <span className="text-[0.92rem] font-extrabold" style={{ color: p.accent }}>{p.stat}</span>
                <span className="text-[0.68rem] text-gray-500">{p.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-14 rounded-2xl border border-emerald-200 bg-emerald-50 px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-[0.95rem] font-semibold text-emerald-800 max-w-xl">
            These aren't rare edge cases — they happen at every plant, every day.{" "}
            <span className="text-emerald-600">Zenithra fixes all six at once.</span>
          </p>
          <a
            href="#solutions"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-[0.82rem] font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors"
          >
            See how ↓
          </a>
        </motion.div>
      </div>
    </section>
  )
}
