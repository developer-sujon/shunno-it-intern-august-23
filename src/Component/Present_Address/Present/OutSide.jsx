import React from "react";
import {useForm} from "react-hook-form";

const OutSide = ({present,setPresentAddress}) => {
 
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({defaultValues:{House_no:'122/55', country:'Afghanistan'}});

  const onSubmit = (data) => {
 
    if(present != 'Inside_Bangladesh-present'){
        setPresentAddress(data)
    }
  };
  return (
    <div>
      <form onBlur={handleSubmit(onSubmit)}>
        <div className="  my-4">
          <select
            {...register("country",{required: "This is required field"})}
            className="form-select form-control"
            aria-label="Default select example">
            <option value="Afghanistan">Afghanistan</option>
            <option value="Aland-Island">Aland Island</option>
            <option value="Argenttina">Argenttina</option>
            <option value="Usa">Usa</option>
          </select>
          {errors?.country && (
          <span className="text-danger fw-bold">
            {errors?.country.message}
          </span>
        )}
        </div>

        <input
          {...register("House_no", {required: "Enter your house No"})}
          type="text"
          className="form-control"
          placeholder="Type your House No/rRoad/Village"
        />
        {errors?.House_no && (
          <span className="text-danger fw-bold">
            {errors?.House_no.message}
          </span>
        )}
      </form>
    </div>
  );
};

export default OutSide;
