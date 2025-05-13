import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: '/Netflix_clone/',  // ← important!
  plugins: [react()],
})

