import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Category from "../Category/Category";

const Jobs = () => {

   const [categories , setCategories] = useState([])

   useEffect(()=>{
      fetch('category.json')
      .then(res=>res.json())
      .then(data=>setCategories(data))

   },[])

  
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
      {/* job category list   */}
      
      <h1 className="mt-20 mb-4 text-5xl  text-center  font-bold text-[#1A1919]">Job Category List</h1>
      <p className="text-[#757575] text-xl pb-8 p-4 text-center"> Explore thousands of job opportunities with all the information you need. Its your future</p>


      <div className="container mx-auto grid md:grid-cols-4 gap-5">

    {categories.map(category=><Category category={category} key={category.name}></Category>)}
      </div>

      {/* Featured Jobs */}


      <h1 className="mt-20 mb-4 text-5xl  text-center  font-bold text-[#1A1919]">Featured Jobs</h1>
      <p className="text-[#757575] text-xl pb-8 p-4 text-center"> Explore thousands of job opportunities with all the information you need. Its your future</p>


      {/* endline */}
    </div>
  );
};

export default Jobs;
