import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export function ModulesCTA() {
  return (
    <div className="mt-10">
      <Link
        to="/modules"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--primary))] hover:underline underline-offset-4"
      >
        Explore All Platform Modules <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
