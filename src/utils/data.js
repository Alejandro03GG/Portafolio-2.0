import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaBrain,
  FaComments,
} from "react-icons/fa";
import { BiLogoJavascript, BiLogoTailwindCss } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { SiAppwrite } from "react-icons/si";
import { IoTimeOutline } from "react-icons/io5";
import { TiGroup } from "react-icons/ti";

import PROJECT_IMG_1 from "../assets/Sushiman.png";
import PROJECT_IMG_2 from "../assets/AlejoDesign.png";
import PROJECT_IMG_3 from "../assets/Ristorani Turilli.png";
import PROJECT_IMG_4 from "../assets/MoviesPlanet.png";
import PROJECT_IMG_5 from "..//assets/MealRecipes.png";
import PROJECT_IMG_6 from "../assets/BrainwaveIA.png";
import PROJECT_IMG_7 from "../assets/AleGaming.png";

export const MENU_LINKS = [
  { id: "01", label: "Home", offset: -100, to: "hero" },
  { id: "02", label: "Skills", offset: -80, to: "skills" },
  { id: "03", label: "Certificates", offset: -80, to: "certificates" },
  { id: "04", label: "About me", offset: -80, to: "about" },
  { id: "05", label: "Projects", offset: -80, to: "projects" },
  { id: "06", label: "Contact", offset: -80, to: "contact" },
];

export const SKILL_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Frontend", value: "frontend" },
  { id: "03", label: "Backend", value: "backend" },
  { id: "04", label: "Tools", value: "tools" },
  { id: "05", label: "Skills", value: "soft-skills" },
];

export const SKILLS = [
  {
    id: "01",
    icon: FaHtml5,
    skill: "HTML",
    type: "frontend",
    description:
      "I have experience in developing web applications using HTML, focusing on creating semantic, accessible, and well-structured layouts. During my time learning with this technology, I have built optimized web pages, ensuring proper content hierarchy and following best web development practices.",
  },
  {
    id: "02",
    icon: FaCss3,
    skill: "CSS",
    type: "frontend",
    description:
      "I have experience in developing web applications using CSS, focusing on creating responsive, stylish, and accessible designs. During my time learning with this technology, I have implemented modern layouts, optimized presentation across different devices, and applied best practices such as using flexbox, grid, and CSS variables to maintain clean and reusable code.",
  },
  {
    id: "03",
    icon: BiLogoJavascript,
    skill: "JavaScript",
    type: "frontend",
    description:
      "I have experience in developing web applications using JavaScript, focusing on creating dynamic and interactive functionalities. During my time learning with this technology, I have implemented DOM manipulation, event handling, API consumption, and programming logic to enhance user experience. Additionally, I apply best practices such as writing modular code and using efficient structures to optimize performance.",
  },
  {
    id: "04",
    icon: FaReact,
    skill: "React JS",
    type: "frontend",
    description:
      "I have experience in developing web applications using React, focusing on creating reusable components, state management, and API consumption. During my time learning with this technology, I implemented interactive solutions, optimized interface performance, and worked with ecosystem tools such as React Router and Context API.",
  },
  {
    id: "05",
    icon: BiLogoTailwindCss,
    skill: "TailwindCss",
    type: "frontend",
    description:
      "I have experience in developing web applications using Tailwind CSS, focusing on creating modern, responsive, and highly customizable interfaces. During my time learning with this technology, I have optimized design and code structure through its utility-first approach, achieving consistent styles and maintaining an efficient development workflow without additional CSS files.",
  },
  {
    id: "06",
    icon: VscVscode,
    skill: "VisualStudio",
    type: "tools",
    description:
      "I have experience in developing web applications using Visual Studio Code, focusing on optimizing the workflow through extensions, shortcuts, and customized configurations.",
  },
  {
    id: "07",
    icon: SiAppwrite,
    skill: "Appwrite",
    type: "backend",
    description:
      "I have experience in developing web applications using Appwrite, focusing on efficiently managing backend-as-a-service (BaaS) to streamline development. During my time working with this platform, I have optimized user authentication, database management, and file storage, leveraging its APIs and SDKs to integrate functionalities quickly and securely, allowing me to build more scalable and efficient applications.",
  },
  {
    id: "08",
    icon: IoTimeOutline,
    skill: "Time Management",
    type: "soft-skills",
    description:
      "Ability to prioritize tasks and manage multiple projects without compromising quality.",
  },
  {
    id: "09",
    icon: FaBrain,
    skill: "Self-Learning",
    type: "soft-skills",
    description:
      "Ability to learn independently through courses, documentation and personal projects.",
  },
  {
    id: "10",
    icon: FaComments,
    skill: "Receptive Communication",
    type: "soft-skills",
    description:
      "High ability to listen and understand different perspectives within a development team. Ability to receive constructive feedback and apply it to improve both code and teamwork.",
  },
  {
    id: "11",
    icon: TiGroup,
    skill: "TeamWork",
    type: "soft-skills",
    description:
      "I like to work in a team and collaborate with others to achieve common goals. Ability to adapt to different roles within a team and contribute to collective success.",
  },
];

export const CERTIFICATES = [
  {
    id: "01",
    title: "Introducción al desarrollo de front-end",
    link: "https://coursera.org/share/c60b80e1def02643f54507e366d45dcd",
    platform: "Coursera",
    description:
      "Comprehensive introduction to front-end development fundamentals, covering essential concepts in HTML, CSS, and web design principles.",
  },
  {
    id: "02",
    title: "HTML5: Sin fronteras",
    link: "https://academia.holamundo.io/certificates/jggorfyr6g",
    platform: "HolaMundo",
    description:
      "Advanced HTML5 course covering semantic markup, modern features, and best practices for creating well-structured web pages.",
  },
  {
    id: "03",
    title: "CSS3: Sin fronteras",
    link: "https://academia.holamundo.io/certificates/actfh2talh",
    platform: "HolaMundo",
    description:
      "In-depth CSS3 training focusing on modern styling techniques, responsive design, and advanced layout systems.",
  },
  {
    id: "04",
    title: "Programación con JavaScript",
    link: "https://coursera.org/share/dd1566287278362396b3417df23cdf3c",
    platform: "Coursera",
    description:
      "Comprehensive JavaScript course covering core concepts, DOM manipulation, and modern programming practices.",
  },
  {
    id: "05",
    title: "Ultimate JavaScript",
    link: "https://academia.holamundo.io/certificates/rze2iuxczz",
    platform: "HolaMundo",
    description:
      "Advanced JavaScript concepts including ES6+ features, asynchronous programming, and application architecture.",
  },
  {
    id: "06",
    title: "Ultimate React",
    link: "https://academia.holamundo.io/certificates/1nn3p7khhn",
    platform: "HolaMundo",
    description:
      "Complete React.js course covering components, hooks, state management, and modern React development practices.",
  },
  {
    id: "07",
    title: "Desarrollar habilidades interpersonales",
    link: "https://coursera.org/share/7c60be97ec430289548ce0a238621058",
    platform: "Coursera",
    description:
      "Course focused on enhancing communication, collaboration, and interpersonal relationships in professional environments.",
  },
  {
    id: "08",
    title: "Cómo resolver problemas y tomar decisiones con eficacia",
    link: "https://coursera.org/share/68bfdfe859ae935aef12d146e7352736",
    platform: "Coursera",
    description:
      "Strategic approach to problem-solving and decision-making processes in professional contexts.",
  },
];

export const ABOUT_ME = {
  content:
    "I am a passionate Software Analysis and Development student at SENA, currently in the elective stage of my training. I have acquired solid skills in HTML, CSS, JavaScript, React, and Tailwind CSS, allowing me to build modern, dynamic, and efficient web interfaces. \n\nMy focus is on writing clean, maintainable, and scalable code, applying best programming practices, and continuously improving my skills.I am highly committed to learning and always looking for new challenges that push me to grow as a developer. \n\nNow that I have a strong foundation in front-end development, my next step is to dive into Next.js to expand my knowledge and start exploring the back-end world.My goal is to become a full-stack developer, mastering both client-side and server-side technologies to build robust and impactful web applications.\n\nI am excited about the journey ahead and eager to take on projects that allow me to apply and expand my skills, always striving to leave my mark in the world of technology.",

  socialLinks: [
    {
      id: "01",
      label: "Facebook",
      icon: FaFacebook,
      link: "https://www.facebook.com/share/1673RBLae1/",
    },
    {
      id: "02",
      label: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/alenandez03?igsh=MXY4d3ExdzB4NW10Yw==",
    },
    {
      id: "03",
      label: "Github",
      icon: FaGithub,
      link: "https://github.com/Alejandro03GG",
    },
    {
      id: "04",
      label: "LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/alejandro-hernandez-lara-657795127/",
    },
  ],

  email: "ahernandezlara03@gmail.com",
  phone: "+57 3115237212",
};

export const PROJECTS = [
  {
    id: 7,
    title: "AleGaming",
    image: PROJECT_IMG_7,
    link: "https://alegaming.vercel.app/",
    tags: ["React", "Tailwind CSS", "GSAP"],
  },
  {
    id: 6,
    title: "MoviesPlanet",
    image: PROJECT_IMG_4,
    link: "https://moviessplanet.vercel.app/",
    tags: ["React", "AppWrite", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "BrainwaveIA",
    image: PROJECT_IMG_6,
    link: "https://brainwaveia.vercel.app/",
    tags: ["React", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "MealRecipes",
    image: PROJECT_IMG_5,
    link: "https://mealreciipess.netlify.app/",
    tags: ["React"],
  },
  {
    id: 3,
    title: "Ristorani Turilli",
    image: PROJECT_IMG_3,
    link: "https://ristoranteturillli.netlify.app/",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    id: 2,
    title: "AlejoDesign",
    image: PROJECT_IMG_2,
    link: "https://alejodesign.netlify.app/",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    id: 1,
    title: "Sushiman",
    image: PROJECT_IMG_1,
    link: "https://sushiweb-psi.vercel.app/",
    tags: ["HTML", "CSS"],
  },
];
