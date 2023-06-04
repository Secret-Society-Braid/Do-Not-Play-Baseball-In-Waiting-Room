import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Do-Not-Play-Baseball-In-Waiting-Room/',
  plugins: [react()],
})
