import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // relative paths so the app works on GitHub Pages (/repo-name/)
  plugins: [react()],
})
