import React, { useState } from "react";

const Skill = () => {
  const frontendSkills = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      name: "HTML",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      name: "CSS",
    },
    {
      src: "https://res.cloudinary.com/du5gaixvs/image/upload/v1700024228/sass_aklamy.png",
      name: "SCSS",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: "JavaScript",
    },
   
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React",
    },
    {
      src: "https://res.cloudinary.com/du5gaixvs/image/upload/v1699855163/portfolio/vite-svgrepo-com_dndhu7.svg",
      name: "vite",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      name: "Redux",
    },
   
    {
      src: "https://res.cloudinary.com/du5gaixvs/image/upload/v1699719937/tailwind-css-icon_dxobgs.svg",
      name: "Tailwind",
    },
  ];

  const backendSkills = [
    
    {
      name: "Node.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    
    {
      name: "MongoDB",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "MySQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Cloudinary",
      src: "https://res.cloudinary.com/du5gaixvs/image/upload/v1699718527/pngegg_gwnsrt.png",
    },
    {
      name: "Strapi",
      src: "https://res.cloudinary.com/du5gaixvs/image/upload/v1699718105/strapi_mlf0ug.svg",
    },
    {
      name: "Vercel",
      src: "https://res.cloudinary.com/du5gaixvs/image/upload/v1699718058/vercel_htg3vy.svg",
    },
    {
      name: "Socket.IO",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    },
  ];

  const otherSkills = [
    {
      name: "GitHub",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Postman",
      src: "https://res.cloudinary.com/du5gaixvs/image/upload/v1699699886/postman-icon_kqgpa9.svg",
    },
    {
      name: "C",
      src: "https://res.cloudinary.com/du5gaixvs/image/upload/v1699718314/c-original_dxufig.svg",
    },
    {
      name: "Java",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
  ];

  const [currentSkills, setCurrentSkills] = useState(frontendSkills);

  const handleButtonClick = (newSkills) => {
    setCurrentSkills(newSkills);
  };

  return (
    <div className="w-full">
        <div className="w-full flex items-center justify-evenly gap-2 px-4">
          <span className="w-2/4 h-1 bg-black rounded-full transition-colors"></span>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl py-4">Skills.</h1>
          <span className="lg:w-1/4 h-1 bg-black rounded-full"></span>
        </div>
        <div className="w-full p-4 flex flex-col items-center justify-center gap-4">
          <div className="w-full flex gap-4 items-center justify-center mx-auto lg:w-10/12  lg:items-center lg:justify-start  ">
            <button
              onClick={() => handleButtonClick(frontendSkills)}
              className="text-center px-4 py-2 rounded-md transition ease-in-out delay-150 bg-pink-500 hover:-translate-y-0 text-white hover:scale-110 hover:bg-pink-600  duration-300"
            >
              Frontend
            </button>
            <button
              onClick={() => handleButtonClick(backendSkills)}
              className="text-center px-4 py-2 rounded-md transition ease-in-out delay-150 bg-pink-500 hover:-translate-y-0 text-white hover:scale-110 hover:bg-pink-600  duration-300"
            >
              Backend
            </button>
            <button
              onClick={() => handleButtonClick(otherSkills)}
              className="text-center px-4 py-2 rounded-md transition ease-in-out delay-150 bg-pink-500 hover:-translate-y-0 text-white hover:scale-110 hover:bg-pink-600  duration-300"
            >
              Other
            </button>
          </div>
          <div className="min-w-min grid grid-cols-3 gap-x-3 gap-y-3 md:grid-cols-3 lg:grid-cols-3 lg:px-40 lg:gap-x-20  justify-center">
            {currentSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Render each skill here */}
                <img
                  className="w-12 h-12 rounded-md bg-gray-200 p-2 cursor-pointer hover:bg-gray-300"
                  src={skill.src}
                  alt={skill.name}
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Skill;
