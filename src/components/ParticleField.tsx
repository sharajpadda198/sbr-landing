import { useEffect, useRef } from "react"
import { usePrefersReducedMotion } from "../lib/usePrefersReducedMotion"
import { useTheme } from "../lib/useTheme"

// ─── String-art / thread-network — cyan × violet × blue palette ──────────────
// Each "node" is an anchor on a slow Lissajous-style orbit. Threads are drawn
// between every pair of nodes whose screen-distance is within LINK_DIST, with
// colour interpolated between cyan and violet based on the angle of the thread.

interface Node {
  // orbit centre
  cx: number
  cy: number
  // orbit radii
  rx: number
  ry: number
  // orbit phase & speed
  phaseX: number
  phaseY: number
  speedX: number
  speedY: number
  // resolved screen position (updated each frame)
  x: number
  y: number
  // 0‥1 position along the cyan→violet palette
  hue: number
}

// Interpolate between two hex colours; t ∈ [0,1]
function lerpColor(
  [r1, g1, b1]: [number, number, number],
  [r2, g2, b2]: [number, number, number],
  t: number,
): string {
  const r = Math.round(r1 + (r2 - r1) * t)
  const g = Math.round(g1 + (g2 - g1) * t)
  const b = Math.round(b1 + (b2 - b1) * t)
  return `${r},${g},${b}`
}

// Palette stops: cyan → blue → violet (mirrors the image)
const STOPS: [number, number, number][] = [
  [0, 230, 230],   // bright cyan
  [30, 160, 255],  // sky-blue
  [100, 80, 255],  // blue-violet
  [200, 60, 240],  // violet
]

function paletteColor(t: number): string {
  // t ∈ [0,1] mapped across 3 segments
  const seg = Math.min(Math.floor(t * (STOPS.length - 1)), STOPS.length - 2)
  const local = t * (STOPS.length - 1) - seg
  return lerpColor(STOPS[seg], STOPS[seg + 1], local)
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = usePrefersReducedMotion()
  const { theme } = useTheme()

  useEffect(() => {
    if (reduced) return
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!
    let raf: number
    let W = 0
    let H = 0

    // More nodes = denser string-art; keep ≤ 60 for perf
    const COUNT = 52
    // Max distance to draw a thread between two nodes
    const LINK_DIST_RATIO = 0.38  // fraction of viewport diagonal
    const nodes: Node[] = []

    const resize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
      // Re-seed orbits on resize so threads fill the viewport
      nodes.length = 0
      const diag = Math.sqrt(W * W + H * H)
      for (let i = 0; i < COUNT; i++) {
        const cx = Math.random() * W
        const cy = Math.random() * H
        nodes.push({
          cx,
          cy,
          rx: diag * (0.04 + Math.random() * 0.22),
          ry: diag * (0.04 + Math.random() * 0.22),
          phaseX: Math.random() * Math.PI * 2,
          phaseY: Math.random() * Math.PI * 2,
          speedX: (0.00018 + Math.random() * 0.00025) * (Math.random() < 0.5 ? 1 : -1),
          speedY: (0.00018 + Math.random() * 0.00025) * (Math.random() < 0.5 ? 1 : -1),
          x: cx,
          y: cy,
          hue: i / (COUNT - 1),
        })
      }
    }
    resize()
    window.addEventListener("resize", resize)

    let t = 0

    const draw = () => {
      t++
      ctx.clearRect(0, 0, W, H)

      const diag = Math.sqrt(W * W + H * H)
      const LINK_DIST = diag * LINK_DIST_RATIO

      // Update node positions along their Lissajous orbit
      for (const n of nodes) {
        n.x = n.cx + Math.cos(n.phaseX + t * n.speedX * 60) * n.rx
        n.y = n.cy + Math.sin(n.phaseY + t * n.speedY * 60) * n.ry
        // Wrap orbit centres slowly so the pattern never stagnates
        n.cx += n.speedX * 8
        n.cy += n.speedY * 8
        if (n.cx < -n.rx * 2) n.cx = W + n.rx
        if (n.cx > W + n.rx * 2) n.cx = -n.rx
        if (n.cy < -n.ry * 2) n.cy = H + n.ry
        if (n.cy > H + n.ry * 2) n.cy = -n.ry
      }

      // Draw threads between nearby node pairs
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist > LINK_DIST) continue

          // Proximity fade: threads closest to each other are brightest
          const proximity = 1 - dist / LINK_DIST
          // Line alpha: keep thin but visible — adjust for light/dark
          const alpha = proximity * proximity * 0.55

          // Colour: blend between the two node hues, then add thread-angle shift
          const blendHue = (a.hue + b.hue) / 2
          // Add a small oscillation so colour breathes over time
          const hueShift = 0.08 * Math.sin(t * 0.003 + i * 0.4 + j * 0.3)
          const finalHue = Math.min(1, Math.max(0, blendHue + hueShift))
          const rgb = paletteColor(finalHue)

          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = `rgba(${rgb},${alpha})`
          ctx.lineWidth = 0.6
          ctx.stroke()
        }
      }

      raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [reduced])

  if (reduced) return null

  const isLight = theme === "light"

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ opacity: isLight ? 0.18 : 0.45 }}
      aria-hidden
    />
  )
}
