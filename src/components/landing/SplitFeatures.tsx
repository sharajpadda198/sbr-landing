import { motion } from "framer-motion"
import { ArrowRight, BarChart3, CheckCircle2, Leaf, MapPin, TrendingUp, Zap } from "lucide-react"
import { Link } from "react-router-dom"

/* ─── Forecast Mockup ─── */
function ForecastMockup() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const actual =   [88, 102, 76, 118, 95, 130, 148]
  const forecast = [92, 105, 80, 112, 100, 140, 158]

  return (
    <div className="split-forecast-mockup overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a1a10] p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-emerald-400" />
          <span className="text-[0.72rem] font-semibold text-white/70">Supply Forecast</span>
        </div>
        <div className="flex items-center gap-3 text-[0.6rem]">
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-400" />Actual</span>
          <span className="flex items-center gap-1.5 text-white/40"><span className="h-2 w-2 rounded-full border border-white/30" />Forecast</span>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-40 flex items-end gap-2">
        {days.map((d, i) => (
          <div key={d} className="flex-1 flex flex-col items-center gap-0.5">
            <div className="w-full flex items-end justify-center gap-0.5 h-32">
              {/* Actual bar */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                style={{ height: `${(actual[i] / 160) * 100}%`, transformOrigin: "bottom" }}
                className={`w-[42%] rounded-[3px] ${i === 6 ? "bg-emerald-400" : "bg-emerald-500/50"}`}
              />
              {/* Forecast bar */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                style={{ height: `${(forecast[i] / 160) * 100}%`, transformOrigin: "bottom" }}
                className="w-[42%] rounded-[3px] border border-white/15 bg-white/[0.06]"
              />
            </div>
            <span className="text-[0.5rem] text-white/25">{d}</span>
          </div>
        ))}
      </div>

      {/* Summary cards */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { l: "This week",    v: "857 MT",  d: "↑ 12%" },
          { l: "Next 7 days",  v: "910 MT",  d: "Forecast" },
          { l: "Accuracy",     v: "94.3%",   d: "Model v2" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 text-center">
            <div className="text-[0.55rem] text-white/30">{s.l}</div>
            <div className="mt-1 text-sm font-bold text-white">{s.v}</div>
            <div className="mt-0.5 text-[0.52rem] text-emerald-400">{s.d}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Mobile App Mockup ─── */
function MobileAppMockup() {
  return (
    <div className="flex justify-center">
      <div className="split-mobile-inner w-52 overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#0a1a10] shadow-2xl">
        {/* Phone chrome */}
        <div className="flex items-center justify-center border-b border-white/[0.06] py-3">
          <div className="h-1 w-12 rounded-full bg-white/20" />
        </div>

        {/* Status row */}
        <div className="flex items-center justify-between px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <div className="h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Leaf className="h-2.5 w-2.5 text-emerald-400" />
            </div>
            <span className="text-[0.62rem] font-semibold text-white/70">Zenithra</span>
          </div>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        {/* Map area */}
        <div className="split-map-area relative h-28 mx-3 rounded-xl overflow-hidden border border-white/[0.06] bg-emerald-950/20">
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "10px 10px" }} />
          {/* Pins */}
          {[{ x: "20%", y: "35%", c: "bg-sky-400" }, { x: "50%", y: "55%", c: "bg-amber-400" }, { x: "75%", y: "30%", c: "bg-emerald-400" }].map((p, i) => (
            <div key={i} className={`absolute h-3 w-3 rounded-full ${p.c} border-2 border-white`} style={{ left: p.x, top: p.y }} />
          ))}
          <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-black/50 px-2 py-1 backdrop-blur-sm">
            <MapPin className="h-2 w-2 text-emerald-400" />
            <span className="text-[0.48rem] text-white/60">3 pickups nearby</span>
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-3 gap-2 p-3">
          {[{ icon: Zap, l: "Intake", c: "bg-emerald-500/15 text-emerald-400" },
            { icon: MapPin, l: "Route", c: "bg-sky-500/15 text-sky-400" },
            { icon: TrendingUp, l: "Report", c: "bg-violet-500/15 text-violet-400" }].map((a) => (
            <div key={a.l} className="flex flex-col items-center gap-1 rounded-xl bg-white/[0.04] p-2.5">
              <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${a.c}`}>
                <a.icon className="h-3.5 w-3.5" />
              </div>
              <span className="text-[0.52rem] text-white/50">{a.l}</span>
            </div>
          ))}
        </div>

        {/* Recent pickups */}
        <div className="px-3 pb-4 space-y-2">
          {[
            { name: "Ramesh K.", qty: "12 MT", status: "Done" },
            { name: "Priya D.",  qty: "8 MT",  status: "En Route" },
          ].map((r) => (
            <div key={r.name} className="split-pickup-item flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] p-2.5">
              <div className="h-5 w-5 rounded-full bg-white/[0.06] flex items-center justify-center text-[0.5rem] font-bold text-white/50">{r.name[0]}</div>
              <div className="flex-1">
                <div className="text-[0.58rem] font-medium text-white/65">{r.name}</div>
                <div className="text-[0.5rem] text-white/30">{r.qty}</div>
              </div>
              <span className={`text-[0.48rem] font-medium ${r.status === "Done" ? "text-emerald-400" : "text-amber-400"}`}>{r.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const FEATURES = [
  {
    id: "forecast",
    eyebrow: "Solution",
    headline: "How ZENITRA solves this problem",
    body: "Our AI model combines crop calendar data, farmer field updates, and historical patterns to forecast feedstock availability up to 14 days in advance — so your plant never runs dry.",
    bullets: [
      "District-level supply prediction",
      "Daily volume forecasts with confidence ranges",
      "Alerts for supply gap risks",
      "Auto-adjusts as field conditions change",
    ],
    mockup: <ForecastMockup />,
    reverse: false,
  },
  {
    id: "mobile",
    eyebrow: "Field Operations",
    headline: "Your team, coordinated in real time.",
    body: "From the field supervisor confirming intake to the driver logging GPS checkpoints — every touchpoint captured on our mobile app. Works offline. Syncs instantly.",
    bullets: [
      "GPS-tracked pickup confirmation",
      "Digital weighment records",
      "Farmer payment receipts on WhatsApp",
      "Works on 2G networks",
    ],
    mockup: <MobileAppMockup />,
    reverse: true,
  },
]

export function SplitFeatures() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl space-y-24 px-6 lg:px-8">
        {FEATURES.map((f) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className={`grid items-center gap-12 lg:grid-cols-2 ${f.reverse ? "lg:[&>*:first-child]:order-last" : ""}`}
          >
            {/* Text */}
            <div>
              <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-emerald-400">
                <span className="h-px w-5 bg-emerald-500/60" />
                {f.eyebrow}
              </span>
              <h2
                className="mt-4 font-bold text-white leading-tight tracking-tight"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)" }}
              >
                {f.headline}
              </h2>
              <p className="mt-4 text-[0.95rem] leading-[1.8] text-white/70">{f.body}</p>
              <ul className="mt-6 space-y-3">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                    <span className="text-[0.88rem] text-white/65">{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/modules"
                className="group mt-8 inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Explore this feature
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mockup */}
            <div>{f.mockup}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
