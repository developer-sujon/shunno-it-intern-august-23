import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CareerInfo = ({setCarrerInfo}) => {
  const [text, setText] = useState("");
  const values = {
    defaultValues: {
      presentSalary: "18000",
      expectedSalary: "22000",
    },
  };
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm(values);
  const onSubmit = (data) => {
    setCarrerInfo({...data, editText: text});
  };
  // console.log(careerInfo);

  return (
    <div className="my-3">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Career and Application Information
          </Accordion.Header>
          <Accordion.Body>
            <form onBlur={handleSubmit(onSubmit)} action="">
              {/* Career objective */}
              <label htmlFor="careerObjective" className="text-black">
                Career Objective <span className="text-danger">*</span>
              </label>
              {/* react quill for text editor */}
              <ReactQuill
                // {...register("editorText")}
                style={{ height: "150px" }}
                className="mb-5"
                theme="snow"
                defaultValue={text}
                onChange={(e) => setText(e)}
              />

              {/* Present Salary */}
              <div className="my-2 row g-5">
                <div className="col-12 col-lg-6 ">
                  <label htmlFor="presentSalary" className="text-black mb-2">
                    Present Salary <span className="text-danger">*</span>
                  </label>
                  <input
                    {...register("presentSalary", {
                      required: "Present salary is required",
                    })}
                    type="number"
                    id="presentSalary"
                    className="form-control"
                  />
                  {errors?.presentSalary && (
                    <span className="text-danger fw-bold">
                      {errors?.presentSalary.message}
                    </span>
                  )}
                  <p>TK/Month</p>
                  <label htmlFor="jobLevel" className="mt-1">
                    Looking for (Job Level)
                  </label>
                  <br />
                  <input
                    type="radio"
                    {...register("jobLevel")}
                    value="Entry Level"
                  />{" "}
                  Entry Level
                  <input
                    type="radio"
                    {...register("jobLevel")}
                    value="Mid Level"
                  />{" "}
                  Mid Level
                  <input
                    type="radio"
                    {...register("jobLevel")}
                    value="Top Level"
                  />{" "}
                  Top Level
                </div>

                {/* Expected salary */}
                <div className="col-12 col-lg-6">
                  <label htmlFor="expectedSalary" className="text-black mb-2">
                    Expected Salary <span className="text-danger">*</span>
                  </label>
                  <input
                    {...register("expectedSalary", {
                      required: "Expected salary is required",
                    })}
                    type="number"
                    id="expectedSalary"
                    className="form-control"
                  />
                  {errors?.expectedSalary && (
                    <span className="text-danger fw-bold">
                      {errors?.expectedSalary.message}
                    </span>
                  )}
                  <p>TK/Month</p>
                  <label htmlFor="jobNature" className="mt-1">
                    Available for (Job Nature)
                  </label>
                  <br />
                  <input
                    type="radio"
                    {...register("jobNature")}
                    value="Full Time"
                  />{" "}
                  Full time
                  <input
                    type="radio"
                    {...register("jobNature")}
                    value="Part Time"
                  />{" "}
                  Part time
                  <input
                    type="radio"
                    {...register("jobNature")}
                    value="Contract"
                  />{" "}
                  Contract
                  <input
                    type="radio"
                    {...register("jobNature")}
                    value="Internship"
                  />{" "}
                  Internship
                  <input
                    type="radio"
                    {...register("jobNature")}
                    value="Freelance"
                  />{" "}
                  Freelance
                </div>
              </div>
            </form>

            {/* <Editor></Editor> */}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default CareerInfo;
