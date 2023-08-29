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
import { Controller } from "react-hook-form";

const PersonalInfo = () => {
  // input filed state
  const [primaryPhoneNumber, setPrimaryPhoneNumber] = useState("");
  const [secondaryPhoneNumber, setSecondaryPhoneNumber] = useState("");

  // address state
  const [presentAddressInOut, setPresentAddressInOut] = useState(true);
  const [permanentAddressInOut, setPermanentAddressInOut] = useState(true);

  // form context
  const { register, control } = useContext(FormContext);

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
      {/* Address Details */}
      <Accordion.Item eventKey="1">
        <Accordion.Header>Address Details</Accordion.Header>
        <Accordion.Body>
          <Form.Group className="mb-3">
            <Form.Label>
              Present Address <span className="text-danger">*</span>
            </Form.Label>
            {["radio"].map((type) => (
              <div key={`presentAddress-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Inside Bangladesh"
                  name="isPresentAddress"
                  type={type}
                  id={`isPresentAddress-${type}-1`}
                  checked={presentAddressInOut}
                  onChange={() => setPresentAddressInOut(!presentAddressInOut)}
                />
                <Form.Check
                  inline
                  label="Outside Bangladesh"
                  name="isPresentAddress"
                  type={type}
                  id={`isPresentAddress-${type}-2`}
                  onChange={() => setPresentAddressInOut(!presentAddressInOut)}
                  checked={!presentAddressInOut}
                />
              </div>
            ))}
          </Form.Group>
          {presentAddressInOut ? (
            <Row>
              <Col md={4} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Select
                    {...register(
                      "addressDetails.presentAddress.insideBangladesh.division"
                    )}
                    aria-label="Default select example"
                  >
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
                  <Form.Select
                    aria-label="Default select example"
                    {...register(
                      "addressDetails.presentAddress.insideBangladesh.district"
                    )}
                  >
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
                  <Form.Select
                    aria-label="Default select example"
                    {...register(
                      "addressDetails.presentAddress.insideBangladesh.upazila"
                    )}
                  >
                    {upazilaList.map((upazila) => (
                      <option key={upazila.id}>
                        {upazila.name} - ({upazila.bn_name})
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          ) : (
            <Form.Select
              className="mb-3"
              aria-label="Default select example"
              {...register(
                "addressDetails.presentAddress.insideBangladesh.country"
              )}
            >
              {nationalities.map((name, index) => (
                <option key={index} value={name.nationality}>
                  {name.nationality}
                </option>
              ))}
            </Form.Select>
          )}

          <Form.Group className="mb-3">
            <Form.Control
              {...register("addressDetails.presentAddress.houseNo")}
              type="text"
              placeholder="Type your House No/Road/Village"
            />
          </Form.Group>
          <Form.Group className="mt-5">
            <Form.Label>
              Permanent Address <span className="text-danger">*</span>
            </Form.Label>
            {["radio"].map((type) => (
              <div key={`permanentAddress-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Inside Bangladesh"
                  name="isPermanentAddress"
                  type={type}
                  checked={permanentAddressInOut}
                  id={`isPermanentAddress-${type}-1`}
                  onChange={() =>
                    setPermanentAddressInOut(!permanentAddressInOut)
                  }
                />
                <Form.Check
                  inline
                  label="Outside Bangladesh"
                  name="isPermanentAddress"
                  type={type}
                  id={`isPermanentAddress-${type}-2`}
                  onChange={() =>
                    setPermanentAddressInOut(!permanentAddressInOut)
                  }
                  checked={!permanentAddressInOut}
                />
              </div>
            ))}
          </Form.Group>
          {permanentAddressInOut ? (
            <Row>
              <Col md={4} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Select
                    aria-label="Default select example"
                    {...register(
                      "addressDetails.permanentAddress.outsideBangladesh.division"
                    )}
                  >
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
                  <Form.Select
                    aria-label="Default select example"
                    {...register(
                      "addressDetails.permanentAddress.outsideBangladesh.district"
                    )}
                  >
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
                  <Form.Select
                    aria-label="Default select example"
                    {...register(
                      "addressDetails.permanentAddress.outsideBangladesh.upazila"
                    )}
                  >
                    {upazilaList.map((upazila) => (
                      <option key={upazila.id}>
                        {upazila.name} - ({upazila.bn_name})
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          ) : (
            <Form.Select
              className="mb-3"
              aria-label="Default select example"
              {...register(
                "addressDetails.permanentAddress.outsideBangladesh.country"
              )}
            >
              {nationalities.map((name, index) => (
                <option key={index} value={name.nationality}>
                  {name.nationality}
                </option>
              ))}
            </Form.Select>
          )}
          <Form.Group className="mb-3">
            <Form.Control
              {...register("addressDetails.permanentAddress.houseNo")}
              type="text"
              placeholder="Type your House No/Road/Village"
            />
          </Form.Group>
        </Accordion.Body>
      </Accordion.Item>
      {/* Career and Application Information */}
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
                className="mb-5"
                theme="snow"
                onChange={onChange}
                value={value}
              />
            )}
          />
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
                  <div className="mb-3">
                    <Form.Check
                      label="Accounting/Finance"
                      value="Accounting/Finance"
                      name="jobCategories"
                      type="checkbox"
                      id={`jobCategory-1`}
                      {...register("preferredArea.jobCategories")}
                    />
                    <Form.Check
                      label="Bank/Non-Bank Fin. Institution"
                      value="Bank/Non-Bank Fin. Institution"
                      name="jobCategories"
                      type="checkbox"
                      id={`jobCategory-2`}
                      {...register("preferredArea.jobCategories")}
                    />
                    <Form.Check
                      label="Commercial/Supply Chain"
                      value="Commercial/Supply Chain"
                      name="jobCategories"
                      type="checkbox"
                      id={`jobCategory-3`}
                      {...register("preferredArea.jobCategories")}
                    />
                    <Form.Check
                      label="Education/Training"
                      value="Education/Training"
                      name="jobCategories"
                      type="checkbox"
                      id={`jobCategory-4`}
                      {...register("preferredArea.jobCategories")}
                    />
                    <Form.Check
                      label="Engineer/Architect"
                      value="Engineer/Architect"
                      name="jobCategories"
                      type="checkbox"
                      id={`jobCategory-5`}
                      {...register("preferredArea.jobCategories")}
                    />
                    <Form.Check
                      label="Garments/Textile"
                      value="Garments/Textile"
                      name="jobCategories"
                      type="checkbox"
                      id={`jobCategory-6`}
                      {...register("preferredArea.jobCategories")}
                    />
                    <Form.Check
                      label="General Management/Admin"
                      value="General Management/Admin"
                      name="jobCategories"
                      type="checkbox"
                      id={`jobCategory-7`}
                      {...register("preferredArea.jobCategories")}
                    />
                    <Form.Check
                      label="IT/Telecommunication"
                      value="IT/Telecommunication"
                      name="jobCategories"
                      type="checkbox"
                      id={`jobCategory-8`}
                      {...register("preferredArea.jobCategories")}
                    />
                    <Form.Check
                      label="Marketing/Sales"
                      value="Marketing/Sales"
                      name="jobCategories"
                      type="checkbox"
                      id={`jobCategory-9`}
                      {...register("preferredArea.jobCategories")}
                    />
                    <Form.Check
                      label="Media/Advertisement/Event Mgt."
                      value="Media/Advertisement/Event Mgt."
                      name="jobCategories"
                      type="checkbox"
                      id={`jobCategory-10`}
                      {...register("preferredArea.jobCategories")}
                    />
                    <Form.Check
                      label="Medical/Pharma"
                      value="Medical/Pharma"
                      name="jobCategories"
                      type="checkbox"
                      id={`jobCategory-11`}
                      {...register("preferredArea.jobCategories")}
                    />
                  </div>
                </div>
              </Form.Group>
            </Col>
            <Col md={6} sm={12}>
              <Form.Group className="my-3 pt-3">
                <Form.Label>Special Skills (max 3)</Form.Label>

                <div className="mb-3">
                  <Form.Check
                    label="ওয়েল্ডার"
                    name="specialSkills"
                    value="ওয়েল্ডার"
                    type="checkbox"
                    id={`specialSkills$-1`}
                    {...register("preferredArea.specialSkills")}
                  />
                  <Form.Check
                    label="স্যুইং মেশিন অপারেটর"
                    name="specialSkills"
                    value="স্যুইং মেশিন অপারেটর"
                    type="checkbox"
                    id={`specialSkills$-2`}
                    {...register("preferredArea.specialSkills")}
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>
          <h6>
            Preferred Job Location <span className="text-danger">*</span>
          </h6>
          <p>
            Preferred Job Location defines the geographical place where you
            prefer to work. Add your priority wise preferred job locations. i.e.
            1st: Dhaka, 2nd: Sylhet, 3rd: Khulna.
          </p>
          <Row>
            <Col md={6} sm={12}>
              <Form.Label>Inside Bangladesh Add Districts (max 15)</Form.Label>
              <Controller
                name="preferredArea.districts"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    isMulti
                    options={reactSelectDistrict}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Col>
            <Col md={6} sm={12}>
              <Form.Label>Outside Bangladesh Add Countries (max 10)</Form.Label>

              <Controller
                name="preferredArea.country"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    isMulti
                    options={ReactSelectCountry}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Col>
            <Col md={12} className="mt-4">
              <Form.Label>
                Add your preferred organization type (max 12)
              </Form.Label>
              <Controller
                name="preferredArea.organization"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    isMulti
                    options={reactSelectOrg}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
      {/* Other Relevant Information */}
      <Accordion.Item eventKey="4">
        <Accordion.Header>Other Relevant Information</Accordion.Header>
        <Accordion.Body>
          <h6>Career Summary</h6>
          <Controller
            name="otherRelevantInfo.careerSummary"
            control={control}
            render={({ field: { onChange, value } }) => (
              <ReactQuill
                style={{ height: "100px" }}
                className="mb-5"
                theme="snow"
                value={value}
                onChange={onChange}
              />
            )}
          />
          <h6 className="pt-3">Special Qualification</h6>
          <Controller
            name="otherRelevantInfo.specialQualification"
            control={control}
            render={({ field: { onChange, value } }) => (
              <ReactQuill
                style={{ height: "100px" }}
                className="mb-5"
                theme="snow"
                value={value}
                onChange={onChange}
              />
            )}
          />

          <Form.Group className="mb-3 pt-3">
            <Form.Label>
              Keywords <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              {...register("otherRelevantInfo.careerKeywords")}
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
              {...register("disabilityInfo")}
              type="text"
              placeholder="If you are a person with disability and have no Disability ID Number, please contact i2i support +88 01730369802 by Call/ SMS/ WhatsApp"
            />
          </Form.Group>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default PersonalInfo;
