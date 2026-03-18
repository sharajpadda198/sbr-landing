import { motion } from "framer-motion"

const quotes = [
	{
		quote:
			"Before Zenithra, lead follow-ups were scattered across WhatsApp and calls. Now every farmer lead has a score, an owner, and a next action. Our conversion rate went up in the first month.",
		name: "Business Development Head",
		org: "Agri Input Company, Rajasthan",
		initial: "B",
	},
	{
		quote:
			"The cultivation planning module alone saved our agronomy team two days of planning per season. The AI generates a week-wise task list — field staff just open the app and know what to do.",
		name: "Agronomy Manager",
		org: "Contract Farming Company, Punjab",
		initial: "A",
	},
	{
		quote:
			"Farmer payments used to take three days after harvest because we had to reconcile weight slips manually. With Zenithra, the GRN triggers the payment automatically. Farmers get paid faster, disputes are zero.",
		name: "Finance Head",
		org: "FPO & Procurement Company, Maharashtra",
		initial: "F",
	},
]

export function Testimonials() {
	return (
		<section
			aria-label="Testimonials"
			className="py-24 bg-[hsl(var(--secondary))]"
		>
			<div className="mx-auto max-w-7xl px-6 lg:px-10">
				{/* Header */}
				<div className="flex items-center gap-3">
					<span className="h-px w-8 bg-[hsl(var(--primary))]" />
					<span className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-[hsl(var(--primary))]">
						What teams say
					</span>
				</div>

				<div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-end">
					<h2 className="font-serif text-4xl font-normal leading-tight text-[hsl(var(--foreground))] sm:text-5xl">
						Results from teams in the field.
					</h2>
					<p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))] lg:max-w-sm lg:ml-auto">
						From agronomy managers to finance heads — teams across the farm
						value chain have replaced spreadsheets with Zenithra.
					</p>
				</div>

				{/* Cards */}
				<div className="mt-14 grid gap-6 lg:grid-cols-3">
					{quotes.map((q, i) => (
						<motion.div
							key={q.name + i}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{
								duration: 0.55,
								delay: i * 0.12,
								ease: [0.16, 1, 0.3, 1],
							}}
							className="group relative flex flex-col bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
						>
							{/* Top accent */}
							<motion.div
								className="absolute top-0 left-0 h-0.5 bg-[hsl(var(--primary))]"
								initial={{ scaleX: 0 }}
								whileInView={{ scaleX: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: i * 0.1 }}
								style={{ originX: 0, width: "100%" }}
							/>

							{/* Large quote mark */}
							<div
								className="mb-5 font-serif text-5xl leading-none text-[hsl(var(--primary))] opacity-25 select-none"
								aria-hidden="true"
							>
								&ldquo;
							</div>

							<p className="flex-1 text-[0.9375rem] leading-relaxed text-[hsl(var(--foreground))]">
								{q.quote}
							</p>

							<div className="mt-8 flex items-center gap-3 border-t border-[hsl(var(--border))] pt-5">
								{/* Avatar initial */}
								<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--primary))]/10 text-[0.75rem] font-bold text-[hsl(var(--primary))]">
									{q.initial}
								</div>
								<div>
									<div className="text-sm font-semibold text-[hsl(var(--foreground))]">
										{q.name}
									</div>
									<div className="mt-0.5 text-xs text-[hsl(var(--muted-foreground))]">
										{q.org}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
