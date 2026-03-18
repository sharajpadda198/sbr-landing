import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const POINT_1_IMG = new URL("../../assets/point_1.jpg", import.meta.url).href
const POINT_2_IMG = new URL("../../assets/point_2.webp", import.meta.url).href
const POINT_3_IMG = new URL("../../assets/point_3.jpg", import.meta.url).href
const POINT_4_IMG = new URL("../../assets/point_4.jpg", import.meta.url).href
const POINT_5_IMG = new URL("../../assets/point_5.jpg", import.meta.url).href
const POINT_6_IMG = new URL("../../assets/point_6.avif", import.meta.url).href

const points = [
  {
    id: "hidden-costs",
    title: "Hidden Costs",
    desc: "Operational costs consistently exceed estimates — without clear visibility on why",
    imageUrl: POINT_1_IMG,
  },
  {
    id: "output-gap",
    title: "Output Gap",
    desc: "Feedstock input doesn’t translate into expected biogas output — and the gap remains unexplained",
    imageUrl: POINT_2_IMG,
  },
  {
    id: "no-ground-data",
    title: "No Ground Data",
    desc: "No reliable, real-time data from ground-level operations",
    imageUrl: POINT_3_IMG,
  },
  {
    id: "manual-operations",
    title: "Manual Operations",
    desc: "Critical workflows are still handled manually — leading to errors, delays, and inefficiencies",
    imageUrl: POINT_4_IMG,
  },
  {
    id: "unstable-supply",
    title: "Unstable Supply",
    desc: "Feedstock availability is unpredictable — driven by climate, seasonality, and market fluctuations",
    imageUrl: POINT_5_IMG,
  },
  {
    id: "no-central-control",
    title: "No Central Control 🔥",
    desc: "No centralized system connects ground operations to decision-making",
    imageUrl: POINT_6_IMG,
  },
]

export function BentoFeatures() {
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const headingY = useTransform(scrollYProgress, [0, 1], [56, -56])

  return (
    <section ref={sectionRef} className="bento-section py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <motion.h2
            className="mt-4 w-full text-balance font-black text-white leading-[1.05] tracking-tight"
            style={{ y: headingY, fontSize: "clamp(2.2rem, 5vw, 4.4rem)" }}
          >
            Why Most CBG System Fails
          </motion.h2>
          <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/70">
            Six recurring breakdowns that quietly kill performance — even in well-funded plants.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {points.map((point, i) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative h-48 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.04]"
            >
              <img
                src={point.imageUrl}
                alt={point.title}
                className="absolute inset-0 z-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />

              {/* Subtle top glow on hover */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Lower black gradient (for text overlay readability over images) */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

              <div className="relative z-10 flex h-full flex-col justify-end p-4">
                <h3 className="text-[1rem] font-semibold leading-snug text-white">{point.title}</h3>
                <p className="mt-1 text-[0.78rem] leading-relaxed text-white/75">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
