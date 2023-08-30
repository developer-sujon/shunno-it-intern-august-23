import { useContext } from "react";
import { Accordion, Col, Form, Row } from "react-bootstrap";
import { useFieldArray } from "react-hook-form";
import { AiOutlineMinusCircle, AiOutlinePlus } from "react-icons/ai";

import { FormContext } from "../../context/FormData";
//validation

const AcademicSummery = () => {
  //Form Context
  const { register, control, errors } = useContext(FormContext);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "Educations",
  });

  return (
    <div>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Academic Summery</Accordion.Header>
        <Accordion.Body>
          <button
            className="d-flex align-items-center gap-2 fw-bold mt-4 mb-5 border-0 bg-white fs-4"
            type="button"
            onClick={() => append({})}
          >
            Add Education <AiOutlinePlus></AiOutlinePlus>
          </button>
          {fields.map((item, index) => (
            <div key={item.id}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Level of Education <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="bg-light"
                      {...register(`Educations.${index}.LevelEducation`, {
                        required: true,
                      })}
                    >
                      <option>PSC</option>
                      <option>JSC/JDC</option>
                      <option>SSC</option>
                      <option>HSC</option>
                      <option>Diploma</option>
                      <option>Bachelor/Honors</option>
                      <option>Masters</option>
                      <option>PhD</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Concentration/ Major/Group
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="bg-light"
                      placeholder="Computer Science"
                      {...register(`Educations.${index}.Major_group`)}
                    />

                    {errors?.Educations?.[index]?.Major_group?.message && (
                      <small className="text-danger">
                        {errors?.Educations?.[index]?.Major_group?.message}
                      </small>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Exam/Degree Title <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="bg-light"
                      {...register(`Educations.${index}.ExamTitle`)}
                    >
                      <option>SSC</option>
                      <option>O level</option>
                      <option>Secondary</option>
                      <option>Dakhil(Madrashah)</option>
                      <option>SSC(Vocational)</option>
                      <option>Others</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Board <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="bg-light"
                      {...register(`Educations.${index}.Borad`)}
                    >
                      <option>Rajshahi</option>
                      <option>Dhaka</option>
                      <option>Dinajpur</option>
                      <option>Barisal</option>
                      <option>Jessore</option>
                      <option>Cumilla</option>
                      <option>Sylet</option>
                      <option>Mymansingh</option>
                      <option>Chattagram</option>
                      <option>Madrashah</option>

                      <option>Technical</option>
                      <option>BOU</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3 ">
                <Form.Label className="fw-medium">
                  Institute Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="bg-light"
                  {...register(`Educations.${index}.Institute_name`)}
                />

                {errors?.Educations?.[index]?.Institute_name?.message && (
                  <small className="text-danger">
                    {errors?.Educations?.[index]?.Institute_name?.message}
                  </small>
                )}
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Result <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="bg-light"
                      {...register(`Educations.${index}.result`)}
                    >
                      {errors?.Educations?.[index]?.result?.message && (
                        <small className="text-danger">
                          {errors?.Educations?.[index]?.result?.message}
                        </small>
                      )}
                      <option>First Division/class</option>
                      <option>Second Division/class</option>
                      <option>Third Division/class</option>
                      <option>Grade</option>
                      <option>Appeared</option>
                      <option>Enrolled</option>
                      <option>Masters</option>
                      <option>PhD</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Duration (Years)
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="bg-light"
                      {...register(`Educations.${index}.Duration_Year`)}
                    />
                    {errors?.Educations?.[index]?.Duration_Year?.message && (
                      <small className="text-danger">
                        {errors?.Educations?.[index]?.Duration_Year?.message}
                      </small>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Year of Passing <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="bg-light"
                      {...register(`Educations.${index}.passingYear`)}
                    >
                      <option>2010</option>
                      <option>2012</option>
                      <option>2014</option>
                      <option>2015</option>
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Achievement</Form.Label>
                    <Form.Control
                      type="text"
                      className="bg-light"
                      {...register(`Educations.${index}. Achievement`)}
                    />
                    {errors?.Educations?.[index]?.Achievement?.message && (
                      <small className="text-danger">
                        {errors?.Educations?.[index]?.Achievement?.message}
                      </small>
                    )}
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

              {/* horizontal row  */}
              <div className=" border border-top-0 border-start-0 border-end-0 border-5 border-primary mb-4"></div>
            </div>
          ))}
          {/* <input type="submit" /> */}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default AcademicSummery;