import { useContext, useState } from "react";
import { Accordion, Col, Form, Row } from "react-bootstrap";

//phone number input package
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

// text editor import
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

//import react select
import Select from "react-select";

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

  // react-select options
  const reactSelectDistrict = districtList.map((district) => {
    return { value: district.name, label: district.name };
  });

  const reactSelectOrg = [
    { value: "School", label: "School" },
    { value: "College", label: "College" },
    { value: "Others", label: "Others" },
  ];

  const ReactSelectCountry = [
    { value: "India", label: "India" },
    { value: "India", label: "India" },
    { value: "Pakistan", label: "Pakistan" },
    { value: "Sri Lanka", label: "Sri Lanka" },
  ];

  return (
    <>
      <Accordion defaultActiveKey="0">
        {/* Personal details */}
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
              <Col md={6} sm={12}>
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
        {/* Address Details */}
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
                    name="address"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Outside Bangladesh"
                    name="address"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form.Group>
            <Row>
              <Col md={4} sm={12}>
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
              <Col md={4} sm={12}>
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
              <Col md={4} sm={12}>
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
        {/* Career and Application Information */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Career and Application Information
          </Accordion.Header>
          <Accordion.Body>
            <h6>
              Carrier Objective <span className="text-danger">*</span>
            </h6>
            <ReactQuill
              style={{ height: "100px" }}
              className="mb-5"
              theme="snow"
              value={textEditorValue}
              onChange={setTextEditorValue}
            />

            <Row>
              <Col md={6} sm={12}>
                <Form.Group className="my-3 pt-3">
                  <Form.Label>Present Salary</Form.Label>
                  <Form.Control type="text" placeholder="Present Salary" />
                  <p>TK/ Month</p>
                </Form.Group>
                <Form.Group className="my-3 pt-3">
                  <Form.Label>Looking for (Job Level)</Form.Label>
                  {["radio"].map((type) => (
                    <div key={`jobLevel${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="Entry Level"
                        name="jobLevel"
                        type={type}
                        id={`jobLevel${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Mid Level"
                        name="jobLevel"
                        type={type}
                        id={`jobLevel${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="Top Level"
                        name="jobLevel"
                        type={type}
                        id={`jobLevel${type}-3`}
                      />
                    </div>
                  ))}
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group className="my-3 pt-3">
                  <Form.Label>Expected Salary</Form.Label>
                  <Form.Control type="text" placeholder="Expected Salary" />
                  <p>TK/ Month</p>
                </Form.Group>
                <Form.Group className="my-3 pt-3">
                  <Form.Label>Available for (Job Nature)</Form.Label>
                  {["radio"].map((type) => (
                    <div key={`jobNature${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="Full time"
                        name="jobNature"
                        type={type}
                        id={`jobNature${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Part time"
                        name="jobNature"
                        type={type}
                        id={`jobNature${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="Contract"
                        name="jobNature"
                        type={type}
                        id={`jobNature${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="Internship"
                        name="jobNature"
                        type={type}
                        id={`jobNature${type}-4`}
                      />
                      <Form.Check
                        inline
                        label="Freelance"
                        name="jobNature"
                        type={type}
                        id={`jobNature${type}-5`}
                      />
                    </div>
                  ))}
                </Form.Group>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        {/* Preferred Areas */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>Preferred Areas</Accordion.Header>
          <Accordion.Body>
            <h6>
              Preferred Job Categories <span className="text-danger">*</span>
            </h6>
            <p>You can add maximum 3 Functional category!</p>

            <Row>
              <Col md={6} sm={12}>
                <Form.Group className="my-3 pt-3">
                  <Form.Label>Functional (max 3)</Form.Label>
                  <div style={{ height: "150px", overflowY: "scroll" }}>
                    {["checkbox"].map((type) => (
                      <div key={`jobCategory${type}`} className="mb-3">
                        <Form.Check
                          label="Accounting/Finance"
                          name="jobCategory"
                          type={type}
                          id={`jobCategory${type}-1`}
                        />
                        <Form.Check
                          label="Bank/Non-Bank Fin. Institution"
                          name="jobCategory"
                          type={type}
                          id={`jobCategory${type}-2`}
                        />
                        <Form.Check
                          label="Commercial/Supply Chain"
                          name="jobCategory"
                          type={type}
                          id={`jobCategory${type}-3`}
                        />
                        <Form.Check
                          label="Education/Training"
                          name="jobCategory"
                          type={type}
                          id={`jobCategory${type}-4`}
                        />
                        <Form.Check
                          label="Engineer/Architect"
                          name="jobCategory"
                          type={type}
                          id={`jobCategory${type}-5`}
                        />
                        <Form.Check
                          label="Garments/Textile"
                          name="jobCategory"
                          type={type}
                          id={`jobCategory${type}-6`}
                        />
                        <Form.Check
                          label="General Management/Admin"
                          name="jobCategory"
                          type={type}
                          id={`jobCategory${type}-7`}
                        />
                        <Form.Check
                          label="IT/Telecommunication"
                          name="jobCategory"
                          type={type}
                          id={`jobCategory${type}-8`}
                        />
                        <Form.Check
                          label="Marketing/Sales"
                          name="jobCategory"
                          type={type}
                          id={`jobCategory${type}-9`}
                        />
                        <Form.Check
                          label="Media/Advertisement/Event Mgt."
                          name="jobCategory"
                          type={type}
                          id={`jobCategory${type}-10`}
                        />
                        <Form.Check
                          label="Medical/Pharma"
                          name="jobCategory"
                          type={type}
                          id={`jobCategory${type}-11`}
                        />
                      </div>
                    ))}
                  </div>
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group className="my-3 pt-3">
                  <Form.Label>Special Skills (max 3)</Form.Label>
                  {["checkbox"].map((type) => (
                    <div key={`specialSkills${type}`} className="mb-3">
                      <Form.Check
                        label="ওয়েল্ডার"
                        name="specialSkills"
                        type={type}
                        id={`specialSkills${type}-1`}
                      />
                      <Form.Check
                        label="স্যুইং মেশিন অপারেটর"
                        name="specialSkills"
                        type={type}
                        id={`specialSkills${type}-2`}
                      />
                    </div>
                  ))}
                </Form.Group>
              </Col>
            </Row>
            <h6>
              Preferred Job Location <span className="text-danger">*</span>
            </h6>
            <p>
              Preferred Job Location defines the geographical place where you
              prefer to work. Add your priority wise preferred job locations.
              i.e. 1st: Dhaka, 2nd: Sylhet, 3rd: Khulna.
            </p>
            <Row>
              <Col md={6} sm={12}>
                <Form.Label>
                  Inside Bangladesh Add Districts (max 15)
                </Form.Label>
                <Select isMulti options={reactSelectDistrict} />
              </Col>
              <Col md={6} sm={12}>
                <Form.Label>
                  Outside Bangladesh Add Countries (max 10)
                </Form.Label>
                <Select isMulti options={ReactSelectCountry} />
              </Col>
              <Col md={12} className="mt-4">
                <Form.Label>
                  Add your preferred organization type (max 12)
                </Form.Label>
                <Select isMulti options={reactSelectOrg} />
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        {/* Other Relevant Information */}
        <Accordion.Item eventKey="4">
          <Accordion.Header>Other Relevant Information</Accordion.Header>
          <Accordion.Body>
            <h6>Career Summary</h6>
            <ReactQuill
              style={{ height: "100px" }}
              className="mb-5"
              theme="snow"
              value={textEditorValue}
              onChange={setTextEditorValue}
            />
            <h6 className="pt-3">Special Qualification</h6>
            <ReactQuill
              style={{ height: "100px" }}
              className="mb-5"
              theme="snow"
              value={textEditorValue}
              onChange={setTextEditorValue}
            />
            <Form.Group className="mb-3 pt-3">
              <Form.Label>
                Keywords <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                {...register("firstName")}
                type="text"
                placeholder="HTML, CSS, Js"
              />
            </Form.Group>
          </Accordion.Body>
        </Accordion.Item>
        {/* Disability Information (if any) */}
        <Accordion.Item eventKey="5">
          <Accordion.Header>Disability Information (if any)</Accordion.Header>
          <Accordion.Body>
            <h5 className="pt-3">National Disability Id</h5>

            <Form.Group className="mb-3 pt-3">
              <Form.Label>You didn&apos;t mention your ID yet.</Form.Label>
              <Form.Control
                {...register("firstName")}
                type="text"
                placeholder="If you are a person with disability and have no Disability ID Number, please contact i2i support +88 01730369802 by Call/ SMS/ WhatsApp"
              />
            </Form.Group>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default PersonalInfo;
