import { useContext, useState } from "react";
import { Accordion, Col, Form, Row } from "react-bootstrap";

//phone number input package
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

// text editor import
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

//custom hooks import
import useCountries from "../../hooks/useCountries";
import useDistrictList from "../../hooks/useDistrictList";
import useUpazilaList from "../../hooks/useUpazilaList";
import useDivisionList from "../../hooks/useDivisionList";
import { FormContext } from "../../context/FormData";

const PersonalInfo = () => {
  const [primaryPhoneNumber, setPrimaryPhoneNumber] = useState();
  const [secondaryPhoneNumber, setSecondaryPhoneNumber] = useState();

  // form context
  const { register } = useContext(FormContext);

  //text editor hooks
  const [textEditorValue, setTextEditorValue] = useState("");

  // custom hooks
  const [nationalities] = useCountries();
  const [districtList] = useDistrictList();
  const [upazilaList] = useUpazilaList();
  const [divisionList] = useDivisionList();

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Personal Details</Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    First Name <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    {...register("firstName")}
                    type="text"
                    placeholder="First Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Father&apos;s Name</Form.Label>
                  <Form.Control
                    {...register("lastName")}
                    type="text"
                    placeholder="Father's Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Date of Birth <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control type="date" {...register("dob")} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Religion <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    {...register("religion")}
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
                    {...register("nationality")}
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
                    {...register("passportNumber")}
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
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Height (meters)</Form.Label>
                  <Form.Control type="text" placeholder="Height (meters)" />
                </Form.Group>
              </Col>

              {/* ----------- */}
              <Col md={6}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Last Name <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Mother&apos;s Name</Form.Label>
                    <Form.Control type="text" placeholder="Mother's Name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      Gender <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
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
                    <Form.Select aria-label="Default select example">
                      <option>...</option>
                      <option>Married</option>
                      <option>Unmarried</option>
                      <option>Others</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>National Id</Form.Label>
                    <Form.Control type="number" placeholder="National Id" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Passport Issue Date</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Secondary Mobile</Form.Label>

                    <PhoneInput
                      placeholder="Enter Secondary number"
                      className="form-control"
                      value={secondaryPhoneNumber}
                      onChange={setSecondaryPhoneNumber}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Weight(kg)</Form.Label>
                    <Form.Control type="text" placeholder="Weight(kg)" />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Address Details</Accordion.Header>
          <Accordion.Body>
            <Form.Group className="mb-3">
              <Form.Label>
                Present Address <span className="text-danger">*</span>
              </Form.Label>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Inside Bangladesh"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Outside Bangladesh"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form.Group>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Select aria-label="Default select example">
                    {divisionList.map((division) => (
                      <option key={division.id}>
                        {division.name} - ({division.bn_name})
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Select aria-label="Default select example">
                    {districtList.map((district) => (
                      <option key={district.id}>
                        {district.name} - ({district.bn_name})
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Select aria-label="Default select example">
                    {upazilaList.map((division) => (
                      <option key={division.id}>
                        {division.name} - ({division.bn_name})
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>{" "}
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Type your House No/Road/Village"
              />
            </Form.Group>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Career and Application Information
          </Accordion.Header>
          <Accordion.Body>
            <h5>Career Summary</h5>
            <ReactQuill
              style={{ height: "100px" }}
              className="mb-5"
              theme="snow"
              value={textEditorValue}
              onChange={setTextEditorValue}
            />
            <h5 className="pt-3">Special Qualification</h5>
            <ReactQuill
              style={{ height: "100px" }}
              className="mb-5"
              theme="snow"
              value={textEditorValue}
              onChange={setTextEditorValue}
            />
            <Form.Group className="my-3 pt-3">
              <Form.Label>
                Keywords <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="HTML, CSS, Js" />
            </Form.Group>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default PersonalInfo;
