import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  python,
  mongoDb,
  postgreSql,
  react,
  Sql,
  ScikitLearn,
  Pandas,
  Keras,
  Java,
  Spring,
  Django,
  Plotly,
  Csharp,
  MicrosoftSqlServer,
  Productif,
  Autonome,
  Créatif,
  TravailEquipe,
  Respectueux,
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
        python({ level: 4}),
        Sql({ level: 4}),
        postgreSql({ level: 3 }),
        mongoDb({ level: 4 }),
        Sql({ level: 4 }),
        ScikitLearn({ level: 3 }),
        Pandas({ level: 3 }),
        Keras({ level: 3 }),
        Java({ level: 3 }),
        Spring({ level: 2 }),
        Django({ level: 2 }),
        Plotly({ level: 3 }),
        Csharp({ level: 2 }),
        MicrosoftSqlServer({ level: 4 }),
      ],
    },
    // {
    //   title: 'Je suis',
    //   Skills:[Productif(), Autonome(), Créatif(), TravailEquipe(), Respectueux()]
    // },
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
