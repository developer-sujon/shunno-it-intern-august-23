import { useContext, useState } from "react";
import { Accordion, Col, Form, Row } from "react-bootstrap";
import { FormContext } from "../../context/FormData";
import useCountries from "../../hooks/useCountries";
import useDistrictList from "../../hooks/useDistrictList";
import useUpazilaList from "../../hooks/useUpazilaList";
import useDivisionList from "../../hooks/useDivisionList";

const AddressDetails = () => {
  // form context
  const { register } = useContext(FormContext);

  // address state
  const [presentAddressInOut, setPresentAddressInOut] = useState(true);
  const [permanentAddressInOut, setPermanentAddressInOut] = useState(true);

  // custom hooks
  const [nationalities] = useCountries();
  const [districtList] = useDistrictList();
  const [upazilaList] = useUpazilaList();
  const [divisionList] = useDivisionList();

  return (
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
  );
};

export default AddressDetails;
