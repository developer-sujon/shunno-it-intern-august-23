import React from "react";
import {useForm} from "react-hook-form";

const Inside = ({present,setPresentAddress}) => {

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({defaultValues:({House_no:'2323/222',Thana:'Mhegna',District:'Tangail', Village:'Amtai' })});

  const onSubmit = (data) => {

    if(present == 'Inside_Bangladesh-present'){
            setPresentAddress(data)
    }
  };

  return (
    <div>
      <form onBlur={handleSubmit(onSubmit)}>
        <div className=" row  gap-4  my-4">
          <div className="col">
            <select
              {...register("District", {required: "Enter your house No"})}
              className="form-select"
              aria-label="Default select example">
              <option value="Tangail">Tangail</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Noakhali">Noakhali</option>
              <option value="Sherpur">Sherpur</option>
            </select>
            {errors?.District && (
          <span className="text-danger fw-bold">
            {errors?.District.message}
          </span>
        )}
          </div>

          <div className="col">
            <select
              {...register("Thana", {required: "Enter your house No"})}
              className="form-select "
              aria-label="Default select example">
              <option value="Titas">Titas</option>
              <option value="Mhegna">Mhegna</option>
              <option value="Comilla_sadar">Comilla Sadar</option>
              <option value="Lalmai">Lalmai</option>
            </select>
            {errors?.Thana && (
          <span className="text-danger fw-bold">
            {errors?.Thana.message}
          </span>
        )}
          </div>

          <div className="col">
            <select
              {...register("Village", {required: "Enter your house No"})}
              className="form-select "
              aria-label="Default select example">
              <option value="Amtai">Amtai</option>
              <option value="Galia">Galia</option>
              <option value="Beta_gi">Beta gi</option>
              <option value="Bamna">Bamna</option>
            </select>
            {errors?.Village && (
          <span className="text-danger fw-bold">
            {errors?.Village.message}
          </span>
        )}
          </div>
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

export default Inside;
