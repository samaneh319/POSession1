import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // مسیرهای نسبی → dist را می‌توان روی هر هاست استاتیک یا زیرپوشه آپلود کرد
  base: './',
});
