// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { fileURLToPath } from 'url';
import { join } from 'path';

function getHtmlFiles(dir) {
  const files = [];
  readdirSync(dir).forEach(file => {
    const fullPath = join(dir, file);
    if (statSync(fullPath).isDirectory()) {
      files.push(...getHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      files.push(fullPath);
    }
  });
  return files;
}

function stripHtmlComments() {
  return {
    name: 'strip-html-comments',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const distPath = fileURLToPath(dir);
        const files = getHtmlFiles(distPath);
        files.forEach(file => {
          const html = readFileSync(file, 'utf-8');
          const stripped = html.replace(/<!--[\s\S]*?-->/g, '');
          writeFileSync(file, stripped);
        });
      },
    },
  };
}

export default defineConfig({
  compressHTML: true,
  server: {
    port: 8000,
  },
  integrations: [stripHtmlComments()],
  vite: {
    plugins: [tailwindcss()],
  },
});