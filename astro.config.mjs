// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
const site = process.env.SITE_URL ?? 'https://gfs.github.io';
const base =
	process.env.BASE_PATH ??
	(process.env.NODE_ENV === 'production' ? '/mosfa' : '/');

export default defineConfig({
	output: 'static',
	site,
	base,
	integrations: [sitemap()],
});
