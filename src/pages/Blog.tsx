import * as React from "react"
import { motion } from "framer-motion"
import { LandingNav } from "../components/landing/LandingNav"
import { Footer } from "../components/landing/Footer"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { ChevronDown, Pencil, Tag } from "lucide-react"

type BlogPost = {
  id: string
  title: string
  excerpt: string
  content: string
  tags: string[]
  createdAt: number
}

const STORAGE_KEY = "fc_blog_posts_v1"

function safeParsePosts(raw: string | null): BlogPost[] {
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []
    return (parsed as unknown[])
      .filter((p): p is Record<string, unknown> => typeof p === "object" && p !== null)
      .map((p) => ({
        id: String(p.id ?? crypto.randomUUID()),
        title: String(p.title ?? ""),
        excerpt: String(p.excerpt ?? ""),
        content: String(p.content ?? ""),
        tags: Array.isArray(p.tags) ? (p.tags as unknown[]).map(String) : [],
        createdAt: Number(p.createdAt ?? Date.now()),
      }))
      .filter((p) => p.title.trim().length > 0 && p.content.trim().length > 0)
  } catch {
    return []
  }
}

function formatDate(ms: number) {
  return new Date(ms).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  })
}

const DUMMY_POSTS: BlogPost[] = [
  {
    id: "demo-1",
    title: "7 signals your supply chain needs a tighter ops loop",
    excerpt:
      "If your daily numbers come in late, alerts repeat, and decisions are driven by WhatsApp messages — you are paying an invisible tax. Here are 7 signals it is time to unify logistics, farmer data, and real-time intelligence.",
    content:
      "Operations do not fail all at once — they drift. Drift looks like delayed data, repeated alerts, and logs that get filled after the fact.\n\nHere is what to watch:\n1) Same issue appears every day\n2) Work orders are verbal\n3) Quality variance spikes\n4) Dispatch is not tracked\n5) Resource usage is not tied to output\n6) Compliance reporting happens end-of-month\n7) Vendor callbacks depend on individuals\n\nA tight ops loop makes each of these measurable and assignable.",
    tags: ["operations", "supply-chain", "compliance"],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 4,
  },
  {
    id: "demo-2",
    title: "Blueprint: farmer onboarding to first dispatch in 5 stages",
    excerpt:
      "A simple blueprint that operators, owners, and auditors can all follow: onboarding to verification to planning to collection to dispatch.",
    content:
      "A common problem in multi-stakeholder operations is that each team describes the process differently.\n\nWe use a single blueprint: onboarding, verification, planning, collection, dispatch.\n\nWithin each stage we attach: data capture, SOPs, alerts, checklists, and approvals — so the operation runs as a product, not a collection of spreadsheets.",
    tags: ["workflow", "onboarding"],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 9,
  },
  {
    id: "demo-3",
    title: "Structuring real-time tracking for distributed networks",
    excerpt:
      "A lightweight approach: farmer tree, route templates, shift handover, and a single place to track variance reasons.",
    content:
      "Start with the farmer network tree (village, district, region).\n\nDefine route templates per zone and connect them to daily dispatch. When a variance happens, capture reason codes consistently.\n\nThe goal is simple: fewer surprises, faster resolution, cleaner audits.",
    tags: ["tracking", "reliability"],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 14,
  },
]

function PostCard({ post }: { post: BlogPost }) {
  const [open, setOpen] = React.useState(false)
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group border-b border-white/[0.08] py-10 first:pt-0 last:border-0"
    >
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-white/35">
          {formatDate(post.createdAt)}
        </span>
        {post.tags.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-2.5 py-0.5 text-[0.62rem] font-semibold tracking-[0.16em] uppercase text-emerald-400"
          >
            <Tag className="h-2.5 w-2.5" />
            {t}
          </span>
        ))}
      </div>
      <h2 className="mt-4 text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl">
        {post.title}
      </h2>
      <p className="mt-3 text-[0.92rem] leading-relaxed text-white/70">{post.excerpt}</p>
      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-emerald-400 transition-opacity hover:opacity-70"
      >
        {open ? "Collapse" : "Read full"}
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="mt-4 whitespace-pre-wrap rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-5 text-[0.88rem] leading-relaxed text-white/75">
          {post.content}
        </div>
      )}
    </motion.article>
  )
}

export default function BlogPage() {
  const [posts, setPosts] = React.useState<BlogPost[]>(() => {
    const stored = safeParsePosts(localStorage.getItem(STORAGE_KEY))
    return stored.length > 0 ? stored : DUMMY_POSTS
  })

  const [title, setTitle] = React.useState("")
  const [tags, setTags] = React.useState("")
  const [content, setContent] = React.useState("")
  const [success, setSuccess] = React.useState(false)

  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
  }, [posts])

  const onPublish = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedTitle = title.trim()
    const trimmedContent = content.trim()
    if (!trimmedTitle || !trimmedContent) return
    const parsedTags = tags.split(",").map((t) => t.trim()).filter(Boolean).slice(0, 6)
    const createdAt = Date.now()
    const excerpt = trimmedContent.length > 200 ? `${trimmedContent.slice(0, 200)}...` : trimmedContent
    setPosts((prev) => [
      { id: crypto.randomUUID(), title: trimmedTitle, excerpt, content: trimmedContent, tags: parsedTags, createdAt },
      ...prev,
    ])
    setTitle("")
    setTags("")
    setContent("")
    setSuccess(true)
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <LandingNav />

      {/* Hero */}
      <header className="relative overflow-hidden pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/4 h-80 w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.12),transparent_65%)] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-emerald-400">Blog</span>
          </motion.div>
          <motion.h1
            className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Insights from the field.
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-white/70"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Field notes on operations, workflows, reliability, and compliance — from the teams building next-generation supply chain platforms.
          </motion.p>
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_380px] lg:items-start">

            {/* Feed */}
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-emerald-500" />
                <span className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-emerald-400">
                  Latest posts
                </span>
              </div>
              {posts.length === 0 ? (
                <p className="text-sm text-white/40">No posts yet. Write the first one below.</p>
              ) : (
                <div>
                  {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              )}
            </div>

            {/* Composer */}
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15">
                    <Pencil className="h-4 w-4 text-emerald-400" />
                  </div>
                  <span className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-emerald-400">
                    New post
                  </span>
                </div>
                <div className="mt-2 text-xl font-bold text-white">Write and publish</div>
                <p className="mt-1 text-xs text-white/40">Posts appear instantly and are saved locally.</p>

                <form onSubmit={onPublish} className="mt-6 grid gap-4">
                  <div className="grid gap-1.5">
                    <label className="text-xs font-semibold tracking-[0.16em] uppercase text-white/40">Title</label>
                    <Input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Post title"
                      required
                      className="border-white/[0.1] bg-white/[0.04] text-white placeholder:text-white/25 focus-visible:ring-emerald-500/40"
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <label className="text-xs font-semibold tracking-[0.16em] uppercase text-white/40">Tags</label>
                    <Input
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                      placeholder="operations, logistics, compliance"
                      className="border-white/[0.1] bg-white/[0.04] text-white placeholder:text-white/25 focus-visible:ring-emerald-500/40"
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <label className="text-xs font-semibold tracking-[0.16em] uppercase text-white/40">Content</label>
                    <Textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={8}
                      placeholder="Write your post..."
                      required
                      className="border-white/[0.1] bg-white/[0.04] text-white placeholder:text-white/25 focus-visible:ring-emerald-500/40"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 active:opacity-80"
                  >
                    Publish
                  </button>
                  {success && (
                    <p className="text-center text-xs font-semibold text-emerald-400">Post published!</p>
                  )}
                </form>
              </div>
            </aside>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
