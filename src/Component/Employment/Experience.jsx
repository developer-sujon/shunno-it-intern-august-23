import React, {useState} from "react";
import {Accordion, Button} from "react-bootstrap";
import {useForm, useFieldArray} from "react-hook-form";
import {FaTimes} from "react-icons/fa";
import Department from "./Department";

const Experience = () => {
  const [Experiance , setExpreance] = useState({})

  const [depart , setDepart] = useState({})
  
  const  Employment1 = {
      Experiance : Experiance ,
      depart : depart
  }
  console.log(Employment1)
  
  const DataDefault = {
    CompanyName: "Shunno IT",
    Designation: "Software Engineer",
    CompanyBusiness: "Marketing",
    Responsibilities: "Coding",
    CompanyLocation: "Talaimari,Rajshahi",
  };
  const {
    register,
    handleSubmit,
    formState: {errors},
    control,
  } = useForm({
    defaultValues: {
      Experience: [DataDefault],
    },
  });
  const {fields, prepend, remove} = useFieldArray({
    name: "Experience",
    control,
  });

  const onSubmitData = (data) => {
    setExpreance(data)
  };

  return (
    <section>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Employment History</Accordion.Header>
          <Accordion.Body>
            <p className="fs-5 fw-medium text-black ">
              Add Experience
              <button
                onClick={() => {
                  prepend(DataDefault);
                }}
                className="fs-2 border-0 bg-white">
                +
              </button>
            </p>
            <form onBlur={handleSubmit(onSubmitData)}>
              {fields.map((field, index) => {
                return (
                  <section key={field?.id}>
                    <div className="Experience">
                      <div className="ExperienceLeft">
                        <div className="CompanyName">
                          <label>Company Name *</label>
                          <br />
                          <input
                            {...register(`Experience.${index}.CompanyName`)}
                            type="text"
                          />
                        </div>
                        <div className="Designation">
                          <label>Designation *</label>
                          <br />
                          <input
                            {...register(`Experience.${index}.Designation`)}
                            type="text"
                          />
                        </div>
                        <div className="EmploymentPeriod">
                          <label>Employment Period</label>
                          <br />
                          <div className="EmploymentPeriodRow">
                            <div className="EmploymentPeriodLeft">
                              <input
                                {...register(
                                  `Experience.${index}.EmploymentPeriodStart`
                                )}
                                type="date"
                              />
                            </div>
                            <div className="EmploymentPeriodRight">
                              <input
                                {...register(
                                  `Experience.${index}.EmploymentPeriodEnd`
                                )}
                                type="date"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ExperienceRight">
                        <div className="CompanyBusiness">
                          <label>Company Business</label>
                          <br />
                          <input
                            {...register(`Experience.${index}.CompanyBusiness`)}
                            type="text"
                          />
                        </div>
                        <div className="EmployeeType">
                          <label>Employee type? *</label>
                          <br />
                          <input
                            value="Remote"
                            {...register(`Experience.${index}.EmployeeType`)}
                            type="radio"
                          />
                          <label>Remote</label>
                          <input
                            value="In Office"
                            {...register(`Experience.${index}.EmployeeType`)}
                            type="radio"
                          />
                          <label>In Office</label>
                        </div>
                      </div>
                    </div>
                    <br />


                    <div>
                     <Department Experiance={Experiance} setDepart={setDepart}></Department>
                    </div>


                    <div className="Responsibilities">
                      <label>Responsibilities</label>
                      <br />
                      <textarea
                        {...register(
                          `Experience.${index}.Responsibilities`
                        )}></textarea>
                    </div>

                    <div className="CompanyLocation">
                      <label>Company Location</label>
                      <br />
                      <input
                        {...register(`Experience.${index}.CompanyLocation`)}
                        type="text"
                      />
                    </div>
                    <br />
                    <Button
                      onClick={() => remove(index)}
                      className="btn btn-danger mt-3">
                      <FaTimes />
                    </Button>
                    <hr className="m-2" />
                  </section>
                );
              })}
            </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};
export default Experience;
