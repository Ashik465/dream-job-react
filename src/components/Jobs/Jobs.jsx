import React from "react";
import Header from "../Header/Header";

const Jobs = () => {
  return (
    <div>
      <Header>
        <div className="mt-5 container mx-auto p-4 flex flex-col md:flex-row items-center justify-center gap-8">
          <div>
            <h1 className="text-[#1A1919] font-bold text-7xl ">
              One Step <br />
              Closer To Your <br />
              <span
                className=" bg-gradient-to-r from-[#7E90FE]
    to-[#9873FF]  inline-block text-transparent bg-clip-text  "
              >
                Dream Job
              </span>
            </h1>

            <div className=" md:w-[50%] my-6">
              <p className="text-[#757575] ">
                Explore thousands of job opportunities with all the information
                you need. Its your future. Come find it. Manage all your job
                application from start to finish.
              </p>
            </div>

            <a
              className="btn normal-case bg-gradient-to-r from-[#7E90FE]
    to-[#9873FF]  text-white font-bold border-none text-lg"
            >
              Get Started
            </a>
          </div>

          <div>
            <img className=" w-full" src="/public/Ashik.png" alt="" />
          </div>
        </div>
      </Header>
      <h1>hello from jobs</h1>
    </div>
  );
};

export default Jobs;
