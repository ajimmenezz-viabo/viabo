import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/

const isProduction = process.env.NODE_ENV === 'production'

console.log(`isProduction: ${isProduction}`)
export default defineConfig({
  mode: isProduction ? 'production' : 'development',
  base: isProduction ? '/react/' : '/',
  build: {
    // publicPath: '/',
    outDir: path.resolve(__dirname, '..', 'backend/public/react')
  },
  plugins: [react()],
  server: {
    port: 3000,
    hmr: {
      host: 'localhost',
      overlay: true
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@theme': path.resolve(__dirname, './src', 'theme')
    }
  }
})
