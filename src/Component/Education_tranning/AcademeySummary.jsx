import React, {useState} from "react";
import {Accordion, Button} from "react-bootstrap";
import {useForm, useFieldArray} from "react-hook-form";

const AcademeySummary = ({setAcademey}) => {
  

  const DataDefault = {
    LevelEducation: "SSC",
    Major_group: "Science",
    ExamTitle: "HSC",
    Borad: "Dhaka",
    Institute_name: "Tangail polytechinc",
    result: "Grade",
    Duration_Year: "4 year",
    passingYear: "2002",
    Achievement: "Good Achievement",
  };
  const {
    register,
    handleSubmit,
    formState: {errors},
    control,
  } = useForm({
    defaultValues: {
      Academy_Summary: [DataDefault],
    },
  });
  const {fields, prepend, remove} = useFieldArray({
    name: "Academy_Summary",
    control,
  });

  const onSubmitData = (data) => {
    setAcademey(data);
  };

  return (
    <section>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Employment History</Accordion.Header>
          <Accordion.Body>
            <p className="fs-5 fw-medium text-black ">
              Add Education
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
                    <div className="d-flex gap-3">
                      <div className="w-50">
                        <label className="fw-normal mb-1" htmlFor="">
                          Level of Education{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <select
                          {...register(
                            `Academy_Summary.${index}.LevelEducation`
                          )}
                          className="form-select "
                          aria-label=".form-select-sm example">
                          <option value="PSC">PSC</option>
                          <option value="SSC">SSC</option>
                          <option value="HSC">HSC</option>
                          <option value="Diploma">Diploma</option>
                        </select>

                        <label className="fw-normal my-2" htmlFor="">
                          Concentration/ Major/Group{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          {...register(`Academy_Summary.${index}.Major_group`, {
                            required: "This is required Feild",
                          })}
                          type="text"
                        />
                        {errors?.Major_group && (
                          <p className="text-danger">
                            {errors.Major_group.message}
                          </p>
                        )}
                      </div>

                      <div className="w-50">
                        <label className="fw-normal mb-1 " htmlFor="">
                          Exam/Degree Title{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <select
                          {...register(`Academy_Summary.${index}.ExamTitle`)}
                          className="form-select mb-3"
                          aria-label=".form-select-lg example">
                          <option value="SSC">SSC</option>
                          <option value="HSC">HSC</option>
                          <option value="DIPLOMA">DIPLOMA</option>
                        </select>

                        <label className="fw-normal  " htmlFor="">
                          Board <span className="text-danger">*</span>
                        </label>
                        <select
                          {...register(`Academy_Summary.${index}.Borad`)}
                          className="form-select "
                          aria-label=".form-select-sm example">
                          <option value="Dhaka">Dhaka</option>
                          <option value="Rajshahi">Rajshahi</option>
                          <option value="Barisal">Barisal</option>
                          <option value="Mymansing">Mymansing</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="fw-normal mb-1 pt-3" htmlFor="">
                        Insitute Name <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        {...register(
                          `Academy_Summary.${index}.Institute_name`,
                          {
                            required: "this is ruquired feild",
                          }
                        )}
                        type="text"
                      />
                      {errors?.Institute_name && (
                        <p className="text-danger">
                          {errors.Institute_name.message}
                        </p>
                      )}
                    </div>

                    <div className="d-flex pt-3 gap-3">
                      <div className="w-50">
                        <label className="fw-normal mb-1" htmlFor="">
                          Result <span className="text-danger">*</span>
                        </label>
                        <select
                          {...register(`Academy_Summary.${index}.result`)}
                          className="form-select "
                          aria-label=".form-select-sm example">
                          <option value="Fast_Divison">Fast Divison</option>
                          <option value="Second_Division">
                            Second Division
                          </option>
                          <option value="Third_Division">Third Division</option>
                          <option value="Grade">Grade</option>
                          <option value="Master">Master</option>
                        </select>

                        <label className="fw-normal my-2" htmlFor="">
                          Duration Year <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          {...register(
                            `Academy_Summary.${index}.Duration_Year`,
                            {
                              required: "This is required Feild",
                            }
                          )}
                          type="text"
                        />
                        {errors?.Duration_Year && (
                          <p className="text-danger">
                            {errors.Duration_Year.message}
                          </p>
                        )}
                      </div>

                      <div className="w-50">
                        <label className="fw-normal mb-1 " htmlFor="">
                          Passing Year <span className="text-danger">*</span>
                        </label>
                        <select
                          {...register(`Academy_Summary.${index}.passingYear`)}
                          className="form-select mb-3"
                          aria-label=".form-select-lg example">
                          <option value="2002">2002</option>
                          <option value="2003">2003</option>
                          <option value="2004">2004</option>
                        </select>

                        <label className="fw-normal   " htmlFor="">
                          Achievement <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          {...register(`Academy_Summary.${index}.Achievement`, {
                            required: "This is required Feild",
                          })}
                          type="text"
                        />
                        {errors?.Achievement && (
                          <p className="text-danger">
                            {errors.Achievement.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <Button
                      onClick={() => remove(index)}
                      className="btn btn-danger mt-3">
                      Delete
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

export default AcademeySummary;
