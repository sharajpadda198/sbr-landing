import { AnimatePresence, motion } from "framer-motion"
import { useId, useState } from "react"
import { LandingNav } from "../components/landing/LandingNav"
import { Footer } from "../components/landing/Footer"

const PADDA_IMG = new URL(
  "../assets/padda uncle.jpeg",
  import.meta.url,
).href

type TeamMember = {
  name: string
  role: string
  imageSrc?: string
  bio?: string
}

const TEAM_LEADER: TeamMember = {
  name: "Rajendra Padda",
  role: "Director, CEO",
  imageSrc: PADDA_IMG,
  bio:
    "Rajendra Padda is an experienced professional with over 20 years in feedstock production and operations, including more than a decade in the CBG industry. He brings deep expertise in large-scale Napier cultivation, ensuring reliable and efficient feedstock supply for plant operations. With an MBA and prior experience handling large-scale logistics at Reliance, he combines strong operational insight with practical field knowledge to drive scalable and efficient systems.",
}

const TEAM_MEMBERS: TeamMember[] = [
  { name: "Team Member", role: "Role", bio: "" },
  { name: "Team Member", role: "Role", bio: "" },
  { name: "Team Member", role: "Role", bio: "" },
  { name: "Team Member", role: "Role", bio: "" },
  { name: "Team Member", role: "Role", bio: "" },
  { name: "Team Member", role: "Role", bio: "" },
]

function initials(name: string) {
  const parts = name
    .split(/\s+/)
    .map((p) => p.trim())
    .filter(Boolean)
    .slice(0, 2)
  const letters = parts.map((p) => p[0]?.toUpperCase()).filter(Boolean)
  return letters.join("") || "?"
}

export default function TeamPage() {
  const [leaderOpen, setLeaderOpen] = useState(false)
  const leaderPanelId = useId()

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <LandingNav />

      <header className="relative overflow-hidden pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 left-1/3 h-80 w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.12),transparent_65%)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-emerald-400">
              Team
            </span>
          </motion.div>

          <motion.h1
            className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Meet our team.
          </motion.h1>

          <motion.p
            className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-white/70"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            The people behind Zenithra — building reliable systems for Bio-CNG plant operations.
          </motion.p>
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          {/* Leader */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] md:w-fit mx-auto"
            aria-label="Team leader"
          >
            <div className="flex flex-col md:flex-row">
              <div className="relative aspect-square w-full overflow-hidden md:w-[420px] md:flex-shrink-0 lg:w-[480px]">
                {TEAM_LEADER.imageSrc ? (
                  <img
                    src={TEAM_LEADER.imageSrc}
                    alt={TEAM_LEADER.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    draggable={false}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/[0.04] text-4xl font-bold text-white/80">
                    {initials(TEAM_LEADER.name)}
                  </div>
                )}

                {/* Bottom gradient label */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <div className="text-xl font-semibold text-white">{TEAM_LEADER.name}</div>
                      <div className="mt-0.5 text-[0.9rem] font-medium text-white/70">{TEAM_LEADER.role}</div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setLeaderOpen((v) => !v)}
                      aria-expanded={leaderOpen}
                      aria-controls={leaderPanelId}
                      className="pointer-events-auto inline-flex items-center rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[0.72rem] font-semibold tracking-wide text-white/85 backdrop-blur-sm transition-colors hover:bg-black/45"
                    >
                      {leaderOpen ? "Hide profile" : "View profile"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Collapsible bio (reveals left → right) */}
              <AnimatePresence initial={false}>
                {leaderOpen && (
                  <motion.div
                    key="leader-bio"
                    id={leaderPanelId}
                    className="min-w-0 overflow-hidden w-full md:w-[560px] lg:w-[640px]"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "left center" }}
                  >
                    <div className="p-6 md:p-8">
                      <p className="text-[0.95rem] leading-relaxed text-white/70">
                        {TEAM_LEADER.bio}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.section>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((m, idx) => (
              <motion.article
                key={`${m.name}-${m.role}-${idx}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6"
              >
                <div className="flex items-center gap-4">
                  {m.imageSrc ? (
                    <img
                      src={m.imageSrc}
                      alt={m.name}
                      className="h-14 w-14 rounded-full object-cover border border-white/[0.10]"
                      draggable={false}
                    />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.04] text-sm font-bold text-white/80">
                      {initials(m.name)}
                    </div>
                  )}
                  <div>
                    <div className="text-lg font-semibold text-white">{m.name}</div>
                    <div className="text-[0.85rem] text-white/50">{m.role}</div>
                  </div>
                </div>

                {m.bio?.trim() ? (
                  <p className="mt-4 text-[0.88rem] leading-relaxed text-white/65">{m.bio}</p>
                ) : null}
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
