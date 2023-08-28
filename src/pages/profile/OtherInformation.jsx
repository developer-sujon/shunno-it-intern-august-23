import { Accordion, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlus } from "react-icons/ai";

const OtherInformation = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Specialization</Accordion.Header>
          <Accordion.Body>
            <h4 className="d-flex align-items-center gap-2 fw-bold mt-4 mb-5">
              Add Skill <AiOutlinePlus></AiOutlinePlus>
            </h4>

            <Form.Group className="mb-3">
              <Form.Label className="fw-medium">
                Skill<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="skill" />
            </Form.Group>
            <Form.Group className="mb-5 mt-4">
              <Form.Label>How did you learn the skill? </Form.Label>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3 fw-medium">
                  <Form.Check
                    inline
                    label="Self"
                    name="skill"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Job"
                    name="skill"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Educational"
                    name="skill"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label="Professional Training"
                    name="skill"
                    type={type}
                    id={`inline-${type}-4`}
                  />
                  <Form.Check
                    inline
                    label="NTVQF"
                    name="skill"
                    type={type}
                    id={`inline-${type}-5`}
                  />
                </div>
              ))}
            </Form.Group>

            <button className="btn btn-danger px-4">
              <AiOutlineMinusCircle></AiOutlineMinusCircle>
            </button>

            <Form.Group
              className="my-4"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="fw-medium">Skill Description</Form.Label>
              <Form.Control as="textarea" rows={3} className="py-4 bg-light" />
            </Form.Group>
            <Form.Group
              className="mt-4 mb-5"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="fw-medium">
                Extracurricular Activities
              </Form.Label>
              <Form.Control as="textarea" rows={3} className="py-4 bg-light" />
            </Form.Group>

            <div className=" border border-top-0 border-start-0 border-end-0 border-5 border-primary"></div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Language Proficiency </Accordion.Header>
          <Accordion.Body>
            <h4 className="d-flex align-items-center gap-2 fw-bold mt-4 mb-5">
              Add Language<AiOutlinePlus></AiOutlinePlus>
            </h4>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">
                    Language<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="language" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">
                    Writing<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Secondary</option>
                    <option>Low</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">
                    Reading<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Secondary</option>
                    <option>Low</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">
                    Speaking<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Secondary</option>
                    <option>Low</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <button className="btn btn-danger px-4 my-4">
              <AiOutlineMinusCircle></AiOutlineMinusCircle>
            </button>
            <div className=" border border-top-0 border-start-0 border-end-0 border-5 border-primary mb-2"></div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>References</Accordion.Header>
          <Accordion.Body>
            <h4 className="d-flex align-items-center gap-2 fw-bold mt-4 mb-5">
              Add Reference <AiOutlinePlus></AiOutlinePlus>
            </h4>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">
                    Name <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder=" Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">
                    Organization <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder=" Organization" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">Relation </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Relative</option>
                    <option>Family Friend</option>
                    <option>Academic</option>
                    <option>Professional</option>
                    <option>Others</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">Phone(Off)</Form.Label>
                  <Form.Control type="number" placeholder=" Phone(Off)" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">
                    Designation <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder=" Designation" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">Email</Form.Label>
                  <Form.Control type="text" placeholder=" Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">Mobile </Form.Label>
                  <Form.Control type="number" placeholder=" Mobile " />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">Phone(Res) </Form.Label>
                  <Form.Control type="number" placeholder=" Phone(Res) " />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group
              className="my-4"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="fw-medium">Address</Form.Label>
              <Form.Control as="textarea" rows={3} className="py-4 bg-light" />
            </Form.Group>
            <button className="btn btn-danger px-4 my-4">
              <AiOutlineMinusCircle></AiOutlineMinusCircle>
            </button>
            <div className=" border border-top-0 border-start-0 border-end-0 border-5 border-primary"></div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default OtherInformation;
