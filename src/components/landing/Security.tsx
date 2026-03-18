import { motion } from "framer-motion"
import { Database, History, Lock, ShieldCheck } from "lucide-react"

const items = [
  {
    icon: Lock,
    title: "Role-based access",
    body: "Give each team only what they need — field, HO, finance, QC, logistics all have separate scopes.",
  },
  {
    icon: History,
    title: "Activity & audit history",
    body: "Track key actions and approvals so accountability never relies on messages or memory.",
  },
  {
    icon: ShieldCheck,
    title: "Approval workflows",
    body: "Standardise who approves what, with full context and trail preserved at every step.",
  },
  {
    icon: Database,
    title: "Data integrity & traceability",
    body: "Maintain traceable records across lots, indents, procurement, QC, and dispatch.",
  },
]

export function Security() {
  return (
    <section
      id="security"
      className="bg-[hsl(var(--dark-band))] py-24"
      aria-label="Security and trust"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section label */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[hsl(var(--primary))]" />
          <span className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-[hsl(var(--primary))]">
            Trust &amp; security
          </span>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-end">
          <h2 className="font-serif text-4xl font-normal leading-tight text-white sm:text-5xl">
            Built for operational traceability and team accountability.
          </h2>
          <p className="text-sm leading-relaxed text-white/50 lg:max-w-md lg:ml-auto">
            Zenithra enforces role-based access and provides workflow audit trails. Deployment and SLA
            options can be aligned to your organisation's requirements.
          </p>
        </div>

        {/* Gap-px grid */}
        <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col gap-5 bg-[hsl(var(--dark-band))] p-8 transition-colors hover:bg-white/5"
            >
              <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5">
                <item.icon className="h-5 w-5 text-[hsl(var(--primary))]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{item.body}</p>
              </div>
              <div className="mt-auto h-px w-8 bg-[hsl(var(--primary))] opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 border border-white/10 bg-white/5 p-6 text-sm text-white/40">
          Reliability note: data backups and uptime targets can be aligned to your deployment and SLA requirements.
        </div>
      </div>
    </section>
  )
}
