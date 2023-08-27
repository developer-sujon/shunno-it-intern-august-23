import React from 'react';
import { useForm } from 'react-hook-form';

const ParmanentIn = ({parmanent,setParmanetAddress}) => {

   
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    const parmanentData = {
        data
    }
    if(parmanent === 'Inside-Bangladesh-parmanent'){
        setParmanetAddress(parmanentData)
    }
  };

  return (
    <div>
      <form onBlur={handleSubmit(onSubmit)}>
        <div className=" row  gap-4  my-4">
          <div className="col">
            <select
              {...register("District")}
              className="form-select"
              aria-label="Default select example">
              <option value="Tangail">Tangail</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Noakhali">Noakhali</option>
              <option value="Sherpur">Sherpur</option>
            </select>
          </div>

          <div className="col">
            <select
              {...register("Thana")}
              className="form-select "
              aria-label="Default select example">
              <option value="Titas">Titas</option>
              <option value="Mhegna">Mhegna</option>
              <option value="Comilla_sadar">Comilla Sadar</option>
              <option value="Lalmai">Lalmai</option>
            </select>
          </div>

          <div className="col">
            <select
              {...register("Village")}
              className="form-select "
              aria-label="Default select example">
              <option value="Amtai">Amtai</option>
              <option value="Galia">Galia</option>
              <option value="Beta_gi">Beta gi</option>
              <option value="Bamna">Bamna</option>
            </select>
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
}

export default ParmanentIn;
