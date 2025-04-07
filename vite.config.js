import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://marianofrank.github.io/mariano-portfolio',
  // server: {
  //   open: true,
  //   port: 3010,
  //   host: '0.0.0.0',
  //   strictPort: true,
  // },
})
