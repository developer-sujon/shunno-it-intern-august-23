//External Lib Import
import { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { AiOutlineLogout, AiOutlineMenuUnfold } from "react-icons/ai";
import { BsArrowsFullscreen } from "react-icons/bs";
import { Link } from "react-router-dom";

//Internal Lib Import
import { useTranslation } from "react-i18next";
import Logo from "../assets/images/logo.png";
import defaultUserAvatar from "../assets/images/user.png";

const Navigation = ({ openMenu, setOpenMenu, title = "Home" }) => {
  const { t } = useTranslation();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const FullScreen = () => {
    if (isFullScreen === true) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullScreen(false);
    } else {
      let elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
      setIsFullScreen(true);
    }
  };

  const profileDetails = {};

  const logout = () => {};

  return (
    <>
      <title>{title}</title>
      <Navbar className="fixed-top px-0 shadow-sm ">
        <Container fluid={true}>
          <Navbar.Brand>
            <button
              className="icon-nav m-0 h5 btn btn-link"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <AiOutlineMenuUnfold />
            </button>
            <Link to="/">
              <img className="nav-logo mx-2" src={Logo} alt="logo" />
            </Link>
          </Navbar.Brand>

          <div className="float-right h-auto d-flex">
            <div></div>
            <button
              className="mx-2 icon-nav h6 px-3 btn btn-link"
              onClick={FullScreen}
            >
              <BsArrowsFullscreen />
            </button>

            {profileDetails && (
              <div className="user-dropdown">
                <img
                  className="icon-nav-img icon-nav"
                  src={profileDetails?.photo || defaultUserAvatar}
                  alt={profileDetails?.email}
                  onClick={() => setOpenDropdown(!openDropdown)}
                />
                <div
                  className={
                    openDropdown
                      ? "user-dropdown-content d-block"
                      : "user-dropdown-content"
                  }
                >
                  <div className="mt-4 text-center">
                    <img
                      className="icon-nav-img"
                      src={profileDetails?.photo || defaultUserAvatar}
                      alt={profileDetails?.email}
                    />
                    <h6>{profileDetails?.name}</h6>
                    <hr className="user-dropdown-divider  p-0" />
                  </div>
                  {/* <NavLink to="/profile" className={({ isActive }) => (isActive ? 'link-item-active' : 'link-item')}>
                    <AiOutlineUser className="link-item-icon" />
                    <span className="link-item-caption">{t('profile')}</span>
                  </NavLink> */}{" "}
                  <span
                    onClick={logout}
                    className="link-item"
                    style={{ cursor: "pointer" }}
                  >
                    <AiOutlineLogout className="link-item-icon" />
                    <span className="link-item-caption">{t("logout")}</span>
                  </span>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
