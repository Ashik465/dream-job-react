import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Job = ({ job }) => {
//   console.log(job);

  const {
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_part_time,
    salary,
  } = job;
  return (
    <div className="shadow-2xl p-10">
      <img className="mb-6" src={company_logo} alt="" />
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

      <a
        className="btn-main"
      >
        View  Details
      </a>
    </div>
  );
};

export default Job;
