import React from "react";
import { Accordion } from "react-bootstrap";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import Specialization from "./Specialization";
import Language from "./Language";
import Reference from "./Reference";

const OtherInfo = () => {
  const values = {
    defaultValues: {
      Language: "English",
      Reading: "Medium",
      ReferenceDesignation: "Senior Developer",
      ReferenceEmail: "abc@gmail.com",
      ReferenceMobile: "+880333211111",
      ReferenceName: "Mr. Fahim Ali",
      ReferenceOrganization: "Shunno It",
      Relation: "Brother",
      Speaking: "High",
      Writing: "Medium",
      phoneOff: '3992032093',
      phoneRes: '2213444544',
      otherInfo:[
        {
          extracurricularActivities: "Problem Solving",
          skill: "Angular",
          skillDescription: "Write something",
          skillWay: 'Self'
        }
      ]
    },
  };
  const { control, handleSubmit, register } = useForm(values);
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
<<<<<<< HEAD
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "otherInfo", // unique name for your Field Array
=======
      control, 
      name: "test",
>>>>>>> a3eac145f387ab3f270ba2f99d4cc98dfaa0a187
    }
  );
  const onSubmitData = (data) => {
    // data.preventDefault();
    console.log(data);
  };
  return (
    <div className="my-3">
      {/* <form onSubmit={handleSubmit(onSubmitData)} className=""> */}
        {/* <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Specialization</Accordion.Header>
            <Accordion.Body>
              {fields.map((item, index) => (
                <div
                  key={item.id}
                  className="border-bottom border-3 border-primary pb-4 mb-4"
                >
                  <label htmlFor="skill" className="text-black mb-2">
                    Skill <span className="text-danger">*</span>
                  </label>
                  <input
                    {...register(`otherInfo.${index}.skill`)}
                    type="text"
                    id="skill"
                    className="form-control"
                  />
                  <div className="my-4">
                    <label htmlFor="skill" className="mt-1">
                      How did you learn the skill?{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <br />
                    <div className="d-flex gap-3 mt-2">
                      <div>
                        <input
                          type="radio"
                          {...register(`otherInfo.${index}.skillWay`)}
                        />
                        Self
                      </div>
                      <div>
                        <input
                          type="radio"
                          {...register(`otherInfo.${index}.skillWay`)}
                        />{" "}
                        Job
                      </div>
                      <div>
                        <input
                          type="radio"
                          {...register(`otherInfo.${index}.skillWay`)}
                        />{" "}
                        Educational
                      </div>
                      <div>
                        <input
                          type="radio"
                          {...register(`otherInfo.${index}.skillWay`)}
                        />{" "}
                        Professional Training
                      </div>
                      <div>
                        <input
                          type="radio"
                          {...register(`otherInfo.${index}.skillWay`)}
                        />{" "}
                        NTVQF
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="skillDescription" className="text-black">
                      Skill Description <span className="text-danger">*</span>
                    </label>
                    <textarea
                      {...register(`otherInfo.${index}.skillDescription`)}
                      id="skillDescription"
                      className="w-100 bg-light border p-3 rounded-2"
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <label
                      htmlFor="extracurricularActivities"
                      className="text-black"
                    >
                      Extracurricular Activities{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <textarea
                      {...register(
                        `otherInfo.${index}.extracurricularActivities`
                      )}
                      id="extracurricularActivities"
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
                </div>
              ))}
              <button
                type="button"
                onClick={() => append()}
                className="fs-2 fw-semibold bg-white border-0"
              >
                Add Skill+
              </button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}
        <Specialization></Specialization>

        {/* <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Language Proficiency</Accordion.Header>
            <Accordion.Body>
              {fields.map((item, index) => (
                <div
                  key={item.id}
                  className="border-bottom border-3 border-primary pb-4 mb-4"
                >
                  <div className="row mb-4 g-3">
                    <div className="col-12 col-lg-6">
                      <label
                        htmlFor="Language"
                        className="text-black mb-2 fw-semibold"
                      >
                        Language <span className="text-danger">*</span>
                      </label>
                      <input
                        {...register("Language")}
                        type="text"
                        id="Language"
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <label htmlFor="Reading" className="text-black mb-2">
                        Reading <span className="text-danger">*</span>
                      </label>
                      <select {...register("Reading")} className="form-control">
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Secondary">Secondary</option>
                        <option value="Low">Low</option>
                      </select>
                    </div>
                    <div className="col-12 col-lg-6">
                      <label htmlFor="Writing" className="text-black mb-2">
                        Writing <span className="text-danger">*</span>
                      </label>
                      <select {...register("Writing")} className="form-control">
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Secondary">Secondary</option>
                        <option value="Low">Low</option>
                      </select>
                    </div>
                    <div className="col-12 col-lg-6">
                      <label htmlFor="Speaking" className="text-black mb-2">
                        Speaking <span className="text-danger">*</span>
                      </label>
                      <select
                        {...register("Speaking")}
                        className="form-control"
                      >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Secondary">Secondary</option>
                        <option value="Low">Low</option>
                      </select>
                    </div>
                  </div>

                  <button
                    className="btn btn-danger px-4"
                    type="button"
                    onClick={() => remove(index)}
                  >
                    (-)
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => append()}
                className="fs-2 fw-semibold bg-white border-0"
              >
                Add Language+
              </button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}
        <Language></Language>

        {/* <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>References</Accordion.Header>
            <Accordion.Body>
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
                        placeholder="Reference Name"
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
                        placeholder="ReferenceDesignation"
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
                        placeholder="ReferenceOrganization"
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
                        placeholder="Reference Email"
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <label
                        htmlFor="Reading"
                        className="text-black mb-2 fw-semibold"
                      >
                        Relation <span className="text-danger">*</span>
                      </label>
                      <select
                        {...register("Relation")}
                        className="form-control"
                      >
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
                        placeholder="Reference Mobile"
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
                        placeholder="Phone (Off)"
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
                        placeholder="Phone (Res)"
                      />
                    </div>
                  </div>
                  <div className="my-3">
                    <label htmlFor="skillDescription" className="text-black">
                      Skill Description <span className="text-danger">*</span>
                    </label>
                    <textarea
                      name=""
                      id="skillDescription"
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
                </div>
              ))}
              <button
                type="button"
                onClick={() => append()}
                className="fs-2 fw-semibold bg-white border-0"
              >
                Add Reference+
              </button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}
        <Reference></Reference>

        {/* <button type="submit" className="btn btn-primary fs-5 px-3 mt-2">
          Update Profile
        </button> */}
      {/* </form> */}
    </div>
  );
};

export default OtherInfo;
