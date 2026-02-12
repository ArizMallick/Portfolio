import { defineConfig } from 'vite'
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5173
  },
  base: '/',
  build: {
    chunkSizeWarningLimit: 1000, // Adjust the limit to 1000 kB
  },
})