import { motion } from "framer-motion"

const LOGOS = [
  { name: "Adani Agri", abbr: "AA" },
  { name: "ITC Agro", abbr: "ITC" },
  { name: "Nayara Energy", abbr: "NE" },
  { name: "Bharat Biogas", abbr: "BB" },
  { name: "Avaada Energy", abbr: "AV" },
  { name: "Greenko", abbr: "GK" },
]

export function LogoBand() {
  return (
    <section className="logo-band-section relative border-y border-white/[0.06] bg-white/[0.015] py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-white/45"
        >
          Trusted by leading agri & energy businesses across India
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {LOGOS.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex items-center gap-2.5 opacity-50 transition-opacity duration-300 hover:opacity-90"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[0.58rem] font-bold text-white/60 group-hover:border-emerald-500/30 group-hover:text-emerald-400 transition-all">
                {logo.abbr}
              </div>
              <span className="text-[0.82rem] font-semibold tracking-tight text-white/60 group-hover:text-white/90 transition-colors">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-5 border-t border-white/[0.05] pt-10"
        >
          {[
            { v: "50,000+", l: "Farmers managed" },
            { v: "₹40 Cr+", l: "Payments processed" },
            { v: "12+",     l: "Live plants" },
            { v: "99.9%",   l: "Platform uptime" },
            { v: "14 days", l: "Average go-live" },
          ].map((s, i) => (
            <div
              key={s.l}
              className={`text-center ${i < 4 ? "border-r border-white/[0.06] pr-12 last:border-0 last:pr-0" : ""}`}
            >
              <div className="text-2xl font-bold text-white">{s.v}</div>
              <div className="mt-0.5 text-[0.68rem] font-medium tracking-wide text-white/55">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
