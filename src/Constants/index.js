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
  skitres,
  puffles,
  zerostic,
  fundinc,
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
    title: "Nextjs Developer",
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
    title: "Frontend Developer",
    company_name: "Puffles.io",
    icon: puffles,
    iconBg: "#6A5ACD",
    date: "June 2024 - Current",
    points: [
      "Developed an NFT marketplace enabling non-technical users to upload NFTs.",
      "Transformed Figma designs into responsive web interfaces.",
      "Integrated frontend components with the backend using Tailwind CSS and Redux.",
      "Contributed to Web 3.0 innovations through blockchain-based project development.",
    ],
  },
  {
    title: "Lead Frontend Developer",
    company_name: "Zerostic",
    icon: zerostic,
    iconBg: "#FF6347",
    date: "March 2024 - May 2024",
    points: [
      "Managed and oversaw the entire frontend development process.",
      "Collaborated with cross-functional teams to deliver user-friendly interfaces.",
      "Ensured project delivery within deadlines by implementing efficient workflows.",
      "Adhered to industry standards and best practices in frontend development.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Skitre",
    icon: skitres,
    iconBg: "#00A86B",
    date: "January 2023 - June 2023",
    points: [
      "Built SEO-friendly web applications using Next.js with server-side rendering capabilities.",
      "Enhanced data security through Zod-based data validation.",
      "Designed visually appealing UIs using Shadcn and Tailwind CSS.",
      "Improved code quality with TypeScript and static type checking.",
    ],
  },

  {
    title: "Software Developer",
    company_name: "Fundinc",
    icon: fundinc,
    iconBg: "#3778C2",
    date: "August 2022 - December 2022",
    points: [
      "Gained insights into the operations of a SaaS company.",
      "Developed scalable and dynamic web applications using Firebase and React.",
      "Implemented real-time database management and authentication systems.",
      "Enhanced the user experience through efficient UI development.",
    ],
  },
  {
    title: "Teacher",
    company_name: "White Hat Jr",
    icon: Whitehatjr,
    iconBg: "#383E56",
    date: "June 2021 - November 2023",
    points: [
      "Utilized innovative teaching techniques to engage disinterested students, resulting in a 40% increase in class participation and engagement.",
      "Conducted regular assessments to track student progress and identified areas for improvement, resulting in a 25% decrease in student dropouts over the course of two years.",
      "Developed customized lesson plans for students of ages 6-50, resulting in a 20% increase in student engagement and retention rates.",
      "Learned essential web development technologies, including JavaScript, React, and the MERN stack.",
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
    name: "Poke Dex",
    description:
      "The Pokemon Dex App with Redux is a web application that emulates the popular pokemon power system. Built using React.js and Redux, this app showcases my expertise in frontend development and state management using Redux.",
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
    source_code_link: "https://github.com/ujjwalpandey922/pokedex",
    live_code_link: "https://pokedex-phi-dun.vercel.app/",
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
    source_code_link: "https://github.com/ujjwalpandey922/redux-todo",
    live_code_link: "redux-todo-omega-five.vercel.app",
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
    live_code_link: "https://uthub.vercel.app/",
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
    live_code_link: "https://bookingapp-bice.vercel.app/",
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
    name: "Web3 Address Minting App",
    description:
      "The Web 3.0 Address Minting App is a decentralized web application that leverages the power of Web 3.0 technologies to provide a secure and user-centric address-looking experience. Built using blockchain and decentralized storage, this app ensures data integrity, privacy, and seamless accessibility from anywhere.",
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
    source_code_link: "https://github.com/ujjwalpandey922/addMint",
    live_code_link: "https://add-mint.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
