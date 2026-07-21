import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// خروجی تک‌فایلی — با دابل‌کلیک روی index.html در مرورگر باز می‌شود
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: './',
  build: {
    outDir: 'dist-standalone',
    emptyOutDir: true,
  },
});
