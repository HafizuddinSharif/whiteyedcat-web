import type { APIRoute } from 'astro';
import { getSiteUrl, sitePages } from '../data/site';

const escapeXml = (value: string) =>
	value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');

export const GET: APIRoute = ({ site }) => {
	const baseUrl = getSiteUrl(site ?? 'https://whiteyedcat.pages.dev');
	const lastmod = new Date().toISOString().split('T')[0];
	const urls = sitePages
		.map(
			(page) => `
	<url>
		<loc>${escapeXml(`${baseUrl}${page.path === '/' ? '/' : page.path}`)}</loc>
		<lastmod>${lastmod}</lastmod>
		<changefreq>${page.changefreq}</changefreq>
		<priority>${page.priority}</priority>
	</url>`,
		)
		.join('');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>
`,
		{
			headers: {
				'Content-Type': 'application/xml; charset=utf-8',
			},
		},
	);
};
