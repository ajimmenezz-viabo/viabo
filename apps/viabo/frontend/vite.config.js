import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/

const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  mode: isProduction ? 'production' : 'development',
  base: isProduction ? '/react/' : '/',
  build: {
    // publicPath: '/',
    outDir: path.resolve(__dirname, '..', 'backend/public/react'),
    rollupOptions: {
      output: {
        assetFileNames: assetInfo => {
          let extType = assetInfo.name.split('.').at(1)
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img'
          }
          return `assets/${extType}/[name]-[hash][extname]`
        },
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js'
      }
    }
  },

  plugins: [react()],
  server: {
    port: 3000,
    hmr: {
      host: 'localhost',
      overlay: true
    },
    proxy: {
      '**': {
        target: 'http://viabo:80/',
        changeOrigin: true,
        secure: false
      },
      '/api': {
        target: 'http://viabo:80/',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@theme': path.resolve(__dirname, './src', 'theme')
    }
  }
})
