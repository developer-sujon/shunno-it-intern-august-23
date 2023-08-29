import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";

const Language = () => {
  const [language, setLanguage] = useState([]);
  const values = {
    defaultValues: {
      Language: "English",
      Reading: "Medium",
      Speaking: "High",
      Writing: "Medium",
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
    setLanguage([...language, data]);
    console.log(language);
  };
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Language Proficiency</Accordion.Header>
        <Accordion.Body>
          <form onSubmit={handleSubmit(onSubmitData)} className="">
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
                    <select {...register("Reading")} className="form-select ">
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
                    <select {...register("Writing")} className="form-select ">
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
                    <select {...register("Speaking")} className="form-select ">
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

export default Language;
