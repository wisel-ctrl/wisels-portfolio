// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import UnoCSS from 'unocss/astro';
import vercel from '@astrojs/vercel/static'; // Add this line

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    UnoCSS({
      injectReset: true
    })
  ],
  output: 'static', // 'static' works perfectly with Vercel
  adapter: vercel(), // Add this line
  site: 'https://your-portfolio.com', // Update this to your actual domain later
  server: {
    host: '0.0.0.0',
    port: 4321
  },
  vite: {
    ssr: {
      noExternal: ['aos']
    }
  }
});