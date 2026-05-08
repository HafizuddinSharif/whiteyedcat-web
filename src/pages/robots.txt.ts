import type { APIRoute } from 'astro';
import { getSiteUrl } from '../data/site';

export const GET: APIRoute = ({ site }) => {
	const baseUrl = getSiteUrl(site ?? 'https://whiteyedcat.pages.dev');

	return new Response(
		[
			'User-agent: *',
			'Allow: /',
			`Sitemap: ${baseUrl}/sitemap.xml`,
			`Host: ${baseUrl}`,
			'',
		].join('\n'),
		{
			headers: {
				'Content-Type': 'text/plain; charset=utf-8',
			},
		},
	);
};
