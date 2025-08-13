// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://otundeoladipo7021.github.io',
  base: '/MasterCaterer/',
  integrations: [sitemap(), react()],
  vite: {
    plugins: [tailwind()] },
    
})