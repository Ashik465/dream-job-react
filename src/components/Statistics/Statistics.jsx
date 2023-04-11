import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {

     const assignmentData = useLoaderData();
     console.log(assignmentData)

    return (
        <div>
              
              <Header>

            <h1 className=" font-bold text-3xl my-32 pb-32 text-[#1A1919] text-center">Statistics Page </h1>
            </Header>
   
             <div className='text-center'><h1 className=" font-bold text-3xl  pb-32 pinky ">Area chart of Assignment Marks </h1></div>
            



        <div style={{ width: '100%', height: 300 }}>
        
        
        <ResponsiveContainer>
        
           <AreaChart
            width={500}
            height={400}
            data={assignmentData}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
           >
                    <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="assignment_no"  />
          <YAxis dataKey="assignment_marks" />
          <Tooltip />
          <Area type="monotone" dataKey="assignment_marks" stroke="#8884d8" fill="#8884d8" />
           </AreaChart> 
        
           </ResponsiveContainer>
        </div>   



            
        </div>
    );
};

export default Statistics;