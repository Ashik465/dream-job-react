import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/oops-something-went-wrong.json";
import { useRouteError } from 'react-router-dom';
const ErrorPage = () => {

    const error = useRouteError() 
    console.log(error)
    return (
        <div className=' flex-row-reverse md:flex items-center mx-auto container '>  
         <div className=' text-center text-5xl pinky'>
            {

            error.statusText  
         }

         <h4>Error: {error.status}</h4>
         </div>
         
         <div className=' text-center w-3/4 h-96 '>
            <Lottie animationData={groovyWalkAnimation} loop={true} /> 
         </div>



           
        </div>
    );
};

export default ErrorPage;