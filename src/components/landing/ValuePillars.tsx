import { motion } from "framer-motion"
import { CalendarClock, BarChart3, Leaf, Route, Users, Truck } from "lucide-react"
import { CapabilitiesSummary } from "./CapabilitiesSummary"
import { ModulesCTA } from "./ModulesCTA"

const pillars = [
	{
		icon: CalendarClock,
		title: "Harvest Prediction",
		tag: "When",
		desc: "AI forecasts harvest timelines across your farmer network so collection teams know when and where biomass will be ready.",
	},
	{
		icon: BarChart3,
		title: "Feedstock Availability Forecast",
		tag: "How much",
		desc: "Estimate feedstock volumes across regions and crops so plants can plan daily operations with supply visibility.",
	},
	{
		icon: Leaf,
		title: "Field Monitoring",
		tag: "What's growing",
		desc: "Monitor crop progress and field activity to ensure contracted farms are producing the biomass your plant depends on.",
	},
	{
		icon: Route,
		title: "Route Optimization",
		tag: "Efficiency",
		desc: "Automatically generate optimized pickup routes to reduce fuel usage, travel time, and collection costs.",
	},
	{
		icon: Users,
		title: "Farmer Network Management",
		tag: "People",
		desc: "Coordinate farmers, contracts, field locations, and supply commitments in one system to scale biomass sourcing.",
	},
	{
		icon: Truck,
		title: "Logistics Monitoring",
		tag: "Movement",
		desc: "Monitor vehicles, pickup progress, and biomass movement in real time to ensure timely feedstock delivery.",
	},
]

export function ValuePillars() {
	return (
		<div>
			{/* Section header */}
			<div className="grid gap-10 lg:grid-cols-2 lg:items-end mb-14">
				<div>
					<span className="eyebrow mb-5 block">How it works</span>
					<h2 className="font-serif text-4xl text-[hsl(var(--foreground))] sm:text-5xl lg:text-[3.25rem] max-w-xl">
						How we stabilize feedstock supply.
					</h2>
				</div>
				<div>
					<p className="text-[0.95rem] leading-relaxed text-[hsl(var(--muted-foreground))] max-w-md">
						By connecting farmers, predicting harvest availability, and optimizing
						biomass collection logistics from farm to plant.
					</p>
					<div className="mt-6">
						<CapabilitiesSummary />
					</div>
					<div className="mt-3">
						<ModulesCTA />
					</div>
				</div>
			</div>

			{/* 6 capability cards */}
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{pillars.map((p, i) => (
					<motion.div
						key={p.title}
						initial={{ opacity: 0, y: 22 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{
							duration: 0.5,
							delay: i * 0.07,
							ease: [0.16, 1, 0.3, 1],
						}}
						className="group relative overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-white p-6 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/8 hover:border-[hsl(var(--primary)/0.25)]"
					>
						{/* Number */}
						<div className="mb-4 flex items-center justify-between">
							<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--accent))] transition-colors duration-300 group-hover:bg-[hsl(var(--primary)/0.1)] group-hover:border group-hover:border-[hsl(var(--primary)/0.2]">
								<p.icon className="h-4.5 w-4.5 text-[hsl(var(--primary))]" />
							</div>
							<span className="rounded-full bg-[hsl(var(--secondary))] px-3 py-1 text-[0.6rem] font-bold tracking-[0.16em] uppercase text-[hsl(var(--muted-foreground))]">
								{p.tag}
							</span>
						</div>

						<h3 className="text-[0.95rem] font-semibold leading-snug text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors duration-200">
							{p.title}
						</h3>
						<p className="mt-2.5 text-[0.83rem] leading-relaxed text-[hsl(var(--muted-foreground))]">
							{p.desc}
						</p>

						{/* Hover bottom line */}
						<div className="absolute bottom-0 inset-x-0 h-0.5 bg-[hsl(var(--primary))] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100 rounded-b-2xl" />
					</motion.div>
				))}
			</div>
		</div>
	)
}
