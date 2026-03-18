import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

const roles = [
	{
		key: "owner",
		label: "Ops Lead",
		description: "Multi-site visibility, KPIs, and operational performance",
		actions: [
			"Track intake, sourcing cost, and fulfilment KPIs in one dashboard",
			"Compare sites by availability, on-time collection, and losses",
			"Review exception trends and SLA breaches across teams",
			"Export weekly and monthly performance reports",
		],
		benefits: [
			"Faster decision-making with live operational context",
			"Spot underperformance early and course-correct",
			"Consistent metrics across sites and teams",
			"Clear reporting without manual consolidation",
		],
	},
	{
		key: "engineer",
		label: "Operations Analyst",
		description: "Data-quality, forecasting signals, and operational trends",
		actions: [
			"Monitor supply signals, readiness, and forecast vs actual gaps",
			"Set thresholds for shortages, delays, and quality flags",
			"Investigate loss drivers with timeline + audit trail",
			"Share insights with sourcing and logistics teams",
		],
		benefits: [
			"More reliable planning through tighter feedback loops",
			"Fewer surprises with earlier risk detection",
			"Better root-cause analysis from structured data",
			"Consistent tracking of issues to resolution",
		],
	},
	{
		key: "operator",
		label: "Field Coordinator",
		description: "Daily execution, checklists, and on-ground updates",
		actions: [
			"Onboard farmers and collection points with guided forms",
			"Capture readiness updates and pickup confirmations",
			"Raise issues with photos/notes and assign follow-ups",
			"Complete daily handover checklist with open items",
		],
		benefits: [
			"Less manual tracking, more consistent execution",
			"Clear daily priorities with fewer missed steps",
			"Faster issue resolution with structured handoffs",
			"Better visibility for managers without extra calls",
		],
	},
	{
		key: "compliance",
		label: "Finance / Admin",
		description: "Audit trail, payouts, and operational reconciliation",
		actions: [
			"Track payouts, invoices, and receipts against completed pickups",
			"Reconcile collections with weights, quality checks, and acknowledgements",
			"Maintain a clean audit trail for approvals and changes",
			"Export logs and reports for internal review",
		],
		benefits: [
			"Less manual work and fewer reconciliation gaps",
			"Every record is timestamped with ownership",
			"Audit-ready exports without chasing spreadsheets",
			"More reliable oversight across teams",
		],
	},
]

export function RoleTabs() {
	return (
		<div>
			<div className="max-w-2xl">
			<h2 className="font-serif text-4xl font-normal leading-tight text-white sm:text-5xl">
				Built for every role in the operation.
			</h2>
			<p className="mt-4 text-white/65">
					From plant owner to shift operator — each role sees exactly what they
					need, nothing more.
				</p>
			</div>

			<div className="mt-12">
				<Tabs defaultValue={roles[0].key}>
				<TabsList className="h-auto rounded-none bg-white/[0.03] border border-white/[0.08] p-0 flex-wrap">
					{roles.map((r) => (
						<TabsTrigger
							key={r.key}
							value={r.key}
							className="rounded-none px-6 py-3.5 text-xs font-semibold tracking-widest uppercase text-white/60 data-[state=active]:bg-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-none"
							>
								{r.label}
							</TabsTrigger>
						))}
					</TabsList>

					{roles.map((r) => (
						<TabsContent
							key={r.key}
							value={r.key}
							className="mt-0 border border-t-0 border-white/[0.08]"
						>
							<div className="border-b border-white/[0.08] bg-white/[0.02] px-8 py-4">
								<p className="text-sm text-white/65">
									{r.description}
								</p>
							</div>
							<div className="grid lg:grid-cols-2">
							<div className="border-b border-white/[0.08] p-8 lg:border-b-0 lg:border-r">
								<div className="mb-5 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-emerald-400">
										What they do in Farm&#8209;Connect
									</div>
									<ul className="grid gap-4">
										{r.actions.map((a) => (
											<li
												key={a}
											className="flex gap-3 text-sm leading-relaxed text-white/80"
										>
											<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
												{a}
											</li>
										))}
									</ul>
								</div>
								<div className="p-8">
								<div className="mb-5 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-emerald-400">
										What they gain
									</div>
									<ul className="grid gap-4">
										{r.benefits.map((b) => (
											<li
												key={b}
											className="flex gap-3 text-sm leading-relaxed text-white/80"
										>
											<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
												{b}
											</li>
										))}
									</ul>
								</div>
							</div>
						</TabsContent>
					))}
				</Tabs>
			</div>
		</div>
	)
}
