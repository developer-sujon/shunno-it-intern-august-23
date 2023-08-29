import { useContext } from "react";
import { Accordion, Col, Form, Row } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";
import { AiOutlineMinusCircle, AiOutlinePlus } from "react-icons/ai";
import { FormContext } from "../../context/FormData";

const TrainingSummery = () => {
  //Default Value
  const DataDefault = {
    LevelOfEducation: "SSC",
    Major_group: "Science",
    ExamTitle: "HSC",
    Borad: "Dhaka",
    Institute_name: "Tangail polytechinc",
    result: "Grade",
    Duration_Year: "4 year",
    passingYear: "2002",
    Achievement: "Good Achievement",
  };
  const { control } = useForm({
    defaultValues: {
      Trainings: [DataDefault],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  //Form Context
  const { register } = useContext(FormContext);
  return (
    <div>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Training Summery</Accordion.Header>
        <Accordion.Body>
          <button
            className="d-flex align-items-center gap-2 fw-bold mt-4 mb-5 border-0 bg-white fs-4"
            type="button"
            onClick={() => append({ firstName: "bill", lastName: "luo" })}
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
                      className="bg-light"
                      {...register("0.Trainings.Title")}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Topics Covered
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="bg-light"
                      {...register("1.Trainings.Covered")}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Institute
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="text" className="bg-light" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">Location</Form.Label>
                    <Form.Control type="text" className="bg-light" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Country
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="text" className="bg-light" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Training Year <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="bg-light"
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
