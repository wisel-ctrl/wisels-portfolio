// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import UnoCSS from 'unocss/astro';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    UnoCSS({
      injectReset: true
    })
  ],
  output: 'static',
  site: 'https://your-portfolio.com',
  server: {
    host: '0.0.0.0',
    port: 4321
  },
  // Add this to ensure proper script handling
  vite: {
    ssr: {
      noExternal: ['aos']
    }
  }
});