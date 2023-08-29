import { Accordion, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormContext } from "../../context/FormData";
import { useContext } from "react";

const EmploymentHistoryArmy = () => {
  // form context
  const { register } = useContext(FormContext);

  return (
    <div>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Employment History For(Retired Army Person)
        </Accordion.Header>
        <Accordion.Body className="mt-4">
          <Row>
            <Col md={6}>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      BA No <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      {...register("EmployeeHistoryArmy.BaShort")}
                      aria-label="Default select example"
                      className="bg-light"
                    >
                      <option>BA</option>
                      <option>BSS</option>
                      <option>JSS</option>
                      <option>BSP</option>
                      <option>BJO</option>
                      <option>No</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={8}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      BANo <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      {...register("EmployeeHistoryArmy.BaNo")}
                      type="text"
                      placeholder="BANo"
                      className="bg-light"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>
                  Type <span className="text-danger">*</span>
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className="bg-light"
                  {...register("EmployeeHistoryArmy.type")}
                >
                  <option>Officer</option>
                  <option>JCO</option>
                  <option>NCO</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Trade</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Trade"
                  className="bg-light"
                  {...register("EmployeeHistoryArmy.trade")}
                />
              </Form.Group>
              <Form.Group className="mb-5">
                <Form.Label>
                  Date of Commission <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="date"
                  className="bg-light"
                  {...register("EmployeeHistoryArmy.DOC")}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Ranks <span className="text-danger">*</span>
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className="bg-light"
                  {...register("EmployeeHistoryArmy.rank")}
                >
                  <option>2Lt</option>
                  <option>Lt</option>
                  <option>Captain</option>
                  <option>Major</option>
                  <option>Lt Col</option>
                  <option>Col</option>
                  <option>Brig Gen</option>
                  <option>Lt Gen</option>
                  <option>Gen</option>
                  <option>CoSnkl</option>
                  <option>l/cpl</option>
                  <option>CPL</option>
                  <option>Sgt</option>
                  <option>WO</option>
                  <option>SWO</option>
                  <option>MWO</option>
                  <option>H/Lt</option>
                  <option>H/Capt</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  Arms <span className="text-danger">*</span>
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className="bg-light"
                  {...register("EmployeeHistoryArmy.arms")}
                >
                  <option>Sigs</option>
                  <option>Engr</option>
                  <option>Eme</option>
                  <option>Ord</option>
                  <option>AMC</option>
                  <option>AFC</option>
                  <option>CMP</option>
                  <option>ADC</option>
                  <option>AFNS</option>
                  <option>RVFC</option>
                  <option>ACC</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Course"
                  className="bg-light"
                  {...register("EmployeeHistoryArmy.course")}
                />
              </Form.Group>

              <Form.Group className="mb-5">
                <Form.Label>
                  Date of Retirement <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="date"
                  className="bg-light"
                  {...register("EmployeeHistoryArmy.DOR")}
                />
              </Form.Group>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default EmploymentHistoryArmy;
