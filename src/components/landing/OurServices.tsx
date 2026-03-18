import { motion } from "framer-motion"

const services = [
	{
		num: "01",
		title: "Farmer Network Management",
		body: "Register and manage land parcels, crop cycles, and harvest forecasts across your supplier base. Track supply commitments and keep farmer participation active throughout the season.",
		img: "farmer-connection.jpg",
	},
	{
		num: "02",
		title: "Harvest Forecasting & Supply Planning",
		body: "Predict Napier grass maturity cycles, agricultural residue availability, and confirmed supply commitments — so your intake schedule is planned weeks ahead with confidence.",
		img: "bailing-image.jpg",
	},
	{
		num: "03",
		title: "Smart Collection & Route Optimisation",
		body: "Auto-generate optimised vehicle routes, pickup clusters, and loading schedules that cut fuel consumption, reduce missed collections, and maximise driver utilisation.",
		img: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80&auto=format&fit=crop",
	},
	{
		num: "04",
		title: "Digital Weighment Integration",
		body: "Connect weighbridges directly to the platform. Every plant intake is logged, supplier-wise records are maintained, and weight data flows automatically into payment calculations.",
		img: "telimatics.jpg",
	},
	{
		num: "05",
		title: "Feedstock Quality Control",
		body: "Track moisture content, contamination levels, and biomass category at intake. Log rejections with photographic evidence and maintain a full quality audit trail per supplier.",
		img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80&auto=format&fit=crop",
	},
	{
		num: "06",
		title: "Automated Supplier Payments",
		body: "Calculate payments based on accepted weight, quality parameters, and contract pricing — automatically. Eliminate manual billing disputes and accelerate supplier payment cycles.",
		img: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80&auto=format&fit=crop",
	},
	{
		num: "07",
		title: "Multi-Biomass & Large-Scale Support",
		body: "Manage Napier grass, agri residue, MSW, and biomass trading on a single platform. Scales from 10 suppliers to 10,000+ — built for operations that need to grow.",
		img: "https://images.unsplash.com/photo-1542601906897-edc9d407c0a0?w=800&q=80&auto=format&fit=crop",
	},
]

export function OurServices() {
	return (
		<section id="services" className="dark-band py-24 lg:py-32">
			<div className="grid-overlay absolute inset-0 pointer-events-none" />
			<div className="relative mx-auto max-w-7xl px-6 lg:px-16">
				{/* Header */}
				<div className="grid gap-10 lg:grid-cols-2 lg:items-end mb-16">
					<div>
						<span className="inline-flex items-center gap-2 text-[0.62rem] font-bold tracking-[0.2em] uppercase text-[hsl(var(--primary))] mb-5">
							<span className="h-px w-6 bg-[hsl(var(--primary))]" /> Platform Modules
						</span>
						<h2 className="font-serif text-4xl text-white sm:text-5xl lg:text-[3.25rem] max-w-xl">
							Seven modules. One complete feedstock pipeline.
						</h2>
					</div>
					<p className="text-[0.9rem] leading-relaxed text-white/40 lg:max-w-sm lg:ml-auto">
						Every module is purpose-built for Bio-CNG feedstock operations — from
						farmer onboarding through to automated supplier payments.
					</p>
				</div>

				{/* Services — alternating row layout */}
				<div className="grid gap-px bg-white/6 rounded-2xl overflow-hidden">
					{services.map((s, i) => (
						<motion.div
							key={s.num}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-40px" }}
							transition={{
								duration: 0.55,
								delay: i * 0.07,
								ease: [0.16, 1, 0.3, 1],
							}}
							className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 bg-[hsl(var(--dark-band))] px-8 py-7 transition-all duration-300 hover:bg-[hsl(var(--dark-mid))] lg:grid-cols-[64px_1fr_200px]"
						>
							{/* Number */}
							<div className="font-serif text-4xl font-normal text-white/12 leading-none select-none group-hover:text-[hsl(var(--primary)/0.4)] transition-colors duration-300">
								{s.num}
							</div>

							{/* Text */}
							<div className="min-w-0">
								<h3 className="text-base font-semibold text-white leading-snug group-hover:text-[hsl(var(--primary))] transition-colors duration-200">
									{s.title}
								</h3>
								<p className="mt-2 text-[0.82rem] leading-relaxed text-white/38 max-w-xl">
									{s.body}
								</p>
							</div>

							{/* Image thumbnail — hidden on mobile */}
							<div className="hidden overflow-hidden rounded-xl lg:block h-[72px] w-[200px] flex-shrink-0">
								<img
									src={s.img}
									alt={s.title}
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-50 group-hover:opacity-80"
								/>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
