import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Leaf } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="final-cta-section relative overflow-hidden py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Radial green glow in the center */}
        <div
          className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[80px]"
          style={{ background: "radial-gradient(ellipse, #059669 0%, transparent 70%)" }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Vignette */}
        <div className="final-cta-vignette absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_30%,#030712_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex justify-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/25 bg-emerald-500/10 shadow-[0_0_50px_rgba(16,185,129,0.25)]">
            <Leaf className="h-8 w-8 text-emerald-400" />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-bold text-white leading-tight tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
        >
          Your supply chain,
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #34d399 0%, #10b981 40%, #06b6d4 100%)" }}
          >
            finally under control.
          </span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.22 }}
          className="mx-auto mt-6 max-w-xl text-[1rem] leading-[1.8] text-white/65"
        >
          Join hundreds of agri-businesses that replaced spreadsheets and manual coordination with Zenithra. Go live in 14 days, guaranteed.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-[0.9rem] font-semibold text-white transition-all duration-300 hover:bg-emerald-400 hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(16,185,129,0.4)]"
          >
            Book a free demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/modules"
            className="final-cta-secondary-btn inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-8 py-4 text-[0.9rem] font-medium text-white/75 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:text-white"
          >
            Explore the platform
          </Link>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-10"
        >
          {[
            { v: "50,000+", l: "Farmers managed" },
            { v: "?40 Cr+", l: "Payments processed" },
            { v: "14 days", l: "Go-live guarantee" },
            { v: "99.9%",   l: "Platform uptime" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-2xl font-bold text-white">{s.v}</div>
              <div className="mt-1 text-[0.65rem] font-medium tracking-wide text-white/55">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
