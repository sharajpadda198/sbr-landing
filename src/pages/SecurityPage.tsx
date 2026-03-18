import { motion } from "framer-motion"
import { LandingNav } from "../components/landing/LandingNav"
import { Security } from "../components/landing/Security"
import { Footer } from "../components/landing/Footer"
import { Shield, Lock, Eye } from "lucide-react"

const BADGES = [
  { icon: Shield, label: "SOC 2 Type II" },
  { icon: Lock, label: "AES-256 encrypted" },
  { icon: Eye, label: "Zero-trust access" },
]

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <LandingNav />

      {/* Hero */}
      <header className="relative overflow-hidden pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.09),transparent_65%)] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-emerald-400">Security</span>
          </motion.div>
          <motion.h1
            className="max-w-2xl bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Enterprise-grade security,{" "}
            <br className="hidden sm:block" />
            by default.
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-white/70"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Every layer of the platform is built with security first — from encryption at rest to role-based access and full audit trails.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            {BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2">
                <Icon className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-xs font-medium text-white/70">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      <main className="pb-24">
        <Security />
      </main>

      <Footer />
    </div>
  )
}
