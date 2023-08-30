import { Accordion } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlus } from "react-icons/ai";
import { useFieldArray } from "react-hook-form";
import { useContext } from "react";
import { FormContext } from "../../context/FormData";

const Specialization = () => {
  const { register, control, errors } = useContext(FormContext);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "Specialization",
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
                  {...register(`Specialization.${index}.skill`, {
                    required: { value: true, message: "Skill is required" },
                    minLength: 3,
                  })}
                  // aria-invalid={errors.skill ? "true" : "false"}
                  type="text"
                  placeholder="Skill"
                />
                {/* {console.log(errors)} */}
                {errors?.Specialization?.[index].skill && (
                  <small className="text-danger">
                    {errors?.Specialization[index].skill.message}
                  </small>
                )}
              </Form.Group>
              <Form.Group className="mb-5 mt-4">
                <Form.Label>How did you learn the skill? </Form.Label>

                <div className="mb-3 fw-medium">
                  <Form.Check
                    inline
                    label="Self"
                    name={`skill-${index}`}
                    type="radio"
                    id={`inline-${index}`}
                    value="Self"
                    {...register(`Specialization.${index}.howDoYouLearn`)}
                  />
                  <Form.Check
                    inline
                    label="Job"
                    name={`skill-${index + 10}`}
                    type="radio"
                    id={`inline-${index + 10}`}
                    value="Job"
                    {...register(`Specialization.${index}.howDoYouLearn`)}
                  />
                  <Form.Check
                    inline
                    label="Educational"
                    name={`skill-${index + 20}`}
                    type="radio"
                    id={`inline-${index + 20}`}
                    value="Educational"
                    {...register(`Specialization.${index}.howDoYouLearn`)}
                  />
                  <Form.Check
                    inline
                    label="Professional Training"
                    name={`skill-${index + 30}`}
                    type="radio"
                    id={`inline-${index + 30}`}
                    value="Professional Training"
                    {...register(`Specialization.${index}.howDoYouLearn`)}
                  />
                  <Form.Check
                    inline
                    label="NTVQF"
                    name={`skill-${index + 40}`}
                    type="radio"
                    id={`inline-${index + 40}`}
                    value="NTVQF"
                    {...register(`Specialization.${index}.howDoYouLearn`)}
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
                  {...register(`Specialization.${index}.SkillDescription`, {
                    required: {
                      value: true,
                      message: "Description is required",
                    },
                    minLength: 20,
                  })}
                />
                {errors?.Specialization?.[index].SkillDescription && (
                  <small className="text-danger">
                    {errors?.Specialization[index].SkillDescription.message}
                  </small>
                )}
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
                    `Specialization.${index}.ExtracurricularActivities`,
                    {
                      required: {
                        value: true,
                        message: "extra activities is required",
                      },
                      minLength: 20,
                    }
                  )}
                />
                {errors?.Specialization?.[index].ExtracurricularActivities && (
                  <small className="text-danger">
                    {
                      errors?.Specialization[index].ExtracurricularActivities
                        .message
                    }
                  </small>
                )}
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
