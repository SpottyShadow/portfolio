import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profil',
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
    'Je suis un étudiant passionné, constamment en quête d\'apprentissage et d\'approfondissement de mes connaissances dans le domaine de l\'informatique. Fasciné par l\'impact de l\'ia dans les nouvelles technologies. Ma formation et mes projets personnels m\'ont donné la capacité à m\'adapter dans un environnement en constante évolution.',
  tags: [{ name: 'Disponible à Alternance' }, { name: 'Disponible aux stages' }, { name: 'Travail sur des projets personnel' }],
  action: {
    label: 'Télécharger le CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Théo_Lemoine.pdf',
  },
  links: [facebook({ url: '#' }), github({ url: '#' }), linkedin({ url: '#' }), twitter({ url: '#' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
