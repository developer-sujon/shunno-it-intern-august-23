import { useContext } from "react";
import { Accordion, Col, Form, Row } from "react-bootstrap";
import { FormContext } from "../../context/FormData";
import { Controller } from "react-hook-form";
import Select from "react-select";
import useDistrictList from "../../hooks/useDistrictList";

const PreferredArea = () => {
  // form context
  const { register, control, errors } = useContext(FormContext);

  // custom hooks
  const [districtList] = useDistrictList();

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
          Preferred Job Location defines the geographical place where you prefer
          to work. Add your priority wise preferred job locations. i.e. 1st:
          Dhaka, 2nd: Sylhet, 3rd: Khulna.
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
  );
};

export default PreferredArea;
