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
      name: 'Golden Bulls',
      image: import('@/assets/portfolio/project-1.jpeg'),
      dates: [new Date('2020-03'), null],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Front-end Developer', 'Designer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Third screenshot' },
      ],
      description:
        'In tristique vulputate augue vel egestas. Quisque ac imperdiet tortor, at lacinia ex. Duis vel ex hendrerit, commodo odio sed, aliquam enim. Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi. Nunc malesuada leo et est iaculis facilisis.',
      tagsList: {
        title: 'Technologies',
        tags: [nextJs(), sass(), pnpm(), eslint(), prettier()],
      },
      links: [mockups({ url: '#' }), demo({ url: '#' })],
    },
    {
      name: 'TruQuest',
      image: import('@/assets/portfolio/project-2.jpeg'),
      dates: [new Date('2019-06'), new Date('2020-02')],
      details: [
        { label: 'Team size', value: '7 people' },
        { label: 'My role', value: ['Front-end Developer', 'Mobile Developer', 'Designer'] },
        { label: 'Company', value: 'Facebook' },
        { label: 'Category', value: ['Web app', 'Mobile app'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://tru-quest-ck7ea3.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/tru-quest', url: '#' },
      ],
      description:
        'Ut ultricies tortor at sodales aliquam. Vivamus metus ante, fringilla nec ligula in, suscipit rhoncus mauris. Praesent hendrerit velit odio, at accumsan urna faucibus convallis. Nunc at massa eget ligula volutpat dictum a sit amet libero. Vestibulum iaculis molestie maximus. In hac habitasse platea dictumst.',
      tagsList: {
        title: 'Technologies',
        tags: [react(), tailwindCss(), nestJs(), postgreSql()],
      },
      links: [mockups({ url: '#' }), demo({ url: '#' })],
    },
    {
      name: 'Software Chasers',
      image: import('@/assets/portfolio/project-3.jpeg'),
      dates: [new Date('2018-01'), new Date('2020-12')],
      details: [
        { label: 'Team size', value: '3 people' },
        { label: 'My role', value: ['Front-end Developer', 'Designer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://software-chasers-e82l8e.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/software-chasers', url: '#' },
      ],
      description:
        'Quisque id consectetur eros. In hac habitasse platea dictumst. Sed eu pulvinar orci. Mauris consequat, est in dignissim varius, neque nisl commodo mauris, id blandit risus justo eu nulla.',
      tagsList: {
        title: 'Technologies',
        tags: [react(), chakraUi(), typescript(), nx(), pnpm()],
      },
      links: [website({ url: '#' }), github({ url: '#' })],
    },
    {
      name: 'Disco Ninjas',
      image: import('@/assets/portfolio/project-4.jpeg'),
      dates: [new Date('2016-05'), new Date('2018-07')],
      details: [
        { label: 'Team size', value: '11 people' },
        { label: 'My role', value: 'Front-end Developer' },
        { label: 'Company', value: 'Google' },
        { label: 'Category', value: ['Mobile app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://disco-ninjas-g321ol.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/disco-ninjas', url: '#' },
      ],
      description:
        'Praesent eu neque tortor. Vestibulum ac magna nisl. Vivamus massa sem, feugiat in pharetra non, convallis egestas purus. Ut consequat ullamcorper sem, in euismod nibh posuere ut. ',
      tagsList: {
        title: 'Technologies',
        tags: [typescript(), jest(), firebase()],
      },
      links: [mockups({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
