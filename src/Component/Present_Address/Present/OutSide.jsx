import React from "react";
import {useForm} from "react-hook-form";

const OutSide = ({present,setPresentAddress}) => {
 
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    const presentData = {
        data
    }
    if(present != 'Inside_Bangladesh-present'){
        setPresentAddress(presentData)
    }
  };
  return (
    <div>
      <form onBlur={handleSubmit(onSubmit)}>
        <div className="  my-4">
          <select
            {...register("District")}
            className="form-select form-control"
            aria-label="Default select example">
            <option value="Afghanistan">Afghanistan</option>
            <option value="Aland-Island">Aland Island</option>
            <option value="Argenttina">Argenttina</option>
            <option value="Usa">Usa</option>
          </select>
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
