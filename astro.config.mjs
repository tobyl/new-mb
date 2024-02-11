import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://tobyl.github.io',
  base: '/new-mb',
  integrations: [tailwind()]
});