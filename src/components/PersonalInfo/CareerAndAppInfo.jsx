import { useContext } from "react";
import { Accordion, Col, Form, Row } from "react-bootstrap";
import { Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import { FormContext } from "../../context/FormData";

const CareerAndAppInfo = () => {
  // form context
  const { register, control, errors } = useContext(FormContext);

  return (
    <Accordion.Item eventKey="2">
      <Accordion.Header>Career and Application Information</Accordion.Header>
      <Accordion.Body>
        <h6>
          Carrier Objective <span className="text-danger">*</span>
        </h6>
        <Controller
          control={control}
          name="careerAndAppInfo.careerObjects"
          render={({ field: { onChange, value } }) => (
            <ReactQuill
              style={{ height: "100px" }}
              theme="snow"
              onChange={onChange}
              value={value}
              rules={{ required: true }}
            />
          )}
        />
        {errors?.addressDetails?.presentAddress?.houseNo && (
          <p className="text-danger mt-5">
            {errors?.addressDetails?.presentAddress?.houseNo?.message}
          </p>
        )}
        <Row>
          <Col md={6} sm={12}>
            <Form.Group className="my-3 pt-3">
              <Form.Label>Present Salary</Form.Label>
              <Form.Control
                {...register("careerAndAppInfo.presentSalary")}
                type="text"
                placeholder="Present Salary"
              />
              <p>TK/ Month</p>
            </Form.Group>
            <Form.Group className="my-3 pt-3">
              <Form.Label>Looking for (Job Level)</Form.Label>
              <div>
                <Controller
                  control={control}
                  name="careerAndAppInfo.jobLevel"
                  render={({ field: { onChange } }) => (
                    <>
                      <Form.Check
                        inline
                        label="Entry Level"
                        name="jobLevel"
                        type="radio"
                        id={`jobLevel-1`}
                        onChange={onChange}
                        value="Entry Level"
                      />
                      <Form.Check
                        inline
                        label="Mid Level"
                        name="jobLevel"
                        type="radio"
                        id={`jobLevel-2`}
                        value="Mid Level"
                        onChange={onChange}
                      />
                      <Form.Check
                        inline
                        label="Top Level"
                        name="jobLevel"
                        type="radio"
                        id={`jobLevel-3`}
                        value="Top Level"
                        onChange={onChange}
                      />
                    </>
                  )}
                />
              </div>
            </Form.Group>
          </Col>
          <Col md={6} sm={12}>
            <Form.Group className="my-3 pt-3">
              <Form.Label>Expected Salary</Form.Label>
              <Form.Control
                type="text"
                {...register("careerAndAppInfo.expectedSalary")}
                placeholder="Expected Salary"
              />
              <p>TK/ Month</p>
            </Form.Group>
            <Form.Group className="my-3 pt-3">
              <Form.Label>Available for (Job Nature)</Form.Label>
              <div>
                <Controller
                  name="careerAndAppInfo.jobNature"
                  control={control}
                  render={({ field: { onChange } }) => (
                    <>
                      <Form.Check
                        inline
                        label="Full time"
                        name="jobNature"
                        type="radio"
                        id={`jobNature-1`}
                        onChange={onChange}
                        value="Full time"
                      />
                      <Form.Check
                        inline
                        label="Part time"
                        name="jobNature"
                        type="radio"
                        id={`jobNature-2`}
                        onChange={onChange}
                        value="Part time"
                      />
                      <Form.Check
                        inline
                        label="Contract"
                        name="jobNature"
                        type="radio"
                        id={`jobNature-3`}
                        onChange={onChange}
                        value="Contract"
                      />
                      <Form.Check
                        inline
                        label="Internship"
                        name="jobNature"
                        type="radio"
                        id={`jobNature-4`}
                        onChange={onChange}
                        value="Internship"
                      />
                      <Form.Check
                        inline
                        label="Freelance"
                        name="jobNature"
                        type="radio"
                        id={`jobNature-5`}
                        onChange={onChange}
                        value="Freelance"
                      />
                    </>
                  )}
                />
              </div>
            </Form.Group>
          </Col>
        </Row>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default CareerAndAppInfo;
