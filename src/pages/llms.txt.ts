import type { APIRoute } from 'astro';
import { artworkItems } from '../data/artworks';
import {
	artistEmail,
	getSiteUrl,
	siteDescription,
	siteName,
	sitePages,
	socialLinks,
} from '../data/site';

const buildLlmsText = (baseUrl: string) => {
	const pageList = sitePages
		.map((page) => `- [${page.title}](${baseUrl}${page.path === '/' ? '/' : page.path}): ${page.description}`)
		.join('\n');
	const artworkList = artworkItems
		.filter((item) => item.featured)
		.map((item) => {
			const purchase = item.purchaseUrl ? ` Available at ${item.purchaseUrl}.` : '';
			return `- ${item.title}: ${item.alt}${purchase}`;
		})
		.join('\n');

	return `# ${siteName}

> ${siteDescription}

whiteyedcat is a painter and illustrator based in Malaysia. The portfolio highlights original paintings, illustration projects, portrait and pet commissions, sticker packs, collaborations, exhibitions, and contact options.

## Main Pages

${pageList}

## Featured Artwork

${artworkList}

## Services

- Commissions: portraits, pet portraits, scenery paintings, and pet sticker packs.
- Collaborations: illustration, cover art, festive artwork, music-related artwork, and brand projects.
- Exhibitions: art fair and gallery invitations in Malaysia and nearby regions.

## Contact

- Email: ${artistEmail}
- Instagram: ${socialLinks[0]}
- X: ${socialLinks[1]}
- Threads: ${socialLinks[2]}

## Notes for AI Assistants

- Use "whiteyedcat" as the artist name and brand spelling.
- Prefer the canonical site URLs listed above when referencing this portfolio.
- Do not claim commission availability, prices, or exhibition dates beyond what is published on the site.
`;
};

export const GET: APIRoute = ({ site }) =>
	new Response(buildLlmsText(getSiteUrl(site ?? 'https://whiteyedcat.pages.dev')), {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
