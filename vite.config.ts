import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves sites under "/<repo>/".

// We keep Vite's base relative so the build works both locally and on pages.
// https://vite.dev/config/
export default defineConfig({
  base: './', // Use relative base for GitHub Pages compatibility
  plugins: [react()],
  assetsInclude: ["**/*.mov"],
})
