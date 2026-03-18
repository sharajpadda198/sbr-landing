import { useState } from "react"
import { motion } from "framer-motion"
import { LandingNav } from "../components/landing/LandingNav"
import { Footer } from "../components/landing/Footer"
import { useTheme } from "../lib/useTheme"
import {
  GitBranch, Play, RefreshCw,
  Users, Truck, ClipboardCheck, Flame, BarChart3,
  CheckCircle2, ArrowRight, ChevronDown,
  Wheat, Leaf, MapPin, CreditCard, AlertCircle,
} from "lucide-react"

// ─── Dark mode constants (unchanged) ──────────────────────────────────────────
const TAGS = [
  { icon: GitBranch, label: "Workflow-first design" },
  { icon: Play, label: "Daily execution ready" },
  { icon: RefreshCw, label: "End-to-end traceability" },
]

// ─── Light mode: Bio-CNG workflow data ────────────────────────────────────────
const PHASES = [
  {
    id: "onboard",
    phase: "Phase 1",
    title: "Farmer Onboarding",
    color: "#059669",
    light: "#f0fdf4",
    border: "#bbf7d0",
    icon: Users,
    emoji: "🌾",
    tagline: "Build your supply network",
    steps: [
      { label: "Village survey & farmer identification", icon: MapPin },
      { label: "Aadhaar-based digital registration", icon: Users },
      { label: "Land parcel mapping & crop type logging", icon: Wheat },
      { label: "Cluster assignment & zone mapping", icon: GitBranch },
      { label: "Farmer app install & onboarding call", icon: Play },
    ],
    outcome: "Verified farmer network ready to supply",
    outcomeIcon: CheckCircle2,
  },
  {
    id: "planning",
    phase: "Phase 2",
    title: "Supply Planning",
    color: "#0284c7",
    light: "#f0f9ff",
    border: "#bae6fd",
    icon: BarChart3,
    emoji: "📅",
    tagline: "Predict before you procure",
    steps: [
      { label: "Harvest calendar collection from farmers", icon: Wheat },
      { label: "AI-based 14-day supply forecast", icon: BarChart3 },
      { label: "Daily procurement target setting", icon: ClipboardCheck },
      { label: "Vehicle capacity planning", icon: Truck },
      { label: "Pickup schedule generation & farmer notification", icon: AlertCircle },
    ],
    outcome: "Procurement plan with zero guesswork",
    outcomeIcon: CheckCircle2,
  },
  {
    id: "collection",
    phase: "Phase 3",
    title: "Collection & Logistics",
    color: "#7c3aed",
    light: "#f5f3ff",
    border: "#ddd6fe",
    icon: Truck,
    emoji: "🚛",
    tagline: "Every km optimised",
    steps: [
      { label: "AI route optimisation across farms", icon: MapPin },
      { label: "Driver dispatch with turn-by-turn instructions", icon: Truck },
      { label: "Live GPS tracking of all vehicles", icon: MapPin },
      { label: "Weighment & digital slip at farm gate", icon: ClipboardCheck },
      { label: "Real-time load status updates to plant", icon: BarChart3 },
    ],
    outcome: "98% route fulfilment · 340 km saved daily",
    outcomeIcon: CheckCircle2,
  },
  {
    id: "intake",
    phase: "Phase 4",
    title: "Intake & Quality Control",
    color: "#d97706",
    light: "#fffbeb",
    border: "#fde68a",
    icon: ClipboardCheck,
    emoji: "⚖️",
    tagline: "No bad feedstock enters",
    steps: [
      { label: "Vehicle arrival & gate weighbridge capture", icon: Truck },
      { label: "Photo documentation of every bale", icon: ClipboardCheck },
      { label: "Moisture, ash & density measurement", icon: AlertCircle },
      { label: "Auto-reject flagging for off-spec batches", icon: AlertCircle },
      { label: "Acceptance confirmation & batch ledger entry", icon: CheckCircle2 },
    ],
    outcome: "Quality-enforced intake with full audit trail",
    outcomeIcon: CheckCircle2,
  },
  {
    id: "plant",
    phase: "Phase 5",
    title: "Plant Operations",
    color: "#0d9488",
    light: "#f0fdfa",
    border: "#99f6e4",
    icon: Flame,
    emoji: "🧪",
    tagline: "Digester to CNG cylinder",
    steps: [
      { label: "Digester loading schedule automation", icon: Flame },
      { label: "Real-time retention time & slurry monitoring", icon: BarChart3 },
      { label: "H₂S, CO₂ & methane content tracking", icon: AlertCircle },
      { label: "Scrubber & compressor maintenance alerts", icon: AlertCircle },
      { label: "CNG cylinder fill & dispatch manifest", icon: ClipboardCheck },
    ],
    outcome: "Maximum biogas yield with zero downtime",
    outcomeIcon: CheckCircle2,
  },
  {
    id: "payment",
    phase: "Phase 6",
    title: "Payments & Reporting",
    color: "#16a34a",
    light: "#f0fdf4",
    border: "#86efac",
    icon: CreditCard,
    emoji: "💰",
    tagline: "Transparent, instant, traceable",
    steps: [
      { label: "Weight × quality grade calculation", icon: BarChart3 },
      { label: "One-click farmer payment disbursement", icon: CreditCard },
      { label: "WhatsApp payment receipt to farmer", icon: Users },
      { label: "Revenue-per-batch P&L reporting", icon: BarChart3 },
      { label: "SATAT compliance report generation", icon: Leaf },
    ],
    outcome: "Farmers paid in hours, not weeks",
    outcomeIcon: CheckCircle2,
  },
]

const FLOW_CONNECTORS = [
  "Biomass collected",
  "Supply forecasted",
  "Feedstock delivered",
  "Quality verified",
  "CNG produced",
]

// ─── Light mode component ──────────────────────────────────────────────────────
function WorkflowsLight() {
  const [activePhase, setActivePhase] = useState(0)
  const phase = PHASES[activePhase]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#f0f9ff]">
      <LandingNav />

      {/* Hero */}
      <header className="relative overflow-hidden pt-28 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-40 left-1/2 h-[700px] w-[1000px] -translate-x-1/2 rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(187,247,208,0.5) 0%, transparent 65%)" }}
          />
          <div
            className="absolute top-0 right-0 h-[400px] w-[400px]"
            style={{ background: "radial-gradient(ellipse, rgba(186,230,253,0.4) 0%, transparent 70%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, #065f46 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1.5 text-[0.72rem] font-semibold text-emerald-700 shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Bio-CNG Operations — End-to-End Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="max-w-3xl font-extrabold tracking-[-0.03em] text-gray-900 leading-[1.05]"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            How Zenithra runs{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #059669 0%, #0ea5e9 100%)" }}
            >
              every workflow
            </span>{" "}
            of your plant.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-5 max-w-2xl text-[1rem] leading-[1.8] text-gray-500"
          >
            From the first farmer registration to the final SATAT compliance report — six
            interconnected workflows, one platform, zero spreadsheets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {[
              { icon: GitBranch, label: "6 integrated workflows" },
              { icon: Play, label: "Daily execution ready" },
              { icon: RefreshCw, label: "Full supply-chain traceability" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-medium text-emerald-700 shadow-sm"
              >
                <Icon className="h-3.5 w-3.5 text-emerald-500" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      <main>
        {/* Interactive phase selector */}
        <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <h2 className="text-xl font-bold text-gray-700">The complete Bio-CNG operations loop</h2>
            <p className="mt-1 text-sm text-gray-400">Click any phase to explore the detailed steps</p>
          </motion.div>

          {/* Desktop phase tabs */}
          <div className="hidden lg:block">
            <div className="relative flex items-stretch gap-0">
              {PHASES.map((p, i) => (
                <div key={p.id} className="flex flex-1 items-stretch">
                  <motion.button
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    onClick={() => setActivePhase(i)}
                    className={[
                      "group relative flex flex-1 flex-col items-center gap-2 rounded-2xl border p-4 text-center transition-all duration-300",
                      activePhase === i
                        ? "shadow-lg -translate-y-1"
                        : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-md hover:-translate-y-0.5",
                    ].join(" ")}
                    style={activePhase === i ? { backgroundColor: p.light, borderColor: p.border } : {}}
                  >
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl text-xl transition-transform duration-300 group-hover:scale-110"
                      style={
                        activePhase === i
                          ? { background: p.color, boxShadow: `0 4px 14px ${p.color}40` }
                          : { background: "#f3f4f6" }
                      }
                    >
                      {activePhase === i ? (
                        <span className="text-lg">{p.emoji}</span>
                      ) : (
                        <p.icon className="h-4 w-4 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <div
                        className="text-[0.6rem] font-black tracking-[0.18em] uppercase mb-0.5"
                        style={{ color: activePhase === i ? p.color : "#9ca3af" }}
                      >
                        {p.phase}
                      </div>
                      <div className={`text-[0.8rem] font-bold leading-tight ${activePhase === i ? "text-gray-900" : "text-gray-500"}`}>
                        {p.title}
                      </div>
                    </div>
                    {activePhase === i && (
                      <ChevronDown
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-5 w-5"
                        style={{ color: p.color }}
                      />
                    )}
                  </motion.button>

                  {i < PHASES.length - 1 && (
                    <div className="flex flex-col items-center justify-center px-1 shrink-0">
                      <div className="flex flex-col items-center gap-0.5">
                        <div className="h-px w-6 bg-gradient-to-r from-gray-200 to-gray-300" />
                        <div className="text-[0.5rem] text-center text-gray-300 leading-tight max-w-[48px]">
                          {FLOW_CONNECTORS[i]}
                        </div>
                        <ArrowRight className="h-3 w-3 text-gray-300" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile pills */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
            {PHASES.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActivePhase(i)}
                className={[
                  "shrink-0 rounded-xl border px-3 py-2 text-[0.72rem] font-semibold transition-all",
                  activePhase === i ? "text-white shadow-md" : "border-gray-200 bg-white text-gray-500",
                ].join(" ")}
                style={activePhase === i ? { background: p.color, borderColor: p.color } : {}}
              >
                {p.emoji} {p.title}
              </button>
            ))}
          </div>

          {/* Phase detail card */}
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 overflow-hidden rounded-3xl border shadow-xl"
            style={{ backgroundColor: phase.light, borderColor: phase.border }}
          >
            <div className="grid lg:grid-cols-[1fr_1.1fr]">
              {/* Left */}
              <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r" style={{ borderColor: phase.border }}>
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-3xl shadow-lg"
                    style={{ background: phase.color, boxShadow: `0 8px 24px ${phase.color}35` }}
                  >
                    {phase.emoji}
                  </div>
                  <div>
                    <div className="text-[0.65rem] font-black tracking-[0.2em] uppercase" style={{ color: phase.color }}>
                      {phase.phase}
                    </div>
                    <h3 className="text-xl font-extrabold text-gray-900 leading-tight">{phase.title}</h3>
                  </div>
                </div>

                <p className="text-[0.92rem] font-semibold text-gray-600 mb-6 italic">
                  &ldquo;{phase.tagline}&rdquo;
                </p>

                <div
                  className="flex items-start gap-3 rounded-2xl border p-4"
                  style={{ background: `${phase.color}10`, borderColor: phase.border }}
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: phase.color }} />
                  <div>
                    <div className="text-[0.68rem] font-black uppercase tracking-widest text-gray-400 mb-1">Outcome</div>
                    <div className="text-[0.88rem] font-bold text-gray-800">{phase.outcome}</div>
                  </div>
                </div>

                <div className="mt-6 flex gap-2">
                  <button
                    onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
                    disabled={activePhase === 0}
                    className="flex-1 rounded-xl border border-gray-200 bg-white px-3 py-2 text-[0.75rem] font-semibold text-gray-500 disabled:opacity-30 hover:border-gray-300 transition-all"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => setActivePhase(Math.min(PHASES.length - 1, activePhase + 1))}
                    disabled={activePhase === PHASES.length - 1}
                    className="flex-1 rounded-xl px-3 py-2 text-[0.75rem] font-semibold text-white disabled:opacity-30 transition-all"
                    style={{ background: phase.color }}
                  >
                    Next →
                  </button>
                </div>
              </div>

              {/* Right: steps */}
              <div className="p-8 lg:p-10">
                <div className="mb-5 text-[0.68rem] font-black uppercase tracking-[0.2em] text-gray-400">
                  Step-by-step execution
                </div>
                <div className="space-y-3">
                  {phase.steps.map((step, si) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: si * 0.07 }}
                      className="flex items-start gap-3 rounded-xl border bg-white p-3.5 shadow-sm"
                      style={{ borderColor: phase.border }}
                    >
                      <div
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white text-[0.7rem] font-black"
                        style={{ background: phase.color }}
                      >
                        {si + 1}
                      </div>
                      <div className="flex flex-1 items-center gap-2">
                        <step.icon className="h-3.5 w-3.5 shrink-0 text-gray-400" />
                        <span className="text-[0.85rem] font-medium text-gray-700">{step.label}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="mb-2 flex justify-between text-[0.68rem] text-gray-400">
                    <span>Platform coverage</span>
                    <span style={{ color: phase.color }}>Phase {activePhase + 1} of {PHASES.length}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${phase.color}, ${phase.color}aa)` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${((activePhase + 1) / PHASES.length) * 100}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Full linear workflow diagram */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14 text-center"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-widest text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Master workflow
              </div>
              <h2
                className="font-extrabold tracking-[-0.025em] text-gray-900"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
              >
                Field to fuel —{" "}
                <span className="text-emerald-600">the complete picture</span>
              </h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 via-sky-200 to-emerald-200 lg:left-1/2 lg:-translate-x-1/2" />
              <div className="space-y-0">
                {PHASES.map((p, i) => {
                  const isRight = i % 2 !== 0
                  return (
                    <div key={p.id}>
                      <motion.div
                        initial={{ opacity: 0, x: isRight ? 32 : -32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        className={`relative flex items-center gap-4 py-4 lg:gap-0 ${isRight ? "lg:flex-row-reverse" : ""}`}
                      >
                        <div className={`ml-16 flex-1 lg:ml-0 ${isRight ? "lg:pl-12" : "lg:pr-12"} lg:w-[calc(50%-2rem)]`}>
                          <div
                            className="group relative overflow-hidden rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                            style={{ backgroundColor: p.light, borderColor: p.border }}
                          >
                            <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-full opacity-10" style={{ background: p.color }} />
                            <div className="flex items-start gap-3">
                              <div
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl shadow-sm"
                                style={{ background: p.color }}
                              >
                                {p.emoji}
                              </div>
                              <div className="flex-1">
                                <div className="text-[0.58rem] font-black tracking-[0.2em] uppercase mb-0.5" style={{ color: p.color }}>
                                  {p.phase}
                                </div>
                                <h3 className="text-[0.92rem] font-bold text-gray-900">{p.title}</h3>
                                <p className="mt-1 text-[0.75rem] text-gray-500 italic">&ldquo;{p.tagline}&rdquo;</p>
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                  {p.steps.slice(0, 3).map((s) => (
                                    <span
                                      key={s.label}
                                      className="rounded-lg px-2 py-0.5 text-[0.62rem] font-medium"
                                      style={{ background: `${p.color}15`, color: p.color }}
                                    >
                                      {s.label}
                                    </span>
                                  ))}
                                  {p.steps.length > 3 && (
                                    <span className="rounded-lg bg-gray-100 px-2 py-0.5 text-[0.62rem] font-medium text-gray-500">
                                      +{p.steps.length - 3} more
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="absolute left-8 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 lg:left-1/2">
                          <div
                            className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-black text-white shadow-lg ring-4 ring-white"
                            style={{ background: p.color }}
                          >
                            {i + 1}
                          </div>
                        </div>

                        <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                      </motion.div>

                      {i < PHASES.length - 1 && (
                        <div className="relative flex items-center pl-16 py-1 lg:pl-0 lg:justify-center">
                          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[0.65rem] font-semibold text-gray-400 shadow-sm lg:ml-16">
                            <ArrowRight className="h-2.5 w-2.5" />
                            {FLOW_CONNECTORS[i]}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative overflow-hidden py-24">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(187,247,208,0.4), transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-widest text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                See it live
              </div>
              <h2
                className="font-extrabold tracking-tight text-gray-900"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
              >
                Watch these workflows in a{" "}
                <span className="text-emerald-600">live plant demo.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[0.95rem] text-gray-500 leading-relaxed">
                We&apos;ll walk you through every phase using real data from operating Bio-CNG plants.
                30 minutes. No slides. Just the product.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-emerald-600 px-8 py-3.5 text-[0.88rem] font-semibold text-white shadow-lg shadow-emerald-200/60 hover:bg-emerald-500 transition-all hover:-translate-y-0.5"
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  Book a plant walkthrough
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/modules"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-3.5 text-[0.88rem] font-medium text-gray-700 shadow-sm hover:border-emerald-300 hover:text-emerald-700 transition-all"
                >
                  Explore all modules →
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

// ─── Dark mode component (unchanged) ──────────────────────────────────────────
function WorkflowsDark() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <LandingNav />

      <header className="relative overflow-hidden pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/4 h-80 w-[44rem] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.10),transparent_65%)] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-emerald-400">Workflows</span>
          </motion.div>
          <motion.h1
            className="max-w-3xl bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Run ops{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">as a system.</span>
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-white/70"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A workflow-first view of onboarding, readiness, collection planning, and intake — built for daily execution.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            {TAGS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2">
                <Icon className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-xs font-medium text-white/70">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
            <div className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-white/30">
              Update in progress
            </div>
            <h2 className="mt-2 text-2xl font-bold text-white">Workflows are being refreshed.</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/55">
              We&apos;re updating this page to reflect the latest platform workflows. In the meantime, you can explore modules and capabilities on the Product page.
            </p>
            <a
              href="/modules"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-emerald-400"
            >
              Browse modules
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

// ─── Root export: switches by theme ───────────────────────────────────────────
export default function WorkflowsPage() {
  const { theme } = useTheme()
  return theme === "light" ? <WorkflowsLight /> : <WorkflowsDark />
}
