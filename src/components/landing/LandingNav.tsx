import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, Moon, Sun, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "../../lib/useTheme"

const LOGO_URL = new URL(
  "../../assets/A__2_-removebg-preview.png",
  import.meta.url,
).href

const NAV_LINKS = [
  { label: "Product",   to: "/modules"   },
  { label: "Workflows", to: "/workflows" },
  { label: "Pricing",   to: "/pricing"   },
  { label: "Blog",      to: "/blog"      },
]

export function LandingNav() {
  const [scrolled, setScrolled] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)
  const location = useLocation()
  const { theme, toggle } = useTheme()

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => { setMenuOpen(false) }, [location.pathname])

  return (
    <>
      <header
        className={[
          "fixed top-0 z-50 w-full transition-all duration-500",
          scrolled ? "py-2" : "py-0",
        ].join(" ")}
      >
        {/* Nav bar — becomes floating pill after scroll */}
        <div
          className={[
            "mx-auto transition-all duration-500",
            scrolled
              ? "nav-scrolled-pill max-w-5xl rounded-2xl border border-white/[0.10] bg-[#0a0f1a]/85 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-2xl px-5"
              : "max-w-7xl border-transparent bg-transparent px-6 lg:px-10",
          ].join(" ")}
        >
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link to="/" className="group flex shrink-0 items-center gap-2">
              <div className="relative flex h-35 w-35 items-center justify-center overflow-hidden rounded-xl bg-transparent transition-all duration-300">
                <img
                  src={LOGO_URL}
                  alt="Logo"
                  className="h-full w-full object-contain p-1"
                  draggable={false}
                />
              </div>
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((item) => {
                const active = location.pathname === item.to
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={[
                      "relative flex items-center rounded-xl px-4 py-2 text-[0.82rem] font-medium transition-all duration-200",
                      active
                        ? "nav-active-link bg-white/[0.08] text-white"
                        : "nav-inactive-link text-white/55 hover:bg-white/[0.04] hover:text-white/90",
                    ].join(" ")}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="absolute right-2 top-2 h-1 w-1 rounded-full bg-emerald-400"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden items-center gap-2 lg:flex">
              {/* Theme toggle */}
              <button
                type="button"
                onClick={toggle}
                aria-label="Toggle light/dark mode"
                className="nav-theme-btn flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.04] text-white/60 transition-all hover:border-white/20 hover:text-white"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === 'dark' ? (
                    <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Sun className="h-4 w-4" />
                    </motion.span>
                  ) : (
                    <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Moon className="h-4 w-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-2.5 text-[0.82rem] font-semibold text-white shadow-[0_0_18px_rgba(16,185,129,0.28)] transition-all duration-300 hover:-translate-y-px hover:shadow-[0_0_30px_rgba(16,185,129,0.48)]"
              >
                {/* Shine sweep */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Request demo
                <span className="opacity-75">→</span>
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              type="button"
              className="nav-burger-btn flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.04] text-white/60 transition-all hover:border-white/20 hover:text-white lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="h-4 w-4" />
                  </motion.span>
                ) : (
                  <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="h-4 w-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -14, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="nav-mobile-drawer fixed left-4 right-4 top-20 z-50 overflow-hidden rounded-2xl border border-white/[0.10] bg-[#0c1220]/95 shadow-2xl backdrop-blur-2xl lg:hidden"
            >
              <div className="p-4">
                <div className="grid gap-1">
                  {NAV_LINKS.map((item, i) => {
                    const active = location.pathname === item.to
                    return (
                      <motion.div
                        key={item.to}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.18, delay: i * 0.04 }}
                      >
                        <Link
                          to={item.to}
                          className={[
                            "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all",
                            active
                              ? "bg-emerald-500/10 text-emerald-400"
                              : "nav-inactive-link text-white/65 hover:bg-white/[0.05] hover:text-white",
                          ].join(" ")}
                        >
                          {item.label}
                          {active && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />}
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
                <div className="mx-1 mt-3 border-t border-white/[0.08] pt-3 grid gap-2">
                  <button
                    type="button"
                    onClick={toggle}
                    className="nav-mobile-toggle-btn flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.04] py-3 text-sm font-medium text-white/60 transition-all hover:text-white"
                  >
                    {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                  </button>
                  <Link
                    to="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                  >
                    Request demo →
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
