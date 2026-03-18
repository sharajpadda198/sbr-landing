import { motion } from "framer-motion"
import { usePrefersReducedMotion } from "../../../lib/usePrefersReducedMotion"

const STEPS = [
  {
    number: "01",
    emoji: "🌾",
    title: "Biomass Collection",
    description:
      "Farmers register on the Zenithra app and schedule pickups. The platform tracks every supplier, land area, and estimated yield — so you always know what's coming in.",
    tag: "Farmer Network",
    metric: "50K+ farmers",
    metricSub: "active on platform",
    accent: "#059669",
    light: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    number: "02",
    emoji: "🚛",
    title: "Smart Logistics",
    description:
      "Vehicles auto-dispatched along AI-optimised routes. Live GPS tracking, arrival windows, and digital weight slips eliminate guesswork at the gate.",
    tag: "Telematics",
    metric: "340 km",
    metricSub: "saved per plant daily",
    accent: "#0284c7",
    light: "#f0f9ff",
    border: "#bae6fd",
  },
  {
    number: "03",
    emoji: "⚖️",
    title: "Intake & Quality Check",
    description:
      "Every bale weighed, graded, and photo-documented on arrival. Moisture and density logged digitally — no paper, no disputes.",
    tag: "Quality Control",
    metric: "15–20%",
    metricSub: "higher biogas yield",
    accent: "#d97706",
    light: "#fffbeb",
    border: "#fde68a",
  },
  {
    number: "04",
    emoji: "🧪",
    title: "Anaerobic Digestion",
    description:
      "Digester loading schedules, retention time, and slurry levels monitored in real-time. Alerts fire before any parameter drifts out of range.",
    tag: "Plant Monitoring",
    metric: "24/7",
    metricSub: "live digester tracking",
    accent: "#7c3aed",
    light: "#f5f3ff",
    border: "#ddd6fe",
  },
  {
    number: "05",
    emoji: "💨",
    title: "Biogas Purification",
    description:
      "Scrubber performance, H₂S levels, CO₂ removal efficiency, and methane content — all in one dashboard. Maintenance tasks auto-scheduled.",
    tag: "Gas Quality",
    metric: "60–70%",
    metricSub: "CH₄ content tracked",
    accent: "#0d9488",
    light: "#f0fdfa",
    border: "#99f6e4",
  },
  {
    number: "06",
    emoji: "⚡",
    title: "CNG Output & Revenue",
    description:
      "Daily CNG output, cylinder fills, and dispatch manifests tracked digitally. Revenue-per-batch reporting gives you instant P&L visibility.",
    tag: "Revenue Tracking",
    metric: "₹18L+",
    metricSub: "avg. monthly savings",
    accent: "#16a34a",
    light: "#f0fdf4",
    border: "#86efac",
  },
]

export function BioCNGProcess() {
  const reduced = usePrefersReducedMotion()

  return (
    <section className="relative overflow-hidden bg-[#f8fdf9] py-28 lg:py-36">
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #065f46 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/4 translate-x-1/4 rounded-full opacity-30"
        style={{ background: "radial-gradient(ellipse, #d1fae5, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-widest text-emerald-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            End-to-End Platform
          </div>
          <h2
            className="font-extrabold tracking-[-0.025em] text-gray-900"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}
          >
            How Zenithra runs your{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #059669, #0ea5e9)" }}
            >
              entire plant.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-relaxed text-gray-500">
            From the farmer's field to the CNG cylinder — every step tracked, automated, and
            optimised in one connected platform.
          </p>
        </motion.div>

        {/* Steps — alternating layout */}
        <div className="relative">
          {/* Centre spine (desktop) */}
          <div className="absolute left-1/2 top-8 bottom-8 hidden w-px -translate-x-1/2 md:block"
            style={{ background: "linear-gradient(to bottom, #d1fae5, #bae6fd, #d1fae5)" }}
          />

          <div className="space-y-10">
            {STEPS.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={step.number}
                  initial={reduced ? false : { opacity: 0, x: isLeft ? -32 : 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.6, delay: 0.04 * i, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-center gap-0 md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Card */}
                  <div className="w-full md:w-[calc(50%-2.5rem)]">
                    <div
                      className="group relative overflow-hidden rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      style={{ backgroundColor: step.light, borderColor: step.border }}
                    >
                      {/* Accent corner */}
                      <div
                        className="absolute top-0 right-0 h-20 w-20 rounded-bl-full opacity-10"
                        style={{ background: step.accent }}
                      />
                      <div className="relative flex items-start gap-4">
                        {/* Emoji icon */}
                        <div
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl shadow-sm"
                          style={{ background: `${step.accent}18`, border: `1px solid ${step.border}` }}
                        >
                          {step.emoji}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="mb-1.5 flex flex-wrap items-center gap-2">
                            <span
                              className="text-[0.6rem] font-black tracking-[0.22em] uppercase opacity-40"
                              style={{ color: step.accent }}
                            >
                              STEP {step.number}
                            </span>
                            <span
                              className="rounded-full px-2 py-0.5 text-[0.62rem] font-bold text-white"
                              style={{ background: step.accent }}
                            >
                              {step.tag}
                            </span>
                          </div>
                          <h3 className="text-[1rem] font-bold text-gray-900">{step.title}</h3>
                          <p className="mt-1.5 text-[0.82rem] leading-relaxed text-gray-500">
                            {step.description}
                          </p>
                          {/* Metric chip */}
                          <div
                            className="mt-4 inline-flex items-baseline gap-1.5 rounded-xl px-3 py-1.5"
                            style={{ background: `${step.accent}12`, border: `1px solid ${step.border}` }}
                          >
                            <span className="text-[0.9rem] font-extrabold" style={{ color: step.accent }}>
                              {step.metric}
                            </span>
                            <span className="text-[0.65rem] text-gray-500">{step.metricSub}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Centre node */}
                  <div className="relative z-10 hidden w-20 shrink-0 items-center justify-center md:flex">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-full text-[0.75rem] font-black text-white shadow-lg ring-4 ring-white"
                      style={{ background: `linear-gradient(135deg, ${step.accent}, ${step.accent}cc)` }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Empty spacer */}
                  <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom connector banner */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-20 overflow-hidden rounded-3xl shadow-xl"
        >
          <div
            className="relative p-10 md:p-14 text-center text-white"
            style={{ background: "linear-gradient(135deg, #064e3b 0%, #065f46 50%, #0369a1 100%)" }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <p className="relative text-[0.72rem] font-black uppercase tracking-[0.2em] text-emerald-300 mb-3">
              Full plant coverage · Zero blind spots
            </p>
            <h3
              className="relative font-extrabold text-white"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}
            >
              One platform connects every stakeholder.
            </h3>
            <p className="relative mt-3 text-emerald-200/80 max-w-xl mx-auto text-[0.92rem]">
              From field-level farmers to plant managers to investors — real-time data
              for every role, in every language.
            </p>
            <a
              href="#contact"
              className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-[0.85rem] font-bold text-emerald-700 shadow-lg hover:bg-emerald-50 transition-colors"
            >
              See a live plant demo →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
