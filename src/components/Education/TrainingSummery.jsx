import { useContext } from "react";
import { Accordion, Col, Form, Row } from "react-bootstrap";
import { useFieldArray } from "react-hook-form";
import { AiOutlineMinusCircle, AiOutlinePlus } from "react-icons/ai";
import { FormContext } from "../../context/FormData";

const TrainingSummery = () => {
  //Form Context
  const { register, control, errors } = useContext(FormContext);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "Trainings",
  });

  return (
    <div>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Training Summery</Accordion.Header>
        <Accordion.Body>
          <button
            className="d-flex align-items-center gap-2 fw-bold mt-4 mb-5 border-0 bg-white fs-4"
            type="button"
            onClick={() => append({})}
          >
            Add Training <AiOutlinePlus></AiOutlinePlus>
          </button>

          {fields.map((item, index) => (
            <>
              <Row key={item.id}>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Training Title
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className={`bg-light ${
                        errors?.Trainings?.[index]?.Title && "is-invalid"
                      }`}
                      {...register(`Trainings.${index}.Title`, {
                        required: {
                          value: true,
                          message: "This filed is required",
                        },
                      })}
                    />
                    {errors?.Trainings?.[index]?.Title?.message && (
                      <small className="text-danger">
                        {errors?.Trainings?.[index]?.Title?.message}
                      </small>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Topics Covered
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="bg-light"
                      {...register(`Trainings.${index}.Covered`)}
                    />
                    {errors?.Trainings?.[index]?.Covered?.message && (
                      <small className="text-danger">
                        {errors?.Trainings?.[index]?.Covered?.message}
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Institute
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className={`bg-light ${
                        errors?.Trainings?.[index]?.Institute && "is-invalid"
                      }`}
                      {...register(`Trainings.${index}.Institute`, {
                        required: {
                          value: true,
                          message: "This filed is required",
                        },
                      })}
                    />
                    {errors?.Trainings?.[index]?.Institute?.message && (
                      <small className="text-danger">
                        {errors?.Trainings?.[index]?.Institute?.message}
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">Location</Form.Label>
                    <Form.Control
                      type="text"
                      className="bg-light"
                      {...register(`Trainings.${index}.Location`)}
                    />
                    {errors?.Trainings?.[index]?.Location?.message && (
                      <small className="text-danger">
                        {errors?.Trainings?.[index]?.Location?.message}
                      </small>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Country
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className={`bg-light ${
                        errors?.Trainings?.[index]?.Country && "is-invalid"
                      }`}
                      {...register(`Trainings.${index}.Country`, {
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                      })}
                    />
                    {errors?.Trainings?.[index]?.Country?.message && (
                      <small className="text-danger">
                        {errors?.Trainings?.[index]?.Country?.message}
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Training Year <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="bg-light"
                      {...register(`Trainings.${index}.Year`)}
                    >
                      <option>2010</option>
                      <option>2012</option>
                      <option>2014</option>
                      <option>2016</option>
                      <option>2020</option>
                      <option>2022</option>
                      <option>2023</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Duration <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="bg-light"
                      {...register(`Trainings.${index}.Duration`)}
                    >
                      <option>1 month</option>
                      <option>2 months</option>
                      <option>3 months</option>
                      <option>4 months</option>
                      <option>5 months</option>
                      <option>6 months</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              {/* delete button  */}

              {/* horizontal row  */}
              <div className=" border border-top-0 border-start-0 border-end-0 border-5 border-primary mb-2"></div>

              {/* <Controller
              render={({ field }) => <input {...field} />}
              name={`test.${index}.lastName`}
              control={control}
            />  */}
              <button
                type="button"
                className="btn btn-danger px-4 mb-5 mt-2"
                onClick={() => remove(index)}
              >
                <AiOutlineMinusCircle></AiOutlineMinusCircle>
              </button>
            </>
          ))}

          {/* <input type="submit" /> */}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default TrainingSummery;
