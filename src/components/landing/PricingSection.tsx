import { motion } from "framer-motion"
import { Check, ChevronRight, Sparkles, Zap } from "lucide-react"
import { Link } from "react-router-dom"

const PLANS = [
  {
    name: "Starter",
    price: "₹29,999",
    period: "/mo",
    desc: "For single-plant operations just getting started with digital coordination.",
    highlight: false,
    badge: null,
    cta: "Get started",
    ctaVariant: "outline" as const,
    features: [
      "Up to 500 farmers",
      "Farmer onboarding & profiles",
      "Basic route planning",
      "Digital weighment records",
      "WhatsApp payment receipts",
      "Email support",
    ],
    disabled: ["AI supply forecasting", "Multi-plant dashboard", "API access", "Custom integrations"],
  },
  {
    name: "Growth",
    price: "₹74,999",
    period: "/mo",
    desc: "For growing operations managing multiple clusters and high daily volumes.",
    highlight: true,
    badge: "Most popular",
    cta: "Start free trial",
    ctaVariant: "primary" as const,
    features: [
      "Up to 5,000 farmers",
      "Everything in Starter",
      "AI supply forecasting (14-day)",
      "Route optimization with GPS",
      "Quality control suite",
      "Farmer payment automation",
      "Analytics & custom reports",
      "Priority support + onboarding",
    ],
    disabled: ["Multi-plant dashboard", "Custom integrations"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large-scale agri-businesses and multi-plant operators requiring full customization.",
    highlight: false,
    badge: null,
    cta: "Talk to sales",
    ctaVariant: "outline" as const,
    features: [
      "Unlimited farmers",
      "Everything in Growth",
      "Multi-plant unified dashboard",
      "Custom integrations (ERP / SCADA)",
      "Dedicated onboarding engineer",
      "SLA-backed uptime guarantee",
      "SSO / RBAC / audit logs",
      "White-label mobile app",
    ],
    disabled: [],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-emerald-400">
            <span className="h-px w-5 bg-emerald-500/60" />
            Pricing
          </span>
          <h2
            className="mt-4 font-bold text-white leading-tight tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Simple, transparent pricing.
            <br />
            <span className="text-white/55">Scale as you grow.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/65">
            No per-farmer fees. No hidden charges. Pick the plan that fits your operation today.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col overflow-hidden rounded-2xl border p-7 ${
                plan.highlight
                  ? "border-emerald-500/40 bg-gradient-to-b from-emerald-950/60 to-[#030712]"
                  : "border-white/[0.08] bg-white/[0.025]"
              }`}
            >
              {/* Glow for highlighted plan */}
              {plan.highlight && (
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
              )}

              {/* Badge */}
              {plan.badge && (
                <div className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-[0.62rem] font-semibold text-emerald-300 ring-1 ring-emerald-500/20">
                  <Sparkles className="h-3 w-3" />
                  {plan.badge}
                </div>
              )}

              {/* Plan name + price */}
              <div className="mb-1">
                <div className="text-[0.8rem] font-semibold uppercase tracking-wide text-white/60">{plan.name}</div>
              </div>
              <div className="mt-2 flex items-end gap-1.5">
                <span className="text-[2.2rem] font-bold leading-none text-white">{plan.price}</span>
                {plan.period && <span className="mb-1 text-sm text-white/50">{plan.period}</span>}
              </div>
              <p className="mt-2.5 text-[0.82rem] leading-relaxed text-white/65">{plan.desc}</p>

              {/* CTA */}
              <div className="mt-7">
                <Link
                  to={plan.name === "Enterprise" ? "/contact" : "/contact"}
                  className={`flex w-full items-center justify-center gap-2 rounded-full py-3 text-[0.85rem] font-semibold transition-all duration-300 ${
                    plan.ctaVariant === "primary"
                      ? "bg-emerald-500 text-white hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                      : "border border-white/12 text-white/70 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {plan.cta}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Divider */}
              <div className="my-7 border-t border-white/[0.06]" />

              {/* Feature list */}
              <div className="flex flex-col gap-3">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                    <span className="text-[0.82rem] text-white/70">{f}</span>
                  </div>
                ))}
                {plan.disabled.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 opacity-30">
                    <div className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-full border border-white/20" />
                    <span className="text-[0.82rem] text-white/40 line-through">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[0.72rem] text-white/50"
        >
          {["14-day free trial", "No credit card required", "Cancel anytime", "SOC 2 compliant"].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <Zap className="h-3 w-3 text-emerald-500/50" /> {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
