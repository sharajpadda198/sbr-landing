import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

export function CategorySentence() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-15%" })
  const nav = useNavigate()

  return (
    <section ref={ref} className="bg-[hsl(var(--background))] py-32 lg:py-48 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="eyebrow">What is Zenithra</span>
        </motion.div>

        {/* Large display headline */}
        <div className="mb-16">
          {[
            "The operating system",
            "for India's Bio-CNG",
            "feedstock supply chain.",
          ].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h2
                className={`font-display font-light text-[clamp(2.8rem,7vw,7rem)] leading-[1.0] tracking-[-0.03em] ${i === 2 ? "text-[hsl(var(--muted-foreground))]" : "text-[hsl(var(--foreground))]"}`}
                initial={{ y: "105%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.1 }}
              >
                {line}
              </motion.h2>
            </div>
          ))}
        </div>

        {/* Body + CTA */}
        <motion.div
          className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="max-w-2xl text-[1.1rem] leading-[1.8] text-[hsl(var(--muted-foreground))] font-light">
            Zenithra is a specialized feedstock operations platform designed for Bio-CNG plants.
            It manages Napier grass procurement, agricultural residues, and municipal solid waste collection
            with precision logistics, quality tracking, and automated payments —
            turning a fragmented supply chain into one connected pipeline:{" "}
            <span className="font-medium text-[hsl(var(--foreground))]">Forecast → Procure → Collect → Weigh → Quality Check → Pay.</span>
          </p>
          <button
            onClick={() => nav("/modules")}
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--foreground))] text-white px-8 py-4 text-[0.82rem] font-semibold transition-all duration-300 hover:opacity-85 hover:-translate-y-0.5 whitespace-nowrap"
          >
            See all modules →
          </button>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="mt-20 h-px bg-[hsl(var(--border))]"
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </section>
  )
}
