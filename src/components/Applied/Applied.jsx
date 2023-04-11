import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { useNavigate } from 'react-router-dom';

const Applied = ({job}) => {

    console.log(job)

    const {company_logo,
        job_title,
        company_name,
        remote_or_onsite,
        location,
        fulltime_or_part_time,
        salary,id}= job

        const navigate =useNavigate()
    return (
        <>
           <div className='bg-white shadow-2xl p-8 my-8 flex gap-8'>
            
            <div className='bg-[#F4F4F4] flex items-center p-8 rounded-lg  h-60 w-60 '>
            <img className=' object-cover' src={company_logo} alt="" />
            </div>

               <div className='flex items-center flex-grow justify-between '>

           {/* company_name */}    
           
           <div className='flex flex-col'>
                  

                  <h1 className="text-[#474747] font-bold text-2xl mb-4">{job_title}</h1>
      <p className="text-[#757575] mb-4 ">{company_name}</p>

      <div className="flex gap-4 mb-4">
        <p className="font-bold pinky border px-4 py-2 rounded border-blue-600">
          {remote_or_onsite}
        </p>
        <p className=" font-bold pinky border px-4 py-2 rounded border-blue-600">
          {fulltime_or_part_time}
        </p>
      </div>

      <div className="flex  items-center  mb-6 text-[#757575] text-xl">
        <MapPinIcon className="h-6 w-6" />

        <p>{location}</p>
        <CurrencyDollarIcon className="ml-4  h-6 w-6" />
        <p>Salary: {salary}</p>
      </div> 

      </div>

{/* end  */}
               <div className=''>
               <button onClick={()=>navigate(`/job/${id}`)}
        className="btn-main"
      >
        View  Details
      </button>
               </div>
               </div>
            </div> 
        </>
    );
};

export default Applied;