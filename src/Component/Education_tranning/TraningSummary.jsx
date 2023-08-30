import React, {useState} from "react";
import {Accordion, Button} from "react-bootstrap";
import {useForm, useFieldArray} from "react-hook-form";

const TraningSummary = ({setTraning}) => {
  const DefaultValueTraning = {
    Traning_title: "Font-end-dev",
    Topic_cover: "HTML , CSS , JAVASCRIPT",
    Institute: "Shunno IT",
    location: "Rajshahi",
    country: "Bangladesh",
    Traning_year: "2017",
    duration: "2 year",
  };
  const {
    register,
    handleSubmit,
    formState: {errors},
    control,
  } = useForm({
    defaultValues: [DefaultValueTraning],
  });

  const {fields, prepend, remove} = useFieldArray({
    name: "TraningSummary",
    control,
  });
  const onSubmitData = (data) => {
    setTraning(data);
  };
  return (
    <div className="my-2">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Traning Summery</Accordion.Header>
          <Accordion.Body>
            <p className="fs-5 fw-medium text-black ">
              Add Traning
              <button
                onClick={() => prepend(DefaultValueTraning)}
                className="fs-2 border-0 bg-white">
                +
              </button>
            </p>
            <form onClick={handleSubmit(onSubmitData)}>
              {fields.map((field, index) => {
                return (
                  <section key={field?.id}>
                    <div className="d-flex gap-3">
                      <div className="w-50">
                        <label className="fw-normal my-2" htmlFor="">
                          Traning Title <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          {...register(
                            `TraningSummary.${index}.Traning_title`,
                            {
                              required: "This is required Feild",
                            }
                          )}
                          type="text"
                        />
                        {errors?.Traning_title && (
                          <p className="text-danger">
                            {errors.Traning_title.message}
                          </p>
                        )}

                        <label className="fw-normal my-2" htmlFor="">
                          Topic Cover
                        </label>
                        <input
                          className="form-control"
                          {...register(`TraningSummary.${index}.Topic_cover`, {
                            required: "This is required Feild",
                          })}
                          type="text"
                        />
                        {errors?.Topic_cover && (
                          <p className="text-danger">
                            {errors.Topic_cover.message}
                          </p>
                        )}

                        <label className="fw-normal my-2" htmlFor="">
                          Institute <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          {...register(`TraningSummary.${index}.Institute`, {
                            required: "This is required Feild",
                          })}
                          type="text"
                        />
                        {errors?.Institute && (
                          <p className="text-danger">
                            {errors.Institute.message}
                          </p>
                        )}

                        <label className="fw-normal my-2" htmlFor="">
                          Location
                        </label>
                        <input
                          className="form-control"
                          {...register(`TraningSummary.${index}.location`, {
                            required: "This is required Feild",
                          })}
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
                          Country <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          {...register(`TraningSummary.${index}.country`, {
                            required: "This is required Feild",
                          })}
                          type="text"
                        />
                        {errors?.country && (
                          <p className="text-danger">
                            {errors.country.message}
                          </p>
                        )}

                        <label className="fw-normal  my-2" htmlFor="">
                          Traning Year <span className="text-danger">*</span>
                        </label>
                        <select
                          {...register(`TraningSummary.${index}.Traning_year`)}
                          className="form-select "
                          aria-label=".form-select-sm example">
                          <option value="2015">2015</option>
                          <option value="2017">2017</option>
                          <option value="2018">2018</option>
                          <option value="2019">2019</option>
                        </select>

                        <label className="fw-normal my-2" htmlFor="">
                          Duration <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          {...register(`TraningSummary.${index}.duration`, {
                            required: "This is required Feild",
                          })}
                          type="text"
                        />
                        {errors?.country && (
                          <p className="text-danger">
                            {errors.duration.message}
                          </p>
                        )}
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

export default TraningSummary;
