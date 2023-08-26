import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='container'>
            <Navbar/>
            <Outlet/>
        </div>
    );
}

export default Main;
