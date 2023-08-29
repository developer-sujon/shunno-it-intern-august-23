import React, {useState} from "react";
import {Accordion} from "react-bootstrap";
import {Controller, useForm} from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RelatioveInfo = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({defaultValues: {Keywords: "html Css javaScript"}});

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-2">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Other Relavent Information</Accordion.Header>
          <Accordion.Body>
            <div className="">
              <form onBlur={handleSubmit(onSubmit)}>
                <div>
                  <label className="fw-medium mb-2">
                    Career Summary <span className="text-danger">*</span>
                  </label>
                  <Controller
                    name="Carrer_summary"
                    control={control}
                    defaultValue="This section is your Carrry summary"
                    rules={{required: " This field is required"}} // Add required rule
                    render={({field}) => (
                      <div>
                        <ReactQuill
                        className="text-black fs-3"
                          style={{height: "150px"}}
                          value={field.value}
                          onChange={field.onChange}
                        />
                        {errors.Carrer_summary && (
                          <p>{errors.Carrer_summary.message}</p>
                        )}
                      </div>
                    )}
                  />
                </div>
                <br /> <br />
                <div className="mt-2">
                  <div>
                    <label className="fw-medium my-2">
                      Special Qulification <span className="text-danger">*</span>
                    </label>
                    <Controller
                      name="Special_summary"
                      control={control}
                      defaultValue="This  section is Special Summary  "
                      rules={{required: " This field is required"}} // Add required rule
                      render={({field}) => (
                        <div>
                          <ReactQuill
                            style={{height: "150px"}}
                            value={field.value}
                            onChange={field.onChange}
                          />
                          {errors.Special_summary && (
                            <p>{errors.Special_summary.message}</p>
                          )}
                        </div>
                      )}
                    />
                  </div>
                  <br /> <br/>
                </div>
                <br />
                <label className="mb-1 mt-2" htmlFor="disbility">
                  Keywords <span className="text-danger">*</span>
                </label>
                <input
                  id="disbility"
                  type="text"
                  className="form-control mb-2 fs-6 fw-fw-normal"
                  placeholder="Html , Css , Jsx"
                  {...register("Keywords", {
                    required: "This is required feild",
                  })}
                />
                {errors?.Keywords && (
                  <span className="text-danger">
                    {errors?.Keywords.message}
                  </span>
                )}
              </form>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default RelatioveInfo;
