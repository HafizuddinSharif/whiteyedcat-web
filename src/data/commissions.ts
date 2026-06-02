import petPortrait from "../assets/commisions/pet.webp";
import portrait from "../assets/commisions/potrait.webp";
import scenery from "../assets/commisions/scene.webp";
import stickerPackPet from "../assets/commisions/sticker_pack_pet.webp";

export type CommissionCountry = "MY" | "US";

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
  note?: string;
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
  imageFit?: "cover" | "contain";
}

export const commissionItems: CommissionItem[] = [
  {
    id: "portraits",
    title: "Portraits",
    description: "Illustrated portraits for people.",
    images: [
      {
        src: portrait,
        alt: "Portrait commission preview with a stylized illustrated figure and detailed background.",
      },
    ],
    defaultVariant: "no-background",
    variants: [
      {
        id: "no-background",
        label: "no background",
        choices: [
          { label: "Face only", prices: { MY: "RM200", US: "$70" } },
          { label: "Half body", prices: { MY: "RM300", US: "$100" } },
          { label: "Full body", prices: { MY: "RM350", US: "$150" } },
        ],
      },
      {
        id: "with-background",
        label: "with background",
        choices: [
          { label: "Face only", prices: { MY: "RM300", US: "$80" } },
          { label: "Half body", prices: { MY: "RM350", US: "$120" } },
          { label: "Full body", prices: { MY: "RM400", US: "$200" } },
        ],
      },
    ],
  },
  {
    id: "pet-portraits",
    title: "Pet Portraits",
    description: "Illustrated portraits for pets.",
    images: [
      {
        src: petPortrait,
        alt: "Pet portrait commission preview with a stylized illustrated animal and detailed background.",
      },
    ],
    defaultVariant: "no-background",
    variants: [
      {
        id: "no-background",
        label: "no background",
        choices: [{ label: "Any animal", prices: { MY: "RM50", US: "$50" } }],
      },
      {
        id: "with-background",
        label: "with background",
        choices: [{ label: "Any animal", prices: { MY: "RM100", US: "$70" } }],
      },
    ],
  },
  {
    id: "scenery",
    title: "Custom Artwork",
    description: "Custom digital painting of your request/your imagination!",
    images: [
      {
        src: scenery,
        alt: "Scenery commission preview with a detailed illustrated environment.",
      },
    ],
    choices: [{ label: "One scene", prices: { MY: "RM500 - RM700", US: "$300 - $500" } }],
  },
  {
    id: "pet-sticker-pack",
    title: "Pet sticker pack",
    description: "Custom illustrated sticker sets. Great for Telegram, LINE, or printing.",
    images: [
      {
        src: stickerPackPet,
        alt: "Pet sticker pack commission preview with multiple illustrated animal sticker poses.",
      },
    ],
    defaultVariant: "digital-only",
    variants: [
      {
        id: "digital-only",
        label: "Digital only",
        choices: [{ label: "Per 8 stickers", prices: { MY: "RM30", US: "$30" } }],
      },
      {
        id: "printed-delivery",
        label: "Printed + delivery",
        choices: [{ label: "Per 8 stickers", prices: { MY: "RM45", US: "N/A" }, note: "Only in Malaysia" }],
      },
    ],
    imageFit: "contain",
  },
];
