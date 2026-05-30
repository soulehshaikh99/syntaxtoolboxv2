import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { buildIntegration } from './astro.build.mjs';

export default defineConfig({
  compressHTML: true,
  server: {
    port: 8000,
  },
  integrations: [buildIntegration()],
  vite: {
    plugins: [tailwindcss()],
  },
});