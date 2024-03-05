import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const python = createSkillFactory({
  name: 'Python',
  icon: 'simple-icons:python',
  iconColor: '#3776AB',
  url: 'https://www.python.org/',
});

export const Sql = createSkillFactory({
  name: 'SQL',
  icon: import('@/assets/logos/sql.jpg'),
  iconColor: '#000000',
  url: 'https://sql.sh/',
});

export const ScikitLearn = createSkillFactory({
  name: 'SciKit-Learn',
  icon: null, //a changer
  iconColor: '#000000',
  url: 'https://scikit-learn.org/stable/',
});

export const Pandas = createSkillFactory({
  name: 'Pandas',
  icon: 'simple-icons:pandas', //a changer
  iconColor: '#150458',
  url: 'https://pandas.pydata.org//',
});

export const Keras = createSkillFactory({
  name: 'Keras',
  icon: 'simple-icons:Keras', //a changer
  iconColor: '#D00000',
  url: 'https://keras.io/',
});

export const Java = createSkillFactory({
  name: 'Java',
  icon: 'simple-icons:OpenJDK', //a changer
  iconColor: '#000000',
  url: 'https://www.java.com/fr/',
});

export const Spring = createSkillFactory({
  name: 'Spring',
  icon: 'simple-icons:Spring', //a changer
  iconColor: '#6DB33F',
  url: 'https://spring.io/',
});

export const Django = createSkillFactory({
  name: 'Django',
  icon: 'simple-icons:Django', //a changer
  iconColor: '#092E20',
  url: 'https://www.djangoproject.com/',
});

export const Plotly = createSkillFactory({
  name: 'Plotly',
  icon: 'simple-icons:Plotly', //a changer
  iconColor: '#3F4F75',
  url: 'https://plotly.com/',
});

export const PLSQL = createSkillFactory({
  name: 'PL/SQL',
  icon: null, //a changer
  iconColor: '#000000',
  url: 'https://www.oracle.com/fr/database/technologies/appdev/plsql.html#:~:text=PL%2FSQL%20est%20un%20langage,dans%20la%20base%20de%20donn%C3%A9es.',
});

export const OracleSQL = createSkillFactory({
  name: 'Oracle SQL',
  icon: 'simple-icons:Oracle', //a changer
  iconColor: '#F80000',
  url: 'https://www.oracle.com/fr/database/technologies/appdev/sql.html',
});

export const MicrosoftSqlServer = createSkillFactory({
  name: 'Microsoft SQL Server',
  icon: 'simple-icons:Microsoft SQL Server',
  iconColor: '#CC2927',
  url: 'https://www.microsoft.com/fr-fr/sql-server/',
});

export const Csharp = createSkillFactory({
  name: 'C#',
  icon: 'simple-icons:C#',
  iconColor: '#512BD4',
  url: 'https://learn.microsoft.com/fr-fr/dotnet/csharp/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const Productif = createSkillFactory({
  name: 'Productif',
  icon: null,
  iconColor: null,
  url: null,
});

export const Autonome = createSkillFactory({
  name: 'Autonome',
  icon: null,
  iconColor: null,
  url: null,
});

export const Créatif = createSkillFactory({
  name: 'Créatif',
  icon: null,
  iconColor: null,
  url: null,
});

export const TravailEquipe = createSkillFactory({
  name: 'Travail en équipe',
  icon: null,
  iconColor: null,
  url: null,
});

export const Respectueux = createSkillFactory({
  name: 'Respectueux',
  icon: null,
  iconColor: null,
  url: null,
});
