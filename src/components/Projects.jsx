import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import React from "react";

const ProjectItem = ({
  imageSrc,
  techStack,
  projectname,
  description,
  liveUrl,
  githubUrl,
}) => {
  return (
    <div className=" cursor-pointer max-w-5xl  flex flex-col sm:flex-row p-4 mx-auto rounded-md shadow-xl mt-4 relative overflow-hidden bg-gray-100 hover:bg-gray-200  ">
        <div className="absolute w-20 h-20 -bottom-6 -right-6  rounded-full  bg-pink-500 z-0"></div>
      <div className="sm:w-2/4 sm:p-4 ">
        <img
          src={imageSrc}
          alt="Project Image"
          className="w-full h-auto bg-transparent mix-blend-multiply relative transition-transform transform-none hover:scale-105 z-10  "
        />
      </div>

      <div className="sm:w-2/4 sm:p-4 flex flex-col items-start justify-start gap-3 lg:gap-5 relative">
        <div className="w-full">
          <ul className="w-full flex items-center justify-center lg:items-start lg:justify-start gap-2 ">
            {techStack.map((tech, index) => (
              <li key={index} className="rounded-full bg-gray-600 w-12 h-12 flex items-center justify-center">
                <img className="w-8 h-8" src={tech.icon} alt={tech.name} />
              </li>
            ))}
          </ul>
        </div>
        <div className="font-bold text-black ">{projectname}</div>
        <div className="mb-4 font-sans text-black">{description}</div>
        <div className="flex space-x-4">
          <Link
            to={liveUrl}
            target="_blank"
            className="rounded-full p-2 bg-gray-600  cursor-pointer hover:scale-105"
          >
            <FaExternalLinkAlt color="white" size={20} />
          </Link>
          <Link
            to={githubUrl}
            target="_blank"
            className="rounded-full p-2 bg-gray-600  cursor-pointer hover:scale-105"
          >
            <BsGithub color="white" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectData = [
    {
      imageSrc:
        "https://res.cloudinary.com/du5gaixvs/image/upload/v1699721431/hifi-project_j6yjbj.png",
      techStack: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        
        {
          name: "node",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },

        {
          name: "mongo",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Cloudinary",
          icon: "https://res.cloudinary.com/du5gaixvs/image/upload/v1699718527/pngegg_gwnsrt.png",
        },
        // Add more tech stack items as needed
      ],
      projectname: "Hifi - A social Media platform",
      description:
        "Developed a MERN-based social media web app with user authentication using bcrypt and JWT. Leveraged MongoDB Atlas for data storage and Cloudinary for image management. Included features such as post liking, friend requests, profile editing, user following/unfollowing, and real-time chat with Socket.io.",
      liveUrl: "https://hifi-app.netlify.app/#/login",
      githubUrl: "https://github.com/durgeshbachhav/HIFI-frontend",
    },
    
    {
      imageSrc:
        "https://res.cloudinary.com/du5gaixvs/image/upload/v1699722780/portfolio/blogium_bjab2c.png",
      techStack: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        
        {
          name: "node",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Cloudinary",
          icon: "https://res.cloudinary.com/du5gaixvs/image/upload/v1699718527/pngegg_gwnsrt.png",
        },
        {
          name: "mongo",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        // Add more tech stack items as needed
      ],
      projectname: "Blogium - A social bloging platform",
      description:
        "Built Blogium, a React-based blog app, with Redux Toolkit for state management, React Router for seamless navigation, and Cloudinary for efficient image handling. Users can create, edit, and delete posts, enhancing the interactive blogging experience.",
      liveUrl: "https://blogium-five.vercel.app/",
      githubUrl: "https://github.com/durgeshbachhav/blog-frontend/tree/main",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/du5gaixvs/image/upload/v1699725145/portfolio/yyoutube_a9nw7o.png",
      techStack: [
        {
          name: "react",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "redux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        },
        {
          name: "vite",
          icon: "https://res.cloudinary.com/du5gaixvs/image/upload/v1699855163/portfolio/vite-svgrepo-com_dndhu7.svg",
        },
        {
          name: "tailwind",
          icon: "https://res.cloudinary.com/du5gaixvs/image/upload/v1699719937/tailwind-css-icon_dxobgs.svg",
        },
        // Add more tech stack items as needed
      ],
      projectname: "Youtube Clone",
      description:
        "Built a YouTube clone with React and Redux Toolkit for state management. Implemented React Router for navigation and theme customization. Users can explore videos using the YouTube Data API.",
      liveUrl: "https://youtube-clone-eight-eta.vercel.app/",
      githubUrl: "https://github.com/durgeshbachhav/youtube-clone",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/du5gaixvs/image/upload/v1699724821/portfolio/crypto_mlaeih.png",
        techStack: [
          {
            name: "React",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          },
          {
            name: "vite",
            icon: "https://res.cloudinary.com/du5gaixvs/image/upload/v1699855163/portfolio/vite-svgrepo-com_dndhu7.svg",
          },
          {
            name: "tailwind",
            icon: "https://res.cloudinary.com/du5gaixvs/image/upload/v1699719937/tailwind-css-icon_dxobgs.svg",
          },
         
          
          // Add more tech stack items as needed
        ],
      projectname: "Crypto",
      description:
        "Build a React-based cryptocurrency application utilizing the CoinGecko API, featuring a straightforward currency converter allowing users to seamlessly convert between various cryptocurrencies and fiat currencies.",
      liveUrl: "https://crypto-converter-deploy.vercel.app/",
      githubUrl: "https://github.com/durgeshbachhav/crypto-converter-deploy",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/du5gaixvs/image/upload/v1699725368/portfolio/ccurency_st8vqk.png",
      techStack: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        
        {
          name: "tailwind",
          icon: "https://res.cloudinary.com/du5gaixvs/image/upload/v1699719937/tailwind-css-icon_dxobgs.svg",
        },
        // Add more tech stack items as needed
      ],
      projectname: "Currency Converter",
      description:
        "Develop a currency converter application using React that integrates the Exchange Rate API, enabling users to effortlessly convert between multiple fiat currencies with real-time exchange rates displayed in a user-friendly interface.",
      liveUrl: "https://currency-converter-pied-xi.vercel.app/",
      githubUrl: "https://github.com/durgeshbachhav/currency-converter",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/du5gaixvs/image/upload/v1699728353/portfolio/filmflix_wfkmvg.png",
      techStack: [
        {
          name: "vite",
          icon: "https://res.cloudinary.com/du5gaixvs/image/upload/v1699855163/portfolio/vite-svgrepo-com_dndhu7.svg",
        },
        {
          name: "react",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "tailwind",
          icon: "https://res.cloudinary.com/du5gaixvs/image/upload/v1699719937/tailwind-css-icon_dxobgs.svg",
        },
        // Add more tech stack items as needed
      ],
      projectname: "Filmflix",
      description:
        "Build a React app using Vite and the OMDB API to enable users to search for movies. The app swiftly fetches movie details based on user queries, offering a seamless and efficient movie browsing experience with comprehensive information and a responsive interface.",
      liveUrl: "https://your-live-url.com",
      githubUrl: "https://github.com/yourusername/your-repo",
    },
    
    {
      imageSrc:
        "https://res.cloudinary.com/du5gaixvs/image/upload/v1699725996/portfolio/weatherapp_oo5v3x.png",
      techStack: [
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        // Add more tech stack items as needed
      ],
      projectname: "Weather App",
      description:
        "Create a weather app using HTML, CSS, and JavaScript, integrating a Weather API to showcase real-time weather data. Users can input a location or use geolocation for local weather updates.",
      liveUrl: "https://654cdb8bdbcd354604e6190c--snazzy-mooncake-f053e8.netlify.app/",
      githubUrl: "https://github.com/durgeshbachhav",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/du5gaixvs/image/upload/v1699727761/portfolio/piiono_igjfg5.png",
      techStack: [
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        // Add more tech stack items as needed
      ],
      projectname: "Piiono",
      description:
        "Create a web-based piano with HTML, CSS, and JavaScript, resembling a keyboard interface. Users can click or use keyboard keys to produce musical notes, providing an interactive and enjoyable experience for playing tunes directly on the website.",
      liveUrl: "",
      githubUrl: "https://github.com/durgeshbachhav",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/du5gaixvs/image/upload/v1699727948/portfolio/music_m398zf.png",
      techStack: [
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        // Add more tech stack items as needed
      ],
      projectname: "Music Player",
      description:
        "Create a the music bar e-commerce platform offering instruments, albums, and accessories. It includes personalized recommendations, secure payments, and a community forum, delivering a seamless shopping experience for music enthusiasts.",
      liveUrl: "https://your-live-url.com",
      githubUrl: "https://github.com/yourusername/your-repo",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/du5gaixvs/image/upload/v1699725696/portfolio/spotiffy_tvlvtl.png",
      techStack: [
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
       
        // Add more tech stack items as needed
      ],
      projectname: "Spotify Clone",
      description:
        "Create a stylish Spotify web interface using HTML and CSS, focusing on sleek design elements, intuitive layout.",
      liveUrl: "https://654ce5e94131304e98f0a284--phenomenal-blini-78419f.netlify.app/",
      githubUrl: "https://github.com/durgeshbachhav",
    },
    
    // Add more project data as needed
  ];

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-evenly gap-2 px-4">
        <span className="lg:w-1/4 h-1 bg-black rounded-full"></span>
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl py-12">
          My Projects.
        </h1>
        <span className="w-2/4 h-1 bg-black rounded-full"></span>
      </div>
      <div className="flex flex-col items-center justify-center px-4 lg:mx-4 gap-8">
      {projectData.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
      </div>
    </div>
  );
};

export default Projects;
