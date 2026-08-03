import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Tailwind v3 is handled via PostCSS (postcss.config.js)
  ],
  resolve: {
    alias: {
      // Absolute import aliases — using fileURLToPath for correct Windows paths
      '@':           fileURLToPath(new URL('./src',            import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@sections':   fileURLToPath(new URL('./src/sections',   import.meta.url)),
      '@pages':      fileURLToPath(new URL('./src/pages',      import.meta.url)),
      '@hooks':      fileURLToPath(new URL('./src/hooks',      import.meta.url)),
      '@utils':      fileURLToPath(new URL('./src/utils',      import.meta.url)),
      '@constants':  fileURLToPath(new URL('./src/constants',  import.meta.url)),
      '@styles':     fileURLToPath(new URL('./src/styles',     import.meta.url)),
      '@assets':     fileURLToPath(new URL('./src/assets',     import.meta.url)),
    },
  },
});
