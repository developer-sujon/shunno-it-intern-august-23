import { Accordion } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlus } from "react-icons/ai";
import { useFieldArray } from "react-hook-form";
import { useContext } from "react";
import { FormContext } from "../../context/FormData";

const Specialization = () => {
  const { register, control } = useContext(FormContext);

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
            onClick={() => append({})}
          >
            Add Skill <AiOutlinePlus></AiOutlinePlus>
          </button>

          {fields.map((item, index) => (
            <div key={item.id}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-medium">
                  Skill<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  {...register(`Specialization.${index}.skill`)}
                  type="text"
                  placeholder="Skill"
                />
              </Form.Group>
              <Form.Group className="mb-5 mt-4">
                <Form.Label>How did you learn the skill? </Form.Label>

                <div className="mb-3 fw-medium">
                  <Form.Check
                    inline
                    label="Self"
                    name={`skill-${index + 11}`}
                    type="radio"
                    id={`inline-${index + 10}`}
                    value="Self"
                    {...register("Specialization.howDoYouLearn")}
                  />
                  <Form.Check
                    inline
                    label="Job"
                    name={`skill-${index + 11}`}
                    type="radio"
                    id={`inline-${index + 10}`}
                    value="Job"
                    {...register("Specialization.howDoYouLearn")}
                  />
                  <Form.Check
                    inline
                    label="Educational"
                    name={`skill-${index + 11}`}
                    type="radio"
                    id={`inline-${index + 10}`}
                    value="Educational"
                    {...register("Specialization.howDoYouLearn")}
                  />
                  <Form.Check
                    inline
                    label="Professional Training"
                    name={`skill-${index + 11}`}
                    type="radio"
                    id={`inline-${index + 10}`}
                    value="Professional Training"
                    {...register("Specialization.howDoYouLearn")}
                  />
                  <Form.Check
                    inline
                    label="NTVQF"
                    name={`skill-${index + 11}`}
                    type="radio"
                    id={`inline-${index + 10}`}
                    value="NTVQF"
                    {...register("Specialization.howDoYouLearn")}
                  />
                </div>
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
                <Form.Label className="fw-medium">Skill Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="py-4 bg-light"
                  {...register(`Specialization.${index}.SkillDescription`)}
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
                  {...register(
                    `Specialization.${index}.ExtracurricularActivities`
                  )}
                />
              </Form.Group>

              <div className=" border border-top-0 border-start-0 border-end-0 border-5 border-primary mb-4"></div>
            </div>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default Specialization;
