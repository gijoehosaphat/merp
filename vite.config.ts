import { defineConfig, Plugin } from 'vite'
import { globSync } from 'glob'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'

dotenv.config()

export default defineConfig({
  base: '/systems/merp',
  publicDir: 'public',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: [
        'src/module/merp.ts',
        ...globSync('public/templates/**/*.hbs').map((file) => {
          return fileURLToPath(new URL(file, import.meta.url))
        }),
      ],
      output: {
        dir: 'dist',
        entryFileNames: 'merp.js',
        assetFileNames: (assetInfo) => {
          return assetInfo.originalFileNames[0].replace('public/', '')
        },
        format: 'es',
        inlineDynamicImports: false,
      },
    },
    watch: {
      include: 'src/**',
    },
  },
  assetsInclude: ['public/templates/**/*.hbs'],
})
