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
  subtitle: 'a software engineer living in Newcastle upon Tyne',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'ilya-pavlov-OqtafYT5kTw-unsplash.jpg',
  paragraphOne: 'I am a full-stack software engineer working on Microsoft technologies. I have developed and designed software for various industries like manufacturing, financial and oil & gas. I have built applications for public and hybrid cloud architecture.',
  paragraphTwo: 'Having many years of experience I understand the importance of code quality, clean architecture and continuous delivery. I have worked on both AWS and Azure cloud architecture. I am keen on working with development teams to build secure, maintainable and extendable systems which enhance business processes.',
  paragraphThree: 'My interests are building and architecting distributed cloud systems and ensuring information security through identity & Access Management. In my spare time I like learn new software technologies such as programming languages, design patterns etc. I also like to tinker with my raspberry pi and home lab 💻🤓',
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
