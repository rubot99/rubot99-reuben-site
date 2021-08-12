import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Reuben Site', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Reuben',
  subtitle: 'a software engineer in Newcastle upon Tyne',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'ilya-pavlov-OqtafYT5kTw-unsplash.jpg',
  paragraphOne: 'I am a software engineer in Newcastle upon Tyne.',
  paragraphTwo: 'I have experience in software design, development & architecture and I have worked in various industries',
  paragraphThree: 'My interests are cloud computing, computing science theory and security',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/rubot99',
    },
    /**{
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    }, */
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rubot99',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
