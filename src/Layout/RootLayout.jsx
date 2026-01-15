import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';
import Navbar from '../Component/Navbar/Navbar';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;