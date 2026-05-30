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

function stripHtmlComments(distPath) {
  const files = getHtmlFiles(distPath);
  files.forEach(file => {
    const html = readFileSync(file, 'utf-8');
    const stripped = html.replace(/<!--[\s\S]*?-->/g, '');
    writeFileSync(file, stripped);
  });
}

// Add more build functions here as needed
// function generateSitemap(distPath) { ... }
// function optimizeImages(distPath) { ... }

export function buildIntegration() {
  return {
    name: 'astro-build-hooks',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const distPath = fileURLToPath(dir);
        stripHtmlComments(distPath);
        // call more functions here as you add them
        // generateSitemap(distPath);
      },
    },
  };
}