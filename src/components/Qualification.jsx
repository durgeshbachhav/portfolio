import React from "react";
import { IoSchoolSharp } from "react-icons/io5";
const qualifications = [
  {
    year: "Pursuing",
    title: "Masters in Computer Science",
    school: "Bhonsala Military College, Nashik",
    score: "",
  },
  {
    year: "2022",
    title: "Graduation in Computer Science",
    school:
      "Karmveer Abasaheb Alias N. M. Sonawane Arts, Commerce & Science College, Baglan",
    score: "7.5 GPA",
  },

  {
    year: "2019",
    title: "Higher Secondary Board (HSC)",
    school: "Karmaveer Ramraoji Aher Arts, Science and Commerce College, Deola",
    score: "54.92%",
  },
  {
    year: "2017",
    title: "Secondary State Board (SSC)",
    school: "Shree Shivaji Maratha English School ,Deola",
    score: "76.80%",
  },
];

const Qualification = () => {
  return (
    <div className="w-full mt-12">
      <div className="w-full px-10">
        <div className="w-full flex items-center justify-evenly gap-2 px-4">
          <span className="w-2/4 h-1 bg-black rounded-full transition-colors"></span>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl py-12">
            Qualification.
          </h1>
          <span className="lg:w-1/4 h-1 bg-black rounded-full"></span>
        </div>
      </div>
      <div className="px-8 lg:px-40 ">
        {qualifications.map((qualification, index) => (
          <div
            key={index}
            className={`${
              index !== qualifications.length - 1 ? "mb-8 lg:mb-10" : ""
            } qualification-item relative qualification`}
          >
            <div className=" flex gap-2 items-center justify-start">
              <IoSchoolSharp color="black" size={30} />
              <div className="font-semibold text-black">{qualification.year}</div>
            </div>
            <div className="qualification-content mt-4 lg:mt-6">
              <div className="p-6 rounded-lg shadow-md  bg-gray-200 overflow-hidden relative
              cursor-pointer">
              <div className="absolute w-20 h-20 -top-6 -right-10  rounded-full  bg-pink-500 z-0"></div>
                <h2 className="text-xl text-black lg:text-2xl font-semibold mb-2 lg:mb-3">
                  {qualification.title}
                </h2>
                <li className="text-black font-semibold mb-2">
                  {qualification.year == "Pursuing" ? "Pursuing " : "Pursued "}
                  from {qualification.school}
                </li>
                <div className="text-black">
                  {qualification.year === "Pursuing" ? (
                    <div className=" text-black font-semibold">
                      <li>
                        Engaged in acquiring the foundational principles of
                        software development and software engineering
                        methodologies.
                      </li>
                    </div>
                  ) : (
                    <li className="text-black font-semibold">
                      Qualified with a score of {qualification.score} percentage
                    </li>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qualification;
