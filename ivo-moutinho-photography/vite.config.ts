import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // garante que o build vá para a pasta dist
    emptyOutDir: true, // limpa dist antes de cada build
  },
  base: './', // garante que os caminhos dos assets funcionem no Firebase Hosting
})
