import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/

export default defineConfig({
  
  build: {
    // minify: 'terser',
    // terserOptions: {
    //   format: {
    //     comments: false,
    //     ecma: 2015,
    //   },
    // },
    outDir: 'app',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        style: './src/style.css',
        index: './src/index.tsx',
      },
      output: {
        entryFileNames: `assets/core/[name].js`,
        assetFileNames: `assets/core/[name].[ext]`,
        chunkFileNames: `assets/core/chunk-[name]-[hash].js`,
      },
    },
  },
  plugins: [react()],
});

