import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

type Cat = "All" | "Operations" | "Integration" | "Pricing" | "Data"

const faqs: { q: string; a: string; cat: Cat }[] = [
	{
		q: "What software helps manage feedstock collection for plants?",
		a: "Zenithra is a feedstock operations platform for plant teams. It helps coordinate farmer networks, predict harvest readiness, forecast daily availability, and optimise collection logistics from farm to plant.",
		cat: "Operations",
	},
	{
		q: "How can plants predict biomass availability?",
		a: "Zenithra combines farmer network data, crop/region seasonality, and field updates to predict when residue will be ready and how much supply to expect by day. This improves intake planning and reduces last-minute procurement.",
		cat: "Data",
	},
	{
		q: "How do bioenergy plants coordinate biomass logistics?",
		a: "Zenithra supports route planning, pickup scheduling, and live logistics monitoring so sourcing teams can coordinate vehicles, drivers, and collection sites efficiently — with visibility into progress until plant intake is confirmed.",
		cat: "Operations",
	},
	{
		q: "Can AI forecast agricultural residue supply?",
		a: "Yes. Zenithra forecasts expected supply volumes and harvest readiness signals so plant teams can plan routes and intake. Forecasts update as field conditions change.",
		cat: "Data",
	},
	{
		q: "Who is Zenithra built for?",
		a: "Plant operators, biomass sourcing managers, agricultural biomass aggregators, and operations teams managing multi-region feedstock supply chains.",
		cat: "Operations",
	},
	{
		q: "What outcomes can we expect?",
		a: "Improved feedstock visibility, fewer supply gaps, reduced collection fuel costs through optimized routing, and better coordination across large farmer networks.",
		cat: "Pricing",
	},
	{
		q: "Does Zenithra integrate with existing plant ERP or SCADA systems?",
		a: "Yes. Zenithra offers open API endpoints and custom connectors for common ERP platforms. Integration timelines depend on your stack — typically 2–4 weeks.",
		cat: "Integration",
	},
	{
		q: "How is Zenithra priced?",
		a: "Zenithra is priced per site, with tiered module selection. Teams start with core feedstock coordination modules and can add AI forecasting and logistics optimization as operations scale. Contact us for a custom quote.",
		cat: "Pricing",
	},
	{
		q: "What data do we need to get started?",
		a: "A basic farmer registry (name, village, crop type) and rough village-level yield history if available. Zenithra works from minimal seed data and improves accuracy as more field data is collected.",
		cat: "Data",
	},
]

const CATS: Cat[] = ["All", "Operations", "Integration", "Pricing", "Data"]

function Item({ item, idx }: { item: (typeof faqs)[0]; idx: number }) {
	const [open, setOpen] = useState(false)
	return (
		<motion.div
			layout
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3, delay: idx * 0.03 }}
			className="faq-item-divider border-b border-white/[0.08] last:border-0"
		>
			<button
				className="flex w-full items-start justify-between gap-5 py-5 text-left group"
				onClick={() => setOpen((v) => !v)}
			>
				<span className="faq-question-text flex gap-4 items-start text-[0.9rem] font-medium leading-relaxed text-white group-hover:text-emerald-400 transition-colors">
					<span className="shrink-0 tabular-nums text-[0.7rem] font-bold tracking-widest text-emerald-400 opacity-50 mt-0.5">
						{String(idx + 1).padStart(2, "0")}
					</span>
					{item.q}
				</span>
				<span className="shrink-0 mt-0.5">
					{open ? (
						<Minus className="h-4 w-4 text-emerald-400" />
					) : (
						<Plus className="h-4 w-4 text-white/40" />
					)}
				</span>
			</button>
			<AnimatePresence initial={false}>
				{open && (
					<motion.div
						key="a"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
						className="overflow-hidden"
					>
						<p className="faq-answer-text pb-5 pl-10 text-[0.875rem] leading-relaxed text-white/50">
							{item.a}
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	)
}

export function FAQ() {
	const [active, setActive] = useState<Cat>("All")
	const filtered = active === "All" ? faqs : faqs.filter((f) => f.cat === active)

	return (
		<section id="faq" className="faq-section py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-16">
				<div className="grid gap-16 lg:grid-cols-[360px_1fr]">
					{/* Left — sticky header */}
					<div className="lg:sticky lg:top-28 lg:self-start">
						<span className="eyebrow mb-5 block">FAQ</span>
						<h2 className="font-serif text-4xl text-white sm:text-5xl">
							Questions teams ask.
						</h2>
<p className="mt-5 text-[0.9rem] leading-relaxed text-white/70">
						Honest answers about what Zenithra does, how it integrates, and what to expect.
						</p>

						{/* Category pills */}
						<div className="mt-8 flex flex-wrap gap-2">
							{CATS.map((cat) => (
								<button
									key={cat}
									onClick={() => setActive(cat)}
									className={[
										"rounded-full px-4 py-1.5 text-[0.68rem] font-bold tracking-[0.14em] uppercase transition-all duration-200",
										active === cat
											? "bg-emerald-700 text-white shadow-sm"
											: "faq-pill-inactive border border-white/15 text-white/40 hover:border-emerald-400/40 hover:text-emerald-400",
									].join(" ")}
								>
									{cat}
								</button>
							))}
						</div>
					</div>

					{/* Right — accordion */}
					<div className="faq-accordion-panel rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-2">
						<AnimatePresence mode="popLayout">
							{filtered.map((f, i) => (
								<Item key={f.q} item={f} idx={i} />
							))}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	)
}
