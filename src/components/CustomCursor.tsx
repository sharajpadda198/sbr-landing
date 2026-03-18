import * as React from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"

/**
 * Precision crosshair cursor:
 * - Sharp crosshair lines with a centre gap (no circles/dots)
 * - Spring-lagged trailing crosshair ghost
 * - On hover: morphs into an arrow + "View" pill label
 * - Dark/light mode aware
 * - Hidden on touch devices via CSS media query
 */
export function CustomCursor() {
  const mx = useMotionValue(-200)
  const my = useMotionValue(-200)

  // Lagged ghost crosshair
  const gx = useSpring(mx, { stiffness: 90, damping: 20, mass: 0.8 })
  const gy = useSpring(my, { stiffness: 90, damping: 20, mass: 0.8 })

  const [hovered,  setHovered]  = React.useState(false)
  const [label,    setLabel]    = React.useState("")
  const [dark,     setDark]     = React.useState(false)
  const [hidden,   setHidden]   = React.useState(true)

  React.useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
      if (hidden) setHidden(false)

      // Luminance check for dark/light bg
      const el = document.elementFromPoint(e.clientX, e.clientY)
      if (el) {
        const bg = window.getComputedStyle(el).backgroundColor
        const nums = bg.match(/\d+/g)
        if (nums && nums.length >= 3) {
          const lum = 0.299 * +nums[0] + 0.587 * +nums[1] + 0.114 * +nums[2]
          setDark(lum < 90)
        }
      }
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "tab"
      if (interactive) {
        setHovered(true)
        // pull label from data-cursor or aria-label or inner text (max 12 chars)
        const el = (target.closest("a,button") ?? target) as HTMLElement
        const raw =
          el.getAttribute("data-cursor") ??
          el.getAttribute("aria-label") ??
          (el.textContent?.trim().slice(0, 12) ?? "")
        setLabel(raw)
      }
    }

    const onOut  = () => { setHovered(false); setLabel("") }
    const onLeave  = () => setHidden(true)
    const onEnter  = () => setHidden(false)

    window.addEventListener("mousemove", onMove,  { passive: true })
    window.addEventListener("mouseover", onOver,  { passive: true })
    window.addEventListener("mouseout",  onOut,   { passive: true })
    document.documentElement.addEventListener("mouseleave", onLeave)
    document.documentElement.addEventListener("mouseenter", onEnter)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onOver)
      window.removeEventListener("mouseout",  onOut)
      document.documentElement.removeEventListener("mouseleave", onLeave)
      document.documentElement.removeEventListener("mouseenter", onEnter)
    }
  }, [mx, my, hidden])

  // Colour tokens
  const primary  = dark ? "rgba(255,255,255,0.9)"  : "hsl(152,52%,20%)"
  const ghost    = dark ? "rgba(255,255,255,0.18)" : "hsla(152,52%,20%,0.22)"

  // Crosshair arm length & gap
  const ARM  = 10   // px each side
  const GAP  = 4    // centre gap

  return (
    <AnimatePresence>
      {!hidden && (
        <>
          {/* ── Ghost crosshair (spring-lagged) ── */}
          <motion.div
            key="ghost"
            className="pointer-events-none fixed z-[9990] top-0 left-0"
            style={{ x: gx, y: gy, translateX: "-50%", translateY: "-50%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 0 : 0.55 }}
            exit={{ opacity: 0 }}
          >
            {/* H arm left */}
            <span style={{ position:"absolute", top:0, right: GAP, width: ARM, height: 1, background: ghost }} />
            {/* H arm right */}
            <span style={{ position:"absolute", top:0, left:  GAP, width: ARM, height: 1, background: ghost }} />
            {/* V arm up */}
            <span style={{ position:"absolute", left:0, bottom: GAP, width: 1, height: ARM, background: ghost }} />
            {/* V arm down */}
            <span style={{ position:"absolute", left:0, top:    GAP, width: 1, height: ARM, background: ghost }} />
          </motion.div>

          {/* ── Main crosshair (exact tracking) ── */}
          <motion.div
            key="crosshair"
            className="pointer-events-none fixed z-[9999] top-0 left-0"
            style={{ x: mx, y: my, translateX: "-50%", translateY: "-50%" }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: hovered ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {/* H arm left */}
            <span style={{ position:"absolute", top:0, right: GAP, width: ARM, height: 1.5, background: primary }} />
            {/* H arm right */}
            <span style={{ position:"absolute", top:0, left:  GAP, width: ARM, height: 1.5, background: primary }} />
            {/* V arm up */}
            <span style={{ position:"absolute", left:0, bottom: GAP, width: 1.5, height: ARM, background: primary }} />
            {/* V arm down */}
            <span style={{ position:"absolute", left:0, top:    GAP, width: 1.5, height: ARM, background: primary }} />
          </motion.div>

          {/* ── Hover state: arrow pointer + label pill ── */}
          <motion.div
            key="hover-cursor"
            className="pointer-events-none fixed z-[9999] top-0 left-0"
            style={{ x: mx, y: my }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Sharp arrow pointer SVG */}
            <svg
              width="18" height="22"
              viewBox="0 0 18 22"
              fill="none"
              style={{ display:"block", filter: dark ? "none" : "drop-shadow(0 1px 2px rgba(0,0,0,0.18))" }}
            >
              <path
                d="M2 2L16 10.5L9.5 12.5L7 20L2 2Z"
                fill={dark ? "white" : "hsl(152,52%,20%)"}
                stroke={dark ? "rgba(0,0,0,0.3)" : "white"}
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>

            {/* Label pill — shown only when label text exists */}
            {label && (
              <motion.span
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: "absolute",
                  top: 18,
                  left: 14,
                  whiteSpace: "nowrap",
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "3px 8px",
                  borderRadius: 999,
                  background: dark ? "rgba(255,255,255,0.95)" : "hsl(152,52%,20%)",
                  color:      dark ? "hsl(152,52%,14%)"       : "white",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
              >
                {label}
              </motion.span>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
