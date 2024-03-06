import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {

  python,
  mongoDb,
  ScikitLearn,
  Pandas,
  Keras,
  Java,
  Spring,
  Django,
  Plotly,
  PLSQL,
  OracleSQL,
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
      image: import('@/assets/portfolio/ia.jpeg'),
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
        { src: import('@/assets/portfolio/model1.jpg'), alt: 'Premier screenshot' },
        { src: import('@/assets/portfolio/model2.jpg'), alt: 'Deuxième screenshot' },
        { src: import('@/assets/portfolio/model3.jpg'), alt: 'Troisième screenshot' },
        { src: import('@/assets/portfolio/model4.jpg'), alt: 'Quatrième screenshot' },
      ],
      description:
        'Notre source de données sont des commentaires laissés sur des livres. Le but des modèles est de pouvoir prédire la polarité d\'un commentaire (positif, négatif ou neutre) et aussi de pouvoir prédire le score que le lecteur va attribuer dans son commentaire.',
      tagsList: {
        title: 'Technologie',
        tags: [python(), ScikitLearn(), Pandas(), Keras()],// rajouter scikit-learn, pandas, keras, tensorflow
      },
      links: [github({ url: 'https://github.com/JulesLscx/RankFinder' })],
    },
    {
      name: 'My Search',
      image: import('@/assets/portfolio/moteur-de-recherche.jpeg'),
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
        { src: import('@/assets/portfolio/MySearch1.jpg'), alt: 'Premier screenshot' },
        { src: import('@/assets/portfolio/MySearch2.jpg'), alt: 'Deuxième screenshot' },
        { src: import('@/assets/portfolio/MySearch3.jpg'), alt: 'Troisième screenshot' },
      ],
      description:
        'Réaliser un site web vitrine pour des series TV. Création d\'une fonction de recherche par l\'algorithme TF-IDF et d\'une fonction de recommandation de séries. Intégration d\'un système de création de compte, possibilité de liker/disliker une série.',
      tagsList: {
        title: 'Technologie',
        tags: [python(), mongoDb(), Java(), Spring()],// rajouter java, spring
      },
      links: [github({ url: 'https://github.com/Baran-Kaya-PS/mySsearch' }), github({ url: 'https://github.com/Baran-Kaya-PS/NLP_Project' })],
    },
    {
      name: 'Covid infograph',
      image: import('@/assets/portfolio/covid-19.jpeg'),
      dates: [new Date('2023-01'), new Date('2023-04')],
      details: [
        { label: 'Taille de l\'équipe', value: '5 personnes' },
        { label: 'Mon rôle', value: ['Réalisation des graphs', 'Front-end'] },
        { label: 'Catégorie', value: ['Covid', 'Tableau de suivi'] },
      ],
      pdfDetails: [
        { label: 'Repository', value: 'https://github.com/JulesLscx/covid_infograph', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/infograph1.jpg'), alt: 'Premier screenshot' },
        { src: import('@/assets/portfolio/infograph2.jpg'), alt: 'Deuxième screenshot' },
      ],
      description:
        'Tableau de bord permettant d\'analyser des publications scientifiques sur le Covid-19. Réalisation de graphiques cohérents par rapport aux données.',
      tagsList: {
        title: 'Technologie',
        tags: [python(), mongoDb(), Django(), Pandas(), Plotly()],// rajouter Django, pandas, plotly
      },
      links: [github({ url: 'https://github.com/JulesLscx/covid_infograph' })],
    },
    {
      name: 'SupperAppart',
      image: import('@/assets/portfolio/appartement.jpeg'),
      dates: [new Date('2022-09'), new Date('2023-01')],
      details: [
        { label: 'Taille de l\'équipe', value: '5 personnes' },
        { label: 'Mon rôle', value: ['Création de la bdd', 'Front-end'] },
        { label: 'Catégorie', value: ['Gestion de biens immobilier'] },
      ],
      pdfDetails: [
        { label: 'Repository', value: 'https://github.com/JulesLscx/SupperAppart', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/immo1.jpg'), alt: 'Premier screenshot' },
      ],
      description:
        'Logiciel permettant de faire la gestion de biens immobiliers, ainsi que la gestion des locataires, des paiements, des contrats, des charges, etc.',
      tagsList: {
        title: 'Technologie',
        tags: [PLSQL(), Java(), OracleSQL()],// rajouter PL/SQL, Java, OracleSql
      },
      links: [github({ url: 'https://github.com/JulesLscx/SupperAppart' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
