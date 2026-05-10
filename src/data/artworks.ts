import aDayOfLeisure from "../assets/artworks/a-day-of-leisure-art.png";
import aMeansOfCatharsis from "../assets/artworks/A_Means_Of_Catharsis.webp";
import contracts from "../assets/artworks/CONTRACTS.webp";
import caughtSomeOfShibaPuffs from "../assets/artworks/Caught_Some_of_Shiba_Puffs.webp";
import caughtAShootingStar from "../assets/artworks/Caught_a_Shooting_Star.webp";
import datura from "../assets/artworks/DATURA.webp";
import iLlPlayAnything from "../assets/artworks/I_ll_Play_Anything.webp";
import loversDusk from "../assets/artworks/Lovers_Dusk.webp";
import nonaZen from "../assets/artworks/Nona_Zen.webp";
import aMinuteApart from "../assets/artworks/a_minute_apart.webp";
import amidstthechaos from "../assets/artworks/amidstthechaos.webp";
import atDaBookstore from "../assets/artworks/at_da_bookstore.webp";
import bedonewithit from "../assets/artworks/bedonewithit.webp";
import brideKeeper from "../assets/artworks/bride_keeper.webp";
import burnPrison from "../assets/artworks/burn_prison.webp";
import eatOrBeEaten from "../assets/artworks/eat_or_be_eaten.webp";
import foundYou from "../assets/artworks/found_you.webp";
import girlWithFishInConverse from "../assets/artworks/girl_with_fish_in_converse.webp";
import imsotirediwannadie from "../assets/artworks/imsotirediwannadie.webp";
import inmyperfectsolitude from "../assets/artworks/inmyperfectsolitude.webp";
import isMumReady from "../assets/artworks/is_mum_ready.webp";
import itstimetoleaveyourdog from "../assets/artworks/itstimetoleaveyourdog.webp";
import makingRoom from "../assets/artworks/making_room.webp";
import myBaby from "../assets/artworks/my_baby.webp";
import nowYouCantTakeMySoulAway from "../assets/artworks/now_you_cant_take_my_soul_away.webp";
import postpartyA3 from "../assets/artworks/postparty_a3.webp";
import readyfortheseance from "../assets/artworks/readyfortheseance.webp";
import somethingdamaged from "../assets/artworks/somethingdamaged.webp";
import straits from "../assets/artworks/straits.webp";
import studioKip from "../assets/artworks/studio_kip.webp";
import theNightWhereMasFuckedUp from "../assets/artworks/the_night_where_mas_fucked_up.webp";
import tisButAFuneral from "../assets/artworks/tis_but_a_funeral.webp";
import toobadshesdead from "../assets/artworks/toobadshesdead.webp";
import whatisitdad from "../assets/artworks/whatisitdaD.webp";

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
    src: foundYou,
    alt: "Colorful collage artwork featuring dogs, charms, candy, and bright playful objects.",
    title: "Found You",
    variant: "portrait",
    purchaseUrl: "https://whiteyedcat.bigcartel.com/product/found-you",
    featured: false,
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
    src: caughtSomeOfShibaPuffs,
    alt: "Cute portrayal of a Shiba Inu with a puff of smoke surrounding it.",
    title: "Caught Some Of Shiba Puffs",
    variant: "portrait",
    purchaseUrl: "https://whiteyedcat.bigcartel.com/product/caught-some-of-shiba-puffs-a3-print",
    featured: false,
  },
  {
    src: aMeansOfCatharsis,
    alt: 'Artwork titled "A Means Of Catharsis".',
    title: "A Means Of Catharsis",
    variant: "portrait",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: contracts,
    alt: 'Artwork titled "Contracts".',
    title: "Contracts",
    variant: "portrait",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: caughtAShootingStar,
    alt: 'Artwork titled "Caught A Shooting Star".',
    title: "Caught A Shooting Star",
    variant: "portrait",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: datura,
    alt: 'Artwork titled "Datura".',
    title: "Datura",
    variant: "portrait",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: iLlPlayAnything,
    alt: 'Artwork titled "I\'ll Play Anything".',
    title: "I'll Play Anything",
    variant: "portrait",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: loversDusk,
    alt: 'Artwork titled "Lovers Dusk".',
    title: "Lovers Dusk",
    variant: "portrait",
    purchaseUrl: null,
    featured: true,
  },
  {
    src: nonaZen,
    alt: 'Artwork titled "Nona Zen".',
    title: "Nona Zen",
    variant: "portrait",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: aMinuteApart,
    alt: 'Artwork titled "A Minute Apart".',
    title: "A Minute Apart",
    variant: "square",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: amidstthechaos,
    alt: 'Artwork titled "Amidst The Chaos".',
    title: "Amidst The Chaos",
    variant: "portrait",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: atDaBookstore,
    alt: 'Artwork titled "At Da Bookstore".',
    title: "At Da Bookstore",
    variant: "portrait",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: bedonewithit,
    alt: 'Artwork titled "Be Done With It".',
    title: "Be Done With It",
    variant: "square",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: brideKeeper,
    alt: 'Artwork titled "Bride Keeper".',
    title: "Bride Keeper",
    variant: "portrait",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: burnPrison,
    alt: 'Artwork titled "Burn Prison".',
    title: "Burn Prison",
    variant: "portrait",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: eatOrBeEaten,
    alt: 'Artwork titled "Eat Or Be Eaten".',
    title: "Eat Or Be Eaten",
    variant: "portrait",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: girlWithFishInConverse,
    alt: 'Artwork titled "Girl With Fish In Converse".',
    title: "Girl With Fish In Converse",
    variant: "portrait",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: imsotirediwannadie,
    alt: 'Artwork titled "I\'m So Tired I Want To Die".',
    title: "I'm So Tired I Want To Die",
    variant: "portrait",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: inmyperfectsolitude,
    alt: 'Artwork titled "In My Perfect Solitude".',
    title: "In My Perfect Solitude",
    variant: "portrait",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: isMumReady,
    alt: 'Artwork titled "Is Mum Ready".',
    title: "Is Mum Ready",
    variant: "portrait",
    purchaseUrl: null,
    featured: true,
  },
  {
    src: itstimetoleaveyourdog,
    alt: 'Artwork titled "It\'s Time To Leave Your Dog".',
    title: "It's Time To Leave Your Dog",
    variant: "portrait",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: myBaby,
    alt: 'Artwork titled "My Baby".',
    title: "My Baby",
    variant: "portrait",
    purchaseUrl: null,
    featured: true,
  },
  {
    src: nowYouCantTakeMySoulAway,
    alt: 'Artwork titled "Now You Can\'t Take My Soul Away".',
    title: "Now You Can't Take My Soul Away",
    variant: "square",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: postpartyA3,
    alt: 'Artwork titled "Postparty".',
    title: "Postparty",
    variant: "portrait",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: readyfortheseance,
    alt: 'Artwork titled "Ready for the Sance".',
    title: "Ready for the Sance",
    variant: "portrait",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: somethingdamaged,
    alt: 'Artwork titled "Something Damaged".',
    title: "Something Damaged",
    variant: "portrait",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: studioKip,
    alt: 'Artwork titled "Studio Kip".',
    title: "Studio Kip",
    variant: "portrait",
    purchaseUrl: null,
    featured: true,
  },
  {
    src: theNightWhereMasFuckedUp,
    alt: 'Artwork titled "The Night Where Mas Fucked Up".',
    title: "The Night Where Mas Fucked Up",
    variant: "square",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: tisButAFuneral,
    alt: 'Artwork titled "Tis But A Funeral".',
    title: "Tis But A Funeral",
    variant: "square",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: toobadshesdead,
    alt: 'Artwork titled "Too Bad She\'s Dead".',
    title: "Too Bad She\'s Dead",
    variant: "portrait",
    purchaseUrl: null,
    featured: false,
  },
  {
    src: whatisitdad,
    alt: 'Artwork titled "What Is It Dad".',
    title: "What Is It Dad",
    variant: "square",
    purchaseUrl: null,
    featured: false,
  },
];
