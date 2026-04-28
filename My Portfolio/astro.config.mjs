import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import UnoCSS from 'unocss/astro';
import vercel from '@astrojs/vercel/static';  // ← Make sure this line exists

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
  adapter: vercel(),  // ← And this line
  site: 'https://your-portfolio.com',
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