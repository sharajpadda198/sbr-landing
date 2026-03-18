import * as React from "react"

function inferBasenameFromPathname(pathname: string): string {
  // On GitHub Pages, apps are typically served from "/<repo>".
  // In that case, we infer basename from the first path segment.
  const seg = pathname.split("/").filter(Boolean)[0]
  return seg ? `/${seg}` : ""
}

// eslint-disable-next-line react-refresh/only-export-components
export const BasenameContext = React.createContext<string>("")

export function BaseNameProvider({ children }: { children: React.ReactNode }) {
  const [basename] = React.useState(() => {
    // If the user explicitly set a Vite base like "BASE_URL=/repo/", use it.
    // Otherwise infer from the URL.
    const envBase = import.meta.env.BASE_URL as string | undefined
    if (envBase && envBase !== "/") return envBase.replace(/\/$/, "")
    return inferBasenameFromPathname(window.location.pathname)
  })

  return <BasenameContext.Provider value={basename}>{children}</BasenameContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useBasename() {
  return React.useContext(BasenameContext)
}
