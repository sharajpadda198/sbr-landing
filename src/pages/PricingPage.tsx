import { motion } from "framer-motion"
import { LandingNav } from "../components/landing/LandingNav"
import { PricingSection } from "../components/landing/PricingSection"
import { FAQ } from "../components/landing/FAQ"
import { Footer } from "../components/landing/Footer"
import { Check, CreditCard, Zap } from "lucide-react"

const TRUST = [
  { icon: Zap, label: "14-day free trial" },
  { icon: CreditCard, label: "No credit card needed" },
  { icon: Check, label: "Cancel anytime" },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <LandingNav />

      {/* Hero */}
      <header className="relative overflow-hidden pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-1/2 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.10),transparent_65%)] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 text-center lg:px-10 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-emerald-400">Pricing</span>
          </motion.div>
          <motion.h1
            className="mx-auto max-w-3xl bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Plans that{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">scale with you.</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-white/70"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Start with core coordination and expand into AI forecasting, logistics optimisation, and enterprise reporting.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            {TRUST.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2">
                <Icon className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-xs font-medium text-white/70">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      <main className="pb-24">
        <PricingSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
