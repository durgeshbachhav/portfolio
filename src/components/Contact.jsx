import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaLevelDownAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="w-full mt-6 ">
      {/* <div className="w-full flex items-center justify-evenly gap-2 px-8">
        <span className="lg:w-1/4 h-1 bg-black rounded-full "></span>
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl py-4">
          Contact Me.
        </h1>
        <span className="w-2/4 h-1 bg-black rounded-full "></span>
      </div> */}
      <div className="flex flex-col md:flex-row lg:mx-20">
        <div className="w-full lg:flex lg:items-center lg:justify-between p-8 rounded-md  ">
          <div className="lg:w-3/5 ">
            <h1 className="text-white font-extrabold text-3xl lg:text-4xl p-4 ">Contact  Me<span className="font-extrabold text-5xl text-pink-500">.</span></h1>
            <p className=" text-white font-bold flex flex-wrap ">
            🖐️Hey, Let's work on the next project together. You can reach me via
              email, and I'll get back to you as soon as I
              can.
            </p>
            <p className="p-4 mt-4 bg-white text-black  rounded-md font-semibold flex flex-col">
              <div className="flex items-center justify-start gap-1">Drop a mail{" "} < FaLevelDownAlt size={15} /></div>
              <a
                href="mailto:bachhavdurgesh123@gmail.com"
                className="text-gray-800 hover:underline flex items-center justify-start gap-2"
              >
                <IoIosMail size={20}/>
                <p>bachhavdurgesh123@gmail.com</p>
              </a>
            </p>
          </div>
          <div className="lg:w-2/5 lg:flex lg:gap-4 lg:items-center lg:justify-end">
            <p className="text-white font-semibold mt-4">Check out my socials:</p>
            <div className="mt-4 flex items-start justify-start gap-6">
              <a
                href="https://www.instagram.com/durgesh.bachhav_/"
                target="_blank"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:animate-ping "
              >
                <AiFillInstagram color="black" size={20} />
              </a>
              <a
                href="https://github.com/durgeshbachhav"
                target="_blank"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:animate-ping hover:bg-gray-500 "
              >
                <AiFillGithub color="black" size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/durgesh-bachhav-b5899322b/"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:animate-ping hover:bg-gray-500 "
                target="_blank"
              >
                <AiFillLinkedin color="black" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
