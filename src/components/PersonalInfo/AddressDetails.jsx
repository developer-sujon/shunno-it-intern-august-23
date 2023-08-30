import { useContext, useState } from "react";
import { Accordion, Col, Form, Row } from "react-bootstrap";
import { FormContext } from "../../context/FormData";
import useCountries from "../../hooks/useCountries";
import useDistrictList from "../../hooks/useDistrictList";
import useUpazilaList from "../../hooks/useUpazilaList";
import useDivisionList from "../../hooks/useDivisionList";

const AddressDetails = () => {
  // form context
  const { register, errors } = useContext(FormContext);

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
                    "addressDetails.presentAddress.insideBangladesh.division",
                    {
                      required: {
                        value: true,
                        message: "This filed is required",
                      },
                    }
                  )}
                  className={`form-control ${
                    errors?.addressDetails?.presentAddress?.insideBangladesh
                      ?.division?.message && "is-invalid"
                  }`}
                  aria-label="Default select example"
                >
                  {divisionList.map((division) => (
                    <option key={division.id}>
                      {division.name} - ({division.bn_name})
                    </option>
                  ))}
                </Form.Select>
                {errors?.addressDetails?.presentAddress?.insideBangladesh
                  ?.division && (
                  <p className="text-danger">
                    {
                      errors?.addressDetails?.presentAddress?.insideBangladesh
                        ?.division?.message
                    }
                  </p>
                )}
              </Form.Group>
            </Col>
            <Col md={4} sm={12}>
              <Form.Group className="mb-3">
                <Form.Select
                  aria-label="Default select example"
                  {...register(
                    "addressDetails.presentAddress.insideBangladesh.district",
                    {
                      required: {
                        value: true,
                        message: "This filed is required",
                      },
                    }
                  )}
                  className={`form-control ${
                    errors?.addressDetails?.presentAddress?.insideBangladesh
                      ?.district?.message && "is-invalid"
                  }`}
                >
                  {districtList.map((district) => (
                    <option key={district.id}>
                      {district.name} - ({district.bn_name})
                    </option>
                  ))}
                </Form.Select>
                {errors?.addressDetails?.presentAddress?.insideBangladesh
                  ?.district && (
                  <p className="text-danger">
                    {
                      errors?.addressDetails?.presentAddress?.insideBangladesh
                        ?.district?.message
                    }
                  </p>
                )}
              </Form.Group>
            </Col>
            <Col md={4} sm={12}>
              <Form.Group className="mb-3">
                <Form.Select
                  aria-label="Default select example"
                  {...register(
                    "addressDetails.presentAddress.insideBangladesh.upazila",
                    {
                      required: {
                        value: true,
                        message: "This filed is required",
                      },
                    }
                  )}
                  className={`form-control ${
                    errors?.addressDetails?.presentAddress?.insideBangladesh
                      ?.upazila?.message && "is-invalid"
                  }`}
                >
                  {upazilaList.map((upazila) => (
                    <option key={upazila.id}>
                      {upazila.name} - ({upazila.bn_name})
                    </option>
                  ))}
                </Form.Select>
                {errors?.addressDetails?.presentAddress?.insideBangladesh
                  ?.upazila && (
                  <p className="text-danger">
                    {
                      errors?.addressDetails?.presentAddress?.insideBangladesh
                        ?.upazila?.message
                    }
                  </p>
                )}
              </Form.Group>
            </Col>
          </Row>
        ) : (
          <>
            <Form.Select
              aria-label="Default select example"
              {...register(
                "addressDetails.presentAddress.insideBangladesh.country",
                {
                  required: {
                    value: true,
                    message: "This filed is required",
                  },
                }
              )}
              className={`mb-3 ${
                errors?.addressDetails?.presentAddress?.insideBangladesh
                  ?.country?.message && "is-invalid"
              }`}
            >
              {nationalities.map((name, index) => (
                <option key={index} value={name.nationality}>
                  {name.nationality}
                </option>
              ))}
            </Form.Select>
            {errors?.addressDetails?.presentAddress?.insideBangladesh
              ?.country && (
              <p className="text-danger">
                {
                  errors?.addressDetails?.presentAddress?.insideBangladesh
                    ?.country?.message
                }
              </p>
            )}
          </>
        )}

        <Form.Group className="mb-3">
          <Form.Control
            {...register("addressDetails.presentAddress.houseNo", {
              required: {
                value: true,
                message: "This filed is required",
              },
              minLength: {
                value: 10,
                message: "Minimum number should be 10",
              },
            })}
            className={
              errors?.addressDetails?.presentAddress?.houseNo?.message &&
              "is-invalid"
            }
            type="text"
            placeholder="Type your House No/Road/Village"
          />
          {errors?.addressDetails?.presentAddress?.houseNo && (
            <p className="text-danger">
              {errors?.addressDetails?.presentAddress?.houseNo?.message}
            </p>
          )}
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
                    "addressDetails.permanentAddress.outsideBangladesh.division",
                    {
                      required: {
                        value: true,
                        message: "This filed is required",
                      },
                    }
                  )}
                  className={`form-control ${
                    errors?.addressDetails?.permanentAddress?.outsideBangladesh
                      ?.division?.message && "is-invalid"
                  }`}
                >
                  {divisionList.map((division) => (
                    <option key={division.id}>
                      {division.name} - ({division.bn_name})
                    </option>
                  ))}
                </Form.Select>
                {errors?.addressDetails?.permanentAddress?.outsideBangladesh
                  ?.division && (
                  <p className="text-danger">
                    {
                      errors?.addressDetails?.permanentAddress
                        ?.outsideBangladesh?.division?.message
                    }
                  </p>
                )}
              </Form.Group>
            </Col>
            <Col md={4} sm={12}>
              <Form.Group className="mb-3">
                <Form.Select
                  aria-label="Default select example"
                  {...register(
                    "addressDetails.permanentAddress.outsideBangladesh.district",
                    {
                      required: {
                        value: true,
                        message: "This filed is required",
                      },
                    }
                  )}
                  className={`form-control ${
                    errors?.addressDetails?.permanentAddress?.outsideBangladesh
                      ?.district?.message && "is-invalid"
                  }`}
                >
                  {districtList.map((district) => (
                    <option key={district.id}>
                      {district.name} - ({district.bn_name})
                    </option>
                  ))}
                </Form.Select>
                {errors?.addressDetails?.permanentAddress?.outsideBangladesh
                  ?.district && (
                  <p className="text-danger">
                    {
                      errors?.addressDetails?.permanentAddress
                        ?.outsideBangladesh?.district?.message
                    }
                  </p>
                )}
              </Form.Group>
            </Col>
            <Col md={4} sm={12}>
              <Form.Group className="mb-3">
                <Form.Select
                  aria-label="Default select example"
                  {...register(
                    "addressDetails.permanentAddress.outsideBangladesh.upazila",
                    {
                      required: {
                        value: true,
                        message: "This filed is required",
                      },
                    }
                  )}
                  className={`form-control ${
                    errors?.addressDetails?.permanentAddress?.outsideBangladesh
                      ?.upazila?.message && "is-invalid"
                  }`}
                >
                  {upazilaList.map((upazila) => (
                    <option key={upazila.id}>
                      {upazila.name} - ({upazila.bn_name})
                    </option>
                  ))}
                </Form.Select>
                {errors?.addressDetails?.permanentAddress?.outsideBangladesh
                  ?.upazila && (
                  <p className="text-danger">
                    {
                      errors?.addressDetails?.permanentAddress
                        ?.outsideBangladesh?.upazila?.message
                    }
                  </p>
                )}
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
            {...register("addressDetails.permanentAddress.houseNo", {
              required: {
                value: true,
                message: "This filed is required",
              },
              minLength: {
                value: 10,
                message: "Minimum number should be 10",
              },
            })}
            type="text"
            placeholder="Type your House No/Road/Village"
            className={
              errors?.addressDetails?.permanentAddress?.houseNo?.message &&
              "is-invalid"
            }
          />
          {errors?.addressDetails?.permanentAddress?.houseNo && (
            <p className="text-danger">
              {errors?.addressDetails?.permanentAddress?.houseNo?.message}
            </p>
          )}
        </Form.Group>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default AddressDetails;
