import { motion } from "framer-motion"

const GET_IMG = new URL("../../assets/A__3_-removebg-preview.png", import.meta.url).href

const GET_ITEMS = [
  {
    title: "Real-Time Visibility",
    body: "Know exactly what’s happening across your plant — from feedstock entry to final output.",
  },
  {
    title: "Loss Detection",
    body: "Identify where feedstock, time, or efficiency is being lost — before it compounds into bigger issues.",
  },
  {
    title: "Operational Clarity",
    body: "Replace guesswork with structured, reliable data for every decision.",
  },
  {
    title: "Process Automation",
    body: "Reduce manual work and human errors by automating critical workflows.",
  },
  {
    title: "Centralized Control",
    body: "Bring ground operations and management decisions into one connected system.",
  },
  {
    title: "Scalable Systems",
    body: "Build processes that grow with your plant — not break as operations expand.",
  },
] as const

const GET_SCATTER = [
  "lg:-translate-y-6 lg:translate-x-8 lg:rotate-[-2.2deg] lg:justify-self-start",
  "lg:translate-y-5 lg:-translate-x-10 lg:rotate-[2.4deg] lg:justify-self-end",
  "lg:translate-y-8 lg:translate-x-12 lg:rotate-[1.8deg] lg:justify-self-start",
  "lg:-translate-y-5 lg:-translate-x-12 lg:rotate-[-1.9deg] lg:justify-self-end",
  "lg:translate-y-7 lg:translate-x-6 lg:rotate-[2.8deg] lg:justify-self-start",
  "lg:-translate-y-8 lg:-translate-x-6 lg:rotate-[-2.6deg] lg:justify-self-end",
] as const

const GET_FLOAT = [
  { amp: 10, duration: 6.2, delay: 0.1 },
  { amp: 12, duration: 7.0, delay: 0.3 },
  { amp: 9, duration: 5.8, delay: 0.2 },
  { amp: 11, duration: 6.6, delay: 0.4 },
  { amp: 8, duration: 5.5, delay: 0.15 },
  { amp: 10, duration: 6.0, delay: 0.35 },
] as const

export function WhatYouGet() {
  return (
    <section className="py-16 lg:py-20" aria-label="What you actually get">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-emerald-400">
              <span className="h-px w-5 bg-emerald-500/60" />
              Solution
            </span>

            <motion.h2
              className="mt-4 w-full text-balance font-black text-white leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.4rem)" }}
            >
              What you actually get
            </motion.h2>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left: scattered floating boxes */}
          <div className="grid gap-4 sm:grid-cols-2 lg:gap-6 lg:auto-rows-max">
            {GET_ITEMS.map((item, i) => {
              const float = GET_FLOAT[i] ?? { amp: 10, duration: 6.0, delay: 0 }
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative w-full ${GET_SCATTER[i] ?? ""}`}
                >
                  <motion.div
                    animate={{ y: [0, -float.amp, 0] }}
                    transition={{ duration: float.duration, repeat: Infinity, ease: "easeInOut", delay: float.delay }}
                    className="rounded-2xl border border-black/10 bg-white p-5 shadow-lg shadow-black/20"
                  >
                    <div className="text-[0.9rem] font-semibold text-gray-900 leading-snug">{item.title}</div>
                    <div className="mt-1.5 text-[0.8rem] leading-relaxed text-gray-600">{item.body}</div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Right: big image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <motion.img
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              src={GET_IMG}
              alt="What you actually get"
              className="w-full max-w-xl object-contain lg:max-w-none lg:h-[720px]"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
