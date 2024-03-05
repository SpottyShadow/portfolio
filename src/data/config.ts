import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Théo Lemoine - Étudiant en 3ème année de BUT Informatique',
    description:
      'Je suis un étudiant passionné, constamment en quête d\'apprentissage et d\'approfondissement de mes connaissances dans le domaine de l\'informatique. Fasciné par l\'impact de l\'ia dans les nouvelles technologies. Ma formation et mes projets personnels m\'ont donné la capacité à m\'adapter dans un environnement en constante évolution.',
    faviconPath: '/src/assets/my-image.jpeg',
  },
  pdf: {
    footer:
      'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
