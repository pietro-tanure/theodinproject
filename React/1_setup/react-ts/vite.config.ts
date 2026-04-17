import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { playwright } from '@vitest/browser-playwright';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    // browser: {
    //   enabled: true,
    //   provider: playwright(),
    //   instances: [
    //     { browser: 'chromium' }
    //   ]
    // },
  }
})
