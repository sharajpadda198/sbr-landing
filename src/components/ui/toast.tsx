import * as React from "react"

type ToastKind = "success" | "error" | "info"

type Toast = {
  id: string
  title: string
  description?: string
  kind: ToastKind
}

type ToastContextValue = {
  toasts: Toast[]
  push: (toast: Omit<Toast, "id">) => void
  dismiss: (id: string) => void
}

const ToastContext = React.createContext<ToastContextValue | null>(null)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  const dismiss = React.useCallback((id: string) => {
    setToasts((t) => t.filter((x) => x.id !== id))
  }, [])

  const push = React.useCallback(
    (toast: Omit<Toast, "id">) => {
      const id = crypto.randomUUID()
      setToasts((t) => [...t, { ...toast, id }])
      window.setTimeout(() => dismiss(id), 4000)
    },
    [dismiss]
  )

  return (
    <ToastContext.Provider value={{ toasts, push, dismiss }}>
      {children}
      <div
        aria-live="polite"
        aria-relevant="additions"
        className="fixed right-4 top-4 z-50 flex w-[calc(100vw-2rem)] max-w-sm flex-col gap-2"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className={
              "rounded-xl border bg-background p-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/80 " +
              (t.kind === "success"
                ? "border-primary/20"
                : t.kind === "error"
                  ? "border-destructive/30"
                  : "border-border")
            }
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold">{t.title}</div>
                {t.description ? (
                  <div className="mt-1 text-sm text-muted-foreground">
                    {t.description}
                  </div>
                ) : null}
              </div>
              <button
                type="button"
                className="text-sm text-muted-foreground hover:text-foreground"
                onClick={() => dismiss(t.id)}
                aria-label="Dismiss notification"
              >
                Close
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useToast() {
  const ctx = React.useContext(ToastContext)
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>")
  return ctx
}
