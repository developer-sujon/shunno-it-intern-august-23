import { Container, Navbar } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

const Navigation = () => {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home">Cv Builder</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <span className="bg-white rounded-circle p-2 cursor-pointer d-flex align-items-center">
              <FaUser />
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
