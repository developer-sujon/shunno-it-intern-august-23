import { Accordion, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlus } from "react-icons/ai";
import { useFieldArray } from "react-hook-form";
import { useContext } from "react";
import { FormContext } from "../../context/FormData";

const References = () => {
  const { register, control, errors } = useContext(FormContext);

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
            onClick={() => append({})}
          >
            Add Reference <AiOutlinePlus></AiOutlinePlus>
          </button>
          {fields.map((item, index) => (
            <div key={item.id}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Name <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      {...register(`References.${index}.Name`, {
                        required: {
                          value: true,
                          message: "reference name is required",
                        },
                      })}
                      type="text"
                      placeholder=" Name"
                    />
                    {errors?.References?.[index].Name && (
                      <small className="text-danger">
                        {errors?.References?.[index].Name.message}
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Organization <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      {...register(`References.${index}.Organization`, {
                        required: {
                          value: true,
                          message: "reference organization is required",
                        },
                      })}
                      type="text"
                      placeholder=" Organization"
                    />
                    {errors?.References?.[index].Organization && (
                      <small className="text-danger">
                        {errors?.References?.[index].Organization.message}
                      </small>
                    )}
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
                    <Form.Control
                      {...register(`References.${index}.phoneOff`)}
                      type="number"
                      placeholder=" Phone(Off)"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Designation <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      {...register(`References.${index}.Designation`, {
                        required: {
                          value: true,
                          message: "reference Designation is required",
                        },
                      })}
                      type="text"
                      placeholder=" Designation"
                    />
                    {errors?.References?.[index].Designation && (
                      <small className="text-danger">
                        {errors?.References?.[index].Designation.message}
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">Email</Form.Label>
                    <Form.Control
                      {...register(`References.${index}.email`)}
                      type="text"
                      placeholder=" Email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">Mobile </Form.Label>
                    <Form.Control
                      {...register(`References.${index}.Mobile`)}
                      type="number"
                      placeholder=" Mobile "
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">Phone(Res) </Form.Label>
                    <Form.Control
                      {...register(`References.${index}.phone(Res)`)}
                      type="number"
                      placeholder=" Phone(Res) "
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group
                className="my-4"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="fw-medium">Address</Form.Label>
                <Form.Control
                  {...register(`References.${index}.address`)}
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
            </div>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default References;
