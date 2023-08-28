import { Accordion, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlus } from "react-icons/ai";

const ProfessionalSummery = () => {
  return (
    <div>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Professional Certification Summery</Accordion.Header>
        <Accordion.Body>
          <h4 className="d-flex align-items-center gap-2 fw-bold mt-4 mb-5">
            Add Professional <AiOutlinePlus></AiOutlinePlus>
          </h4>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-medium">
                  Certification
                  <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="text" className="bg-light" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-medium">Location</Form.Label>
                <Form.Control type="text" className="bg-light" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-medium">
                  Institute
                  <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="text" className="bg-light" />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Duration<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="date" className="bg-light" />
                  </Form.Group>
                </Col>
                <Col md={6} className="d-flex align-items-end">
                  <Form.Group className="mb-3 w-100">
                    <Form.Label className="fw-medium"></Form.Label>
                    <Form.Control type="date" className="bg-light" />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* delete button  */}
          <button className="btn btn-danger px-4 mb-5 mt-2">
            <AiOutlineMinusCircle></AiOutlineMinusCircle>
          </button>
          {/* horizontal row  */}
          <div className=" border border-top-0 border-start-0 border-end-0 border-5 border-primary mb-2"></div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default ProfessionalSummery;
