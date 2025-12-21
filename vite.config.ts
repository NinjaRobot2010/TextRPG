import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: '../dist',       // compiled JS output
    emptyOutDir: true
  },
  server: {
    port: 3000,             // optional, default 5173
    open: true              // opens browser automatically
  }
});