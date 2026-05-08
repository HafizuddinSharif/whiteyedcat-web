import foundYouArt from "../assets/artwork/found-you-art.png";
import aDayOfLeisure from "../assets/artwork/a-day-of-leisure-art.png";
import makingRoom from "../assets/artwork/making-room-art.png";
import caughtSomeOfShibaPuff from "../assets/artwork/caught-some-of-shiba-puff-art.png";
import galleryB from "../assets/whiteyedcat/gallery-b.png";

export interface ArtworkItem {
  src: ImageMetadata;
  alt: string;
  title: string;
  variant: "portrait" | "square";
  purchaseUrl: string | null;
  featured: boolean;
}

export const artworkItems: ArtworkItem[] = [
  {
    src: foundYouArt,
    alt: "Colorful collage artwork featuring dogs, charms, candy, and bright playful objects.",
    title: "Found You",
    variant: "portrait",
    purchaseUrl: "https://whiteyedcat.bigcartel.com/product/found-you",
    featured: true,
  },
  {
    src: aDayOfLeisure,
    alt: "Lush, vibrant landscape painting with flowing water and lush vegetation.",
    title: "A Day of Leisure",
    variant: "portrait",
    purchaseUrl: "https://whiteyedcat.bigcartel.com/product/a-day-of-leisure",
    featured: true,
  },
  {
    src: makingRoom,
    alt: "Square painterly portrait with layered botanical texture and smoky movement.",
    title: "Making Room",
    variant: "portrait",
    purchaseUrl: "https://whiteyedcat.bigcartel.com/product/making-room",
    featured: true,
  },
  {
    src: caughtSomeOfShibaPuff,
    alt: "Cute portrayal of a Shiba Inu with a puff of smoke surrounding it.",
    title: "Caught Some of Shiba Puff",
    variant: "portrait",
    purchaseUrl: "https://whiteyedcat.bigcartel.com/product/caught-some-of-shiba-puffs-a3-print",
    featured: true,
  },
  {
    src: foundYouArt,
    alt: "Portrait-format mixed-media artwork with dogs and colorful nostalgic objects.",
    title: "Artwork 5",
    variant: "portrait",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: foundYouArt,
    alt: "Colorful dog collage artwork with candies, bows, charms, and saturated details.",
    title: "Artwork 6",
    variant: "portrait",
    purchaseUrl: null,
    featured: false,
  },
];
