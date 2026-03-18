import { createContext, useContext, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

function getInitial(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const stored = localStorage.getItem('z-theme') as Theme | null
  return stored ?? 'dark'
}

// ─── Shared context ──────────────────────────────────────────────────────────
interface ThemeContextValue {
  theme: Theme
  toggle: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

// ─── Hook (always reads from context — must be used inside ThemeProvider) ────
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>')
  return ctx
}

// ─── Internal hook that owns the state (used only by ThemeProvider) ──────────
export function useThemeState(): ThemeContextValue {
  const [theme, setTheme] = useState<Theme>(getInitial)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('light')
      root.classList.remove('dark')
    } else {
      root.classList.remove('light')
      root.classList.add('dark')
    }
    localStorage.setItem('z-theme', theme)
  }, [theme])

  return { theme, toggle: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')) }
}
