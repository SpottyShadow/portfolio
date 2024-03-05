import type { TestimonialsSection } from '@/types/sections/testimonials-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, website } from '../helpers/links';

const testimonialsSectionData = {
  config: {
    title: 'Témoignages',
    slug: 'testimonials',
    icon: 'fa6-solid:comment',
    visible: true,
  },
  testimonials: [
    {
      image: import('@/assets/testimonials/jules.jpeg'),
      author: 'Jules Lascoux',
      relation: 'On a travaillé ensemble sur plusieurs projets au cours de notre formation',
      content:
        'Travaillé avec Théo a toujours été agréable, sa rigueur et sa capacité d\'apprentissage nous a permis de faire des projets très complets durant nos années d\'IUT.',
      links: [github({ url: 'https://github.com/JulesLscx' }), linkedin({ url: 'https://www.linkedin.com/in/jules-lascoux/' })],
    },
    {
      image: import('@/assets/testimonials/patrick.jpg'),
      author: 'Patrick Jeanjean',
      relation: 'On a travaillé ensemble sur plusieurs projets au cours de notre formation',
      content:
        'J’ai eu l’occasion de travailler avec Theo sur plusieurs projets notamment en machine learning, son savoir et ses compétences en la matière ont étés un point clé dans la réussite des projets.',
      links: [github({ url: 'https://github.com/JulesLscx' }), linkedin({ url: 'https://www.linkedin.com/in/jules-lascoux/' })],
    },
  ],
} as const satisfies ReadonlyDeep<TestimonialsSection>;

export default testimonialsSectionData;
