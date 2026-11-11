// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import { fontProviders } from 'astro/config'


// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare(),
  output: 'static',

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Redaction 70",
      styles: ['normal'],
      cssVariable: '--font-especial',
    }
  ]
});