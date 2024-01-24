import React from 'react';
import NavBar from './nav bar/NavBar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='lg:w-[1400px] mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;