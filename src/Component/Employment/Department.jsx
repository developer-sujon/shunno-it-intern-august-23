import * as React from "react";
import { Button } from "react-bootstrap";
import {useForm, useFieldArray, useWatch} from "react-hook-form";

const datafeld1 = ({setDepart }) => {
    const defalValue = {
        name : 'alfaz' ,
        exp : '2 year'
    }
  const {control, handleSubmit, register, formState:{errors}} = useForm({
    defaultValues : [defalValue]
  });
  const {fields, append, update, remove} = useFieldArray({
      name: "Department_data",
    control,
  });

  const onHanldeSubmit = (data) => {
    setDepart(data)
  }

  return (
    <form onBlur={handleSubmit(onHanldeSubmit)}>
        Department
         <button
         className="border-0 bg-white fs-2"
            type="button"
            onClick={() => {
              append(defalValue);
            }}>
            +
          </button>
      {fields.map((field, index) => (
        <div key={field.id}>
           <div className="d-flex gap-3">
                <div className="w-50 d-flex gap-2">
                  <div className="w-50">
                    <label className="fw-normal my-2" htmlFor="">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      {...register(`Department_data.${index}.name`, {
                        required: "This is required Feild",
                      })}
                      type="text"
                    />
                    {errors?.name && (
                      <p className="text-danger">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="w-50">

                  <label className="fw-normal my-2" htmlFor="">
                      Exp <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      {...register(`Department_data.${index}.exp`, {
                        required: "This is required Feild",
                      })}
                      type="text"
                    />
                    {errors?.experiance && (
                      <p className="text-danger">
                        {errors.experiance.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-50"></div>
              </div>
          <Button onClick={()=> remove(index)} className="mt-2 btn btn-danger">Delelte</Button>
        </div>
      ))}
    </form>
  );
};

export default datafeld1;
