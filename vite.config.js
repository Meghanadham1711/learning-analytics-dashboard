import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/learning-analytics-dashboard/",
    build: {
    chunkSizeWarningLimit: 1000 // increase to 1MB
  }
})
