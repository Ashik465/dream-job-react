import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import { CalendarIcon, CurrencyDollarIcon,MapPinIcon,PhoneIcon,EnvelopeIcon } from "@heroicons/react/24/solid";
import { addToDb } from "../../utilities/fakedb";

const JobDetails = () => {
  const dynamic = useParams();
  const jobId = dynamic.id;
//   console.log(jobId);
  const [jobData, setJobData] = useState([]);
  const [jobDetails, setJobDetails] = useState({});

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) =>{
        setJobData(data);
        const jobDetail = data.find((job) => job.id == jobId);
        setJobDetails(jobDetail);
    });
  }, []);

//   console.log(jobData);
    // console.log(jobDetails.job_description);

  const { job_description ,job_responsibility,educational_requirements , experiences,salary ,job_title,phone,email,location ,id } = jobDetails;


const handleAppliedJob =(id) =>{

console.log(id)

addToDb(id)

}




  return (
    <>
           <Header>

              <h1 className=" font-bold text-3xl my-32 pb-32 text-[#1A1919] text-center">Job Details </h1>


           </Header>

            <div className=" mx-auto container flex flex-col md:flex-row   items-center  justify-center mb-32">

               <div className="p-7 md:w-[50%]">
                 <h1 className="text-[#1A1919] font-bold mb-4">Job Description: <span className="text-[#757575]"> {job_description}</span> </h1>
                 
                 <h1 className="text-[#1A1919] font-bold mb-4">Job Responsibility: <span className="text-[#757575]"> {job_responsibility}</span> </h1>
                 
                 <h1 className="text-[#1A1919] font-bold mb-4">Educational Requirements: <br /> <span className="text-[#757575] my-2"> {educational_requirements}</span> </h1>
                 
                 <h1 className="text-[#1A1919] font-bold mb-4">Experiences: <br /> <span className="text-[#757575] my-2"> {experiences}</span> </h1>
                 
               </div>
{/* job details start  */}
               <div>
                <div className="bg-gray-100 p-8 rounded-lg w-[100%]">
                    
                    
                        <h1 className=" font-bold text-[#1A1919] mb-4  ">job details</h1>
                    <div className="h-6 w-full  "><hr /></div>
                        
                   
                   
                    <div className="flex items-center  mb-3 ">

                    <CurrencyDollarIcon className="mr-1  h-6 w-6 " />
                    <h1 className=" font-bold text-[#474747]">Salary: <span className="text-[#757575] ">{salary}(per month)</span></h1>
                    </div>
                   
                    <div className="flex items-center  mb-5 ">

                    <CalendarIcon className="mr-1  h-6 w-6 " />
                    <h1 className=" font-bold text-[#474747]">Job Title : <span className="text-[#757575] ">{job_title}</span></h1>
                    </div>


                    <h1 className=" font-bold text-[#1A1919] mb-4  ">Contact Information</h1>
                    <div className="h-6 w-full  "><hr /></div>

                   
                    <div className="flex items-center  mb-3 ">

                    <PhoneIcon className="mr-1  h-6 w-6 " />
                    <h1 className=" font-bold text-[#474747]">Phone : <span className="text-[#757575] ">{phone}</span></h1>
                    </div>
                   
                    <div className="flex items-center  mb-3 ">

                    <EnvelopeIcon  className="mr-1  h-6 w-6 " />
                    <h1 className=" font-bold text-[#474747]">Email : <span className="text-[#757575] ">{email}</span></h1>
                    </div>
                    <div className="flex items-center  mb-3 ">

                    <MapPinIcon className="mr-1  h-6 w-6 " />
                    <h1 className=" font-bold text-[#474747]">Address : <span className="text-[#757575] ">{location}</span></h1>
                    </div>
                </div>

                <button onClick={()=>handleAppliedJob(id)} className="btn-main w-full mt-8"> Apply Now </button>
                 
               </div>

            </div>



    </>
  );
};

export default JobDetails;
