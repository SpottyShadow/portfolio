import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {
  chakraUi,
  eslint,
  firebase,
  jest,
  nestJs,
  nextJs,
  nx,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  tailwindCss,
  typescript,
  python,
  mongoDb,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projets',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Modèle d\'IA de prédiction',
      image: import('@/assets/portfolio/project-1.jpeg'),
      dates: [new Date('2024-01'), new Date('2024-03')],
      details: [
        { label: 'Taille de l\'équipe', value: '5 personnes' },
        { label: 'Mon rôle', value: ['Find tuner'] },
        { label: 'Catégorie', value: ['IA', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Repository', value: 'https://github.com/JulesLscx/RankFinder', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'Premier screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Deuxième screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Troisième screenshot' },
      ],
      description:
        'Notre source de donnée sont des laissés sur des livres. Le but des modèles est de pouvoir prédire la polarité d\'un commentaire (positif, négatif ou neutre) et aussi de pouvoir prédire le score que le lecteur va attribuer dans son commentaire.',
      tagsList: {
        title: 'Technologie',
        tags: [python()],// rajouter scikit-learn, pandas, kera, tensorflow
      },
      links: [github({ url: 'https://github.com/JulesLscx/RankFinder' })],
    },
    {
      name: 'My Search',
      image: import('@/assets/portfolio/project-1.jpeg'),
      dates: [new Date('2023-09'), new Date('2024-01')],
      details: [
        { label: 'Taille de l\'équipe', value: '2 personnes' },
        { label: 'Mon rôle', value: ['Back-end', 'Front-end'] },
        { label: 'Catégorie', value: ['Moteur de recherche'] },
      ],
      pdfDetails: [
        { label: 'Repository', value: 'https://github.com/Baran-Kaya-PS/mySsearch', url: '#' },
        { label: 'Repository', value: 'https://github.com/Baran-Kaya-PS/NLP_Project', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'Premier screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Deuxième screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Troisième screenshot' },
      ],
      description:
        'Réaliser un site web vitrine pour des series TV. Faire une fonction de recherche par l\'algorithme TF-IDF, Faire une recommandation de séries. Intégrer un système de création de compte, la possibilité de like/dislike une série.',
      tagsList: {
        title: 'Technologie',
        tags: [python(), mongoDb()],// rajouter java, spring
      },
      links: [github({ url: 'https://github.com/Baran-Kaya-PS/mySsearch' }), github({ url: 'https://github.com/Baran-Kaya-PS/NLP_Project' })],
    },
    {
      name: 'Covid infograph',
      image: import('@/assets/portfolio/project-1.jpeg'),
      dates: [new Date('2023-01'), new Date('2024-04')],
      details: [
        { label: 'Taille de l\'équipe', value: '5 personnes' },
        { label: 'Mon rôle', value: ['Réalisation des graphs', 'Front-end'] },
        { label: 'Catégorie', value: ['Covid', 'Tableau de suivi'] },
      ],
      pdfDetails: [
        { label: 'Repository', value: 'https://github.com/JulesLscx/covid_infograph', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'Premier screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Deuxième screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Troisième screenshot' },
      ],
      description:
        'Tableau de bord permettant d\'analyser des publications scientifiques sur le Covid-19. Réaliser des graphs cohérent par rapport aux données.',
      tagsList: {
        title: 'Technologie',
        tags: [python(), mongoDb()],// rajouter Django, pandas, plotly
      },
      links: [github({ url: 'https://github.com/JulesLscx/covid_infograph' })],
    },
    {
      name: 'SupperAppart',
      image: import('@/assets/portfolio/project-1.jpeg'),
      dates: [new Date('2023-01'), new Date('2024-04')],
      details: [
        { label: 'Taille de l\'équipe', value: '5 personnes' },
        { label: 'Mon rôle', value: ['Création de la bdd', 'Front-end'] },
        { label: 'Catégorie', value: ['Gestion de biens immobilier'] },
      ],
      pdfDetails: [
        { label: 'Repository', value: 'https://github.com/JulesLscx/SupperAppart', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'Premier screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Deuxième screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Troisième screenshot' },
      ],
      description:
        'Logiciel permettant de faire la gestion de biens immobilier, ainsi que la gestion des locataires, des paiements, des contrats, des charges, etc.',
      tagsList: {
        title: 'Technologie',
        tags: [],// rajouter PL/SQL, Java, OracleSql
      },
      links: [github({ url: 'https://github.com/JulesLscx/SupperAppart' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
