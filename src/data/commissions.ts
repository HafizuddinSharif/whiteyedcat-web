import commissionsCat from '../assets/whiteyedcat/commissions-cat.png';
import commissionsPortrait from '../assets/whiteyedcat/commissions-portrait.png';
import commissionsStickers from '../assets/whiteyedcat/commissions-stickers.png';
import galleryA from '../assets/whiteyedcat/gallery-a.png';
import galleryB from '../assets/whiteyedcat/gallery-b.png';

export type CommissionCountry = 'MY' | 'US';

export interface CommissionImage {
	src: ImageMetadata;
	alt: string;
}

export interface CommissionChoice {
	label: string;
	prices: Partial<Record<CommissionCountry, string>> & {
		US: string;
	};
	prefix?: string;
}

export interface CommissionVariant {
	id: string;
	label: string;
	choices: CommissionChoice[];
}

export interface CommissionItem {
	id: string;
	title: string;
	description: string;
	images: CommissionImage[];
	variants?: CommissionVariant[];
	choices?: CommissionChoice[];
	defaultVariant?: string;
	imageFit?: 'cover' | 'contain';
}

export const commissionItems: CommissionItem[] = [
	{
		id: 'portraits',
		title: 'Portraits',
		description:
			'Illustrated portraits for people. Pop-art meets hyperrealism. Each piece is unique and painted with intention.',
		images: [
			{
				src: commissionsPortrait,
				alt: 'Colorful portrait commission preview featuring a dog surrounded by bright objects and painted details.',
			},
			{
				src: galleryA,
				alt: 'Colorful mixed-media portrait artwork with bright charms and playful details.',
			},
			{
				src: galleryB,
				alt: 'Painterly portrait framed by dark green flowing forms.',
			},
		],
		defaultVariant: 'no-background',
		variants: [
			{
				id: 'no-background',
				label: 'no background',
				choices: [
					{ label: 'Face only', prices: { MY: 'RM200', US: '$46' } },
					{ label: 'Half body', prices: { MY: 'RM300', US: '$69' } },
					{ label: 'Full body', prices: { MY: 'RM350', US: '$81' } },
				],
			},
			{
				id: 'with-background',
				label: 'with background',
				choices: [
					{ label: 'Face only', prices: { MY: 'RM300', US: '$69' } },
					{ label: 'Half body', prices: { MY: 'RM350', US: '$81' } },
					{ label: 'Full body', prices: { MY: 'RM400', US: '$92' } },
				],
			},
		],
	},
	{
		id: 'pet-portraits',
		title: 'Pet Portraits',
		description:
			'Illustrated portraits for pets. Pop-art meets hyperrealism. Each piece is unique and painted with intention.',
		images: [
			{
				src: commissionsPortrait,
				alt: 'Colorful pet portrait commission preview with dogs and playful surrounding details.',
			},
			{
				src: galleryA,
				alt: 'Bright mixed-media pet artwork with dogs, charms, and saturated details.',
			},
		],
		defaultVariant: 'no-background',
		variants: [
			{
				id: 'no-background',
				label: 'no background',
				choices: [{ label: 'Any animal', prices: { MY: 'RM50', US: '$12' } }],
			},
			{
				id: 'with-background',
				label: 'with background',
				choices: [{ label: 'Any animal', prices: { MY: 'RM100', US: '$23' } }],
			},
		],
	},
	{
		id: 'scenery',
		title: 'Scenery',
		description:
			'Original digital paintings of landscapes, cityscapes, and fantasy environments. Painted with mood and atmosphere in mind - each piece tells a story without a subject.',
		images: [
			{
				src: commissionsPortrait,
				alt: 'Colorful commission preview standing in for scenery artwork.',
			},
			{
				src: galleryB,
				alt: 'Painterly artwork with atmospheric flowing green forms.',
			},
		],
		choices: [{ label: 'One scene', prefix: 'from', prices: { MY: 'RM500', US: '$115' } }],
	},
	{
		id: 'pet-sticker-pack',
		title: 'Pet sticker pack',
		description: 'Custom illustrated sticker sets. Great for Telegram, LINE, or printing.',
		images: [
			{
				src: commissionsStickers,
				alt: 'Sticker pack preview with small illustrated cats and playful animal poses.',
			},
			{
				src: commissionsCat,
				alt: 'Orange cat illustration used as a pet sticker style preview.',
			},
		],
		choices: [{ label: 'Per 8 stickers', prices: { MY: 'RM30', US: '$7' } }],
		imageFit: 'contain',
	},
];
