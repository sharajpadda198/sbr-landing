import { motion } from "framer-motion"
import { LandingNav } from "../components/landing/LandingNav"
import { CalendlyEmbed } from "../components/landing/CalendlyEmbed"
import { Footer } from "../components/landing/Footer"
import { Calendar, Clock, Users } from "lucide-react"

const PERKS = [
  { icon: Calendar, label: "30-min tailored demo" },
  { icon: Users, label: "No login required" },
  { icon: Clock, label: "Go live in 14 days" },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <LandingNav />

      {/* Hero */}
      <header className="relative overflow-hidden pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-1/3 h-80 w-[44rem] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.11),transparent_65%)] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-emerald-400">Contact</span>
          </motion.div>
          <motion.h1
            className="max-w-2xl bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Book a walkthrough.
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-white/70"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Tell us about your operations and current challenges. We will tailor the demo to what you would actually use.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            {PERKS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2">
                <Icon className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-xs font-medium text-white/70">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      <main className="pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] shadow-2xl shadow-black/40">
            <CalendlyEmbed mode="inline" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
