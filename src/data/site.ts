export const siteName = 'whiteyedcat';
export const siteTitle = 'whiteyedcat | Malaysian Painter and Illustrator';
export const siteDescription =
	'Portfolio of whiteyedcat, a Malaysian painter and illustrator creating emotional, playful-dark artwork, prints, commissions, collaborations, and exhibition projects.';
export const siteImage = '/open-graph.png';
export const siteImageAlt = 'whiteyedcat painter and illustrator portfolio preview.';
export const artistName = 'whiteyedcat';
export const artistEmail = 'whiteyedcat@gmail.com';
export const siteLocale = 'en_MY';
export const siteKeywords = [
	'whiteyedcat',
	'Malaysian artist',
	'Malaysia illustrator',
	'painter',
	'illustrator',
	'contemporary art',
	'portrait commissions',
	'pet portrait commissions',
	'art prints',
	'Kuala Lumpur artist',
];

export const socialLinks = [
	'https://www.instagram.com/whiteyedcat/',
	'https://www.threads.net/@whiteyedcat',
	'https://www.tiktok.com/@whiteyedcat',
];

export const sitePages = [
	{
		path: '/',
		title: siteTitle,
		description: siteDescription,
		priority: '1.0',
		changefreq: 'monthly',
	},
	{
		path: '/artworks/',
		title: 'Artwork | whiteyedcat',
		description:
			'Browse selected whiteyedcat paintings, illustrations, prints, and available original artwork.',
		priority: '0.9',
		changefreq: 'monthly',
	},
	{
		path: '/commissions/',
		title: 'Commissions | whiteyedcat',
		description:
			'Commission whiteyedcat for portraits, pet portraits, scenery paintings, and custom sticker packs.',
		priority: '0.9',
		changefreq: 'monthly',
	},
	{
		path: '/collabs/',
		title: 'Collaborations | whiteyedcat',
		description:
			'Selected whiteyedcat illustration collaborations for covers, festive projects, music, and creative brands.',
		priority: '0.8',
		changefreq: 'monthly',
	},
	{
		path: '/exhibitions/',
		title: 'Exhibitions | whiteyedcat',
		description:
			'whiteyedcat exhibition and art fair appearances in Kuala Lumpur, Penang, and Malaysia.',
		priority: '0.8',
		changefreq: 'monthly',
	},
	{
		path: '/contact/',
		title: 'Contact | whiteyedcat',
		description:
			'Contact whiteyedcat for commissions, collaborations, exhibitions, art fairs, and media enquiries.',
		priority: '0.7',
		changefreq: 'yearly',
	},
];

export const getSiteUrl = (base: URL | string) => new URL('/', base).toString().replace(/\/$/, '');
