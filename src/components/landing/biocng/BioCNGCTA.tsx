import { motion } from "framer-motion"
import { usePrefersReducedMotion } from "../../../lib/usePrefersReducedMotion"
import { ArrowRight, CheckCircle2, Star } from "lucide-react"

const METRICS = [
  { value: "40%", label: "Lower feedstock cost", sub: "per MT delivered", color: "#059669", bg: "#f0fdf4", border: "#bbf7d0" },
  { value: "3×", label: "Faster farmer payments", sub: "vs. manual process", color: "#0284c7", bg: "#f0f9ff", border: "#bae6fd" },
  { value: "98%", label: "Route fulfilment rate", sub: "across all vehicles", color: "#7c3aed", bg: "#f5f3ff", border: "#ddd6fe" },
  { value: "₹18L+", label: "Monthly savings / plant", sub: "avg. across customers", color: "#d97706", bg: "#fffbeb", border: "#fde68a" },
]

const TESTIMONIALS = [
  {
    quote: "Before Zenithra we were losing 2–3 days a week just chasing farmers on WhatsApp. Now our procurement team handles 3× the volume with half the effort.",
    name: "Plant Manager",
    role: "250 TPD Bio-CNG Plant, Punjab",
    avatar: "/team-rajinder.png",
    stars: 5,
  },
  {
    quote: "The quality enforcement module alone saved us ₹4L last month. Bad batches were silently killing our gas yield and we had no way to know who was supplying what.",
    name: "Operations Head",
    role: "180 TPD Bio-CNG Plant, Haryana",
    avatar: "/team-sharaj.png",
    stars: 5,
  },
]

const CHECKLIST = [
  "Free onboarding & data migration",
  "Dedicated implementation support",
  "Works on low-end Android (2G / 3G)",
  "SATAT-compliant reporting built-in",
  "Multi-language: Hindi, Punjabi, English",
  "No long-term contract required",
]

export function BioCNGCTA() {
  const reduced = usePrefersReducedMotion()

  return (
    <section className="relative overflow-hidden bg-white py-28 lg:py-36">
      {/* Top blob */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-30"
        style={{ background: "radial-gradient(ellipse, #d1fae5, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

        {/* ── Metrics ── */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-6 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-widest text-emerald-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Real results from live plants
          </div>
          <h2
            className="font-extrabold tracking-[-0.025em] text-gray-900"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}
          >
            Numbers that speak for themselves.
          </h2>
        </motion.div>

        <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 * i }}
              className="group relative overflow-hidden rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
              style={{ backgroundColor: m.bg, borderColor: m.border }}
            >
              <div
                className="absolute top-0 right-0 h-16 w-16 rounded-bl-full opacity-10"
                style={{ background: m.color }}
              />
              <div
                className="text-3xl font-extrabold tracking-tight"
                style={{ color: m.color }}
              >
                {m.value}
              </div>
              <div className="mt-1.5 text-[0.8rem] font-semibold text-gray-700">{m.label}</div>
              <div className="mt-0.5 text-[0.68rem] text-gray-400">{m.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* ── Testimonials ── */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 grid gap-6 md:grid-cols-2"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={reduced ? false : { opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 * i }}
              className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Quote mark */}
              <div className="absolute top-5 right-6 text-6xl font-black leading-none text-emerald-100 select-none pointer-events-none">
                "
              </div>
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="relative text-[0.92rem] leading-relaxed text-gray-700 italic">
                "{t.quote}"
              </p>
              <div className="mt-5 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover border-2 border-emerald-100"
                />
                <div>
                  <div className="text-[0.82rem] font-bold text-gray-900">{t.name}</div>
                  <div className="text-[0.72rem] text-gray-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Final CTA card ── */}
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl shadow-2xl"
        >
          <div
            className="relative grid gap-10 p-10 md:p-14 lg:grid-cols-[1fr_auto]"
            style={{ background: "linear-gradient(135deg, #064e3b 0%, #065f46 55%, #0c4a6e 100%)" }}
          >
            {/* Dot pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "22px 22px",
              }}
            />

            {/* Left: copy + checklist */}
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.72rem] font-bold text-emerald-300 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                Now onboarding Bio-CNG plants · Q2 2026
              </span>
              <h3
                className="font-extrabold text-white leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
              >
                Transform your plant operations.
                <br />
                <span className="text-emerald-300">Starting in days, not months.</span>
              </h3>
              <p className="mt-4 text-emerald-200/80 text-[0.92rem] leading-relaxed max-w-lg">
                Join the growing network of Bio-CNG plants running on Zenithra — cut costs,
                improve yields, and pay farmers faster.
              </p>

              {/* Checklist */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6">
                {CHECKLIST.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    <span className="text-[0.8rem] text-emerald-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: CTA buttons */}
            <div className="relative flex flex-col justify-center gap-4 md:min-w-[220px]">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-white px-7 py-4 text-[0.88rem] font-bold text-emerald-700 shadow-lg transition-all hover:bg-emerald-50 hover:-translate-y-0.5"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-100/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Book a plant walkthrough
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-7 py-4 text-[0.88rem] font-semibold text-white transition-all hover:bg-white/20"
              >
                Watch 3-min demo ▶
              </a>
              <p className="text-center text-[0.68rem] text-emerald-400/70">
                Free onboarding · No credit card
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
