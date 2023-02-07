/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    watch: false,
    reporters: 'verbose',
    outputTruncateLength: 50,
    environment: 'jsdom',
    include: ['**/*.test.ts'],
    exclude: ['node_modules', '**/*.spec.ts']
  }
})
