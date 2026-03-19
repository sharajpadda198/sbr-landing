import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const BADGES = [
  { icon: "🌾", text: "50K+ farmers managed", color: "badge-trust-emerald border-emerald-500/20 bg-emerald-950/50 text-emerald-300" },
  { icon: "⚡", text: "Real-time intake tracking", color: "badge-trust-sky border-sky-500/20 bg-sky-950/50 text-sky-300" },
  { icon: "🚀", text: "Go live in 14 days", color: "badge-trust-violet border-violet-500/20 bg-violet-950/50 text-violet-300" },
]

const HERO_BG_VIDEO_URL = new URL(
  "../../assets/background.mp4",
  import.meta.url,
).href

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const sectionEl = sectionRef.current
    const videoEl = videoRef.current
    if (!sectionEl || !videoEl) return

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return

        if (entry.isIntersecting) {
          // Resume when visible.
          void videoEl.play().catch(() => {})
        } else {
          // Pause when offscreen to free GPU/CPU.
          videoEl.pause()
        }
      },
      { threshold: 0.15 },
    )

    io.observe(sectionEl)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="hero-section relative" aria-label="Hero">
      <div className="relative min-h-[100svh] overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          {/* Avoid setting a restrictive `type` here; some browsers will skip QuickTime sources entirely. */}
          <source src={HERO_BG_VIDEO_URL} />
        </video>

        {/* Background layers */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#030712]/55" />
          <div
            className="hero-dot-grid absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div
            className="hero-top-glow absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-25"
            style={{ background: "radial-gradient(ellipse, #059669 0%, transparent 70%)" }}
          />
          <div className="hero-bottom-fade absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030712] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 pt-24 pb-20 lg:px-8">
          <div className="text-center lg:text-left">
            <div className="overflow-hidden mb-6">
              <h1
                className="text-balance font-bold text-white leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)" }}
              >
                Bring Your Entire {" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #34d399 0%, #10b981 40%, #06b6d4 100%)" }}
                >
                  CBG Plant
                </span>
                <br />
                Under One Intelligent System
              </h1>
            </div>

            <p className="mx-auto max-w-2xl text-[1.05rem] leading-[1.75] text-white/70 lg:mx-0">
              Zenithra connects every part of your CBG plant to cater you the most optimized and cost saving systems .
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-[0.88rem] font-semibold text-white transition-all duration-300 hover:bg-emerald-400 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
              >
                Get started free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/modules"
                className="hero-secondary-btn inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-7 py-3.5 text-[0.88rem] font-medium text-white/60 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:text-white"
              >
                View Demo →
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {BADGES.map((b) => (
                <span
                  key={b.text}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[0.68rem] font-medium ${b.color}`}
                >
                  <span>{b.icon}</span>
                  {b.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
