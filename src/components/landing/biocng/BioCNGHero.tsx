import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Flame, Leaf, TrendingUp, Truck, Users, Zap } from "lucide-react"

const STATS = [
  { v: "40%", suffix: "", l: "Lower feedstock cost", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
  { v: "3×", suffix: "", l: "Faster farmer payments", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
  { v: "98%", suffix: "", l: "Route fulfilment rate", icon: Truck, color: "text-sky-500", bg: "bg-sky-50" },
  { v: "50K+", suffix: "", l: "Farmers on platform", icon: Users, color: "text-violet-500", bg: "bg-violet-50" },
]

const TRUST_LOGOS = ["MNRE", "SATAT", "IOCL", "BPCL", "Adani Gas"]

function AnimatedCounter({ value, delay = 0 }: { value: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const count = useMotionValue(0)
  const spring = useSpring(count, { duration: 1800, bounce: 0 })
  const numeric = parseFloat(value.replace(/[^0-9.]/g, ""))
  const suffix = value.replace(/[0-9.]/g, "")

  useEffect(() => {
    const timer = setTimeout(() => { count.set(numeric) }, delay * 1000)
    return () => clearTimeout(timer)
  }, [count, numeric, delay])

  return (
    <span ref={ref}>
      <motion.span>{useTransform(spring, (v) => {
        if (suffix.includes("K")) return `${Math.round(v / 1000)}K+`
        if (suffix === "×") return `${v.toFixed(0)}×`
        if (suffix === "%") return `${Math.round(v)}%`
        return value
      })}</motion.span>
    </span>
  )
}

export function BioCNGHero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#f0fdf4] via-white to-[#f0f9ff] pt-28 pb-0"
      aria-label="Bio-CNG Hero"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top centre radial */}
        <div
          className="absolute -top-40 left-1/2 h-[800px] w-[1100px] -translate-x-1/2 rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(187,247,208,0.55) 0%, transparent 62%)" }}
        />
        {/* Right amber accent */}
        <div
          className="absolute top-1/4 -right-60 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(253,230,138,0.3) 0%, transparent 70%)" }}
        />
        {/* Bottom-left sky */}
        <div
          className="absolute -bottom-20 -left-40 h-[400px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(186,230,253,0.35) 0%, transparent 70%)" }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, #065f46 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-white px-5 py-2 text-[0.75rem] font-semibold text-emerald-700 shadow-sm shadow-emerald-100">
            <Flame className="h-3.5 w-3.5 text-amber-500" />
            India's Bio-CNG revolution — we run the supply chain
            <span className="ml-1 rounded-full bg-emerald-600 px-2 py-0.5 text-[0.62rem] font-bold text-white">LIVE</span>
          </span>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* ── Left: Copy ── */}
          <div>
            <motion.h1
              initial={{ y: 48, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              className="text-balance font-extrabold leading-[1.04] tracking-[-0.03em] text-gray-900"
              style={{ fontSize: "clamp(2.6rem, 5.8vw, 4.8rem)" }}
            >
              From{" "}
              <span className="relative inline-block">
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #059669 0%, #34d399 60%, #f59e0b 100%)" }}
                >
                  stubble fields
                </span>
                {/* underline squiggle */}
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <motion.path
                    d="M0 6 Q25 1 50 5 Q75 9 100 4 Q125 -1 150 5 Q175 9 200 4"
                    stroke="url(#heroUnderline)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="heroUnderline" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
              {" "}to{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)" }}
              >
                clean CNG.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 max-w-[520px] text-[1.05rem] leading-[1.85] text-gray-500"
            >
              Zenithra is the only platform built end-to-end for Bio-CNG plants — connecting
              farmers, logistics, quality checks, and plant operations in a single dashboard so
              you never face a feedstock shortage again.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-emerald-600 px-8 py-3.5 text-[0.88rem] font-semibold text-white shadow-lg shadow-emerald-200/60 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-emerald-300/60"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Book a plant walkthrough
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/modules"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-[0.88rem] font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:text-emerald-700 hover:shadow-emerald-100"
              >
                Explore modules →
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <span className="text-[0.72rem] font-medium text-gray-400 tracking-wide">Aligned with</span>
              {TRUST_LOGOS.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-gray-200 bg-white px-3 py-1 text-[0.68rem] font-semibold text-gray-500 shadow-sm"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative"
          >
            {/* Glow ring behind image */}
            <div className="absolute inset-4 rounded-3xl bg-emerald-400/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-emerald-100 shadow-2xl shadow-emerald-200/40">
              <img
                src="/cbg-plant.png"
                alt="Bio-CNG plant"
                className="w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-emerald-900/10" />

              {/* Live output chip — overlaid bottom */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/20 bg-black/40 px-4 py-2.5 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-[0.72rem] font-semibold text-white">Live plant data</span>
                </div>
                <div className="flex gap-4">
                  <div className="text-right">
                    <div className="text-[0.68rem] text-white/60">Intake today</div>
                    <div className="text-[0.82rem] font-bold text-white">148 MT</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[0.68rem] text-white/60">CNG output</div>
                    <div className="text-[0.82rem] font-bold text-emerald-300">↑ 23%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge — Zero stubble */}
            <motion.div
              initial={{ opacity: 0, y: -14, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-5 -right-5 flex items-center gap-2.5 rounded-2xl border border-amber-200 bg-white px-4 py-3 shadow-xl shadow-amber-100/50"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50">
                <Zap className="h-4 w-4 text-amber-500" />
              </div>
              <div>
                <div className="text-[0.72rem] font-bold text-gray-800">Zero stubble burning</div>
                <div className="text-[0.62rem] text-gray-400">50,000+ farmers enrolled</div>
              </div>
            </motion.div>

            {/* Floating badge — CNG certified */}
            <motion.div
              initial={{ opacity: 0, x: -16, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 1.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -left-6 top-1/3 flex items-center gap-2.5 rounded-2xl border border-emerald-200 bg-white px-4 py-3 shadow-xl shadow-emerald-100/50"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50">
                <Leaf className="h-4 w-4 text-emerald-500" />
              </div>
              <div>
                <div className="text-[0.72rem] font-bold text-gray-800">SATAT Compliant</div>
                <div className="text-[0.62rem] text-gray-400">Audit-ready operations</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Stats band ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {STATS.map((s, i) => (
            <div
              key={s.l}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md hover:shadow-emerald-100/50"
            >
              <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${s.bg}`}>
                <s.icon className={`h-4.5 w-4.5 ${s.color}`} />
              </div>
              <div className={`text-2xl font-extrabold tracking-tight ${s.color}`}>
                <AnimatedCounter value={s.v} delay={0.8 + i * 0.1} />
              </div>
              <div className="mt-1 text-[0.68rem] font-medium tracking-wide text-gray-400">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="relative mt-20 h-20 overflow-hidden">
        <svg viewBox="0 0 1440 80" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80 Z" fill="#f8fdf9" />
        </svg>
      </div>
    </section>
  )
}
