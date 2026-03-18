import { motion, useScroll, useSpring } from "framer-motion"

/** Thin green progress bar pinned to the top of the viewport */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9998] h-[3px] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, hsl(150,60%,30%), hsl(150,60%,50%), hsl(38,92%,55%))",
      }}
    />
  )
}
