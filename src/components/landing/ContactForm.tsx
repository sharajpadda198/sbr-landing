import * as React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, ArrowRight } from "lucide-react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { useToast } from "../ui/toast"

type FormState = {
  name: string
  company: string
  role: string
  phone: string
  email: string
  lookingFor: string[]
  message: string
}

const options = [
  "Procurement workflow",
  "Cultivation planning",
  "Field monitoring",
  "Harvest planning",
  "Weighment / QC",
  "Inventory & indents",
  "Logistics & fleet",
  "Reporting & compliance",
]

const nextSteps = [
  "We respond within 1-2 business days.",
  "We confirm your modules and team structure.",
  "You get a live workflow walkthrough tailored to your ops.",
]

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
}

export function ContactForm() {
  const { push } = useToast()
  const [submitted, setSubmitted] = React.useState(false)
  const [state, setState] = React.useState<FormState>({
    name: "", company: "", role: "", phone: "", email: "", lookingFor: [], message: "",
  })
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  function toggle(option: string) {
    setState((s) => {
      const has = s.lookingFor.includes(option)
      return { ...s, lookingFor: has ? s.lookingFor.filter((x) => x !== option) : [...s.lookingFor, option] }
    })
  }

  function validate() {
    const e: Record<string, string> = {}
    if (!state.name.trim()) e.name = "Name is required"
    if (!state.company.trim()) e.company = "Company is required"
    if (!state.role.trim()) e.role = "Role is required"
    if (!state.phone.trim()) e.phone = "Phone is required"
    if (!state.email.trim()) e.email = "Email is required"
    else if (!isEmail(state.email)) e.email = "Enter a valid email"
    if (state.lookingFor.length === 0) e.lookingFor = "Select at least one option"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    push({ kind: "success", title: "Request received", description: "We will reach out shortly to schedule a demo." })
  }

  return (
    <section id="contact" aria-label="Request a demo" className="bg-[hsl(var(--dark-band))] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[hsl(var(--primary))]" />
          <span className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-[hsl(var(--primary))]">
            Request a demo
          </span>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif text-4xl font-normal leading-tight text-white sm:text-5xl">
              Tell us what you are trying to improve.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/50">
              We will respond quickly and schedule a tailored demo mapped to your workflows.
            </p>

            <div className="mt-10">
              <div className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-white/40 mb-5">
                What happens next
              </div>
              <ol className="flex flex-col gap-5">
                {nextSteps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-[hsl(var(--primary))] text-[0.65rem] font-bold text-[hsl(var(--primary))]">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-white/60">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10 flex flex-col gap-3">
              <a href="mailto:hello@zenithra.in" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-[hsl(var(--primary))]" />
                hello@zenithra.in
              </a>
              <a href="tel:+917000526029" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-[hsl(var(--primary))]" />
                +91 70005 26029
              </a>
              <a href="tel:+917389607278" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-[hsl(var(--primary))]" />
                +91 73896 07278
              </a>
            </div>
          </motion.div>

          {/* Right form panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-start gap-5">
                <div className="flex h-12 w-12 items-center justify-center bg-[hsl(var(--primary))]">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-normal text-[hsl(var(--foreground))]">
                  You are all set.
                </h3>
                <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                  We will follow up shortly to schedule a demo and map Zenithra to your workflows.
                </p>
                <button
                  className="mt-2 border border-[hsl(var(--foreground))] px-5 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[hsl(var(--foreground))] hover:text-white transition-colors"
                  onClick={() => { setSubmitted(false); setState({ name: "", company: "", role: "", phone: "", email: "", lookingFor: [], message: "" }); setErrors({}) }}
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form className="grid gap-5" onSubmit={onSubmit} noValidate>
                <div className="grid gap-1.5">
                  <Label htmlFor="cf-name" className="text-xs font-semibold tracking-wide uppercase">Name *</Label>
                  <Input id="cf-name" className="rounded-none" value={state.name} onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))} aria-invalid={!!errors.name} />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>

                <div className="grid gap-1.5">
                  <Label htmlFor="cf-company" className="text-xs font-semibold tracking-wide uppercase">Company *</Label>
                  <Input id="cf-company" className="rounded-none" value={state.company} onChange={(e) => setState((s) => ({ ...s, company: e.target.value }))} aria-invalid={!!errors.company} />
                  {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-1.5">
                    <Label htmlFor="cf-role" className="text-xs font-semibold tracking-wide uppercase">Role *</Label>
                    <Input id="cf-role" className="rounded-none" value={state.role} onChange={(e) => setState((s) => ({ ...s, role: e.target.value }))} aria-invalid={!!errors.role} />
                    {errors.role && <p className="text-xs text-destructive">{errors.role}</p>}
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="cf-phone" className="text-xs font-semibold tracking-wide uppercase">Phone *</Label>
                    <Input id="cf-phone" className="rounded-none" value={state.phone} onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))} aria-invalid={!!errors.phone} />
                    {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid gap-1.5">
                  <Label htmlFor="cf-email" className="text-xs font-semibold tracking-wide uppercase">Email *</Label>
                  <Input id="cf-email" type="email" className="rounded-none" value={state.email} onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))} aria-invalid={!!errors.email} />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>

                <fieldset className="grid gap-2">
                  <legend className="text-xs font-semibold tracking-wide uppercase">What are you looking for? *</legend>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {options.map((o) => {
                      const active = state.lookingFor.includes(o)
                      return (
                        <button
                          key={o}
                          type="button"
                          className={`border px-3 py-1.5 text-xs transition-colors ${active ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-white" : "border-[hsl(var(--border))] bg-white text-[hsl(var(--muted-foreground))] hover:border-[hsl(var(--foreground))] hover:text-[hsl(var(--foreground))]"}`}
                          onClick={() => toggle(o)}
                        >
                          {o}
                        </button>
                      )
                    })}
                  </div>
                  {errors.lookingFor && <p className="text-xs text-destructive">{errors.lookingFor}</p>}
                </fieldset>

                <div className="grid gap-1.5">
                  <Label htmlFor="cf-message" className="text-xs font-semibold tracking-wide uppercase">Message</Label>
                  <Textarea id="cf-message" className="rounded-none" value={state.message} onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))} placeholder="Tell us your current workflow and what you would like to improve" />
                </div>

                <button
                  type="submit"
                  className="mt-1 flex items-center justify-center gap-3 bg-[hsl(var(--primary))] px-6 py-3.5 text-xs font-semibold tracking-[0.15em] uppercase text-white hover:opacity-90 transition-opacity"
                >
                  Submit request
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-[hsl(var(--muted-foreground))]">
                  By submitting, you agree to be contacted about Zenithra.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
