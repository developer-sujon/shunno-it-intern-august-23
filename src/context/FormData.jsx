import { createContext } from "react";

//import react-hook form
import { useForm } from "react-hook-form";

// create context
export const FormContext = createContext([]);
const defaultValues = {
  personalInfo: {
    firstName: "Rasel",
    lastName: "Mahmud",
    fatherName: "Father Name",
    motherName: "Mother Name",
    dob: "01-01-2000",
    gender: "Male",
    maritalStatus: "Single",
    nationalId: "",
    passportIssueDate: "",
    secondaryPhone: "",
    weightKG: "",
    height: "",
    primaryPhone: "",
    passportNumber: "",
    nationality: "",
    religion: "",
  },
  addressDetails: {
    presentAddress: {
      insideBangladesh: {
        division: "",
        district: "",
        upazila: "",
        country: "",
      },
    },
  },
};
const FormData = ({ children }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,

    formState: { errors },
  } = useForm({
    defaultValues,
  });
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
