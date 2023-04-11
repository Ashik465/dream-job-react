import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Applied from '../Applied/Applied';




const AppliedJobs = () => {

    const saveJob = useLoaderData()
    // console.log(saveJob)

   const [cartJob, setCartJob] = useState(saveJob)
// console.log(cartJob)

const [cart, setCart] = useState([])



const handleSortOnsite =() =>{
   

    console.log('t', cartJob)


     const onsite =  cartJob.sort((a, b) => {
    if (a.remote_or_onsite < b.remote_or_onsite) {
      return -1;
    }
    if (a.remote_or_onsite > b.remote_or_onsite) {
      return 1;
    }
    return 0;
  });

  setCart(onsite)

}



const handleSortRemote =() =>{



    const remote = cartJob.sort((a, b) => {
        if (a.remote_or_onsite > b.remote_or_onsite) {
          return -1;
        }
        if (a.remote_or_onsite < b.remote_or_onsite) {
          return 1;
        }
        return 0;
      });
    
      const newCart = [ ...remote]
      setCart(newCart)

}



         const displayData = cart.length ? cart : cartJob


    return (
        <div>

            <Header>

            <h1 className=" font-bold text-3xl my-32 pb-32 text-[#1A1919] text-center">Applied Jobs </h1>
            </Header>
            
{/* start */}


       <div className='  mx-auto container text-right '>

       <div className="dropdown dropdown-bottom dropdown-end">
  <label tabIndex={0} className="btn bg-gray-200 m-1 border-none text-[#474747] hover:bg-gray-400">Filter by         <ChevronDownIcon className="ml-4  h-6 w-6" />
</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><button onClick={handleSortOnsite} >Onsite job</button></li>
    <li><button onClick={handleSortRemote}>Remote job</button></li>
  </ul>
</div>
       </div>
{/* job sector  */}
<div className='mx-auto container'>
 
   {
   displayData.map(job=><Applied job={job} key ={job.id}></Applied>)
   }

</div>


{/* end  */}
        </div>
    );
};

export default AppliedJobs;