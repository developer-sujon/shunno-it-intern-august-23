import { Accordion, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlus } from "react-icons/ai";
import { useFieldArray } from "react-hook-form";
import { useContext } from "react";
import { FormContext } from "../../context/FormData";

const LanguageProficiency = () => {
  const { register, control } = useContext(FormContext);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });
  return (
    <div>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Language Proficiency </Accordion.Header>
        <Accordion.Body>
          <button
            className="d-flex align-items-center gap-2 fw-bold mt-4 mb-5 border-0 bg-white fs-4"
            type="button"
            onClick={() => append({})}
          >
            Add Language <AiOutlinePlus></AiOutlinePlus>
          </button>
          {fields.map((item, index) => (
            <div key={item.id}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Language<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      {...register(`LanguageProficiency.${index}.Language`)}
                      type="text"
                      placeholder="language"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Writing<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      {...register(`LanguageProficiency.${index}.writing`)}
                      aria-label="Default select example"
                    >
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
                    <Form.Select
                      {...register(`LanguageProficiency.${index}.reading`)}
                      aria-label="Default select example"
                    >
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
                    <Form.Select
                      {...register(`LanguageProficiency.${index}.speaking`)}
                      aria-label="Default select example"
                    >
                      <option>High</option>
                      <option>Medium</option>
                      <option>Secondary</option>
                      <option>Low</option>
                    </Form.Select>
                  </Form.Group>
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
              <div className=" border border-top-0 border-start-0 border-end-0 border-5 border-primary mb-4"></div>
            </div>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default LanguageProficiency;
