import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({children}) => {
    return (
        <div className='bg-gray-200'>
           <div className="navbar bg-gray-200 container mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to ="/">Home</NavLink></li>
      <li><NavLink to ="/statistics">Statistics</NavLink></li>
      <li><NavLink to ="/applied-jobs">Applied Jobs</NavLink></li>
      <li><NavLink to ="/Blog">Blog</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl font-bold">DreamJob</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to ="/">Home</NavLink></li>
      <li><NavLink to ="/statistics">Statistics</NavLink></li>
      <li><NavLink to ="/applied-jobs">Applied Jobs</NavLink></li>
      <li><NavLink to ="/Blog">Blog</NavLink></li>
     
     
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn normal-case bg-gradient-to-r from-[#7E90FE]
    to-[#9873FF]  text-white font-bold border-none text-lg">Start Applying</a>
  </div>
</div> 


       {children}

        </div>
    );
};

export default Header;