import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useRef, useState } from "react"

const STEP_1_IMG = new URL("../../assets/step_1.png", import.meta.url).href
const STEP_2_IMG = new URL("../../assets/step_2.png", import.meta.url).href
const STEP_3_IMG = new URL("../../assets/step_3.png", import.meta.url).href
const STEP_4_IMG = new URL("../../assets/step_4.png", import.meta.url).href
const STEP_5_IMG = new URL("../../assets/step_5.png", import.meta.url).href

const STEPS = [
  {
    id: "step-1",
    title: "Understand",
    desc:
      "Without a clear understanding of your plant’s actual challenges, any system built will fail at the ground level. This step ensures we solve the right problems — not assumed ones.",
    imageUrl: STEP_1_IMG,
  },
  {
    id: "step-2",
    title: "On-Ground Analysis",
    desc:
      "Most inefficiencies exist where decisions are not visible — on the ground. By directly interacting with operators, we uncover gaps that never appear in reports or dashboards.",
    imageUrl: STEP_2_IMG,
  },
  {
    id: "step-3",
    title: "Expert Collaboration",
    desc:
      "Real-world operations are complex and cannot be solved with theory alone. Involving experienced industry experts ensures that every solution is practical, reliable, and aligned with how plants actually function.",
    imageUrl: STEP_3_IMG,
  },
  {
    id: "step-4",
    title: "Prototype First",
    desc:
      "Building a full system without validation leads to wasted time and resources. A prototype allows you to see, test, and refine the solution before committing to full-scale development.",
    imageUrl: STEP_4_IMG,
  },
  {
    id: "step-5",
    title: "Build After Approval",
    desc:
      "Every plant operates differently. By building only after your approval, we ensure the final system is tailored, relevant, and fully aligned with your operational needs.",
    imageUrl: STEP_5_IMG,
  },
]

export function SplitFeatures() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const stepCount = STEPS.length
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const clamped = Math.min(0.999999, Math.max(0, latest))
    const nextIndex = Math.min(stepCount - 1, Math.floor(clamped * stepCount))
    setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex))
  })

  const activeStep = STEPS[activeIndex]

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24"
      style={{ height: `${stepCount * 100}vh` }}
    >
      <div className="sticky top-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid min-h-[calc(100svh-6rem)] items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Heading stays pinned */}
            <div>
              <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-emerald-400">
                <span className="h-px w-5 bg-emerald-500/60" />
                Solution
              </span>
              <h2
                className="mt-4 w-full text-balance font-black text-white leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4.4rem)" }}
              >
                How ZENITRA solves this problem
              </h2>
              <p className="mt-4 text-[0.95rem] leading-[1.8] text-white/70">
                Scroll to see the 5 steps.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.10] bg-white/[0.03]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeStep.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="p-5"
                  >
                    <div className="text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-white/60">
                      Step {activeIndex + 1}: {activeStep.title}
                    </div>
                    <div className="mt-2 text-[0.95rem] leading-relaxed text-white/75">
                      {activeStep.desc}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Steps appear one-by-one */}
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025]">
              <div className="p-4">
                <div className="mb-3 text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-white/60">
                  Step {activeIndex + 1} of {stepCount}
                </div>

                <div className="relative flex h-[60svh] min-h-[22rem] items-center justify-center">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.img
                      key={activeStep.id}
                      src={activeStep.imageUrl}
                      alt={activeStep.title}
                      className="max-h-full w-full object-contain"
                      initial={{ opacity: 0, scale: 1.01 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
