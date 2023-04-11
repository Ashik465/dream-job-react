import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <div>
           <Outlet></Outlet>
           <Footer></Footer>
           
        </div>
    );
};

export default Home;