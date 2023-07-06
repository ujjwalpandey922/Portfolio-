import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  // docker,
  Whitehatjr,
  // meta,
  // starbucks,

  // tesla,
  // shopify,
  // carrent,
  jobit,
  tripguide,
  threejs,
  todo,
  booking,
  utube,
  movie,
  token,
  spotify,
  kitchen,
  gpt,
  web3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Web3 Developer",
    icon: backend,
  },
  {
    title: "MERN Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Teacher",
    company_name: "White Hat Jr",
    icon: Whitehatjr,
    iconBg: "#383E56",
    date: "June 2021 - Current",
    points: [
      "	Utilized innovative teaching techniques to engage disinterested students, resulting in a 40% increase in class participation and engagement.",
      "Conducted regular assessments to track student progress and identified areas for improvement, resulting in a 25% decrease in student dropouts over the course of two years.",
      "Developed customized lesson plans for students of ages 6-50, resulting in a 20% increase in student engagement and retention rates.",
      "Meanwhile did learnt all the basic to advance techs needed for web development such as JS, React and MERN  ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movie House",
    description:
      "The Movie App is a dynamic web application that allows users to explore, discover, and keep track of movies. This application is built using a combination of different technologies to provide a seamless and engaging user experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Rest",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/ujjwalpandey922/Movie-House",
    live_code_link: "https://movie-house-madness.netlify.app/",
  },
  {
    name: "Token Tracker",
    description:
      "The Bitcoin Tracker is a web application that allows users to monitor and track the price and performance of Bitcoin, the popular cryptocurrency. With this application, users can stay up-to-date with the latest Bitcoin prices, historical data, and relevant market information.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Charts Js",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: token,
    source_code_link: "https://github.com/ujjwalpandey922/tokkentracker",
    live_code_link: "https://tokken-tracker.netlify.app/",
  },
  {
    name: "Spotify 2.0",
    description:
      "The Spotify Clone with Redux is a web application that emulates the popular music streaming platform, Spotify. Built using React.js and Redux, this app showcases my expertise in frontend development and state management using Redux.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://github.com/ujjwalpandey922/Spotify_2",
    live_code_link: "https://spofity-2.netlify.app/",
  },
  {
    name: "TODO APP",
    description:
      "The MERN Stack TODO App is a full-stack web application that enables users to effortlessly manage their tasks and stay organized. This app showcases my proficiency in developing scalable and efficient web applications.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "orange-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/ujjwalpandey922/inoteBook",
    live_code_link: "https://inotekeep.cyclic.app",
  },
  {
    name: "Youtube Clone",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Styled Components",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: utube,
    source_code_link: "https://github.com/ujjwalpandey922/Uthub",
    live_code_link: "https://uthub.cyclic.app/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "framer",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: booking,
    source_code_link: "https://github.com/ujjwalpandey922/bookingapp",
    live_code_link: "https://bookinappclone.cyclic.app/",
  },
  {
    name: "Kitchen G",
    description:
      "The Kitchen Website Template is a responsive web application that showcases a visually appealing and user-friendly design for a kitchen-related website. This template has been designed in Figma and can be converted to a fully functional React web application.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: kitchen,
    source_code_link: "https://github.com/ujjwalpandey922/Gustavo_Kitchen",
    live_code_link: "https://gustavokitchen.netlify.app/",
  },
  {
    name: "Chat GPT",
    description:
      "The ChatGPT Template is a responsive web application that incorporates an interactive chat interface powered by ChatGPT. This template provides a seamless integration of conversational capabilities into your React web application. The design for this template has been created in Figma and can be converted into a fully functional React web application.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gpt,
    source_code_link: "https://github.com/ujjwalpandey922/Figma-gpt3",
    live_code_link: "https://gtp3-figma-design.netlify.app/",
  },
  ,
  {
    name: "Web3 Note App",
    description:
      "The Web 3.0 Note App is a decentralized web application that leverages the power of Web 3.0 technologies to provide a secure and user-centric note-taking experience. Built using blockchain and decentralized storage, this app ensures data integrity, privacy, and seamless accessibility from anywhere.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "wagmi",
        color: "pink-text-gradient",
      },
      {
        name: "viem",
        color: "orange-text-gradient",
      },
    ],
    image: web3,
    source_code_link: "https://github.com/ujjwalpandey922/Dweb-todo",
    live_code_link: "https://dweb-todo-app.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
