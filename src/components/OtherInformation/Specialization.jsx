import { Accordion } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlus } from "react-icons/ai";
import { useForm, useFieldArray } from "react-hook-form";

const Specialization = () => {
  const { control } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });
  return (
    <div>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Specialization</Accordion.Header>
        <Accordion.Body>
          <button
            className="d-flex align-items-center gap-2 fw-bold mt-4 mb-5 border-0 bg-white fs-4"
            type="button"
            onClick={() => append({ firstName: "bill", lastName: "luo" })}
          >
            Add Skill <AiOutlinePlus></AiOutlinePlus>
          </button>

          {fields.map((item, index) => (
            <>
              <div key={item.id}>
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

                {/* delete button  */}
                <button
                  type="button"
                  className="btn btn-danger px-4 mb-5 mt-2"
                  onClick={() => remove(index)}
                >
                  <AiOutlineMinusCircle></AiOutlineMinusCircle>
                </button>

                <Form.Group
                  className="my-4"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="fw-medium">
                    Skill Description
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    className="py-4 bg-light"
                  />
                </Form.Group>
                <Form.Group
                  className="mt-4 mb-5"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="fw-medium">
                    Extracurricular Activities
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    className="py-4 bg-light"
                  />
                </Form.Group>

                <div className=" border border-top-0 border-start-0 border-end-0 border-5 border-primary mb-4"></div>
              </div>
            </>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default Specialization;
