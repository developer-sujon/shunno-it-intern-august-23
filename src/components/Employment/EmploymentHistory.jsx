import { Accordion, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlus } from "react-icons/ai";

const EmploymentHistory = () => {
  return (
    <div>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Employment History</Accordion.Header>
        <Accordion.Body>
          <h4 className="d-flex align-items-center gap-2 fw-bold mt-4 mb-5">
            Add Experience <AiOutlinePlus></AiOutlinePlus>
          </h4>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-medium">
                  Company Name<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="text" className="bg-light" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-medium">
                  Designation<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="text" className="bg-light" />
              </Form.Group>

              {/* add employment date  */}
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Employment Period<span className="text-danger">*</span>
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

              {/* add Department  */}
              <Row>
                <h5 className="d-flex align-items-center gap-2 fw-medium mt-4 mb-3">
                  Add Department <AiOutlinePlus></AiOutlinePlus>
                </h5>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">Name</Form.Label>
                    <Form.Control type="text" className="bg-light" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">Exp</Form.Label>
                    <Form.Control type="number" className="bg-light" />
                  </Form.Group>
                </Col>
                <div>
                  {/* delete button  */}
                  <button className="btn btn-danger px-4 mb-2 mt-2">
                    <AiOutlineMinusCircle></AiOutlineMinusCircle>
                  </button>
                </div>
              </Row>
              {/* Add Department end  */}
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-medium">Company Business</Form.Label>
                <Form.Control type="text" className="bg-light" />
              </Form.Group>
              <Form.Group className="mb-5 mt-4">
                <Form.Label>
                  Employee type? <span className="text-danger">*</span>{" "}
                </Form.Label>
                {["radio"].map((type) => (
                  <div key={`exp-${type}`} className="mb-3 fw-medium">
                    <Form.Check
                      inline
                      label="Remote"
                      name="exp"
                      type={type}
                      id={`exp-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="In Office"
                      name="exp"
                      type={type}
                      id={`exp-${type}-2`}
                    />
                  </div>
                ))}
              </Form.Group>
            </Col>
          </Row>

          {/* text area  */}
          <Form.Group
            className="mt-4 mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="fw-medium">Responsibilities</Form.Label>
            <Form.Control as="textarea" rows={3} className="py-4 bg-light" />
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label className="fw-medium">
              Company Location<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control type="text" className="bg-light" />
          </Form.Group>

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

export default EmploymentHistory;
