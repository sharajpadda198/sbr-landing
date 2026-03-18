import { useState } from "react"
import { motion } from "framer-motion"
import { LandingNav } from "../components/landing/LandingNav"
import { ModulesGrid } from "../components/landing/ModulesGrid"
import { Footer } from "../components/landing/Footer"
import {
  Sparkles, Users, Sprout, Navigation, Scale, UserCog,
  ChevronRight,
} from "lucide-react"

const SERVICE_AREAS = [
  { icon: Sparkles, label: "Farmer Growth",     color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" },
  { icon: Sprout,   label: "Cultivation",        color: "bg-lime-500/10 border-lime-500/20 text-lime-400" },
  { icon: Navigation, label: "Logistics & Fleet", color: "bg-sky-500/10 border-sky-500/20 text-sky-400" },
  { icon: Scale,    label: "Harvest & QC",       color: "bg-amber-500/10 border-amber-500/20 text-amber-400" },
  { icon: Users,    label: "Finance & Procurement", color: "bg-violet-500/10 border-violet-500/20 text-violet-400" },
  { icon: UserCog,  label: "People & Support",   color: "bg-rose-500/10 border-rose-500/20 text-rose-400" },
]

const NAV_SECTIONS = [
  { id: "modules",   label: "All Modules" },
]

export default function ModulesPage() {
  const [activeNav, setActiveNav] = useState("modules")

  const scrollTo = (id: string) => {
    setActiveNav(id)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <LandingNav />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden pt-20">
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.08),transparent_65%)] blur-3xl" />
          <div className="absolute top-20 right-0 h-64 w-96 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.06),transparent_65%)] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-20 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10 lg:pt-24">
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-emerald-400">Platform Modules</span>
            </motion.div>

            <motion.h1
              className="max-w-2xl bg-gradient-to-b from-white to-white/55 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              18 modules.{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                One operating loop.
              </span>
            </motion.h1>

            <motion.p
              className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-white/60"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Pick what you need — farmer network, harvest prediction, routing, QC, inventory, reporting — and scale as your operations grow.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-emerald-400"
              >
                Request a demo <ChevronRight className="h-3.5 w-3.5" />
              </a>
              <button
                onClick={() => scrollTo("modules")}
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.10] bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white/75 transition-all hover:border-white/[0.18] hover:text-white"
              >
                Browse modules
              </button>
            </motion.div>
          </div>

          {/* Right: service area visual */}
          <motion.div
            className="hidden lg:grid grid-cols-3 gap-3 w-[340px] shrink-0"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {SERVICE_AREAS.map(({ icon: Icon, label, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                className={`flex flex-col items-center justify-center gap-2 rounded-2xl border p-5 ${color}`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-center text-[0.65rem] font-semibold leading-tight tracking-wide text-white/70">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Sticky section nav */}
        <div className="sticky top-[57px] z-30 border-b border-white/[0.07] bg-[#030712]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-6 py-2 lg:px-10">
            {NAV_SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`shrink-0 rounded-lg px-4 py-2 text-xs font-medium tracking-wide transition-all duration-200 ${
                  activeNav === s.id
                    ? "bg-white/[0.08] text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main>
        {/* Modules */}
        <section id="modules" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-10">
            <div className="mb-2 text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-white/30">01</div>
            <h2 className="text-2xl font-bold text-white">All Modules</h2>
            <p className="mt-1.5 text-sm text-white/50">Every capability, filterable by category.</p>
          </div>
          <ModulesGrid />
        </section>
      </main>

      <Footer />
    </div>
  )
}
