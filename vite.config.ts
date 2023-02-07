import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  root: '.',
  server: {
    port: 3110
  },
  preview: {
    port: 8080
  },
  build: {
    cssCodeSplit: true,
    sourcemap: true
  }
})
