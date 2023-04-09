import React from 'react';

const Category = ({category}) => {

    console.log(category)

    const {logo,name,jobsAvailable} = category
    return (
        <div>
            <div className='bg-gray-100 rounded-lg p-10 h-[90%]'>
             
                <img className=' object-cover bg-gray-200 rounded-lg w-10 h-10 p-2 ' src={logo} alt="" />
             
               
               <h1 className='text-[#474747] text-lg font-bold mt-4'> {name} </h1>

               <p className='text-[#A3A3A3] '> {jobsAvailable} Jobs available </p>
            </div>
        </div>
    );
};

export default Category;