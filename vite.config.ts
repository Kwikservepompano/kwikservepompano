import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/kwikservepompano/', // Must match repository name (case-sensitive)
  plugins: [react()],
  // ... other config
})
