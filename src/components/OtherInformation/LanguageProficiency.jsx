import { Accordion, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlus } from "react-icons/ai";
import { useForm, useFieldArray } from "react-hook-form";

const LanguageProficiency = () => {
  const { control } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute
  });
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
            onClick={() => append({ firstName: "bill", lastName: "luo" })}
          >
            Add Language <AiOutlinePlus></AiOutlinePlus>
          </button>
          {fields.map((item, index) => (
            <>
              <Row key={item.id}>
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
              {/* delete button  */}
              <button
                type="button"
                className="btn btn-danger px-4 mb-5 mt-2"
                onClick={() => remove(index)}
              >
                <AiOutlineMinusCircle></AiOutlineMinusCircle>
              </button>
              <div className=" border border-top-0 border-start-0 border-end-0 border-5 border-primary mb-4"></div>
            </>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default LanguageProficiency;
