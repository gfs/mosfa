// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
const site = process.env.SITE_URL ?? 'https://mosfa.art';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
	output: 'static',
	site,
	base,
	integrations: [sitemap()],
});
