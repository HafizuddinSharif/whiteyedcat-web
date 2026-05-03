// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE ?? process.env.PUBLIC_SITE_URL ?? process.env.CF_PAGES_URL ?? 'https://whiteyedcat.pages.dev',
});
