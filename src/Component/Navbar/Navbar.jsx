import React from "react";
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <h1 className="mb-3 mt-5">Update Profile</h1>
      <div>
        <Link to='/' className="text-decoration-none fs-6">
          <a className={classes.text_1} href="">
            Personal Info
          </a>
        </Link>
        <Link to='/education_tranning' className="text-decoration-none fs-6">
          <a className={classes.text_1} href="">
            Educaton/Training
          </a>
        </Link>
        <Link to='/employement' className="text-decoration-none fs-6">
          <a className={classes.text_1} href="">
            Employment
          </a>
        </Link>
        <Link to='/otherInfo' className="text-decoration-none fs-6">
          <a className={classes.text_1} href="">
            Other Information
          </a>
        </Link>
        <Link to='/photograph' className="text-decoration-none fs-6">
          <a className={classes.text_1} href="">
            Photograph
          </a>
        </Link>
      </div>
      <hr className="mt-4" />
    </div>
  );
};

export default Navbar;
