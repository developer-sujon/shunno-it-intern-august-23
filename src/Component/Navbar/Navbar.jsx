import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div>
            <h1 className='mb-3 mt-5'>Update Profile</h1>
            <div>
            <Link className='text-decoration-none fs-5'><a className={classes.text_1}  href="">Personal Info</a></Link>
            <Link className='text-decoration-none'><a className={classes.text_1} href="">Educaton/Training</a></Link>
            <Link className='text-decoration-none'><a className={classes.text_1} href="">Employment</a></Link>
            <Link className='text-decoration-none'><a className={classes.text_1} href="">Other Information</a></Link>
            <Link className='text-decoration-none'><a className={classes.text_1} href="">Photograph</a></Link>
            </div>
        </div>
    );
};

export default Navbar;