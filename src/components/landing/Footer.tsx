import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Leaf, Mail, Phone } from "lucide-react"

const navLinks = [
  { label: "Modules",   to: "/modules"   },
  { label: "Team",      to: "/team"      },
  { label: "Blog",      to: "/blog"      },
  { label: "Contact",   to: "/contact"   },
]

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use",   href: "#" },
]

export function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="footer-root bg-[#030712] text-white border-t border-white/[0.06]" aria-label="Footer">

      {/* ── CTA band ── */}
      <div className="footer-cta-band border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-[0.62rem] font-bold tracking-[0.2em] uppercase text-emerald-400 mb-4">
                <span className="h-px w-6 bg-emerald-400" /> Ready to get started?
              </span>
              <h2 className="font-serif text-3xl font-normal text-white sm:text-4xl lg:text-5xl max-w-lg">
                Request a Product&nbsp;Walkthrough.
              </h2>
              <p className="mt-4 max-w-md text-[0.85rem] text-white/40 leading-relaxed">
                See how Zenithra can transform feedstock operations for your plant. 30 minutes — we'll show the modules most relevant to your operation.
              </p>
              {/* urgency nudge */}
              <div className="footer-urgency-badge mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-700/50 bg-emerald-900/20 px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[0.62rem] font-bold tracking-[0.15em] uppercase text-emerald-400">
                  Currently onboarding new teams for Q2 2026
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <button
                onClick={() => navigate("/contact")}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-emerald-500 px-8 py-4 text-[0.72rem] font-bold tracking-[0.15em] uppercase text-white transition-all hover:bg-emerald-400 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/25"
              >
                <motion.span
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent"
                  animate={{ translateX: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                />
                Book a Demo
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate("/modules")}
                className="footer-secondary-btn inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.04] px-8 py-4 text-[0.72rem] font-bold tracking-[0.15em] uppercase text-white/60 transition-all hover:border-white/30 hover:bg-white/[0.07] hover:text-white"
              >
                Download Product Overview
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="footer-grid-border grid gap-12 border-b border-white/[0.08] py-16 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-[0_0_14px_rgba(16,185,129,0.3)]">
                <Leaf className="h-4 w-4 text-white" />
              </div>
              <div className="font-semibold text-white tracking-wide">Farm&#8209;Connect</div>
            </div>
            <div className="mt-1 text-[0.62rem] font-bold tracking-[0.18em] uppercase text-emerald-400">
              by Amrit Agri Innovation
            </div>
            <p className="mt-5 max-w-sm text-[0.82rem] leading-relaxed text-white/35">
              A feedstock operations platform helping plant teams stabilize biomass supply through farmer coordination, harvest prediction, and logistics optimisation.
            </p>
            <div className="mt-6 flex flex-col gap-2.5">
              <a href="mailto:hello@zenithra.in" className="inline-flex items-center gap-2 text-[0.8rem] text-white/35 transition-colors hover:text-white">
                <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                hello@zenithra.in
              </a>
              <a href="tel:+917000526029" className="inline-flex items-center gap-2 text-[0.8rem] text-white/35 transition-colors hover:text-white">
                <Phone className="h-3.5 w-3.5 flex-shrink-0" />
                +91 70005 26029
              </a>
              <a href="tel:+917389607278" className="inline-flex items-center gap-2 text-[0.8rem] text-white/35 transition-colors hover:text-white">
                <Phone className="h-3.5 w-3.5 flex-shrink-0" />
                +91 73896 07278
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <div className="mb-5 text-[0.62rem] font-bold tracking-[0.2em] uppercase text-white/25">
              Platform
            </div>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-[0.82rem] text-white/45 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="mb-5 text-[0.62rem] font-bold tracking-[0.2em] uppercase text-white/25">
              Legal
            </div>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[0.82rem] text-white/45 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.72rem] text-white/20">
            &copy; {new Date().getFullYear()} Amrit Agri Innovation Pvt Ltd. All rights reserved.
          </p>
          <p className="text-[0.72rem] text-white/12">
            Designed &amp; built by Farm&#8209;Connect
          </p>
        </div>
      </div>
    </footer>
  )
}
