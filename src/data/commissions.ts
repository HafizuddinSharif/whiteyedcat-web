import petPortrait from '../assets/commisions/pet.webp';
import portrait from '../assets/commisions/potrait.webp';
import scenery from '../assets/commisions/scene.webp';
import stickerPackPet from '../assets/commisions/sticker_pack_pet.webp';

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
				src: portrait,
				alt: 'Portrait commission preview with a stylized illustrated figure and detailed background.',
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
				src: petPortrait,
				alt: 'Pet portrait commission preview with a stylized illustrated animal and detailed background.',
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
				src: scenery,
				alt: 'Scenery commission preview with a detailed illustrated environment.',
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
				src: stickerPackPet,
				alt: 'Pet sticker pack commission preview with multiple illustrated animal sticker poses.',
			},
		],
		choices: [{ label: 'Per 8 stickers', prices: { MY: 'RM30', US: '$7' } }],
		imageFit: 'contain',
	},
];
