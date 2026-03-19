import * as React from "react"
import { motion } from "framer-motion"
import { Users, ScanEye, BarChart3, Route, Truck } from "lucide-react"
import { useNavigate } from "react-router-dom"

const steps: {
	num: string
	title: string
	body: string
	Icon: React.ElementType
	accent: string
	img?: string
}[] = [
	{
		num: "01",
		title: "Supplier onboarding",
		body: "Register farmers, Napier grass cultivators, waste collectors, and biomass aggregators. Capture land parcels, crop types, and supply commitments digitally.",
		Icon: Users,
		accent: "hsl(152 50% 42%)",
	},
	{
		num: "02",
		title: "Field team training & app rollout",
		body: "Equip your field agents with the Zenithra mobile app. Start capturing harvest readiness, quality data, and collection confirmations from day one.",
		Icon: ScanEye,
		accent: "hsl(152 45% 36%)",
	},
	{
		num: "03",
		title: "Logistics integration",
		body: "Connect your transport fleet to the platform. Auto-generate optimised collection routes, monitor vehicle movements, and track deliveries in real time.",
		Icon: Route,
		accent: "hsl(152 40% 30%)",
	},
	{
		num: "04",
		title: "Plant intake integration",
		body: "Link weighbridges and quality testing equipment to Zenithra. All intake data flows automatically into supplier records and payment calculations.",
		Icon: BarChart3,
		accent: "hsl(152 36% 24%)",
	},
	{
		num: "05",
		title: "Live operations — within weeks",
		body: "Most organisations can begin operating on Zenithra within weeks, not months. Cloud-based deployment means no heavy IT infrastructure required.",
		Icon: Truck,
		accent: "hsl(152 32% 18%)",
		img: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600&q=80&auto=format&fit=crop",
	},
]

export function HowItWorks() {
	const navigate = useNavigate()

	return (
		<section
			id="how-it-works"
			className="bg-[hsl(var(--secondary))] py-24 lg:py-32 overflow-hidden"
		>
			<div className="mx-auto max-w-7xl px-6 lg:px-16">
				{/* Header */}
				<div className="grid gap-10 lg:grid-cols-2 lg:items-end mb-20">
					<div>
						<span className="inline-flex items-center gap-2 text-[0.62rem] font-bold tracking-[0.2em] uppercase text-[hsl(var(--primary))] mb-5">
							<span className="h-px w-6 bg-[hsl(var(--primary))]" /> Simple Deployment
						</span>
						<h2 className="font-serif text-4xl text-[hsl(var(--foreground))] sm:text-5xl lg:text-[3.25rem]">
							From onboarding to live operations in weeks.
						</h2>
					</div>
					<p className="text-[0.9rem] leading-relaxed text-[hsl(var(--muted-foreground))] lg:max-w-sm lg:ml-auto">
						Zenithra is cloud-based and deploys quickly. No heavy IT infrastructure.
						Most organisations are live and operating within weeks, not months.
					</p>
				</div>

				{/* Steps */}
				<div className="relative">
					{/* Vertical connector line */}
					<div className="absolute left-[31px] top-8 bottom-8 w-px bg-gradient-to-b from-[hsl(var(--primary))] to-transparent hidden lg:block" />

					<div className="grid gap-6">
						{steps.map((s, i) => (
							<motion.div
								key={s.num}
								initial={{ opacity: 0, x: -24 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: "-30px" }}
								transition={{
									duration: 0.6,
									delay: i * 0.1,
									ease: [0.16, 1, 0.3, 1],
								}}
								className="group grid gap-6 lg:grid-cols-[64px_1fr_1fr] items-start"
							>
								{/* Number + icon bubble */}
								<div className="relative flex flex-col items-center gap-2">
									<div
										className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-translate-y-1"
										style={{ background: s.accent }}
									>
										<s.Icon
											className="h-6 w-6 text-white"
											strokeWidth={1.6}
										/>
									</div>
									<span className="font-serif text-xs text-[hsl(var(--muted-foreground))]">
										{s.num}
									</span>
								</div>

								{/* Title */}
								<div className="lg:py-3">
									<h3 className="text-lg font-semibold text-[hsl(var(--foreground))] leading-snug group-hover:text-[hsl(var(--primary))] transition-colors duration-200">
										{s.title}
									</h3>
								</div>

								{/* Body + optional image */}
								<div className="lg:py-3">
									<p className="text-[0.85rem] leading-relaxed text-[hsl(var(--muted-foreground))]">
										{s.body}
									</p>
									{s.img && (
										<div className="mt-4 overflow-hidden rounded-xl">
											<img
												src={s.img}
												alt={s.title}
												className="h-40 w-full object-cover"
											/>
										</div>
									)}
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.55, delay: 0.3 }}
					className="mt-16 flex justify-center"
				>
					<button
						onClick={() => navigate("/team")}
						className="rounded-full bg-[hsl(var(--primary))] px-9 py-4 text-[0.72rem] font-bold tracking-[0.15em] uppercase text-white transition-all hover:-translate-y-0.5 hover:bg-[hsl(152_52%_16%)] hover:shadow-lg hover:shadow-[hsl(var(--primary)/0.3)]"
					>
						Meet The Team
					</button>
				</motion.div>
			</div>
		</section>
	)
}
