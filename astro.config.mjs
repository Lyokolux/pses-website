import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PROD ? 'https://lyokolux.space/project/new-pses/' : 'http://localhost:3000',
  base: import.meta.env.PROD ? '/project/new-pses/' : '/',
});
