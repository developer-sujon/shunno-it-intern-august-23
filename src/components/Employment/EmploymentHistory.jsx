import { Accordion, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlus } from "react-icons/ai";
import { useFieldArray } from "react-hook-form";
import { useContext } from "react";
import { FormContext } from "../../context/FormData";

const EmploymentHistory = () => {
  // form context
  const { register, control } = useContext(FormContext);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });
  return (
    <div>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Employment History</Accordion.Header>
        <Accordion.Body>
          <button
            className="d-flex align-items-center gap-2 fw-bold mt-4 mb-5 border-0 bg-white fs-4"
            type="button"
            onClick={() => append({})}
          >
            Add Experience <AiOutlinePlus></AiOutlinePlus>
          </button>
          {fields.map((item, index) => (
            <div key={index}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Company Name<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      {...register(`EmployeeHistory.${index}.CompanyName`)}
                      className="bg-light"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Designation<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      {...register(`EmployeeHistory.${index}.Designation`)}
                      type="text"
                      className="bg-light"
                    />
                  </Form.Group>

                  {/* add employment date  */}
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium">
                          Employment Period
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          {...register(
                            `EmployeeHistory.${index}.EmploymentPeriodStart`
                          )}
                          type="date"
                          className="bg-light"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="d-flex align-items-end">
                      <Form.Group className="mb-3 w-100">
                        <Form.Label className="fw-medium"></Form.Label>
                        <Form.Control
                          {...register(
                            `EmployeeHistory.${index}.EmploymentPeriodEnd`
                          )}
                          type="date"
                          className="bg-light"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* add Department  */}
                  <button
                    className="d-flex align-items-center gap-2 fw-bold mt-4 mb-5 border-0 bg-white fs-6"
                    type="button"
                    onClick={() => append({})}
                  >
                    Add department <AiOutlinePlus></AiOutlinePlus>
                  </button>
                  {fields.map((item2, i) => (
                    <Row key={item2.id}>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-medium">Name</Form.Label>
                          <Form.Control
                            {...register(
                              `EmployeeHistory.${index}.Department.Name`
                            )}
                            type="text"
                            className="bg-light"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-medium">Exp</Form.Label>
                          <Form.Control
                            {...register(
                              `EmployeeHistory.${index}.Department.Exp`
                            )}
                            type="number"
                            className="bg-light"
                          />
                        </Form.Group>
                      </Col>

                      <div>
                        {/* delete button  */}
                        <button
                          type="button"
                          className="btn btn-danger px-4 mb-5 mt-2"
                          onClick={() => remove(i)}
                        >
                          <AiOutlineMinusCircle></AiOutlineMinusCircle>
                        </button>
                      </div>
                    </Row>
                  ))}

                  {/* Add Department end  */}
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Company Business
                    </Form.Label>
                    <Form.Control
                      {...register(`EmployeeHistory.${index}.CompanyBusiness`)}
                      type="text"
                      className="bg-light"
                    />
                  </Form.Group>
                  <Form.Group className="mb-5 mt-4">
                    <Form.Label>
                      Employee type? <span className="text-danger">*</span>
                    </Form.Label>

                    <div>
                      <Form.Check
                        inline
                        label="Remote"
                        value="Remote"
                        name={`empType-${index}`}
                        type="radio"
                        id={`exp-${index}`}
                        {...register(`EmployeeHistory.${index}.EmployeeType`)}
                      />
                      <Form.Check
                        inline
                        label="In Office"
                        name={`empType-${index + 11}`}
                        value="In Office"
                        type="radio"
                        id={`exp-${index + 11}`}
                        {...register(`EmployeeHistory.${index}.EmployeeType`)}
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              {/* text area  */}
              <Form.Group
                className="mt-4 mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="fw-medium">Responsibilities</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="py-4 bg-light"
                  {...register("EmployeeHistory.Responsibilities")}
                />
              </Form.Group>

              <Form.Group className="mb-3 ">
                <Form.Label className="fw-medium">
                  Company Location<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  {...register("EmployeeHistory.CompanyLocation")}
                  type="text"
                  className="bg-light"
                />
              </Form.Group>

              {/* delete button  */}
              <button
                type="button"
                className="btn btn-danger px-4 mb-5 mt-2"
                onClick={() => remove(index)}
              >
                <AiOutlineMinusCircle></AiOutlineMinusCircle>
              </button>
              {/* horizontal row  */}
              <div className=" border border-top-0 border-start-0 border-end-0 border-5 border-primary mb-5"></div>
            </div>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default EmploymentHistory;
