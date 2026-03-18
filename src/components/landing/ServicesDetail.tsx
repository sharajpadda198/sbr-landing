import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Sparkles,
  Users,
  Sprout,
  ScanEye,
  ClipboardList,
  Truck,
  Scale,
  Wheat,
  Boxes,
  ShoppingCart,
  CreditCard,
  UserCog,
  Headphones,
  Navigation,
  CheckCircle2,
} from "lucide-react"

const services = [
  {
    id: "farmer-growth",
    tag: "Farmer Acquisition & Management",
    headline: "Build and manage your farmer network — intelligently.",
    body: "From the first WhatsApp inquiry to a signed contract, Zenithra tracks every lead, scores their potential with AI, and builds a permanent, searchable directory of every onboarded farmer — with land records, KYC, crop history, and payment logs attached.",
    color: "bg-emerald-500/10 border-emerald-500/20",
    accent: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
    services: [
      {
        icon: Sparkles,
        title: "Lead Generation (AI)",
        points: [
          "Capture leads from calls, WhatsApp, field teams, and referrals",
          "AI lead scoring — conversion probability from location, land size & crop interest",
          "Next-best-action: schedule visit, send brochure, or escalate",
          "Stage pipeline: New → Contacted → Visit Planned → Converted",
        ],
      },
      {
        icon: Users,
        title: "Farmer Directory",
        points: [
          "Master list of all onboarded farmers — searchable by village, crop, or status",
          "Farmer profiles with land parcels, geo-tags, crop history, and documents",
          "KYC vault: Aadhaar, bank details, land records linked to payments",
          "Communication log: call notes, visit records, and follow-up reminders",
        ],
      },
    ],
  },
  {
    id: "cultivation",
    tag: "Cultivation & Crop Health",
    headline: "Plan every crop. Monitor every field. Act before problems spread.",
    body: "AI generates week-wise cultivation plans tailored to crop, season, and soil. Field executives log activities on mobile with geo-tagged proof. Crop health observations feed automatic alerts — so your agronomy team can intervene days before losses occur.",
    color: "bg-lime-500/10 border-lime-500/20",
    accent: "text-lime-400",
    iconBg: "bg-lime-500/15",
    services: [
      {
        icon: Sprout,
        title: "Cultivation Planning (AI)",
        points: [
          "AI-generated week-wise activity plans based on crop, season, and soil type",
          "Input quantity recommendations: seeds, fertilizers, pesticides with cost estimates",
          "Plan optimisation modes: reduce cost / reduce water / increase yield",
          "Approval workflow: agronomist reviews → supervisor approves → plan activates",
        ],
      },
      {
        icon: ScanEye,
        title: "Crop Monitoring",
        points: [
          "Plot-wise growth stage tracking from sowing through maturity",
          "Pest and disease detection with severity ratings and corrective actions",
          "Water and nutrient stress alerts on threshold breach",
          "Yield forecast updated as crop matures — feeds feedstock supply plan",
        ],
      },
      {
        icon: ClipboardList,
        title: "Field Activity Tracking",
        points: [
          "Task list per executive: sowing, spraying, irrigation, harvesting — all tracked",
          "Mobile-first forms: photo, GPS timestamp, and remarks per task",
          "Plan vs execution compliance dashboard — overdue tasks and trends",
          "Full farmer-wise activity timeline: every interaction on record",
        ],
      },
    ],
  },
  {
    id: "logistics",
    tag: "Logistics & Fleet",
    headline: "Move feedstock efficiently — optimised routes, live tracking, zero guesswork.",
    body: "AI plans multi-stop routes factoring live traffic, vehicle capacity, and time windows. Every trip is tracked from dispatch to delivery. Fleet documents, fuel logs, and service records are centralised — so nothing slips through.",
    color: "bg-sky-500/10 border-sky-500/20",
    accent: "text-sky-400",
    iconBg: "bg-sky-500/15",
    services: [
      {
        icon: Navigation,
        title: "Path Planning (AI)",
        points: [
          "AI-optimised multi-stop routes with time windows and capacity constraints",
          "Live traffic and distance factored in — reduces fuel cost per trip",
          "Route comparison: planned vs actual with deviation alerts",
          "Batch planning: optimise all trips for the day in one click",
        ],
      },
      {
        icon: Truck,
        title: "Fleet Tracking",
        points: [
          "Live location tracking via GPS integration or driver app updates",
          "Status timeline: Assigned → Started → In-Transit → Delivered",
          "Driver app: trip start, en-route status, deviation alerts, and POD capture",
          "On-time delivery rate per route — identify underperforming lanes",
        ],
      },
    ],
  },
  {
    id: "harvest-quality",
    tag: "Harvest, Weighment & Quality",
    headline: "Bring in the right feedstock. Accept only what meets your standard.",
    body: "Digital weighment at the gate with auto-calculated net weight and QC checklists. Accept, hold, or reject loads with photo evidence. GRNs auto-generate on acceptance — triggering inventory updates and farmer payment calculations automatically.",
    color: "bg-amber-500/10 border-amber-500/20",
    accent: "text-amber-400",
    iconBg: "bg-amber-500/15",
    services: [
      {
        icon: Wheat,
        title: "Feedstock Collection Planning (AI)",
        points: [
          "AI-recommended daily collection schedule from available farmers and vehicle capacity",
          "Collection routes optimised for distance and load consolidation",
          "Farmer-wise collection history and advance recovery tracking",
          "Short-supply alerts when collection is below daily processing requirement",
        ],
      },
      {
        icon: Scale,
        title: "Weighment & Quality Check",
        points: [
          "Digital gate entry: gross, tare, and net weight with full QC checklist",
          "Accept / hold / reject with photo evidence and automatic deduction logic",
          "GRN auto-generated on acceptance — triggers inventory and payment",
          "Quality trend analysis: reject rate by farmer, batch, and season",
        ],
      },
    ],
  },
  {
    id: "procurement-finance",
    tag: "Procurement, Inventory & Finance",
    headline: "Close the loop — from purchase order to farmer payment, all in one system.",
    body: "Raise POs, receive goods, match invoices, and release payments — without switching tools. Inventory is updated in real time as goods arrive, are consumed, or despatched. Farmer payments are calculated automatically from net weights and rates.",
    color: "bg-violet-500/10 border-violet-500/20",
    accent: "text-violet-400",
    iconBg: "bg-violet-500/15",
    services: [
      {
        icon: Boxes,
        title: "Inventory",
        points: [
          "Real-time stock levels by item, location, and batch",
          "Auto-depletion on GRN acceptance and production consumption",
          "Reorder alerts and low-stock notifications per SKU",
          "Inventory valuation and movement ledger for audit",
        ],
      },
      {
        icon: ShoppingCart,
        title: "Purchase & Procurement",
        points: [
          "Raise, approve, and track POs against vendor contracts and rates",
          "Three-way match: PO → GRN → invoice before payment release",
          "Vendor comparison reports: price, lead time, and quality score",
          "Pending approvals dashboard — nothing moves without sign-off",
        ],
      },
      {
        icon: CreditCard,
        title: "Payments",
        points: [
          "Farmer payment auto-calculated from net weight, rate, and advances",
          "Batch payment runs with approval workflow before disbursement",
          "Payment status per farmer: pending, approved, and paid — full audit trail",
          "Vendor invoice payment against approved POs with bank integration",
        ],
      },
    ],
  },
  {
    id: "people-support",
    tag: "People & Support",
    headline: "Manage your team — and keep everyone supported end-to-end.",
    body: "HRMS covers attendance, leaves, payroll, and role-based access for every team member. Dedicated tech support ensures issues are logged, escalated, and resolved — with a full ticket trail so nothing stays unresolved.",
    color: "bg-rose-500/10 border-rose-500/20",
    accent: "text-rose-400",
    iconBg: "bg-rose-500/15",
    services: [
      {
        icon: UserCog,
        title: "HRMS",
        points: [
          "Attendance, leave management, and shift rostering for field and HO staff",
          "Payroll processing with statutory deductions and payslip generation",
          "Role-based access control — each user sees only what they need",
          "Employee performance tracking linked to field activity and task completion",
        ],
      },
      {
        icon: Headphones,
        title: "Tech Support",
        points: [
          "In-app ticket raising — anyone can log an issue from any module",
          "Ticket routing by category: technical, data, or training request",
          "SLA tracking with escalation on breach — nothing stays open",
          "Knowledge base and guided onboarding for new users",
        ],
      },
    ],
  },
]

function ServiceCard({
  icon: Icon,
  title,
  points,
  accent,
  iconBg,
  index,
}: {
  icon: React.ElementType
  title: string
  points: string[]
  accent: string
  iconBg: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.06]"
    >
      <div className={`mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg ${iconBg}`}>
        <Icon className={`h-4.5 w-4.5 ${accent}`} />
      </div>
      <h4 className="mb-3 text-[0.88rem] font-semibold text-white">{title}</h4>
      <ul className="space-y-2">
        {points.map((pt) => (
          <li key={pt} className="flex items-start gap-2">
            <CheckCircle2 className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${accent}`} />
            <span className="text-[0.78rem] leading-relaxed text-white/55">{pt}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export function ServicesDetail() {
  const [active, setActive] = useState(services[0].id)
  const current = services.find((s) => s.id === active)!

  return (
    <section id="services" aria-label="Services in detail" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="font-serif text-4xl font-normal leading-tight text-white sm:text-5xl">
            Every service, explained.
          </h2>
          <p className="mt-4 text-[1rem] leading-relaxed text-white/60">
            Zenithra is not a single tool — it's six interconnected service areas. Click a category to explore what each one does.
          </p>
        </motion.div>

        {/* Two-panel layout */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">

          {/* Left: sticky sidebar nav */}
          <div className="shrink-0 lg:sticky lg:top-24 lg:w-64 xl:w-72">
            <nav className="space-y-1">
              {services.map((svc, i) => {
                const isActive = active === svc.id
                return (
                  <button
                    key={svc.id}
                    onClick={() => setActive(svc.id)}
                    className={`group w-full rounded-xl border px-4 py-3.5 text-left transition-all duration-200 ${
                      isActive
                        ? svc.color
                        : "border-transparent hover:border-white/[0.06] hover:bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`shrink-0 font-mono text-[0.58rem] tabular-nums transition-colors duration-200 ${
                          isActive ? svc.accent : "text-white/20 group-hover:text-white/35"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-[0.82rem] font-medium leading-snug transition-colors duration-200 ${
                          isActive ? "text-white" : "text-white/50 group-hover:text-white/75"
                        }`}
                      >
                        {svc.tag}
                      </span>
                      {isActive && (
                        <span className={`ml-auto h-1.5 w-1.5 shrink-0 rounded-full ${svc.iconBg}`} />
                      )}
                    </div>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.22 }}
                        className={`mt-2 pl-9 text-[0.72rem] leading-relaxed line-clamp-2 ${svc.accent} opacity-70`}
                      >
                        {svc.headline}
                      </motion.p>
                    )}
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Right: animated content panel */}
          <div className="min-w-0 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Panel header card */}
                <div className={`mb-6 rounded-2xl border p-7 ${current.color}`}>
                  <span className={`text-[0.65rem] font-bold tracking-[0.2em] uppercase ${current.accent}`}>
                    {current.tag}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-normal leading-snug text-white sm:text-3xl">
                    {current.headline}
                  </h3>
                  <p className="mt-3 max-w-xl text-[0.88rem] leading-relaxed text-white/60">
                    {current.body}
                  </p>
                </div>

                {/* Service cards */}
                <div
                  className={`grid gap-4 ${
                    current.services.length === 2
                      ? "sm:grid-cols-2"
                      : "sm:grid-cols-2 xl:grid-cols-3"
                  }`}
                >
                  {current.services.map((card, ci) => (
                    <ServiceCard
                      key={card.title}
                      icon={card.icon}
                      title={card.title}
                      points={card.points}
                      accent={current.accent}
                      iconBg={current.iconBg}
                      index={ci}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
