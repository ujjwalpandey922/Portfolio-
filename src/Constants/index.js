import {
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
  skitres,
  Sofueled,
  puffles,
  apeing,
  threejs,
  bhaobhao,
  booking,
  utube,
  movie,
  token,
  spotify,
  kitchen,
  perps,
  web3,
  nextjsIcon,
  reactIcon,
  web3Icon,
  mernIcon,
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
    icon: nextjsIcon,
  },
  {
    title: "React Developer",
    icon: reactIcon,
  },
  {
    title: "Web3 Developer",
    icon: web3Icon,
  },
  {
    title: "MERN Developer",
    icon: mernIcon,
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
    title: "Web3 Frontend Developer",
    company_name: "Apeing",
    icon: apeing,
    iconBg: "#383E56",
    date: "Nov 2025 – Present",
    points: [
      "Sole frontend engineer for the Perps trading dashboard, delivering a fully integrated, production-ready product in under 2 months using Next.js, TypeScript, and Tailwind CSS.",
      "Built AlphaRoom, a live-streaming feature enabling simultaneous on-chain trading and content streaming; drove 200+ user sign-ups during the beta launch.",
      "Architected seamless wallet and smart contract integrations, reducing transaction friction across minting and trading user flows.",
      "Collaborated closely with smart contract and backend teams to align on-chain and off-chain data states, ensuring real-time accuracy across the dashboard.",
    ],
  },
  {
    title: "Frontend Developer (Freelance)",
    company_name: "Sofueled",
    icon: Sofueled,
    iconBg: "#E6DEDD",
    date: "Aug 2025 – Nov 2025",
    points: [
      "Designed and shipped Bhao Bhao, a live pet grooming booking app built with React and TypeScript, currently serving an active daily user base of 4–5 bookings per day.",
      "Owned end-to-end UI architecture — component design, state management, and responsive layout — as the sole frontend resource.",
      "Maintained a clean, reusable component structure enabling rapid post-launch iteration without regression.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Puffles",
    icon: puffles,
    iconBg: "#6A5ACD",
    date: "May 2024 – Aug 2025",
    points: [
      "Redesigned and shipped the full landing page and NFT minting dashboard (puffles.io) in under 45 days, integrating support for 3 blockchain networks — Ape, Monad, and a third chain.",
      "Enabled weekly recurring minting activity through a performant, low-friction minting UX built with React and plain CSS.",
      "Minimised third-party library dependencies, reducing bundle size and improving initial page load performance.",
      "Delivered multi-chain wallet connection flows, allowing users to switch networks seamlessly without leaving the app.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Skitre",
    icon: skitres,
    iconBg: "#00A86B",
    date: "Nov 2023 – May 2024",
    points: [
      "Built an animated onboarding dashboard that successfully onboarded 250+ BSc Engineering graduates from Gujarat state within the first week of launch.",
      "Implemented smooth UI animations and guided onboarding flows using Next.js, TypeScript, Tailwind CSS, and React Query, significantly reducing sign-up drop-off.",
      "Mentored and guided 2 frontend interns, conducting code reviews and establishing component conventions adopted across the team.",
      "Adopted Shadcn UI as the component library, improving design consistency and reducing time spent on new feature UI.",
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
    name: "Perpetual Dashboard",
    description:
      "The Perpetual Dashboard is a comprehensive and highly responsive interface designed for decentralized perpetual trading. Developed as the primary frontend for a fast-paced trading platform, this application empowers users to seamlessly manage their leveraged positions and execute trades in real time. It features integrated charting, dynamic trade state management, and a seamless connection to smart contracts on-chain. Built with Next.js, TypeScript, and Tailwind CSS, the platform emphasizes performance and a streamlined user experience. This robust tool simplifies complex trading mechanics, enabling users to focus on making informed trading decisions.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: perps,
    source_code_link: "https://github.com/ujjwalpandey922/perps-dashboard",
    live_code_link: "https://perps-dashboard-nine.vercel.app/",
  },
  {
    name: "Bhao Bhao",
    description:
      "Bhao Bhao is a comprehensive pet grooming booking application that provides pet owners with a seamless way to schedule and manage grooming appointments. Built with Vite, it utilizes React Query for robust data fetching and Redux for predictable state management across the application. The project incorporates Tailwind CSS for an elegant, responsive user interface and TypeScript to ensure type safety and code reliability. This platform simplifies the grooming reservation process while demonstrating the ability to build scalable, state-heavy frontend applications with modern React practices.",
    tags: [
      {
        name: "React Query",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "orange-text-gradient",
      },
    ],
    image: bhaobhao,
    source_code_link: "",
    live_code_link: "https://app.bhaobhao.in/",
  },
  {
    name: "Movie House",
    description:
      "The Movie App is a dynamic web application that allows users to explore, discover, and keep track of movies. This application is built using a combination of different technologies to provide a seamless and engaging user experience. It features an intuitive user interface where users can search for their favorite titles, view detailed information including cast and ratings, and watch high-quality trailers. The platform also provides personalized recommendations based on trending movies and user preferences. By utilizing modern web development practices, the application ensures fast loading times, responsive design across all devices, and robust performance to keep movie enthusiasts engaged.",
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
      "The Bitcoin Tracker is a web application that allows users to monitor and track the price and performance of Bitcoin, the popular cryptocurrency. With this application, users can stay up-to-date with the latest Bitcoin prices, historical data, and relevant market information. It offers interactive and dynamic charts to help users visualize price fluctuations and make informed trading decisions. Additionally, the dashboard provides real-time updates and an intuitive breakdown of trading volumes and market cap. This comprehensive tool empowers both novice and experienced crypto enthusiasts to closely follow market trends in an accessible and visually appealing format.",
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
      "The Pokemon Dex App with Redux is a web application that emulates the popular pokemon power system. Built using React.js and Redux, this app showcases my expertise in frontend development and state management using Redux. Users can easily browse through an extensive library of Pokemon, checking out detailed stats, abilities, types, and evolutions. The application implements advanced search and filtering mechanisms to find specific Pokemon instantly. The seamless integration of Redux ensures that data flows predictably across the application, providing a smooth and highly responsive user experience for Pokemon fans and developers alike.",
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
    name: "Youtube Clone",
    description:
      "This web application is a feature-rich video streaming platform that closely emulates the core functionalities of YouTube. Users can effortlessly search for videos, explore trending content, and watch high-quality media in a highly responsive player interface. Built using modern frontend technologies and integrated with robust REST APIs, the application provides a smooth viewing experience across all devices. It also supports viewing channel details, related videos, and comprehensive video statistics. By focusing on performance and an intuitive user interface, this project demonstrates the ability to build scalable, media-heavy applications with a seamless user experience.",
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
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations. This application serves as an all-in-one travel companion, simplifying the trip planning process through a beautifully designed, user-friendly interface. Users can explore detailed destination guides, read reviews, and find the best deals tailored to their travel preferences. The platform seamlessly integrates multiple booking services into a single dashboard, ensuring a frictionless reservation experience. With responsive design and smooth animations, it inspires wanderlust while providing practical tools for modern travelers.",
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
      "The Kitchen Website Template is a responsive web application that showcases a visually appealing and user-friendly design for a kitchen-related website. This template has been designed in Figma and carefully converted into a fully functional React web application. It features elegant layouts for displaying culinary services, menus, and high-quality food photography. The design prioritizes user engagement with smooth scrolling, clear call-to-action buttons, and an intuitive navigation system. This project highlights a strong eye for UI/UX principles and the ability to translate pixel-perfect designs into accessible, interactive, and high-performance frontend code.",
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
    name: "Web3 Address Minting App",
    description:
      "The Web 3.0 Address Minting App is a decentralized web application that leverages the power of Web 3.0 technologies to provide a secure and user-centric address-minting experience. Built using modern blockchain standards and decentralized storage, this app ensures data integrity, privacy, and seamless accessibility from anywhere. Users can effortlessly connect their digital wallets, mint unique on-chain addresses, and view their transaction histories in real-time. The application simplifies complex blockchain interactions into a smooth, intuitive workflow, demonstrating a deep understanding of decentralized application architecture, smart contract integration, and user-friendly Web3 interfaces.",
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
