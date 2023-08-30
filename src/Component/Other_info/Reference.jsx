import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";

const Reference = () => {
  const [reference, setReference] = useState([]);
  const values = {
    defaultValues: {
      ReferenceDesignation: "Senior Developer",
      ReferenceEmail: "abc@gmail.com",
      ReferenceMobile: "880333211111",
      ReferenceName: "Mr. Fahim Ali",
      ReferenceOrganization: "Shunno It",
      referenceAddress: "Talaimari, Rajshahi",
      Relation: "Relative",
      phoneOff: "3992032093",
      phoneRes: "2213444544",
    },
  };
  const { control, handleSubmit, register } = useForm(values);
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "otherInfo", // unique name for your Field Array
    }
  );
  const onSubmitData = (data) => {
    // data.preventDefault();
    // console.log(data);
    setReference([...reference, data]);
    // console.log(reference);
  };
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>References</Accordion.Header>
        <Accordion.Body>
          <form onBlur={handleSubmit(onSubmitData)} className="">
            {fields.map((item, index) => (
              <div
                key={item.id}
                className="border-bottom border-3 border-primary pb-4 mb-4"
              >
                <div className="row mb-4 g-4">
                  <div className="col-12 col-lg-6">
                    <label
                      htmlFor="ReferenceName"
                      className="text-black mb-2 fw-semibold"
                    >
                      Reference Name <span className="text-danger">*</span>
                    </label>
                    <input
                      {...register("ReferenceName")}
                      type="text"
                      id="ReferenceName"
                      className="form-control"
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <label
                      htmlFor="ReferenceDesignation"
                      className="text-black mb-2 fw-semibold"
                    >
                      Reference Designation{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      {...register("ReferenceDesignation")}
                      type="text"
                      id="ReferenceDesignation"
                      className="form-control"
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <label
                      htmlFor="ReferenceOrganization"
                      className="text-black mb-2 fw-semibold"
                    >
                      Reference Organization{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      {...register("ReferenceOrganization")}
                      type="text"
                      id="ReferenceOrganization"
                      className="form-control"
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <label
                      htmlFor="ReferenceEmail"
                      className="text-black mb-2 fw-semibold"
                    >
                      Reference Email <span className="text-danger">*</span>
                    </label>
                    <input
                      {...register("ReferenceEmail")}
                      type="email"
                      id="ReferenceEmail"
                      className="form-control"
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <label
                      htmlFor="Reading"
                      className="text-black mb-2 fw-semibold"
                    >
                      Relation <span className="text-danger">*</span>
                    </label>
                    <select {...register("Relation")} className="form-select ">
                      <option value="Relative">Relative</option>
                      <option value="Family Friend">Family Friend</option>
                      <option value="Academic">Academic</option>
                      <option value="Professional">Professional </option>
                      <option value="Others">Others </option>
                    </select>
                  </div>
                  <div className="col-12 col-lg-6">
                    <label
                      htmlFor="ReferenceMobile"
                      className="text-black mb-2 fw-semibold"
                    >
                      Reference Mobile <span className="text-danger">*</span>
                    </label>
                    <input
                      {...register("ReferenceMobile")}
                      type="number"
                      id="ReferenceMobile"
                      className="form-control"
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <label
                      htmlFor="phoneOff"
                      className="text-black mb-2 fw-semibold"
                    >
                      Phone (Off) <span className="text-danger">*</span>
                    </label>
                    <input
                      {...register("phoneOff")}
                      type="number"
                      id="phoneOff"
                      className="form-control"
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <label
                      htmlFor="phoneRes"
                      className="text-black mb-2 fw-semibold"
                    >
                      Phone (Res) <span className="text-danger">*</span>
                    </label>
                    <input
                      {...register("phoneRes")}
                      type="number"
                      id="phoneRes"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="my-3">
                  <label htmlFor="referenceAddress" className="text-black">
                    Reference Address <span className="text-danger">*</span>
                  </label>
                  <textarea
                    {...register("referenceAddress")}
                    id="referenceAddress"
                    className="w-100 bg-light border p-3 rounded-2"
                  ></textarea>
                </div>

                <button
                  className="btn btn-danger px-4"
                  type="button"
                  onClick={() => remove(index)}
                >
                  (-)
                </button>
                <br />
                {/* <br />
                <button
                  type="submit"
                  className="btn btn-primary fs-5 px-3 mt-2"
                >
                  Update Profile
                </button> */}
              </div>
            ))}
          </form>
          <button
            type="button"
            onClick={() => prepend(values)}
            className="fs-2 fw-semibold bg-white border-0"
          >
            Add Skill+
          </button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Reference;
