import { yupResolver } from "@hookform/resolvers/yup";
import { createContext } from "react";
import * as yup from "yup";

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
const validationSchema = yup.object().shape({
  Educations: yup
    .array()
    .of(
      yup
        .object()
        .shape({
          Major_group: yup.string().required("Major Name is Required"),
        })
        .shape({
          Institute_name: yup.string().required("Institute Name is Required"),
        })

        .shape({
          Duration_Year: yup
            .string()
            .required("DUration-Year field is Required"),
        })
        .shape({
          result: yup.string().required(),
        })
        .shape({
          Achievement: yup.string().required("Achievement Field is Required"),
        })

        .required()
    )
    .required(),
  Trainings: yup
    .array()
    .of(
      yup
        .object()
        .shape({
          Title: yup.string().required("Training Title Name is Required*"),
        })
        .shape({
          Covered: yup.string().required("Covered Name is Required"),
        })

        .shape({
          Institute: yup.string().required("Institute field is Required"),
        })
        .shape({
          Location: yup.string().required("Location field is Required"),
        })
        .shape({
          Country: yup.string().required("Country Field is Required"),
        })

        .required()
    )
    .required(),

  Professionals: yup
    .array()
    .of(
      yup
        .object()
        .shape({
          Certification: yup
            .string()
            .required("Certification field is Required*"),
        })
        .shape({
          Location: yup.string().required("Location  is Required"),
        })

        .shape({
          Institute: yup.string().required("Institute field is Required"),
        })

        .required()
    )
    .required(),
});
const FormData = ({ children }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  console.log(errors);

  // react hook-form submit event
  const onSubmit = (data) => console.log(data);

  // main data
  const data = {
    onSubmit,
    register,
    handleSubmit,
    watch,
    errors,
    setError,
    setValue,
    control,
  };

  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

export default FormData;
