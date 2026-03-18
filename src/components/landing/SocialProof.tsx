import { motion } from "framer-motion"
import { Star } from "lucide-react"

const QUOTES = [
  {
    quote: "We went from manually tracking 300 farmers on spreadsheets to managing 3,200 on Zenithra in under a month. The onboarding support was exceptional.",
    name: "Vikram Nair",
    role: "Head of Operations",
    company: "GreenFuel Biogas",
    initials: "VN",
    ring: "ring-emerald-500/30",
    text: "from-emerald-500/20 to-teal-500/0",
    size: "lg:col-span-2",
  },
  {
    quote: "Route optimization saved us ₹4.2L per month in fuel. That paid for the platform in 3 weeks.",
    name: "Ananya Sharma",
    role: "Supply Chain Manager",
    company: "Bharat Bioenergy Ltd",
    initials: "AS",
    ring: "ring-sky-500/30",
    text: "from-sky-500/10 to-blue-500/0",
    size: "",
  },
  {
    quote: "Our farmers used to wait 2 weeks for payments. Now it's same-day via UPI with an auto receipt on WhatsApp. The trust we've built is invaluable.",
    name: "Rajan Patel",
    role: "Founder",
    company: "Kisan Agritech",
    initials: "RP",
    ring: "ring-violet-500/30",
    text: "from-violet-500/10 to-purple-500/0",
    size: "",
  },
  {
    quote: "The quality control module eliminated manual sampling errors completely. We caught a bad batch before it reached the plant — saved us a full shutdown.",
    name: "Meera Joshi",
    role: "Plant Manager",
    company: "Avaada Biogas",
    initials: "MJ",
    ring: "ring-rose-500/30",
    text: "from-rose-500/10 to-pink-500/0",
    size: "",
  },
  {
    quote: "Forecasting accuracy is genuinely impressive. We now plan plant capacity 10 days out instead of flying blind. Night-and-day difference in how we operate.",
    name: "Suresh Krishnan",
    role: "CEO",
    company: "NextGen BioCNG",
    initials: "SK",
    ring: "ring-amber-500/30",
    text: "from-amber-500/10 to-yellow-500/0",
    size: "",
  },
  {
    quote: "Zenithra was the only platform that truly understood supply chain complexity — not just farm records. Worth every rupee.",
    name: "Pooja Mehta",
    role: "VP Strategy",
    company: "Greenko Energy",
    initials: "PM",
    ring: "ring-teal-500/30",
    text: "from-teal-500/10 to-cyan-500/0",
    size: "lg:col-span-2",
  },
]

export function SocialProof() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-5 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2
            className="font-bold text-white leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            Loved by operators
            <br />
            <span className="text-white/50">across India</span>
          </h2>
          <p className="mt-4 text-[0.95rem] text-white/65">
            Here's what real operations teams say.
          </p>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {QUOTES.map((q, i) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.04] ${q.size}`}
            >
              {/* Hover gradient bg */}
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${q.text} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              {/* Stars */}
              <div className="relative mb-4 flex gap-0.5">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} className="h-3 w-3 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="relative text-[0.9rem] leading-[1.75] text-white/65">
                "{q.quote}"
              </p>

              {/* Author */}
              <div className="relative mt-6 flex items-center gap-3">
                <div className={`flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08] ring-1 ${q.ring} text-[0.65rem] font-bold text-white`}>
                  {q.initials}
                </div>
                <div>
                  <div className="text-[0.82rem] font-semibold text-white">{q.name}</div>
                  <div className="text-[0.68rem] text-white/50">{q.role} · {q.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
