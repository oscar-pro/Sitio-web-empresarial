import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Optimizaciones de build para producción
  build: {
    // Habilitar minificación con terser para mejor compresión
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Eliminar console.logs en producción
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'], // Funciones a eliminar
      },
    },

    // Configuración de chunks para mejor caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor chunks para mejor caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
          'i18n': ['i18next', 'react-i18next'],
          'icons': ['lucide-react'],
          'security': ['dompurify', 'isomorphic-dompurify'],
        },
        // Optimizar nombres de archivos
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },

    // Advertir sobre chunks grandes
    chunkSizeWarningLimit: 1000,

    // Optimizar assets
    assetsInlineLimit: 4096, // Inline assets < 4kb

    // CSS code splitting
    cssCodeSplit: true,

    // Sourcemaps solo en desarrollo
    sourcemap: false,
  },

  // Optimizaciones de servidor de desarrollo
  server: {
    // Habilitar compresión
    compress: true,
  },

  // Optimización de dependencias
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'i18next',
      'react-i18next',
      'lucide-react',
    ],
  },
})
