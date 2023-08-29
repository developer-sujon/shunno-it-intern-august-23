import { Accordion, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlus } from "react-icons/ai";
import { useForm, useFieldArray } from "react-hook-form";

const References = () => {
  const { control } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });
  return (
    <div>
      <Accordion.Item eventKey="2">
        <Accordion.Header>References</Accordion.Header>
        <Accordion.Body>
          <button
            className="d-flex align-items-center gap-2 fw-bold mt-4 mb-5 border-0 bg-white fs-4"
            type="button"
            onClick={() => append({ firstName: "bill", lastName: "luo" })}
          >
            Add Reference <AiOutlinePlus></AiOutlinePlus>
          </button>
          {fields.map((item, index) => (
            <>
              <Row key={item.id}>
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
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="py-4 bg-light"
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
              <div className=" border border-top-0 border-start-0 border-end-0 border-5 border-primary mb-5"></div>
            </>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default References;
