import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // O site é publicado em https://jrzn9.github.io/jean-portfolio/
  base: '/jean-portfolio/',
})
