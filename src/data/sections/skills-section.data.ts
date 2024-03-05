import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  python,
  apolloGraphql,
  astro,
  chakraUi,
  cypress,
  eslint,
  firebase,
  mongoDb,
  nestJs,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  supabase,
  tailwindCss,
  typescript,
  Sql,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Compétences',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'Je maîtrise déjà',
      skills: [
        python({
          level: 5
        }),
        Sql({
          level: 5
        }),
        typescript({
          level: 4,
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        }),
        sass({
          level: 4,
          description: 'Nulla interdum pellentesque ultricies. Ut id eros commodo, ultrices ligula eu, elementum ante.',
        }),
        chakraUi({ level: 5 }),
        tailwindCss({ level: 3 }),
        prettier({ level: 5 }),
        eslint({
          level: 4,
          description:
            'Nulla tempor turpis at vehicula pharetra. Vestibulum tellus tortor, commodo et suscipit id, lobortis id nunc.',
        }),
        nestJs({
          level: 3,
          description:
            'Praesent feugiat ultricies iaculis. In posuere vehicula odio, sed consequat velit porta viverra.',
        }),
        postgreSql({ level: 2 }),
        mongoDb({ level: 1 }),
        firebase({ level: 1 }),
        pnpm({ level: 3 }),
      ],
    },
    {
      title: 'J\'aimerais apprendre',
      skills: [react()],
    },
    {
      title: 'Je parle',
      skills: [
        { icon: 'circle-flags:fr', name: 'Français - natif' },
        { icon: 'circle-flags:us', name: 'Anglais - B2' },
        { icon: 'circle-flags:es-variant', name: 'Espagnol - B1' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
