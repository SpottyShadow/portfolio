import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin} from '../helpers/links';
import {

  python,
  MicrosoftSqlServer,
  Csharp
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Expérirence',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Administrateur de base de données',
      company: 'Thibault-net Consulting',
      image: import('@/assets/logos/logo-stage.jpg'),
      dates: [new Date('2023-04'), new Date('2023-06')],
      description: `
        - Améliorations des procédures stockées de SQLServeur.
        - Mise en place d'une solution d'archivage.
        - Correction de bugs mineurs en développement C# / WPF
        - Mise en place d'un plan de maintenance pour la base SQLServeur.
        - Recherche d'optimisation de la base de données.
      `,
      tagsList: {
        title: 'Technologie',
        tags: [python(), MicrosoftSqlServer(), Csharp()],
      },
      links: [github({ url: 'https://github.com/SpottyShadow' }), linkedin({ url: 'https://www.linkedin.com/in/thibault-fouillet/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
