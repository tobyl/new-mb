import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://new-mb.leftly.me',
  integrations: [tailwind()]
});