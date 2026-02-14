import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Base path is set dynamically by the CI workflow via VITE_BASE_PATH env var.
// - main branch builds with base = /prototype/
// - feature branches build with base = /prototype/<branch-name>/
// - local dev defaults to /prototype/
const basePath = process.env.VITE_BASE_PATH || '/prototype/'

export default defineConfig({
  plugins: [vue()],
  base: basePath,
})
