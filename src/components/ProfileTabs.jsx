import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ProfileTabs = () => {
  return (
    <div className="border border-top-0 border-start-0 border-end-0 mb-4">
      <Nav variant="underline" defaultActiveKey="/home">
        <Nav.Item>
          <NavLink className="nav-link text-secondary" to="/">
            Personal Info
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            className="nav-link text-secondary"
            to="/profile/personal-info"
          >
            Personal Info
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default ProfileTabs;
