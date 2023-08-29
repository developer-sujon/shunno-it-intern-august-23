import React from "react";
import {Accordion} from "react-bootstrap";
import {useForm} from "react-hook-form";

const DisabilityInfo = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({defaultValues:{Disability_info:'2389023812038209'}});

  const onSubmit = (data) => {
      console.log(data)
  };
  return (
    <div className="my-2">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Disability Information (if any)</Accordion.Header>
          <Accordion.Body>
            <form onBlur={handleSubmit(onSubmit)}>
              <label className="mb-1" htmlFor="disbility">
                You didn't mention your ID yet.
              </label>
              <input
                id="disbility"
                type="text"
                className="form-control mb-2 fs-6 fw-fw-normal"
                placeholder="if your are a person with have to disability and no disability ID Number ,  please contact i2i support +8802938938 by call/sms/what's app"
                {...register("Disability_info", {
                  required: "This is required feild",
                })}
              />

              {errors?.Disability_info && <span className="text-danger">{errors?.Disability_info.message}</span>}
            </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default DisabilityInfo;
