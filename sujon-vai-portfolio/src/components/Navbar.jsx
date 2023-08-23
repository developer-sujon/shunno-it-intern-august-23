import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggleNave, setToggleNav] = useState(false);

  return (
    <nav className="nav" id="nav">
      <div className="nav__wrapper">
        <div className="nav__wrapper__logo">
          <NavLink to="/" className="nav__wrapper__logo__brand">
            Sujon
          </NavLink>
        </div>
        <ul className={`nav__wrapper__ul ${toggleNave && "nav_active"}`}>
          <li className="nav__wrapper__ul__li">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "nav__wrapper__ul__li__a active"
                  : "nav__wrapper__ul__li__a"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav__wrapper__ul__li">
            <NavLink to="/about" className="nav__wrapper__ul__li__a">
              About
            </NavLink>
          </li>
          <li className="nav__wrapper__ul__li">
            <NavLink to="/education" className="nav__wrapper__ul__li__a">
              Experiance
            </NavLink>
          </li>
          <li className="nav__wrapper__ul__li">
            <NavLink to="/project" className="nav__wrapper__ul__li__a">
              Project
            </NavLink>
          </li>
          <li className="nav__wrapper__ul__li">
            <NavLink to="/blogs" className="nav__wrapper__ul__li__a">
              Blogs
            </NavLink>
          </li>
        </ul>
        <div
          onClick={() => setToggleNav(!toggleNave)}
          className="nav__wrapper__toggle "
        >
          <i className={`bi ${toggleNave ? " bi-x" : "bi-text-right"}`} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
