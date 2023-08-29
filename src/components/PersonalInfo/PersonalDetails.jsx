import { useContext, useState } from "react";
import { Accordion, Col, Form, Row } from "react-bootstrap";
import { FormContext } from "../../context/FormData";
import useCountries from "../../hooks/useCountries";
//phone number input package
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const PersonalDetails = () => {
  // form context
  const { register } = useContext(FormContext);

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
                {...register("personalInfo.firstName")}
                type="text"
                placeholder="First Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Father&apos;s Name</Form.Label>
              <Form.Control
                {...register("personalInfo.fatherName")}
                type="text"
                placeholder="Father's Name"
              />
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
                <option>...</option>
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
                <option>...</option>
                {nationalities.map((name, index) => (
                  <option key={index}>{name.nationality}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Passport Number</Form.Label>
              <Form.Control
                type="number"
                {...register("personalInfo.passportNumber")}
                placeholder="Passport number"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Primary phone Number</Form.Label>

              <PhoneInput
                placeholder="Enter phone number"
                className="form-control"
                value={primaryPhoneNumber}
                onChange={setPrimaryPhoneNumber}
                {...register("personalInfo.primaryPhone")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Height (meters)</Form.Label>
              <Form.Control type="text" placeholder="Height (meters)" />
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
                <option>...</option>
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
                <option>...</option>
                <option>Married</option>
                <option>Unmarried</option>
                <option>Others</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>National Id</Form.Label>
              <Form.Control
                {...register("personalInfo.nationalId")}
                type="number"
                placeholder="National Id"
              />
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
                className="form-control"
                value={secondaryPhoneNumber}
                onChange={setSecondaryPhoneNumber}
                {...register("personalInfo.secondaryPhone")}
              />
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
