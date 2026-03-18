import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Sparkles,
  Users,
  Sprout,
  ScanEye,
  ClipboardList,
  Car,
  Truck,
  Fuel,
  Navigation,
  Package,
  Scale,
  Wheat,
  Boxes,
  ShoppingCart,
  BookUser,
  CreditCard,
  UserCog,
  Headphones,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react"

type Module = {
  id: string
  category: string
  icon: React.ElementType
  title: string
  subtitle: string
  who: string[]
  features: string[]
  highlight?: boolean
  ai?: boolean
}

const modules: Module[] = [
  {
    id: "leads",
    category: "Growth",
    icon: Sparkles,
    title: "Lead Generation",
    subtitle: "AI-assisted discovery and pipeline management for farmer and land acquisition",
    who: ["Business Development", "Plant Owner"],
    features: [
      "Capture leads from calls, WhatsApp, website forms, field teams, and referrals in one inbox",
      "AI auto-enrichment: village, district, crop suitability, and approx. acreage from partial input",
      "AI lead scoring: conversion probability based on location, land size, crop interest, and history",
      "Next-best-action suggestions: schedule visit, request documents, send brochure, etc.",
      "Call and WhatsApp summarisation: auto-generated notes from conversations",
      "Stage pipeline: New → Contacted → Visit Planned → Converted → Rejected",
      "Lead detail view: profile, land info, conversation log, documents, and AI recommendation panel",
    ],
    highlight: true,
    ai: true,
  },
  {
    id: "farmers",
    category: "People",
    icon: Users,
    title: "Farmer Directory",
    subtitle: "Official master list of all onboarded farmers — searchable, actionable, always current",
    who: ["Procurement", "Field Team"],
    features: [
      "Search by name, phone, village, block, crop, or status — find any farmer in seconds",
      "Farmer profile: land parcels, geo-tags, crop history, activities timeline, contracts, and docs",
      "KYC vault: Aadhaar, bank details, land records — all in one place, linked to payments",
      "Cultivation plans, visits, harvest schedules, and payments all trace back to farmer record",
      "Supplier risk flags: quality history, overdue advances, and contract compliance status",
      "Communication log: call notes, visit records, and follow-up reminders per farmer",
    ],
  },
  {
    id: "cultivation",
    category: "Cultivation",
    icon: Sprout,
    title: "Cultivation Planning",
    subtitle: "AI-driven crop plan generation with season calendar, input schedules, and task assignments",
    who: ["Agronomy Team", "Field Supervisor"],
    features: [
      "AI generates week-wise activity plan based on crop, season, soil type, and local climate",
      "Input quantity recommendations: seeds, fertilizers, pesticides, and micronutrients with cost estimate",
      "Irrigation schedule recommendations and alerts for common pest pressure windows",
      "Plan builder: select crop, area, sowing dates, variety — AI fills in the rest",
      "Plan optimization modes: reduce cost / reduce water / increase yield — compare variants",
      "Approval and locking workflow: agronomist reviews → supervisor approves → plan activates",
      "Approved plan becomes the baseline for Field Activity Tracking and Crop Monitoring",
    ],
    highlight: true,
    ai: true,
  },
  {
    id: "crop-monitoring",
    category: "Cultivation",
    icon: ScanEye,
    title: "Crop Monitoring",
    subtitle: "Continuous crop condition tracking — catch issues early, act faster",
    who: ["Field Supervisor", "Agronomy Team"],
    features: [
      "Plot-wise growth stage tracking: sowing → emergence → tillering → maturity",
      "Observations collected from field staff and optional remote-sensing sources",
      "Pest and disease detection with severity rating, photos, and suggested corrective actions",
      "Water and nutrient stress alerts — raised automatically on threshold breach",
      "Field-wise status view: see all blocks at a glance, drill into problem areas",
      "Corrective tasks created from observations — assigned, tracked, and closed in-app",
      "Yield forecast updated as crop matures — automatically updates feedstock supply plan",
    ],
  },
  {
    id: "field-activity",
    category: "Field",
    icon: ClipboardList,
    title: "Field Activity Tracking",
    subtitle: "Ensure planned activities happen on field, on time — with proof of execution",
    who: ["Field Executive", "Supervisor"],
    features: [
      "Task list per executive: sowing, spraying, weeding, irrigation, harvesting — all tracked",
      "Task completion form: photo, timestamp, GPS coordinate, and remarks — mobile-first",
      "Geo-tagged check-in at farmer location — confirms staff are on-ground",
      "Plan vs execution compliance: % tasks completed on time, overdue tasks, and trend",
      "Productivity report per field executive: farms covered, tasks done, visit frequency",
      "Escalate field issues to HO in one tap — tracked through to resolution",
      "Farmer-wise activity timeline: full history of every interaction and task",
    ],
  },
  {
    id: "vehicle",
    category: "Logistics",
    icon: Car,
    title: "Vehicle Management",
    subtitle: "Manage vehicles as assets — availability, compliance, servicing, and cost tracking",
    who: ["Fleet Manager", "Admin"],
    features: [
      "Vehicle directory: type, capacity, driver, fuel type, owner/vendor, and insurance details",
      "Document expiry alerts: RC, insurance, fitness certificate, pollution, and permits",
      "Maintenance schedule with breakdown logging and spare parts consumption history",
      "Odometer and fuel log per trip — cost per km analysis per vehicle",
      "Availability calendar: see which vehicles are free, in-service, or assigned",
      "Assignment history: all trips linked to vehicle — full utilisation picture",
    ],
  },
  {
    id: "fleet",
    category: "Logistics",
    icon: Truck,
    title: "Fleet Tracking",
    subtitle: "Real-time trip visibility, delivery confirmation, and exception alerts",
    who: ["Logistics Manager", "Dispatch Team"],
    features: [
      "Trip creation: source → destination, load, vehicle, driver, and ETA",
      "Live location tracking via GPS integration or driver app updates",
      "Status timeline: Assigned → Started → In-Transit → Delivered — full audit trail",
      "Driver app: trip start, en-route status, deviation alerts, and POD capture on delivery",
      "Exception alerts: route deviation, idle time beyond threshold, and delay warnings",
      "Trip cost capture: fuel, toll, and driver allowance — cost per delivery analysis",
      "On-time delivery rate per route and vehicle — identify underperforming routes",
    ],
  },
  {
    id: "fuel",
    category: "Logistics",
    icon: Fuel,
    title: "Fuel Optimisation",
    subtitle: "AI-powered fuel analytics — cut costs, catch anomalies, benchmark performance",
    who: ["Fleet Manager", "Finance"],
    features: [
      "AI route suggestions: avoid traffic and poor roads to reduce fuel burn per trip",
      "Idle reduction alerts: flag vehicles idling beyond acceptable thresholds",
      "Best-vehicle-for-load recommendations: match load weight to optimal vehicle type",
      "Anomaly detection: suspicious fuel consumption spikes or unusual route deviations",
      "Fuel performance ranking: compare all vehicles — best and worst performers",
      "AI recommendations panel with estimated savings per implemented suggestion",
      "Fuel cost analytics dashboard: daily, weekly, monthly trends by vehicle and route",
    ],
    ai: true,
  },
  {
    id: "path",
    category: "Logistics",
    icon: Navigation,
    title: "Path Planning",
    subtitle: "AI-generated optimal multi-stop routes with capacity, time window, and priority constraints",
    who: ["Logistics Manager", "Driver"],
    features: [
      "Inputs: pickup/drop points, time windows, vehicle capacity, and priority rules",
      "AI outputs: optimal stop sequence, distance, estimated time, and cost per route",
      "Compare route variants side-by-side — pick the best fit for the day's requirements",
      "One-click assignment: push planned route to vehicle and driver app",
      "Re-optimise on the fly if a stop is added, removed, or delayed mid-day",
      "Integration with Fleet Tracking: planned route vs actual path comparison",
    ],
    highlight: true,
    ai: true,
  },
  {
    id: "harvest",
    category: "Harvest",
    icon: Package,
    title: "Harvest Planning",
    subtitle: "Schedule and co-ordinate harvest operations to meet demand, quality, and logistics constraints",
    who: ["Ops Manager", "Field Team", "HO"],
    features: [
      "Harvest calendar: plan dates per farm/block based on crop maturity from cultivation plan",
      "Farm-wise harvest readiness list — see which plots are ready and when",
      "Plan wizard: quantity estimate, harvest date, labour requirement, and transport booking",
      "Harvest order raised from field: plot, quantity, and date — triggers logistics allocation",
      "Harvest card issued to farmer with quantity, rate, and payment reference",
      "Actual vs planned yield captured at harvest — feedstock supply forecast updated in real-time",
      "Links to Feedstock Collection Planning and Weighment for end-to-end traceability",
    ],
  },
  {
    id: "weighment",
    category: "Quality",
    icon: Scale,
    title: "Weighment & Quality Check",
    subtitle: "Gate entry, weighbridge records, and material quality inspection before stock is accepted",
    who: ["QC Team", "Gate Staff"],
    features: [
      "Vehicle entry log: number, supplier, material type — gross, tare, and net weight recorded",
      "QC checklist: grade, moisture %, defects, and custom parameters per material type",
      "Accept / hold / reject workflow with reason code and photo evidence",
      "Deductions applied automatically based on QC grade — reduces payment amount",
      "GRN auto-generated on acceptance — triggers inventory update and payment eligibility",
      "Print weighment slip/receipt directly from the screen",
      "QC exception log and supplier quality trend — actionable for procurement decisions",
    ],
  },
  {
    id: "feedstock-planning",
    category: "Feedstock",
    icon: Wheat,
    title: "Feedstock Collection Planning",
    subtitle: "AI-optimised aggregation plan — match plant demand to available harvest across the network",
    who: ["Procurement", "Ops Manager"],
    features: [
      "Demand vs supply dashboard: plant feedstock requirement vs available harvest quantities",
      "AI generates collection plan: quantity per pickup, route grouping, and time windows",
      "Delay prediction and buffer suggestions — ensures plant never runs short",
      "One-click trip creation from collection plan — assignments pushed to Fleet Tracking",
      "Multi-farm aggregation: combine pickups from nearby farms into a single efficient trip",
      "Daily and weekly collection targets vs actuals — live tracking against plan",
    ],
    ai: true,
  },
  {
    id: "inventory",
    category: "Inventory",
    icon: Boxes,
    title: "Inventory",
    subtitle: "Real-time stock tracking, movements, and valuations across all storage locations",
    who: ["Stores", "Ops Manager"],
    features: [
      "Item master: SKU, category, unit of measure, conversion factors, and storage location",
      "Stock ledger: every inward (GRN), outward (indent issue), transfer, and manual adjustment",
      "Lot/batch tracking where required — full traceability from receipt to consumption",
      "Low-stock alerts at reorder level — optional auto-raise of purchase requisition",
      "Indent workflow: department raises request → stores approves and issues",
      "Cycle count module with variance report — and annual audit support",
      "Stock valuation at unit cost — feeds into finance cost reporting",
    ],
  },
  {
    id: "procurement",
    category: "Procurement",
    icon: ShoppingCart,
    title: "Purchase & Procurement",
    subtitle: "Full buy cycle: indent → approvals → comparative quotation → PO → GRN → payment",
    who: ["Procurement Team", "Finance", "HO"],
    features: [
      "Purchase requisition raised from inventory indent or direct department request — linked to budget",
      "RFQ sent to multiple vendors — responses captured in a side-by-side comparison matrix",
      "L1 vendor auto-highlighted; override requires documented justification and approval",
      "Approval routing: plant manager → HO finance above configurable thresholds",
      "PR → PO conversion in one click; PO amendment workflow with full version history",
      "Three-way match: PO → GRN → Invoice before any payment is released",
      "Vendor performance tracked automatically from every PO: on-time, quality, and price",
    ],
    highlight: true,
  },
  {
    id: "vendors",
    category: "Procurement",
    icon: BookUser,
    title: "Vendor Directory",
    subtitle: "Centralised vendor master with onboarding, rate cards, compliance docs, and performance",
    who: ["Procurement Team", "Finance"],
    features: [
      "Vendor onboarding: GST, PAN, bank details, rate card, and payment terms",
      "Price catalogues and rate cards per category — used for RFQ and PO auto-fill",
      "Document vault: agreements, certifications, and insurance — with expiry alerts",
      "Performance dashboard: quality score, on-time delivery rate, and price competitiveness",
      "Purchase history: all POs, GRNs, and payments linked to vendor record",
      "Blacklist workflow: flag vendor with reason code and HO approval before deactivation",
    ],
  },
  {
    id: "payments",
    category: "Finance",
    icon: CreditCard,
    title: "Payments",
    subtitle: "Vendor, farmer, and staff payment processing with full approval trail and reconciliation",
    who: ["Finance", "Accounts Team"],
    features: [
      "Payment types: vendor bills, farmer payments post QC/weight, advances, and reimbursements",
      "Every payment request linked to source document: GRN, harvest card, PO, or expense claim",
      "Approval workflow: plant finance → HO accounts for amounts above configurable threshold",
      "Bulk farmer payment run: batch process with bank file export for direct transfer",
      "Payment status tracking: Pending → Approved → Processed → Settled",
      "Ledger view per farmer/vendor: running balance, dues, and payment history",
      "Export to accounting system — reconciliation-ready with full supporting documentation",
    ],
  },
  {
    id: "hrms",
    category: "HR",
    icon: UserCog,
    title: "HRMS",
    subtitle: "Employee directory, attendance, leaves, roles, and payroll inputs for all staff",
    who: ["HR Manager", "Plant Manager"],
    features: [
      "Employee directory: role, department, joining date, and onboarding document vault",
      "Roles and permissions management — controls who can approve, execute, and view in every module",
      "Shift roster with role assignments: operator, supervisor, field executive, driver",
      "Attendance tracking linked to shift logs, field check-ins, and app activity",
      "Leave management: application, approval chain, balance tracking, and carry-forward",
      "Payroll inputs: overtime, deductions, and allowances — export to external payroll system",
      "Staff performance summary: tasks completed, visits done, and compliance score",
    ],
  },
  {
    id: "support",
    category: "Support",
    icon: Headphones,
    title: "Tech Support",
    subtitle: "Always-on support for every user — raise tickets, track resolution, and get help fast",
    who: ["All Users", "Plant Manager"],
    features: [
      "In-app support ticket: describe issue, attach screenshot, and submit in under a minute",
      "Priority routing: critical plant-ops issues go to front of queue automatically",
      "Live chat and WhatsApp support channel — no need to email and wait",
      "Knowledge base: searchable guides, how-to videos, and module walkthroughs",
      "Ticket status tracking: Open → In-Progress → Resolved — no chasing required",
      "Dedicated account manager for onboarding, training, and ongoing configuration help",
      "SLA-backed response times — tracked and reported monthly for every client",
    ],
  },
]

const categories = ["All", ...Array.from(new Set(modules.map((m) => m.category)))]

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Growth:      { bg: "bg-emerald-500/10",  text: "text-emerald-400",  border: "border-emerald-500/25" },
  People:      { bg: "bg-sky-500/10",      text: "text-sky-400",      border: "border-sky-500/25" },
  Cultivation: { bg: "bg-lime-500/10",     text: "text-lime-400",     border: "border-lime-500/25" },
  Field:       { bg: "bg-green-500/10",    text: "text-green-400",    border: "border-green-500/25" },
  Harvest:     { bg: "bg-amber-500/10",    text: "text-amber-400",    border: "border-amber-500/25" },
  Quality:     { bg: "bg-orange-500/10",   text: "text-orange-400",   border: "border-orange-500/25" },
  Feedstock:   { bg: "bg-yellow-500/10",   text: "text-yellow-400",   border: "border-yellow-500/25" },
  Inventory:   { bg: "bg-cyan-500/10",     text: "text-cyan-400",     border: "border-cyan-500/25" },
  Procurement: { bg: "bg-violet-500/10",   text: "text-violet-400",   border: "border-violet-500/25" },
  Finance:     { bg: "bg-indigo-500/10",   text: "text-indigo-400",   border: "border-indigo-500/25" },
  Logistics:   { bg: "bg-blue-500/10",     text: "text-blue-400",     border: "border-blue-500/25" },
  HR:          { bg: "bg-pink-500/10",     text: "text-pink-400",     border: "border-pink-500/25" },
  Support:     { bg: "bg-teal-500/10",     text: "text-teal-400",     border: "border-teal-500/25" },
}

export function ModulesGrid() {
  const [active, setActive] = React.useState("All")
  const [selected, setSelected] = React.useState<string>(modules[0].id)

  const filtered = active === "All" ? modules : modules.filter((m) => m.category === active)

  // Group filtered modules by category (preserves order)
  const grouped = React.useMemo(() => {
    const map = new Map<string, typeof modules>()
    for (const m of filtered) {
      if (!map.has(m.category)) map.set(m.category, [])
      map.get(m.category)!.push(m)
    }
    return Array.from(map.entries()) // [[category, modules[]]]
  }, [filtered])

  // When filter changes, auto-select the first visible module
  React.useEffect(() => {
    const first = active === "All" ? modules[0] : modules.find((m) => m.category === active)
    if (first) setSelected(first.id)
  }, [active])

  const sel = modules.find((m) => m.id === selected) ?? modules[0]
  const selCol = categoryColors[sel.category] ?? { bg: "bg-gray-500/10", text: "text-gray-400", border: "border-gray-500/25" }
  const SelIcon = sel.icon

  return (
    <section aria-label="Modules">
      <div className="flex h-[680px] flex-col overflow-hidden rounded-[2rem] border border-white/[0.10] bg-white/[0.03] shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:h-[720px] lg:h-[760px]">
        {/* Mac-like chrome */}
        <div className="flex h-12 items-center gap-3 border-b border-white/[0.08] bg-white/[0.02] px-5 rounded-t-[2rem]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full border border-black/25 bg-red-500" />
            <span className="h-2.5 w-2.5 rounded-full border border-black/25 bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full border border-black/25 bg-emerald-500" />
          </div>

          <div className="flex-1 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-white/45">
              Modules
            </div>
          </div>

          <div className="w-[52px]" />
        </div>

        {/* Screen content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8">
          {/* Filter bar */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={[
                  "rounded-xl px-4 py-2 text-[0.7rem] font-semibold tracking-[0.15em] uppercase transition-all duration-200",
                  active === cat
                    ? "bg-emerald-500 text-white"
                    : "border border-white/[0.10] bg-white/[0.025] text-white/50 hover:border-emerald-500/40 hover:text-emerald-400",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Master-detail layout */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6">

            {/* Left: module list grouped by department */}
            <div className="shrink-0 lg:w-80 xl:w-96">
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                {grouped.map(([category, mods], gi) => {
                  const groupCol = categoryColors[category] ?? { bg: "bg-gray-500/10", text: "text-gray-400", border: "border-gray-500/25" }
                  return (
                    <div key={category}>
                      {/* Department header */}
                      <div className={`flex items-center gap-2 px-4 py-2 ${
                        gi > 0 ? "border-t border-white/[0.07]" : ""
                      } bg-white/[0.015]`}>
                        <span className={`h-1.5 w-1.5 shrink-0 rounded-full bg-current ${groupCol.text}`} />
                        <span className={`text-[0.6rem] font-bold tracking-[0.2em] uppercase ${groupCol.text}`}>
                          {category}
                        </span>
                        <span className="ml-auto text-[0.6rem] text-white/20">{mods.length}</span>
                      </div>

                      {/* Modules in this group */}
                      {mods.map((m, i) => {
                        const isActive = selected === m.id
                        const Icon = m.icon
                        return (
                          <motion.button
                            key={m.id}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.22, delay: i * 0.02 }}
                            onClick={() => setSelected(m.id)}
                            className={[
                              "group flex w-full items-center gap-3 border-t border-white/[0.04] px-4 py-3 text-left transition-all duration-150",
                              isActive ? "bg-white/[0.06]" : "hover:bg-white/[0.03]",
                            ].join(" ")}
                          >
                            {/* Accent bar */}
                            <span className={`h-7 w-0.5 shrink-0 rounded-full transition-all duration-200 ${
                              isActive ? "bg-emerald-500" : "bg-transparent group-hover:bg-white/10"
                            }`} />

                            {/* Icon */}
                            <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
                              isActive
                                ? `${groupCol.bg} border ${groupCol.border}`
                                : "border border-white/[0.06] bg-white/[0.03] group-hover:border-white/[0.12]"
                            }`}>
                              <Icon className={`h-3.5 w-3.5 ${isActive ? groupCol.text : "text-white/35 group-hover:text-white/60"}`} />
                            </div>

                            {/* Title */}
                            <div className="flex min-w-0 flex-1 items-center gap-2">
                              <span className={`truncate text-[0.8rem] font-medium transition-colors duration-150 ${
                                isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
                              }`}>
                                {m.title}
                              </span>
                              {m.ai && (
                                <span className="shrink-0 inline-flex items-center gap-0.5 rounded-full bg-violet-500/15 px-1.5 py-0.5 text-[0.52rem] font-bold tracking-wide text-violet-400 border border-violet-500/25">
                                  <Sparkles className="h-2 w-2" />AI
                                </span>
                              )}
                            </div>

                            {/* Chevron */}
                            <span className={`shrink-0 text-sm leading-none transition-all duration-200 ${
                              isActive ? groupCol.text : "text-white/15 group-hover:text-white/35"
                            }`}>›</span>
                          </motion.button>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right: detail panel */}
            <div className="min-w-0 flex-1 lg:sticky lg:top-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={sel.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden rounded-2xl border border-white/[0.10] bg-white/[0.025]"
                >
                  {/* Detail header */}
                  <div className="border-b border-white/[0.07] bg-white/[0.02] p-6">
                    <div className="flex items-start gap-4">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${selCol.border} ${selCol.bg}`}>
                        <SelIcon className={`h-5 w-5 ${selCol.text}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-bold text-white">{sel.title}</h3>
                          {sel.ai && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-violet-500/15 px-2 py-0.5 text-[0.62rem] font-bold tracking-wide text-violet-400 border border-violet-500/25">
                              <Sparkles className="h-2.5 w-2.5" />AI
                            </span>
                          )}
                          <span className={`rounded-md border px-2 py-0.5 text-[0.62rem] font-semibold tracking-wider uppercase ${selCol.bg} ${selCol.text} ${selCol.border}`}>
                            {sel.category}
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/55">{sel.subtitle}</p>
                      </div>
                    </div>

                    {/* Who uses */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {sel.who.map((w) => (
                        <span key={w} className="rounded-lg bg-white/[0.04] border border-white/[0.07] px-2.5 py-1 text-[0.68rem] font-medium text-white/45">
                          {w}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-6">
                    <div className="mb-4 text-[0.62rem] font-bold tracking-[0.2em] uppercase text-white/30">
                      Capabilities
                    </div>
                    {sel.features.length > 0 ? (
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {sel.features.map((f, fi) => (
                          <motion.li
                            key={fi}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: fi * 0.04 }}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-white/65"
                          >
                            <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${selCol.text}`} />
                            {f}
                          </motion.li>
                        ))}
                      </ul>
                    ) : (
                      <div className="flex items-center gap-2 text-[0.72rem] text-violet-400/70">
                        <Sparkles className="h-3.5 w-3.5" />
                        AI-powered — capabilities coming soon
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom CTA strip */}
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-950/40 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-emerald-400">
                Modular by design
              </div>
              <p className="mt-1 text-sm text-white/65">
                Deploy one module or all eighteen. Every module works standalone and integrates seamlessly when you expand.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-3 text-xs font-semibold tracking-widest uppercase text-emerald-400 transition-all hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
            >
              Get a walkthrough
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
