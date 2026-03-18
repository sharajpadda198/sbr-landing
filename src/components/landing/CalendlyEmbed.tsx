import * as React from "react"
import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

const CALENDLY_URL = "https://calendly.com/zenithra/30min"

interface CalendlyEmbedProps {
  /** If true, renders as an inline section (for the /contact page). Default: inline. */
  mode?: "inline" | "popup"
}

export function CalendlyEmbed({ mode = "inline" }: CalendlyEmbedProps) {
  React.useEffect(() => {
    // Inject Calendly widget script once
    if (document.getElementById("calendly-script")) return
    const script = document.createElement("script")
    script.id = "calendly-script"
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.head.appendChild(script)
  }, [])

  if (mode === "inline") {
    return (
      <section
        id="contact"
        aria-label="Book a demo"
        className="bg-[hsl(var(--dark-band))] py-24"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          {/* Header */}
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

          {/* Calendly inline widget */}
          <div
            className="calendly-inline-widget w-full overflow-hidden rounded-sm"
            data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=0d1a12&text_color=ffffff&primary_color=2e7d4f`}
            style={{ minWidth: 320, height: 700 }}
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
    }
  }
}

/**
 * Opens the Calendly popup when called.
 * Usage: attach to any button's onClick.
 */
// eslint-disable-next-line react-refresh/only-export-components
export function openCalendlyPopup() {
  if (typeof window !== "undefined" && window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL })
  } else {
    // Fallback: open in new tab if script hasn't loaded yet
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer")
  }
}
