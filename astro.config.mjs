import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { buildIntegration } from './astro.build.mjs';

import react from '@astrojs/react';

export default defineConfig({
  compressHTML: true,
  server: {
    port: 8000,
  },
  integrations: [buildIntegration(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});