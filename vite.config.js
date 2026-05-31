import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/wedding/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Use hash-based names to avoid "file name too long" errors
        // (many Figma SVG exports have very long filenames)
        assetFileNames: 'assets/[hash][extname]',
      },
    },
  },
})
