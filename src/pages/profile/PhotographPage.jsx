import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const PhotographPage = () => {
  return (
    <div className="d-flex flex-column gap-2">
      <img
        className="rounded img-fluid"
        style={{ width: "9rem" }}
        src="https://res.cloudinary.com/dtcoomque/image/upload/v1663317145/vz7iz88hfniwxejirvjw.png"
        alt="profile image loading..."
      />
      <Row>
        <Col md="4">
          <Form.Group controlId="formFile" className="my-2 w-full rounded-2">
            <Form.Control type="file" />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default PhotographPage;
