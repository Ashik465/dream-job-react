import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1A1919] ">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-1 pt-24 mx-auto container pb-6  ">
        <div className=" text-center">
          <h1 className=" text-white font-bold text-3xl  ">DreamJob</h1>

          <p className=" text-gray-400 my-3 px-2">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-xl font-bold">Company</h1>
          <p className="text-gray-400 text-sm mt-6 ">About Us</p>
          <p className="text-gray-400 text-sm ">Work</p>
          <p className="text-gray-400 text-sm ">Latest News</p>
          <p className="text-gray-400 text-sm ">Careers</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-xl font-bold">Product</h1>
          <p className="text-gray-400 text-sm mt-6 ">Prototype</p>
          <p className="text-gray-400 text-sm ">Plans & Pricing</p>
          <p className="text-gray-400 text-sm ">Customers</p>
          <p className="text-gray-400 text-sm ">Integrations</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-xl font-bold">Support</h1>
          <p className="text-gray-400 text-sm mt-6 ">Help Desk</p>
          <p className="text-gray-400 text-sm ">Sales</p>
          <p className="text-gray-400 text-sm ">Become a Partner</p>
          <p className="text-gray-400 text-sm ">Developers</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-xl font-bold">Contact</h1>
          <p className="text-gray-400 text-sm mt-6 ">524 Broadway , NYC</p>
          <p className="text-gray-400 text-sm ">+1 777 - 978 - 5570</p>
        </div>
      </div>

      <div className="divide-y divide-y-reverse divide-gray-400  w-full mx-auto container ">
        <hr />
      </div>

      <div className="flex justify-between mx-auto container mt-5 p-5 ">
        <p className="text-gray-400 text-sm ">
          @2023 Dreamjob. All Rights Reserved{" "}
        </p>
        <p className="text-gray-400 text-sm ">Powered by Dreamjob </p>
      </div>
    </div>
  );
};

export default Footer;
