import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'Mes favoris',
    slug: 'favorites',
    icon: 'fa6-solid:star',
    visible: true,
  },
  people: {
    title: 'Personnes dont j\'ai appris',
    data: [
      {
        image: import('@/assets/favorites/people/MohBougha.jpg'),
        name: 'Mohand Boughanem',
        url: 'https://www.irit.fr/~Mohand.Boughanem/',
      },
      {
        image: import('@/assets/favorites/people/gc2016.jpg'),
        name: 'Guillaume Cabanac',
        url: 'https://www.irit.fr/~Guillaume.Cabanac/',
      },
      {
        image: import('@/assets/favorites/people/Millan.jpg'),
        name: 'Thierry Millan',
        url: 'https://www.irit.fr/~Thierry.Millan/',
      },
      {
        image: import('@/assets/favorites/people/jpc.jpeg'),
        name: 'Jean Paul Carrara',
        url: 'https://www.linkedin.com/in/jean-paul-carrara-69568186/?originalSubdomain=fr',
      },
    ],
  },
  videos: {
    title: 'Vidéos que j\'ai regardées',
    data: [
      {
        image: import('@/assets/favorites/videos/ia.jpeg'),
        title: 'ChatGPT vient de se faire détrôner par des génies français',
        url: 'https://www.youtube.com/watch?v=mc2Qli9ImOI&ab_channel=Underscore_',
      },
      {
        image: import('@/assets/favorites/videos/defendI.jpeg'),
        title: 'Ce qui se cache vraiment derrière l’IA vidéo de OpenAI Sora.',
        url: 'https://www.youtube.com/watch?v=iH7oqFxHe6A&ab_channel=DefendIntelligence',
      },
      {
        image: import('@/assets/favorites/videos/bdd.jpeg'),
        title: "L’erreur que TOUS les nouveaux développeurs font !",
        url: 'https://www.youtube.com/watch?v=MGG-km9vR_E&ab_channel=Underscore_',
      },
    ],
  },
  medias: {
    title: 'Media I follow',
    data: [
      {
        image: import('@/assets/favorites/media/media-1.jpeg'),
        title: 'Fireship.io',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/c/Fireship',
      },
      {
        image: import('@/assets/favorites/media/media-2.jpeg'),
        title: 'Healthy Software Developer',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/channel/UCfe_znKY1ukrqlGActlFmaQ',
      },
      {
        image: import('@/assets/favorites/media/media-3.png'),
        title: 'Bytes',
        type: 'Newsletter',
        url: 'https://bytes.dev/',
      },
      {
        image: import('@/assets/favorites/media/media-4.png'),
        title: 'TypeScript Weekly',
        type: 'Newsletter',
        url: 'https://typescript-weekly.com/',
      },
      {
        image: import('@/assets/favorites/media/media-5.jpeg'),
        title: 'Front End Happy Hour',
        type: 'Podcast',
        url: 'https://www.frontendhappyhour.com/',
      },
      {
        image: import('@/assets/favorites/media/media-6.webp'),
        title: '.cult by Honeypot',
        type: 'Blog',
        url: 'https://cult.honeypot.io/',
      },
    ],
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
