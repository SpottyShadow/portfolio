import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Théo Lemoine',
  role: 'Étudiant en 3ème anneé de BUT Informatique',
  details: [
    { label: 'Téléphone', value: '06 43 21 56 09', url: 'tel:06 43 21 56 09' },
    { label: 'Email', value: 'lemoinetheo2003@gmail.com', url: 'mailto:lemoinetheo2003@gmail.com' },
    { label: 'Localisation', value: 'Toulouse, France' },
    //{ label: 'Salary range', value: '18 000 - 25 000 PLN' },
  ],
  pdfDetails: [
    { label: 'Téléphone', value: '06 43 21 56 09' },
    { label: 'Email', value: 'lemoinetheo2003@gmail.com' },
    { label: 'LinkedIn', value: 'in/lemoinethéo/', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/SpottyShadow', url: 'https://github.com' },
    { label: 'Website', value: 'portfolio-sigma-sage-52.vercel.app/', url: '/', fullRow: true },
  ],
  description:
    'Lorem ipsum dolor sit amet, consectetur **adipiscing elit**. In sodales ac dui at *vestibulum*. In condimentum metus id dui tincidunt, in blandit mi [vehicula](/). Nulla lacinia, erat sit amet elementum vulputate, lectus mauris volutpat mi, vitae accumsan metus elit ut nunc. Vestibulum lacinia enim eget eros fermentum scelerisque. Proin augue leo, posuere ut imperdiet vitae, fermentum eu ipsum. Sed sed neque sagittis, posuere urna nec, commodo leo. Pellentesque posuere justo vitae massa volutpat maximus.',
  tags: [{ name: 'Disponible à Alternance' }, { name: 'Disponible aux stages' }, { name: 'Travail sur des projets personnel' }],
  action: {
    label: 'Télécharger le CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Théo_Lemoine.pdf',
  },
  links: [facebook({ url: '#' }), github({ url: '#' }), linkedin({ url: '#' }), twitter({ url: '#' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
