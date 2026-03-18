<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project
- Vite + React + TypeScript + TailwindCSS + shadcn/ui-style components.
- Public marketing route lives at `/landing` in `src/pages/Landing.tsx`.

## Conventions
- Prefer functional components, TypeScript, and semantic HTML.
- Use Tailwind utility classes for styling.
- Reuse UI primitives in `src/components/ui/*`.
- Keep landing components modular in `src/components/landing/*`.
- Keep animations minimal (framer-motion), respect reduced-motion.

## Routing
- Landing is public; avoid coupling to auth.
- Keep `/` behavior separate from `/landing`.
