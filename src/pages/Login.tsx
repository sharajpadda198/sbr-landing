import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Leaf, Lock, Mail } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#030712] px-4">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.07),transparent_65%)] blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-sm"
      >
        {/* Logo */}
        <Link to="/landing" className="mb-8 flex items-center justify-center gap-2 text-white/80 transition-colors hover:text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500">
            <Leaf className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-semibold tracking-tight">Zenithra</span>
        </Link>

        {/* Card */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 shadow-2xl shadow-black/40 backdrop-blur-sm">
          <h1 className="text-2xl font-bold tracking-tight text-white">Sign in</h1>
          <p className="mt-1.5 text-sm text-white/50">Welcome back. Enter your credentials to continue.</p>

          <form className="mt-7 grid gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-1.5">
              <label className="text-xs font-semibold tracking-[0.14em] uppercase text-white/40">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-white/[0.1] bg-white/[0.04] py-2.5 pl-9 pr-4 text-sm text-white placeholder:text-white/20 outline-none focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>

            <div className="grid gap-1.5">
              <label className="text-xs font-semibold tracking-[0.14em] uppercase text-white/40">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-white/[0.1] bg-white/[0.04] py-2.5 pl-9 pr-4 text-sm text-white placeholder:text-white/20 outline-none focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 active:opacity-80"
            >
              Sign in <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-5 text-center text-xs text-white/35">
            Don't have an account?{" "}
            <Link to="/contact" className="font-semibold text-emerald-400 hover:text-emerald-300">
              Request access
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-[0.7rem] text-white/25">
          By signing in you agree to our{" "}
          <span className="text-white/45">Terms of Service</span> and{" "}
          <span className="text-white/45">Privacy Policy</span>.
        </p>
      </motion.div>
    </div>
  )
}
