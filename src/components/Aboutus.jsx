import React from "react";
import { Link } from "react-router-dom";
const resume = "https://durgesh-bachhav.vercel.app/Durgesh_Bachhav.pdf";

const AboutUs = () => {
  const downloadfile = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <Link>
      <div className="w-full">
        <div className="w-full flex items-center justify-evenly gap-2 px-4 ">
          <span className="lg:w-1/4 h-1 bg-gray-600 rounded-full "></span>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-600 py-12">
            Who I Am.
          </h1>
          <span className="w-2/4 h-1 bg-gray-600 rounded-full "></span>
        </div>
        <div className="w-full px-6 lg:flex lg:items-center  lg:gap-10 ">
          <div className="lg:w-3/6 flex items-center justify-center">
            <div className="w-full  rounded-md flex items-center justify-center lg:w-96 lg:h-96">
              <img
                src="https://res.cloudinary.com/du5gaixvs/image/upload/v1700140764/portfolio/fun-3d-cartoon-teenage-boy_1_h9020w.jpg"
                className="mix-blend-multiply rounded-lg  "
                alt=""
              />
            </div>
          </div>
          <div className="lg:w-3/6">
            <div className="px-2 py-2 lg:w-4/5">
              <p className="font-light lg:font-normal lg:text-xl">
                Hello, I'm{" "}
                <span className="font-bold text-pink-500">Durgesh</span>, and I
                thrive as a{" "}
                <span className="text-pink-500 font-bold">
                  FULL STACK MERN DEVELOPER
                </span>
                . My expertise lies in crafting web applications using MongoDB,
                Express.js, React, and Node.js. Driven by a passion for crafting
                clean and efficient code, I'm committed to ensuring a seamless
                and user-friendly experience
              </p>
            </div>
            <div className="mt-2">
              <div
                href="/public/Durgesh_Bachhav.pdf"
                download="Durgesh_Bachhav_CV.pdf"
                className="text-center w-60 py-2 rounded-md transition ease-in-out delay-150 px-10 bg-pink-500 hover:-translate-y-1 hover:scale-110 hover:bg-pink-600 duration-300 text-white font-semibold"
                onClick={() => {
                  downloadfile(resume);
                }}
              >
                Download
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AboutUs;
