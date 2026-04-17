# Create project
npm create vite@latest project_name -- --template react-ts

# Testing
npm install jsdom vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event --save-dev

# Browser testing and preview
npm install -D @vitest/browser-playwright @vitest/browser-preview 

# Edit vite.config.ts to include
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import { playwright } from '@vitest/browser-playwright';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
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

# Install router
npm install react-router

# tanstack query
npm install @tanstack/react-query

# tailwind
npm install tailwindcss @tailwindcss/vite
