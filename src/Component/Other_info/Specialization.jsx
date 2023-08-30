import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";

const Specialization = ({setSpecial1}) => {
  const values = {
    defaultValues: {
      extracurricularActivities: "Problem Solving",
      skill: "Angular",
      skillDescription: "Write something",
      skillWay: "Self",
    },
  };
  const { control, handleSubmit, register } = useForm(values.specializationInfo);
  const { fields, prepend, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "specializationInfo", // unique name for your Field Array
  });
  const onSubmitData = (data) => {
   
    setSpecial1(data)
   
  };
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Specialization</Accordion.Header>
        <Accordion.Body>
          <form onBlur={handleSubmit(onSubmitData)} className="">
            {fields.map((item, index) => (
              <div
                key={item.id}
                className="border-bottom border-3 border-primary pb-4 mb-4"
              >
                <label htmlFor="skill" className="text-black mb-2">
                  Skill <span className="text-danger">*</span>
                </label>
                <input
                  {...register(`specializationInfo.${index}.skill`)}
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
                        {...register(`specializationInfo.${index}.skillWay`)}
                        value="Self"
                      />
                      Self
                    </div>
                    <div>
                      <input
                        type="radio"
                        {...register(`specializationInfo.${index}.skillWay`)}
                        value="Job"
                      />{" "}
                      Job
                    </div>
                    <div>
                      <input
                        type="radio"
                        {...register(`specializationInfo.${index}.skillWay`)}
                        value="Educational"
                      />{" "}
                      Educational
                    </div>
                    <div>
                      <input
                        type="radio"
                        {...register(`specializationInfo.${index}.skillWay`)}
                        value="Professional Training"
                      />{" "}
                      Professional Training
                    </div>
                    <div>
                      <input
                        type="radio"
                        {...register(`specializationInfo.${index}.skillWay`)}
                        value="NTVQF"
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
                    {...register(
                      `specializationInfo.${index}.skillDescription`
                    )}
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
                      `specializationInfo.${index}.extracurricularActivities`
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
                <br />
                <br />
                <button
                  type="submit"
                  className="btn btn-primary fs-5 px-3 mt-2"
                >
                  Update Profile
                </button>
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

export default Specialization;
