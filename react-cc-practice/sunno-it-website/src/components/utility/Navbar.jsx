import { Component } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { navbarBg: "transparent", toggleMenu: false };
  }

  handleScrollBg = () => {
    if (window.scrollY >= 100) {
      this.setState({ navbarBg: "#fff" });
    } else {
      this.setState({ navbarBg: "transparent" });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollBg);
  }
  componentWillUnmount() {
    window.addEventListener("scroll", this.handleScrollBg);
  }

  render() {
    const { navbarBg, toggleMenu } = this.state;

    const handleToggleMenu = () => {
      this.setState({ toggleMenu: !toggleMenu });
    };

    const navigation = (
      <>
        <li>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/about">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/services">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/team">
            Our Team
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/blog">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/career">
            Career
          </NavLink>
        </li>
      </>
    );
    return (
      <div
        id="navigation"
        style={{ background: `${navbarBg}` }}
        className="fixed-top navbar-light bg-faded site-navigation"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="site-logo">
                <a href="index.html">
                  <img src={logo} alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-7 col-md-9 col-sm-8 ">
              <div className="header_right ">
                <nav id="main-menu" className="ms-auto">
                  <ul>{navigation}</ul>
                </nav>
                <div id="mobile_menu">
                  <div className="slicknav_menu">
                    <a
                      href="#"
                      aria-haspopup="true"
                      role="button"
                      tabIndex={0}
                      className="slicknav_btn slicknav_collapsed"
                      style={{ outline: "none" }}
                      onClick={handleToggleMenu}
                    >
                      {!toggleMenu ? (
                        <FaBars className="text-light" />
                      ) : (
                        <FaTimes className="text-light" />
                      )}
                    </a>
                    {toggleMenu && (
                      <nav
                        className="slicknav_nav slicknav_hidden"
                        aria-hidden="true"
                        role="menu"
                      >
                        <ul>{navigation}</ul>
                      </nav>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-8">
              <div className="call_to_action">
                <a href="https://wa.me/+8801321141781">Call Whatsapp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
