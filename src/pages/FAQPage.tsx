import { motion } from "framer-motion"
import { LandingNav } from "../components/landing/LandingNav"
import { FAQ } from "../components/landing/FAQ"
import { Footer } from "../components/landing/Footer"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <LandingNav />

      {/* Hero */}
      <header className="relative overflow-hidden pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-1/3 h-72 w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.10),transparent_65%)] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-emerald-400">FAQ</span>
          </motion.div>
          <motion.h1
            className="max-w-2xl bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Frequently asked questions.
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-white/70"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Everything you need to know about the platform, onboarding, pricing, and integrations.
          </motion.p>
        </div>
      </header>

      <main className="pb-24">
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}
