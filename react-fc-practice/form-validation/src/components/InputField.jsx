import { useState } from "react";
const InputField = ({
  inputType,
  inputId,
  labelTitle,
  placeholder,
  data,
  setData,
  inputName,
  formClass,
  inputClass,
  errorText,
}) => {
  const [inputvalues, setInputValues] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // onchange function for input field
  const handleInputField = (e) => {
    // verify length
    e.target.value.length < 3 ? setErrorMsg(errorText) : setErrorMsg("");

    // verify email by email regex
    if (e.target.name === "email") {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!emailRegex.test(e.target.value)) {
        setErrorMsg("Invalid email address");
      }
    }

    // verify phone by phone regex and check length min 11 number
    if (e.target.name === "phone") {
      if (e.target.value.length < 11) {
        setErrorMsg("The phone number must be at least 11 numbers");
      } else if (e.target.value.length > 14) {
        setErrorMsg("The phone number should not be over 14 numbers");
      }
    }

    // set data
    setInputValues(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
    setData({ ...data, tos: e.target.checked });
  };

  return (
    <div className={formClass || "form-group"}>
      {labelTitle && <label htmlFor={inputId}>{labelTitle}</label>}

      {errorMsg && (
        <p>
          <small className="text-danger">{errorMsg}</small>
        </p>
      )}
      <input
        type={inputType}
        className={`${inputClass || "form-control"} ${
          errorMsg && "border border-danger"
        }`}
        id={inputId}
        name={inputName}
        placeholder={placeholder}
        value={inputvalues}
        onChange={handleInputField}
      />
    </div>
  );
};

export default InputField;
