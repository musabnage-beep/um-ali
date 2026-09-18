import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Root-domain hosting (Vercel, Netlify, Cloudflare Pages) needs no change.
  // For a sub-path host such as GitHub Pages, build with the prefix, e.g.
  // `VITE_BASE=/om-ali/ npm run build`.
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
