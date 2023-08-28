import { createContext } from "react";

//import react-hook form
import { useForm } from "react-hook-form";

// create context
export const FormContext = createContext([]);

const FormData = ({ children }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm({ defaultValues: { addressCountry: "Bangladesh" } });
  // react hook-form submit event
  const onSubmit = (data) => console.log(data);

  // main data
  const data = {
    onSubmit,
    register,
    handleSubmit,
    watch,
    errors,
    setValue,
    control,
  };

  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

export default FormData;
