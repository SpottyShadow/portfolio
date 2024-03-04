import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Éducation',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'BUT Informatique',
      institution: 'Université Toulouse III - Paul Sabatier',
      image: import('@/assets/logos/logo-IUT.jpg'),
      dates: [new Date('2021.09'), new Text('Présent')],
      description: 'Spécialité Administration, Gestions et Exploitation des Données (AGED)',
      links: [website({ url: 'https://www.univ-tlse3.fr/' })],
    },
    {
      title: 'DUT Informatique',
      institution: 'Université Toulouse III - Paul Sabatier',
      image: import('@/assets/logos/logo-IUT.jpg'),
      dates: [new Date('2021.09'), new Date('2023.07')],
      description: 'Spécialité Administration, Gestions et Exploitation des Données (AGED)',
      links: [website({ url: 'https://www.univ-tlse3.fr/' })],
    },
    {
      title: 'Bac STI2D',
      institution: 'Lycée Pierre de Coubertin',
      image: import('@/assets/logos/logo-lycée.jpg'),
      dates: [new Date('2018.09'), new Date('2021.07')],
      description: "Spécialité SIN (Système d\'Information et Numérique)",
      links: [website({ url: 'https://www.coubertin-meaux.fr/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
