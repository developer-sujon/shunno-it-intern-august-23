import React,{useState} from "react";
import {Accordion, Button} from "react-bootstrap";
import {useFieldArray, useForm} from "react-hook-form";

const ProfesonalCertificate = ({setprofesonal}) => {

  const defaultValueIs = {
    Certificate: "Shunno It Certifaicate",
    location: "Dhaka",
    institute: "Shunno IT",
    Duration_start: "10/25/2017",
    Duration_end: "11/22/2020",
  };

  const {
    register,
    handleSubmit,
    formState: {errors},
    control,
  } = useForm({
    defaultValues: {
      ProfesonalCertificateArray: [defaultValueIs],
    },
  });

  const {fields, prepend, remove} = useFieldArray({
    name: "ProfesonalCertificateArray",
    control,
  });
  const onSubmitData = (data) => {
    setprofesonal(data)
  };
  return (
    <div className="mb-3">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Profesonal Certificate</Accordion.Header>
          <Accordion.Body>
            <p className="fs-5 fw-medium text-black ">
              Add Education
              <button
                onClick={() => {
                  prepend(defaultValueIs);
                }}
                className="fs-2 border-0 bg-white">
                +
              </button>
            </p>
            <form onBlur={handleSubmit(onSubmitData)}>
              {fields.map((field, index) => {
                return (
                  <section key={field.id}>
                    <div className="d-flex gap-3">
                      <div className="w-50">
                        <label className="fw-normal my-2" htmlFor="">
                          Certificate <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          {...register(
                            `ProfesonalCertificateArray.${index}.Certificate`,
                            {
                              required: "This is required Feild",
                            }
                          )}
                          type="text"
                        />
                        {errors?.Certificate && (
                          <p className="text-danger">
                            {errors.Certificate.message}
                          </p>
                        )}
                        <label className="fw-normal my-2" htmlFor="">
                          Location
                        </label>
                        <input
                          className="form-control"
                          {...register(
                            `ProfesonalCertificateArray.${index}.location`,
                            {
                              required: "This is required Feild",
                            }
                          )}
                          type="text"
                        />
                        {errors?.location && (
                          <p className="text-danger">
                            {errors.location.message}
                          </p>
                        )}
                      </div>
                      <div className="w-50">
                        <label className="fw-normal my-2" htmlFor="">
                          Institute <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          {...register(
                            `ProfesonalCertificateArray.${index}.institute`,
                            {
                              required: "This is required Feild",
                            }
                          )}
                          type="text"
                        />
                        {errors?.institute && (
                          <p className="text-danger">
                            {errors.institute.message}
                          </p>
                        )}
                        <div className="d-flex gap-3">
                          <div className="w-50">
                            <label className="fw-normal my-2" htmlFor="">
                              Duration Start{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              {...register(
                                `ProfesonalCertificateArray.${index}.Duration_start`,
                                {
                                  required: "This is required Feild",
                                }
                              )}
                              type="date"
                            />
                            {errors?.Duration_start && (
                              <p className="text-danger">
                                {errors.Duration_start.message}
                              </p>
                            )}
                          </div>
                          <div className="w-50">
                            <label className="fw-normal my-2" htmlFor="">
                              Duration End{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              {...register(
                                `ProfesonalCertificateArray.${index}.Duration_end`,
                                {
                                  required: "This is required Feild",
                                }
                              )}
                              type="date"
                            />
                            {errors?.Duration_end && (
                              <p className="text-danger">
                                {errors.Duration_end.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => remove(index)}
                      className="btn btn-danger mt-2">
                      Delete
                    </Button>
                  </section>
                );
              })}
            </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ProfesonalCertificate;
