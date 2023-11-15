import path from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { compression } from 'vite-plugin-compression2'

const { readFileSync } = require('fs')

// https://vitejs.dev/config/

const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  mode: isProduction ? 'production' : 'development',
  base: isProduction ? '/app/' : '/',
  build: {
    // publicPath: '/',
    outDir: path.resolve(__dirname, '..', 'backend/public/app'),
    rollupOptions: {
      output: {
        assetFileNames: assetInfo => {
          let extType = assetInfo.name.split('.').at(1)
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img'
            return `assets/${extType}/[name][extname]`
          }
          return `assets/${extType}/build-[hash][extname]`
        },
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/build-[hash].js'
      }
    },
    cssMinify: true
  },
  define: {
    'process.env': loadEnv()
  },

  plugins: [react(), compression()],
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
      },
      '/storage': {
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

function loadEnv() {
  const env = {}
  const envPath = path.resolve(__dirname, '..', '..', '..', '.env')
  const envContent = readFileSync(envPath, 'utf8')
  envContent.split('\n').forEach(line => {
    const [key, value] = line.trim().split('=')
    env[key] = value
  })
  return env
}
