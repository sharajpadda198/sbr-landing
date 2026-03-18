import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

const outcomes = [
	{
		num: "01",
		title: "15–25% reduction\nin logistics costs",
		sub: "Optimised collection routes and smarter pickup clustering slash per-tonne transport costs immediately.",
		img: "bailing-image.jpg",
		tag: "Logistics",
	},
	{
		num: "02",
		title: "Higher plant\nutilisation rates",
		sub: "Reliable, forecasted supply means fewer idle shifts and consistent digester loading throughout the season.",
		img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
		tag: "Operations",
	},
	{
		num: "03",
		title: "Better digester\nstability",
		sub: "Quality-controlled intake with moisture and contamination tracking keeps your feedstock mix consistent.",
		img: "telimatics.jpg",
		tag: "Quality",
	},
	{
		num: "04",
		title: "Faster supplier\npayment cycles",
		sub: "Automated payment calculation from digital weighment data eliminates disputes and accelerates settlements.",
		img: "farmer-connection.jpg",
		tag: "Payments",
	},
	{
		num: "05",
		title: "Complete feedstock\ntraceability",
		sub: "Every tonne tracked from farm origin to plant gate — a full audit trail for compliance and reporting.",
		img: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80&auto=format&fit=crop",
		tag: "Traceability",
	},
]

export function Outcomes() {
	const nav = useNavigate()
	return (
		<section id="outcomes" className="bg-[hsl(var(--ink))] py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-16">
				{/* Header */}
				<div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between mb-14">
					<div>
						<span
							className="eyebrow mb-5 block"
							style={{ color: "rgba(255,255,255,0.35)" }}
						>
							<span className="inline-flex items-center gap-2">
								<span className="h-px w-6 bg-[hsl(var(--primary))]" />
								Value proposition
							</span>
						</span>
						<h2 className="font-serif text-4xl text-white sm:text-5xl lg:text-6xl max-w-xl">
							Real operational impact.
						</h2>
					</div>
					<button
						onClick={() => nav("/contact")}
						className="shrink-0 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[0.7rem] font-bold tracking-[0.15em] uppercase text-white/50 transition-all hover:border-white/35 hover:text-white"
					>
						Talk to us{" "}
						<ArrowUpRight className="h-3.5 w-3.5" />
					</button>
				</div>

				{/* Cards — horizontal scroll on mobile, 3-col on desktop */}
				<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
					{outcomes.map((o, i) => (
						<motion.div
							key={o.num}
							initial={{ opacity: 0, y: 28 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{
								duration: 0.6,
								delay: i * 0.09,
								ease: [0.16, 1, 0.3, 1],
							}}
							className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-[hsl(var(--dark-mid))] transition-all duration-500 hover:-translate-y-2 hover:border-white/15 hover:shadow-2xl"
						>
							{/* Image */}
							<div className="relative aspect-[4/3] overflow-hidden">
								<img
									src={o.img}
									alt={o.title}
									className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--dark-mid))] via-[hsl(var(--dark-mid)/0.4)] to-transparent" />
								<span className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-[0.6rem] font-bold tracking-[0.18em] uppercase text-white/60 backdrop-blur-sm border border-white/10">
									{o.tag}
								</span>
								<div className="absolute right-4 top-4 font-serif text-4xl font-normal text-white/12 leading-none select-none">
									{o.num}
								</div>
							</div>

							{/* Content */}
							<div className="flex flex-1 flex-col p-5">
								<h3 className="font-serif text-xl font-normal leading-tight text-white whitespace-pre-line">
									{o.title}
								</h3>
								<p className="mt-3 flex-1 text-[0.8rem] leading-relaxed text-white/45">
									{o.sub}
								</p>
								<div className="mt-5 h-px w-full bg-white/8 transition-all duration-300 group-hover:bg-[hsl(var(--primary)/0.6)]" />
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
