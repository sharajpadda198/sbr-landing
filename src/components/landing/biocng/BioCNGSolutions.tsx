import { motion } from "framer-motion"
import {
  BarChart3, Bell, CheckCircle2, CreditCard,
  Route, Shield, Smartphone, Users, Zap,
} from "lucide-react"

const FEATURES = [
  {
    icon: Users,
    accent: "#059669",
    tag: "Farmer CRM",
    tagBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    title: "Every farmer.\nOne dashboard.",
    body: "Register farmers, log land parcels, track crop types, and manage village clusters. Know exactly who is ready to supply — and when.",
    bullets: [
      "Aadhaar-based digital onboarding",
      "Crop calendar and harvest date forecasting",
      "Cluster & zone assignments with maps",
      "Compliance document storage & reminders",
    ],
    img: "/farmer-connection.jpg",
    reverse: false,
    imgAccent: "from-emerald-400/30",
  },
  {
    icon: Route,
    accent: "#0284c7",
    tag: "Smart Logistics",
    tagBg: "bg-sky-50 text-sky-700 border-sky-200",
    title: "AI routes.\nHalf the fuel.",
    body: "AI-planned pickup routes that minimise empty kilometres. Drivers get turn-by-turn instructions. Plant managers track every vehicle in real time.",
    bullets: [
      "AI route optimisation across 100s of farms",
      "Live GPS tracking of every vehicle",
      "Digital weighment auto-capture at gate",
      "340 km saved per plant per day on average",
    ],
    img: "/telimatics.jpg",
    reverse: true,
    imgAccent: "from-sky-400/30",
  },
  {
    icon: Shield,
    accent: "#7c3aed",
    tag: "Quality Control",
    tagBg: "bg-violet-50 text-violet-700 border-violet-200",
    title: "Catch bad feedstock\nbefore it enters.",
    body: "Log moisture, ash content, and density at source. Flag off-spec batches before they reach the digester. Trend quality by farmer over time.",
    bullets: [
      "Digital QC at farm gate & plant entry",
      "Auto-reject rules for out-of-spec batches",
      "Quality score per farmer — shareable reports",
      "Directly linked to payment calculation",
    ],
    img: "/bailing-image.jpg",
    reverse: false,
    imgAccent: "from-violet-400/30",
  },
]

const QUICK_WINS = [
  {
    icon: CreditCard,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    title: "Instant farmer payments",
    body: "Weight × grade → bank transfer in one click. No reconciliation delays. No disputes.",
  },
  {
    icon: BarChart3,
    color: "text-sky-600",
    bg: "bg-sky-50",
    title: "AI supply forecasting",
    body: "Predict feedstock availability 14 days ahead so you never face an unplanned shutdown.",
  },
  {
    icon: Smartphone,
    color: "text-violet-600",
    bg: "bg-violet-50",
    title: "Field agent mobile app",
    body: "Works on 2G. GPS intake confirmation, digital QC forms, WhatsApp payment receipts.",
  },
  {
    icon: Bell,
    color: "text-amber-600",
    bg: "bg-amber-50",
    title: "Proactive alerts",
    body: "Get notified of supply gaps, failed QC batches, or payment anomalies before they escalate.",
  },
  {
    icon: Zap,
    color: "text-orange-600",
    bg: "bg-orange-50",
    title: "Weighbridge integration",
    body: "Auto-capture gate weights — no manual entry, zero slip disputes.",
  },
  {
    icon: CheckCircle2,
    color: "text-teal-600",
    bg: "bg-teal-50",
    title: "Full audit trail",
    body: "Every action timestamped and traceable. Compliance-ready. Financeable operations.",
  },
]

export function BioCNGSolutions() {
  return (
    <section id="solutions" className="bg-white py-28 lg:py-36" aria-label="How Zenithra solves Bio-CNG ops">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-24 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-widest text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            How Zenithra helps
          </div>
          <h2
            className="font-extrabold leading-[1.1] tracking-[-0.025em] text-gray-900"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}
          >
            One platform.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #059669 0%, #0ea5e9 100%)" }}
            >
              Every operation.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-relaxed text-gray-500">
            Zenithra replaces spreadsheets, WhatsApp groups, and manual logs with a single unified
            platform built specifically for Bio-CNG feedstock supply chains.
          </p>
        </motion.div>

        {/* ── Deep-dive features ── */}
        <div className="space-y-32">
          {FEATURES.map((f, fi) => (
            <motion.div
              key={f.tag}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`grid items-center gap-14 lg:grid-cols-2 ${f.reverse ? "lg:[&>*:first-child]:order-last" : ""}`}
            >
              {/* Text side */}
              <div>
                <div className="mb-5 inline-flex items-center gap-2.5">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl shadow-sm"
                    style={{ background: `${f.accent}18`, border: `1px solid ${f.accent}30` }}
                  >
                    <f.icon className="h-5 w-5" style={{ color: f.accent }} />
                  </div>
                  <span className={`rounded-full border px-3 py-1 text-[0.68rem] font-bold uppercase tracking-widest ${f.tagBg}`}>
                    {f.tag}
                  </span>
                </div>

                <h3
                  className="whitespace-pre-line font-extrabold leading-[1.15] tracking-[-0.025em] text-gray-900"
                  style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.5rem)" }}
                >
                  {f.title}
                </h3>

                <p className="mt-4 text-[0.98rem] leading-[1.85] text-gray-500">{f.body}</p>

                <ul className="mt-6 space-y-3.5">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <div
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={{ background: `${f.accent}18` }}
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" style={{ color: f.accent }} />
                      </div>
                      <span className="text-[0.88rem] text-gray-600">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Mini metric strip */}
                <div
                  className="mt-8 inline-flex items-center gap-3 rounded-2xl border px-5 py-3"
                  style={{
                    background: `${f.accent}08`,
                    borderColor: `${f.accent}25`,
                  }}
                >
                  <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: f.accent }} />
                  <span className="text-[0.78rem] font-semibold" style={{ color: f.accent }}>
                    {fi === 0 && "Avg. 2 hrs saved per procurement manager daily"}
                    {fi === 1 && "340 km saved per plant · 98% route fulfilment"}
                    {fi === 2 && "15% higher biogas yield after quality enforcement"}
                  </span>
                </div>
              </div>

              {/* Image side */}
              <div className="relative">
                {/* Glow */}
                <div
                  className={`absolute inset-6 rounded-3xl blur-3xl opacity-25 bg-gradient-to-br ${f.imgAccent} to-transparent`}
                />
                <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 shadow-2xl">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    style={{ aspectRatio: "16/10" }}
                  />
                  {/* Bottom gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                  />
                  {/* Tag chip on image */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl bg-white/90 px-3 py-1.5 backdrop-blur-sm shadow-sm">
                    <f.icon className="h-3.5 w-3.5" style={{ color: f.accent }} />
                    <span className="text-[0.68rem] font-bold text-gray-700">{f.tag} module</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Quick wins bento ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32"
        >
          <div className="mb-12 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-widest text-gray-500 shadow-sm">
              And everything else
            </div>
            <h3
              className="font-extrabold tracking-tight text-gray-900"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
            >
              Every tool your plant needs. Already built.
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {QUICK_WINS.map((q, i) => (
              <motion.div
                key={q.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-md"
              >
                {/* Hover accent glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"
                  style={{ background: "radial-gradient(circle at 30% 30%, rgba(5,150,105,0.04), transparent 60%)" }} />

                <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${q.bg}`}>
                  <q.icon className={`h-5 w-5 ${q.color}`} />
                </div>
                <h4 className="text-[0.92rem] font-bold text-gray-900">{q.title}</h4>
                <p className="mt-1.5 text-[0.8rem] leading-relaxed text-gray-500">{q.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
