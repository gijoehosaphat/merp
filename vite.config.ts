import { defineConfig, Plugin } from 'vite'
import { globSync } from 'glob'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'

dotenv.config()

export default defineConfig({
  base: '/systems/merp',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: [
        'src/module/merp.ts',
        ...globSync('public/**/*.hbs').map((file) => {
          return fileURLToPath(new URL(file, import.meta.url))
        }),
      ],
      output: {
        assetFileNames: (assetInfo) => {
          return assetInfo.originalFileNames[0].replace('public/', '')
        },
        dir: 'dist',
        entryFileNames: 'merp.js',
        format: 'es',
      },
    },
    watch: {
      include: 'src/**',
    },
  },
  assetsInclude: ['public/**/*.hbs'],
})
