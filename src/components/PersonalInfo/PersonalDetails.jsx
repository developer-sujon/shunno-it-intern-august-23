import { useContext, useState } from "react";
import { Accordion, Col, Form, Row } from "react-bootstrap";
import { FormContext } from "../../context/FormData";
import useCountries from "../../hooks/useCountries";

//phone number input package
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const PersonalDetails = () => {
  // form context
  const { register, errors } = useContext(FormContext);

  // input filed state
  const [primaryPhoneNumber, setPrimaryPhoneNumber] = useState("");
  const [secondaryPhoneNumber, setSecondaryPhoneNumber] = useState("");

  // custom hooks
  const [nationalities] = useCountries();
  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>Personal Details</Accordion.Header>
      <Accordion.Body>
        <Row>
          <Col md={6} sm={12}>
            <Form.Group className="mb-3">
              <Form.Label>
                First Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                {...register("personalInfo.firstName", {
                  required: {
                    value: true,
                    message: "This filed is required",
                  },
                  minLength: {
                    value: 5,
                    message: "Minimum value should be 5",
                  },
                })}
                type="text"
                placeholder="First Name"
                className={`bg-light ${
                  errors?.personalInfo?.firstName?.message && "is-invalid"
                }`}
              />
              {errors.personalInfo && (
                <p className="text-danger">
                  {errors?.personalInfo?.firstName?.message}
                </p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Father&apos;s Name</Form.Label>
              <Form.Control
                {...register("personalInfo.fatherName", {
                  required: {
                    value: true,
                    message: "This filed is required",
                  },
                  minLength: {
                    value: 5,
                    message: "Minimum value should be 5",
                  },
                })}
                type="text"
                placeholder="Father's Name"
                className={`bg-light ${
                  errors?.personalInfo?.fatherName?.message && "is-invalid"
                }`}
              />
              {errors.EmployeeHistory && (
                <p className="text-danger">
                  {errors?.personalInfo?.fatherName?.message}
                </p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                Date of Birth <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control {...register("personalInfo.dob")} type="date" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                Religion <span className="text-danger">*</span>
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                {...register("personalInfo.religion")}
              >
                <option>Islam</option>
                <option>Hindu</option>
                <option>Others</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                Nationality <span className="text-danger">*</span>
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                {...register("personalInfo.nationality")}
              >
                {nationalities.map((name, index) => (
                  <option key={index}>{name.nationality}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Passport Number</Form.Label>
              <Form.Control
                type="number"
                {...register("personalInfo.passportNumber", {
                  required: {
                    value: true,
                    message: "This filed is required",
                  },
                  minLength: {
                    value: 9,
                    message: "Minimum value should be 9",
                  },
                })}
                className={`bg-light ${
                  errors?.personalInfo?.passportNumber?.message && "is-invalid"
                }`}
                placeholder="Passport number"
              />
              {errors.personalInfo?.passportNumber && (
                <p className="text-danger">
                  {errors?.personalInfo?.passportNumber?.message}
                </p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Primary phone Number</Form.Label>

              <PhoneInput
                placeholder="Enter phone number"
                value={primaryPhoneNumber}
                onChange={setPrimaryPhoneNumber}
                {...register("personalInfo.primaryPhone", {
                  required: {
                    value: true,
                    message: "This filed is required",
                  },
                  minLength: {
                    value: 11,
                    message: "Minimum number should be 11",
                  },
                  maxLength: {
                    value: 16,
                    message: "Maximum number should be 16",
                  },
                })}
                className={`form-control ${
                  errors?.personalInfo?.primaryPhone?.message && "is-invalid"
                }`}
              />
              {errors?.personalInfo?.primaryPhone && (
                <p className="text-danger">
                  {errors?.personalInfo?.primaryPhone?.message}
                </p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Height (meters)</Form.Label>
              <Form.Control
                {...register("personalInfo.height")}
                type="text"
                placeholder="Height (meters)"
              />
            </Form.Group>
          </Col>

          {/* ----------- */}
          <Col md={6} sm={12}>
            <Form.Group className="mb-3">
              <Form.Label>
                Last Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                {...register("personalInfo.lastName")}
                type="text"
                placeholder="Last Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mother&apos;s Name</Form.Label>
              <Form.Control
                type="text"
                {...register("personalInfo.motherName")}
                placeholder="Mother's Name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Gender <span className="text-danger">*</span>
              </Form.Label>
              <Form.Select
                {...register("personalInfo.gender")}
                aria-label="Default select example"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Marital Status <span className="text-danger">*</span>
              </Form.Label>
              <Form.Select
                {...register("personalInfo.maritalStatus")}
                aria-label="Default select example"
              >
                <option>Married</option>
                <option>Unmarried</option>
                <option>Single</option>
                <option>Complicated</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>National Id</Form.Label>
              <Form.Control
                {...register("personalInfo.nationalId", {
                  required: {
                    value: true,
                    message: "This filed is required",
                  },
                  minLength: {
                    value: 10,
                    message: "Minimum number should be 10",
                  },
                })}
                className={`form-control ${
                  errors?.personalInfo?.nationalId?.message && "is-invalid"
                }`}
                type="number"
                placeholder="National Id"
              />
              {errors?.personalInfo?.nationalId && (
                <p className="text-danger">
                  {errors?.personalInfo?.nationalId?.message}
                </p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Passport Issue Date</Form.Label>
              <Form.Control
                {...register("personalInfo.passportIssueDate")}
                type="date"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Secondary Mobile</Form.Label>

              <PhoneInput
                placeholder="Enter Secondary number"
                value={secondaryPhoneNumber}
                onChange={setSecondaryPhoneNumber}
                {...register("personalInfo.secondaryPhone", {
                  required: {
                    value: true,
                    message: "This filed is required",
                  },
                  minLength: {
                    value: 11,
                    message: "Minimum number should be 11",
                  },
                  maxLength: {
                    value: 16,
                    message: "Maximum number should be 16",
                  },
                })}
                className={`form-control ${
                  errors?.personalInfo?.secondaryPhone?.message && "is-invalid"
                }`}
              />
              {errors?.personalInfo?.secondaryPhone && (
                <p className="text-danger">
                  {errors?.personalInfo?.secondaryPhone?.message}
                </p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Weight(kg)</Form.Label>
              <Form.Control
                {...register("personalInfo.weightKG")}
                type="text"
                placeholder="Weight(kg)"
              />
            </Form.Group>
          </Col>
        </Row>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default PersonalDetails;
