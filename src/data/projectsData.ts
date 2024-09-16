import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Photography portfolio",
    description:
      "A visually captivating photography portfolio that showcases images through a dynamic, responsive design with an artistic touch.",
    imageUrl: "/assets/landing-page.png",
    techStack: ["React", "Typescript", "Sass"],
    liveLink: "https://photography-portfolio-five-gamma.vercel.app/",
    codeLink: "https://github.com/JoeClos/photography-portfolio",
  },
  {
    title: "TriviaQuest",
    description:
      "TriviaQuest is a fun and interactive trivia app that uses the Open Trivia Database API to offer a wide range of questions across various categories and difficulty levels.",
    imageUrl: "/assets/trivia.png",
    techStack: ["React", "Typescript", "Tailwind"],
    liveLink: "https://triviaquest.netlify.app/",
    codeLink: "https://github.com/JoeClos/TriviaQuest",
  },
  {
    title: "OsTu app - Virittämö project",
    description:
      "I embarked on the ongoing Saukko project, contributing to the frontend by developing API connections to replace mock data. I enhanced the application with a responsive layout optimized for both desktop and tablet views to meet client requirements and implemented new features, coding in alignment with Figma designs.",
    imageUrl: "/assets/saukko.png",
    techStack: ["MERN Stack"],
    liveLink: "",
    codeLink: "",
  },
  {
    title: "Homeless Academy - Virittämö project",
    description:
      "For the Homeless Academy project, I quickly adapted to new technologies like Contentful/CMS and EmailJS, where I played a key role in handling various tasks. My contributions included successfully hosting the project on Netlify and configuring it on the client's domain to ensure seamless accessibility. I also took the time to go through the previous team's documentation, ensuring a solid understanding of the project’s objectives, and updated it with the improvements made by our team.",
    imageUrl: "/assets/ha.png",
    techStack: ["React", "Contentful - CMS", "EmailJs", "Tailwind"],
    liveLink: "",
    codeLink: "",
  },
  {
    title: "Helsinki City Bikes",
    description:
      "This web-based app is a preassignment for Solita Web-Dev Academy 2023. It is a full-stack application designed to visualize and manage bike stations in the Helsinki area. The app features a map that displays all city bike stations, with distinct user interfaces for viewing station details and individual maps. While the app is functional, it currently requires improvements in UI responsiveness for mobile and tablet devices, which I plan to address in the future.",
    imageUrl: "/assets/hsl.png",
    techStack: [
      "React",
      "MongoDB",
      "Express",
      "Node.js",
      "Leaflet",
      "Material UI",
    ],
    liveLink: "https://hsl-ui.netlify.app/",
    codeLink: "https://github.com/JoeClos/hsl",
  },
  {
    title: "The Movie DB",
    description:
      "I created this app to display the movies that are currently in theatres. The app it's using TMDB database (https://www.themoviedb.org/). Please note that the project is a work in progress, and I'm excited to keep improving it with more features and polish!",
    imageUrl: "/assets/movie_db.png",
    techStack: ["React", "Node.js", "Express", "Bootstrap"],
    liveLink: "https://mdb-q81s.onrender.com/",
    codeLink: "https://github.com/JoeClos/TMDB-movies",
  },
  {
    title: "Tabular Data from SPARQL",
    description:
      "Team project - tool that executes a SPARQL query and save the result on the Wikimedia Commons, in tabular data format. The user can preview the query in query.wikidata.",
    imageUrl: "/assets/tabular-data.png",
    techStack: ["React", "Node.js", "Express", "Font Awesome"],
    liveLink:
      "https://tabular-data-from-sparql.netlify.app/?SELECT%20%3Fwikipedia%20WHERE%20%7B%0A%20%20%3Fwikipedia%20wikibase%3AwikiGroup%20%22wikipedia%22.%0A%7D",
    codeLink: "https://github.com/JoeClos/listeria-bot",
  },
  {
    title: "Seven Wonders",
    description:
      "Team project - my first static website project serving as a travel website that displays the Seven Wonders of the World as a destination. For this project, I focused on integrating Bootstrap for responsive design, creating the logo using Adobe XD, modifying the main photo with Photoshop, and implementing clouds animation.",
    imageUrl: "/assets/seven_wonders.png",
    techStack: ["HTML5", "CSS", "Bootstrap", "JavaScript"],
    liveLink: "https://joeclos.github.io/projet-2/",
    codeLink: "https://github.com/JoeClos/projet-2",
  },
];
