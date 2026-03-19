import * as React from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { ArrowRight, Factory, Tractor, Users, Building2 } from "lucide-react"

const audiences = [
	{
		icon: Factory,
		title: "Bio-CNG plant operators",
		desc: "Manage feedstock procurement, intake logistics, and plant utilisation with full visibility from farm to gate.",
		cta: "Meet the team",
		to: "/team",
	},
	{
		icon: Building2,
		title: "Biomass aggregators",
		desc: "Build and manage large supplier networks, track supply contracts, and coordinate multi-village collection at scale.",
		cta: "Aggregator tools",
		to: "/modules",
	},
	{
		icon: Tractor,
		title: "Waste collection operators",
		desc: "Plan MSW routes, manage collection schedules, and deliver directly to plant gate with digital proof of delivery.",
		cta: "Collection modules",
		to: "/modules",
	},
	{
		icon: Users,
		title: "Energy crop developers",
		desc: "Manage Napier grass cultivation networks, coordinate harvest timing, and fulfil long-term supply commitments reliably.",
		cta: "Crop management",
		to: "/modules",
	},
]

export function WhoItsFor() {
	const nav = useNavigate()
	const sectionRef = React.useRef<HTMLElement>(null)
	const mouseX = useMotionValue(0)
	const mouseY = useMotionValue(0)
	const spotlightBg = useTransform(
		[mouseX, mouseY],
		([x, y]: number[]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(34,197,94,0.09) 0%, transparent 70%)`
	)

	return (
		<section
			ref={sectionRef}
			id="who"
			className="relative overflow-hidden dark-band py-24 lg:py-32"
			onMouseMove={e => {
				const r = sectionRef.current?.getBoundingClientRect()
				if (r) { mouseX.set(e.clientX - r.left); mouseY.set(e.clientY - r.top) }
			}}
		>
			<div className="grid-overlay absolute inset-0" />
			<motion.div className="absolute inset-0 pointer-events-none" style={{ background: spotlightBg }} />
			{/* Orbs */}
			<div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[hsl(var(--primary)/0.12)] blur-3xl" />
			<div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-amber-500/8 blur-3xl" />

			<div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-16">

				{/* Header */}
				<div className="grid gap-10 lg:grid-cols-2 lg:items-end mb-14">
					<div>
						<span className="inline-flex items-center gap-2 text-[0.62rem] font-bold tracking-[0.2em] uppercase text-[hsl(var(--primary))] mb-5">
							<span className="h-px w-6 bg-[hsl(var(--primary))]" /> Built for
						</span>
						<h2 className="font-serif text-4xl text-white sm:text-5xl lg:text-6xl">
							Who Zenithra is built for.
						</h2>
					</div>
					<p className="text-[0.9rem] leading-relaxed text-white/45 lg:max-w-sm lg:ml-auto">
						If you source, collect, or manage feedstock for a Bio-CNG plant, Zenithra is designed around your exact workflow.
					</p>
				</div>

				{/* Audience cards */}
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{audiences.map((a, i) => (
						<motion.div
							key={a.title}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{ duration: 0.55, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
							className="group relative flex flex-col rounded-2xl border border-white/8 bg-white/5 p-6 transition-all duration-400 hover:-translate-y-2 hover:border-[hsl(var(--primary)/0.4)] hover:bg-white/8"
						>
							{/* Icon */}
							<div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[hsl(var(--primary)/0.2)] bg-[hsl(var(--primary)/0.1)]">
								<a.icon className="h-5 w-5 text-[hsl(var(--primary))]" />
							</div>

							<h3 className="text-base font-semibold text-white leading-snug">{a.title}</h3>
							<p className="mt-2.5 flex-1 text-[0.8rem] leading-relaxed text-white/45">{a.desc}</p>

							<button
								onClick={() => nav(a.to)}
								className="mt-5 inline-flex items-center gap-1.5 text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[hsl(var(--primary))] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							>
								{a.cta} <ArrowRight className="h-3 w-3" />
							</button>

							{/* Bottom accent */}
							<div className="absolute bottom-0 inset-x-0 h-0.5 rounded-b-2xl bg-[hsl(var(--primary))] scale-x-0 transition-transform duration-400 origin-left group-hover:scale-x-100" />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
