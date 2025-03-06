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
    description: "Comprehensive introduction to front-end development fundamentals, covering essential concepts in HTML, CSS, and web design principles.",
  },
  {
    id: "02",
    title: "HTML5: Sin fronteras",
    link: "https://academia.holamundo.io/certificates/jggorfyr6g",
    platform: "HolaMundo",
    description: "Advanced HTML5 course covering semantic markup, modern features, and best practices for creating well-structured web pages.",
  },
  {
    id: "03",
    title: "CSS3: Sin fronteras",
    link: "https://academia.holamundo.io/certificates/actfh2talh",
    platform: "HolaMundo",
    description: "In-depth CSS3 training focusing on modern styling techniques, responsive design, and advanced layout systems.",
  },
  {
    id: "04",
    title: "Programación con JavaScript",
    link: "https://coursera.org/share/dd1566287278362396b3417df23cdf3c",
    platform: "Coursera",
    description: "Comprehensive JavaScript course covering core concepts, DOM manipulation, and modern programming practices.",
  },
  {
    id: "05",
    title: "Ultimate JavaScript",
    link: "https://academia.holamundo.io/certificates/rze2iuxczz",
    platform: "HolaMundo",
    description: "Advanced JavaScript concepts including ES6+ features, asynchronous programming, and application architecture.",
  },
  {
    id: "06",
    title: "Ultimate React",
    link: "https://academia.holamundo.io/certificates/1nn3p7khhn",
    platform: "HolaMundo",
    description: "Complete React.js course covering components, hooks, state management, and modern React development practices.",
  },
  {
    id: "07",
    title: "Desarrollar habilidades interpersonales",
    link: "https://coursera.org/share/7c60be97ec430289548ce0a238621058",
    platform: "Coursera",
    description: "Course focused on enhancing communication, collaboration, and interpersonal relationships in professional environments.",
  },
  {
    id: "08",
    title: "Cómo resolver problemas y tomar decisiones con eficacia",
    link: "https://coursera.org/share/68bfdfe859ae935aef12d146e7352736",
    platform: "Coursera",
    description: "Strategic approach to problem-solving and decision-making processes in professional contexts.",
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
    id: 1,
    title: "Sushiman",
    image: PROJECT_IMG_1,
    link: "https://sushiweb-psi.vercel.app/",
    description:
      "Sushiman is a website dedicated to offering the authentic experience of Japanese cuisine. Its mission is to bring the true flavors of Japan to customers, emphasizing the concept of “Omotenashi,” which represents Japanese hospitality. The site features a variety of popular dishes, including different types of sushi, ramen, udon, and danggo, each with descriptions and prices. Additionally, it highlights Japanese culinary trends and offers the option to subscribe to a newsletter to receive offers directly to their email. Users can explore the menu and learn more about the company’s philosophy.",
    tags: ["HTML", "CSS"],
  },
  {
    id: 2,
    title: "AlejoDesign",
    image: PROJECT_IMG_2,
    link: "https://alejodesign.netlify.app/",
    description:
      "AlejoDesign specializes in turning clients' ideas into tangible realities. They offer web design services, highlighting their expertise in areas such as analytics, SEO, and security. The portfolio shows a gallery of previous projects, evidencing the quality and diversity of their work. The company presents itself as 'AlejoDesign', emphasizing its commitment to making its clients' dreams come true",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    id: 2,
    title: "Ristorani Turilli",
    image: PROJECT_IMG_3,
    link: "https://ristoranteturillli.netlify.app/",
    description:
      "Ristorante Turilli is a website featuring a fictional Italian restaurant. The homepage welcomes visitors and provides a brief description of the restaurant. The menu includes a variety of Italian dishes, such as salads, pastas, pizzas, and desserts, each with a brief description and price. The executive chef is also highlighted with a quote about culinary excellence and a brief biography. The contact section provides the address in Rome, Italy, an email and phone number, along with a form for visitors to send messages. Additionally, users are invited to subscribe to receive more news.",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    id: 3,
    title: "MealRecipes",
    image: PROJECT_IMG_5,
    link: "https://mealreciipess.netlify.app/",
    description:
      "The Meals Recipes website offers a wide collection of recipes, organized into categories such as breakfast, main dishes, desserts, and vegetarian and vegan options. Each recipe includes a detailed description, ingredient list, and preparation steps, making it easy for users to reproduce various dishes at home. The site aims to inspire visitors to explore and enjoy a variety of flavors in their daily cooking.",
    tags: ["React"],
  },
  {
    id: 4,
    title: "MoviesPlanet",
    image: PROJECT_IMG_4,
    link: "https://moviessplanet.vercel.app/",
    description:
      "Movies Planet is a platform dedicated to movie lovers, offering a wide range of movies to explore. Users can browse and discover movies from various genres, check details such as searching for synopsis, cast and ratings, and stay updated on the latest releases and movie trends. The interface is designed to make navigation easier and enhance the user experience when interacting with movie content.",
    tags: ["React", "AppWrite", "Tailwind CSS"],
  },
];
