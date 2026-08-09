import * as React from "react"
import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

const CALENDLY_URL = "https://calendly.com/sharajpadda4939/new-meeting"
/** Light embed so the calendar stays readable on the dark page */
const CALENDLY_EMBED_URL =
  `${CALENDLY_URL}?embed_type=Inline&hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=2e7d4f`
const SCRIPT_ID = "calendly-script"
const STYLE_ID = "calendly-style"

function ensureCalendlyAssets(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve()

  if (!document.getElementById(STYLE_ID)) {
    const link = document.createElement("link")
    link.id = STYLE_ID
    link.rel = "stylesheet"
    link.href = "https://assets.calendly.com/assets/external/widget.css"
    document.head.appendChild(link)
  }

  if (window.Calendly) return Promise.resolve()

  const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null
  if (existing) {
    return new Promise((resolve) => {
      if (window.Calendly) {
        resolve()
        return
      }
      existing.addEventListener("load", () => resolve(), { once: true })
      // If load already fired, don't hang forever
      window.setTimeout(() => resolve(), 1500)
    })
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script")
    script.id = SCRIPT_ID
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error("Failed to load Calendly widget"))
    document.head.appendChild(script)
  })
}

interface CalendlyEmbedProps {
  /** If true, renders as an inline section (for the /contact page). Default: inline. */
  mode?: "inline" | "popup"
}

export function CalendlyEmbed({ mode = "inline" }: CalendlyEmbedProps) {
  // Preload popup assets; inline uses a plain iframe (more reliable than widget.js)
  React.useEffect(() => {
    void ensureCalendlyAssets().catch(() => {})
  }, [])

  if (mode === "inline") {
    return (
      <section
        id="contact"
        aria-label="Book a demo"
        className="bg-[hsl(var(--dark-band))] py-24"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--primary))]/30 bg-[hsl(var(--primary))]/10 px-4 py-1.5">
              <Calendar className="h-3.5 w-3.5 text-[hsl(var(--primary))]" />
              <span className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[hsl(var(--primary))]">
                Book a Demo
              </span>
            </div>
            <h2 className="font-serif text-4xl font-normal text-white sm:text-5xl">
              See Farm&#8209;Connect in action.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/45">
              Pick a time that works for you — we'll walk you through the modules most relevant to your operation.
            </p>
            <div className="mt-4 flex items-center justify-center gap-1.5 text-white/30">
              <Clock className="h-3.5 w-3.5" />
              <span className="text-[0.72rem]">30 minutes · Free · No commitment</span>
            </div>
          </motion.div>

          <iframe
            src={CALENDLY_EMBED_URL}
            title="Schedule a meeting"
            className="w-full overflow-hidden rounded-sm bg-white"
            style={{ minWidth: 320, height: 700, border: 0 }}
            loading="lazy"
          />
        </div>
      </section>
    )
  }

  return null
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void
    }
  }
}

/**
 * Opens the Calendly popup when called.
 * Usage: attach to any button's onClick.
 */
// eslint-disable-next-line react-refresh/only-export-components
export function openCalendlyPopup() {
  void ensureCalendlyAssets().then(() => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    } else {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer")
    }
  })
}
