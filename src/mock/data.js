import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rubot', // e.g: 'Name | Developer'
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
  paragraphOne: 'I am a software engineer working on Microsoft technologies.',
  paragraphTwo: 'I have experience in software design & architecture and I have developed software for various industries.',
  paragraphThree: 'My interests are cloud computing, distributed computing and information security. In my spare time I like to work with raspberry pi and Linux.',
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
  email: 'rubot99@gmail.com',
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
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
