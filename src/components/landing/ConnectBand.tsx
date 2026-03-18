import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ShieldCheck, Truck, TrendingUp, Users } from "lucide-react"

const PILLARS = [
  { Icon: Users,       label: "50K+ Farmer Records",    desc: "Aadhaar KYC & digital onboarding" },
  { Icon: ShieldCheck, label: "Verified Quality",        desc: "Real-time feedstock quality control" },
  { Icon: Truck,       label: "Route Optimisation",      desc: "AI-powered logistics scheduling" },
  { Icon: TrendingUp,  label: "Supply Forecasting",      desc: "ML-based biomass predictions" },
]

export function ConnectBand() {
  return (
    <section className="connect-band-section bg-[#040f08] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-4xl text-center">

        <motion.h2
          className="font-serif text-white text-balance leading-[1.08]"
          style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Zenithra securely connects your{" "}
          <span className="text-emerald-400">farmers</span> to your{" "}
          <span className="text-emerald-400">plant</span> to give a clear
          picture of your feedstock and help you operate a healthier supply chain.
        </motion.h2>

        <motion.p
          className="mx-auto mt-5 max-w-lg text-[0.88rem] leading-relaxed text-white/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Zenithra onboards farmers through Aadhaar-based OTP verification.{" "}
          <Link to="/modules" className="underline underline-offset-2 text-white/55 hover:text-white transition-colors">
            See the list of integrations
          </Link>
          .
        </motion.p>

        {/* Floating platform widget */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-4"
        >
          <div className="flex -space-x-2">
            {["🌾", "🚛", "⚡", "✅"].map((e, i) => (
              <span key={i} className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm">
                {e}
              </span>
            ))}
          </div>
          <div className="text-left">
            <div className="text-[0.8rem] font-semibold text-white">All in one place</div>
            <div className="text-[0.7rem] text-white/40">Farmers → Quality → Logistics → Plant Gate</div>
          </div>
        </motion.div>

        {/* Feature pillars */}
        <motion.div
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {PILLARS.map(({ Icon, label, desc }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 hover:border-emerald-700/40 hover:bg-emerald-950/20 transition-colors duration-300"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-950/60 border border-emerald-800/40">
                <Icon className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-[0.78rem] font-semibold text-white text-center">{label}</div>
                <div className="mt-1 text-[0.68rem] text-white/35 text-center">{desc}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
