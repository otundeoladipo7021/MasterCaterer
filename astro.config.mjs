// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
   site: 'https://otundeoladipo7021.github.io',
  base: '/MasterCaterer/',

  integrations: [react(), sitemap()]
});