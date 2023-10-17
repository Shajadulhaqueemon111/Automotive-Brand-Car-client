import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from './Footer';

const MainRout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
            <Toaster/>
        </div>
    );
};

export default MainRout;