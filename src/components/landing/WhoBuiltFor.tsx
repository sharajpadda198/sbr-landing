import { motion } from "framer-motion"

const CBG_OWNER_IMG = new URL("../../assets/point_2.webp", import.meta.url).href
const AGGREGATOR_IMG = new URL("../../assets/point_5.jpg", import.meta.url).href
const LOGISTICS_IMG = new URL("../../assets/logistics.avif", import.meta.url).href
const WAREHOUSE_IMG = new URL("../../assets/warehouses.avif", import.meta.url).href
const CONSTRUCTION_IMG = new URL("../../assets/construction.jpg", import.meta.url).href
const LARGE_FARM_IMG = new URL("../../assets/large farms.jpg", import.meta.url).href

type CardSize = "tall" | "wide"

const CARDS: Array<{
  title: string
  imageUrl: string
  size: CardSize
  positionClass: string
}> = [
  {
    title: "CBG Plant Owners",
    imageUrl: CBG_OWNER_IMG,
    size: "tall",
    positionClass: "lg:left-0 lg:top-1/2 lg:-translate-y-1/2",
  },
  {
    title: "Feedstock Aggregators",
    imageUrl: AGGREGATOR_IMG,
    size: "wide",
    positionClass: "lg:left-[14%] lg:top-0",
  },
  {
    title: "Logistics Managers",
    imageUrl: LOGISTICS_IMG,
    size: "wide",
    positionClass: "lg:right-[14%] lg:top-0",
  },
  {
    title: "Warehouse Owners",
    imageUrl: WAREHOUSE_IMG,
    size: "wide",
    positionClass: "lg:left-[14%] lg:bottom-0",
  },
  {
    title: "Construction & Real Estate",
    imageUrl: CONSTRUCTION_IMG,
    size: "wide",
    positionClass: "lg:right-[14%] lg:bottom-0",
  },
  {
    title: "Large Farm Owners",
    imageUrl: LARGE_FARM_IMG,
    size: "tall",
    positionClass: "lg:right-0 lg:top-1/2 lg:-translate-y-1/2",
  },
]

function BuiltForCard({
  title,
  imageUrl,
  size,
}: {
  title: string
  imageUrl: string
  size: CardSize
}) {
  const sizeClass =
    size === "tall"
      ? "h-full min-h-[280px] lg:h-[540px] lg:w-[220px]"
      : "h-full min-h-[220px] lg:h-[200px] lg:w-[360px]"

  return (
    <div className={`overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg shadow-black/20 ${sizeClass}`}>
      <div className="flex h-full flex-col">
        <div className="relative flex-1">
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        </div>

        <div className="px-5 py-4">
          <div className="text-[0.95rem] font-semibold text-gray-900 leading-snug">{title}</div>
        </div>
      </div>
    </div>
  )
}

export function WhoBuiltFor() {
  return (
    <section className="py-16 lg:py-24" aria-label="Who this is built for">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative lg:min-h-[640px]">
          {/* Center heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-20 mx-auto max-w-3xl text-center lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
          >
            <h2
              className="w-full text-balance font-black text-white leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.4rem)" }}
            >
              Who This Is Built For
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-0 lg:block">
            {CARDS.map((card) => (
              <div
                key={card.title}
                className={`relative z-10 lg:absolute ${card.positionClass}`}
              >
                <BuiltForCard title={card.title} imageUrl={card.imageUrl} size={card.size} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
