import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://simranfarheen.github.io',
	integrations: [mdx(), sitemap()],
});
