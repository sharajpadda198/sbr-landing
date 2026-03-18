import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { useNavigate } from "react-router-dom"

const tiers = [
	{
		title: "Starter",
		sub: "Single plant · Core ops",
		desc: "Get structured feedstock coordination running at your plant without the full stack.",
		features: [
			"Farmer network registry",
			"Core feedstock workflows",
			"Route planning basics",
			"Role-based access",
			"Email support",
		],
		featured: false,
		cta: "Talk to us",
	},
	{
		title: "Growth",
		sub: "Full ops loop · Multi-region",
		desc: "Full-stack visibility from farmer to plant gate — with AI forecasting and live logistics.",
		features: [
			"All 18 operation modules",
			"AI harvest & supply forecasting",
			"Live logistics monitoring",
			"Approvals + audit trail",
			"Dashboards & data exports",
			"Priority onboarding",
		],
		featured: true,
		cta: "Request a demo",
	},
	{
		title: "Enterprise",
		sub: "Multi-plant · Custom scale",
		desc: "For producer companies or aggregators managing complex multi-region operations.",
		features: [
			"Custom workflow config",
			"Multi-plant management",
			"ERP / SCADA integration",
			"SLA & uptime commitments",
			"Dedicated account manager",
			"Implementation support",
		],
		featured: false,
		cta: "Contact us",
	},
]

export function Pricing() {
	const nav = useNavigate()
	return (
		<section id="pricing" className="py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-16">
				{/* Header */}
				<div className="grid gap-8 lg:grid-cols-2 lg:items-end mb-14">
					<div>
						<span className="eyebrow mb-5 block">Pricing</span>
						<h2 className="font-serif text-4xl text-[hsl(var(--foreground))] sm:text-5xl">
							Plans that grow with your operations.
						</h2>
					</div>
					<p className="text-[0.95rem] leading-relaxed text-[hsl(var(--muted-foreground))] lg:max-w-sm lg:ml-auto">
						Pricing is based on enabled modules, number of users, and
						implementation scope. Every plan includes onboarding.
					</p>
				</div>

				{/* Cards */}
				<div className="grid gap-5 lg:grid-cols-3">
					{tiers.map((t, i) => (
						<motion.div
							key={t.title}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{
								duration: 0.55,
								delay: i * 0.1,
								ease: [0.16, 1, 0.3, 1],
							}}
							className={[
								"relative flex flex-col rounded-2xl overflow-hidden",
								t.featured
									? "bg-[hsl(var(--dark-band))] ring-2 ring-[hsl(var(--primary))] shadow-2xl shadow-[hsl(var(--primary)/0.15)]"
									: "border border-[hsl(var(--border))] bg-white",
							].join(" ")}
						>
							{t.featured && (
								<div className="absolute top-0 inset-x-0 h-0.5 bg-[hsl(var(--primary))]" />
							)}

							<div className="flex flex-1 flex-col p-8">
								<div
									className={`text-[0.6rem] font-bold tracking-[0.22em] uppercase mb-1.5 ${
										t.featured
											? "text-[hsl(var(--primary))]"
											: "text-[hsl(var(--muted-foreground))]"
									}`}
								>
									{t.sub}
								</div>
								<div className="flex items-start justify-between">
									<h3
										className={`font-serif text-3xl font-normal ${
											t.featured
												? "text-white"
												: "text-[hsl(var(--foreground))]"
										}`}
									>
										{t.title}
									</h3>
									{t.featured && (
										<span className="rounded-full bg-[hsl(var(--primary))] px-3 py-1 text-[0.58rem] font-bold tracking-[0.16em] uppercase text-white">
											Popular
										</span>
									)}
								</div>
								<p
									className={`mt-3 text-[0.85rem] leading-relaxed ${
										t.featured
											? "text-white/45"
											: "text-[hsl(var(--muted-foreground))]"
									}`}
								>
									{t.desc}
								</p>

								<div
									className={`my-6 h-px ${
										t.featured ? "bg-white/8" : "bg-[hsl(var(--border))]"
									}`}
								/>

								<ul className="flex flex-col gap-3 flex-1">
									{t.features.map((f) => (
										<li
											key={f}
											className="flex items-start gap-3 text-[0.85rem]"
										>
											<span
												className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
													t.featured
														? "bg-[hsl(var(--primary)/0.2)]"
														: "bg-[hsl(var(--accent))]"
												}`}
											>
												<Check
													className="h-2.5 w-2.5 text-[hsl(var(--primary))]"
													strokeWidth={2.5}
												/>
											</span>
											<span
												className={
													t.featured
														? "text-white/60"
														: "text-[hsl(var(--muted-foreground))]"
												}
											>
												{f}
											</span>
										</li>
									))}
								</ul>

								<button
									onClick={() => nav("/contact")}
									className={[
										"mt-8 w-full rounded-xl py-3.5 text-[0.72rem] font-bold tracking-[0.15em] uppercase transition-all duration-250",
										t.featured
											? "bg-[hsl(var(--primary))] text-white hover:bg-[hsl(152_52%_16%)] hover:shadow-lg hover:shadow-[hsl(var(--primary)/0.4)]"
											: "border border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]",
									].join(" ")}
								>
									{t.cta}
								</button>
							</div>
						</motion.div>
					))}
				</div>

				<p className="mt-6 text-[0.75rem] text-[hsl(var(--muted-foreground))]">
					All plans include implementation guidance. Custom scoping available on
					request.
				</p>
			</div>
		</section>
	)
}
