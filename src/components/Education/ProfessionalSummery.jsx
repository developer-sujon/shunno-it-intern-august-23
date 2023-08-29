import { useContext } from "react";
import { Accordion, Col, Form, Row } from "react-bootstrap";
import { useFieldArray } from "react-hook-form";
import { AiOutlineMinusCircle, AiOutlinePlus } from "react-icons/ai";
import { FormContext } from "../../context/FormData";

const ProfessionalSummery = () => {
  const { register, control } = useContext(FormContext);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "Professionals",
  });
  return (
    <div>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Professional Certification Summery</Accordion.Header>
        <Accordion.Body>
          <button
            className="d-flex align-items-center gap-2 fw-bold mt-4 mb-5 border-0 bg-white fs-4"
            type="button"
            onClick={() => append({})}
          >
            Add Professional <AiOutlinePlus></AiOutlinePlus>
          </button>
          {fields.map((item, index) => (
            <>
              <Row key={item.id}>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Certification
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="bg-light"
                      {...register(`Professionals.${index}.Certification`)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">Location</Form.Label>
                    <Form.Control
                      type="text"
                      className="bg-light"
                      {...register(`Professionals.${index}.Location`)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Institute
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="bg-light"
                      {...register(`Professionals.${index}.Institute`)}
                    />
                  </Form.Group>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium">
                          Duration<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="date"
                          className="bg-light"
                          {...register(`Professionals.${index}.StartDate`)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="d-flex align-items-end">
                      <Form.Group className="mb-3 w-100">
                        <Form.Label className="fw-medium"></Form.Label>
                        <Form.Control
                          type="date"
                          className="bg-light"
                          {...register(`Professionals.${index}.EndDate`)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
              </Row>

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
            </>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default ProfessionalSummery;
