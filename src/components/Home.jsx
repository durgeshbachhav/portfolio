import React from "react";

const Home = () => {
  return (
    <div
      style={{ fontFamily: "Bayon" }}
      className="h-screen lg:flex lg:flex-row-reverse  lg:items-center lg:justify-evenly text-gray-600 relative"
    >
      <div className="hidden lg:flex justify-center items-center lg:w-1/2 h-screen ">
        <img
          className="hidden lg:block w-96 md:w-96 lg:w-auto h-96 md:h-auto lg:h-96 mix-blend-multiply z-30"
          src="https://res.cloudinary.com/du5gaixvs/image/upload/v1699637327/3d_boy_gjrea5.jpg"
          alt="character icon"
        />
      </div>
      <div className=" text-center lg:text-left lg:w-1/2 p-8">
        <h1 className="mt-24 text-gray-600 text-3xl md:text-4xl md:mt-0 lg:text-6xl lg:mt-0 font-bold mb-4">
          Hello, I'm{" "}
          <span style={{ fontFamily: "" }} className="text">
            Durgesh,
          </span>
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          I'm a{" "}
          <span style={{ fontFamily: "`" }} className="text qualification">
            Full-Stack Developer
          </span>
        </h1>
        <h3 className="text-lg font-normal  md:text-base lg:text-2xl lg:font-light">
          A constant learner, passionate programmer, and expert in building
          scalable full-stack applications.
        </h3>
      </div>

      <div
        style={{ width: "200px", height: "200px" }}
        className="absolute -left-14 lg:absolute lg:top-0 lg:left-[1000px] circle1 rounded-full z-10 animate-pulse lg:animate-none "
      ></div>
      <div
        style={{ width: "100px", height: "100px" }}
        className="absolute -top-20 -right-0 lg:absolute lg:top-96 lg:right-96  circle2 rounded-full z-10 animate-spin lg:animate-none "
      ></div>
     
      
    </div>
  );
};

export default Home;
