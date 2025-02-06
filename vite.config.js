import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: 'esbuild',  // Menggunakan Terser untuk minifikasi
    terserOptions: {
      compress: {
        drop_console: true, // Menghapus console.log di production
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
