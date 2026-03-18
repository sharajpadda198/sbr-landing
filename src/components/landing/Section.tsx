import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "../../lib/utils"

type SectionProps = {
  id?: string
  className?: string
  dark?: boolean
  children: React.ReactNode
  label?: string
}

export function Section({ id, className, dark, children, label }: SectionProps) {
  const reduce = useReducedMotion()

  return (
    <motion.section
      id={id}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "py-20 sm:py-28",
        dark ? "bg-white/[0.02]" : "bg-transparent",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {label && (
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-8 bg-emerald-500" />
            <span className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-emerald-400">
              {label}
            </span>
          </div>
        )}
        {children}
      </div>
    </motion.section>
  )
}
