import { useState } from "react";
import InputField from "./InputField";
const Form = () => {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("");
  const [tosError, setTosError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTosError("");

    if (!data.tos) {
      return setTosError("Please accept terms and conditions");
    }

    if (!data.country) {
      setTosError("Please select your country");
    }

    setData({ ...data, country });
    console.log(data);
  };

  return (
    //create a sign up form
    <div>
      <form className="text-start" onSubmit={handleSubmit}>
        <InputField
          data={data}
          setData={setData}
          inputType="text"
          inputId="name"
          inputName="name"
          labelTitle="Name"
          placeholder="Enter name"
          errorText="Name must be at least 3 characters"
        />
        <InputField
          data={data}
          setData={setData}
          inputType="email"
          inputId="email"
          inputName="email"
          labelTitle="Email"
          placeholder="Enter email"
          errorText="Email must be at least 3 characters"
        />
        <InputField
          data={data}
          setData={setData}
          inputType="password"
          inputId="password"
          inputName="password"
          labelTitle="Password"
          placeholder="Set password"
        />

        <InputField
          data={data}
          setData={setData}
          inputType="number"
          inputId="phone"
          labelTitle="Phone"
          inputName="phone"
          placeholder="Enter phone"
        />
        <InputField
          data={data}
          setData={setData}
          inputType="text"
          inputId="address"
          labelTitle="Address"
          inputName="address"
          placeholder="Enter address"
        />

        <select
          className="form-select mt-2"
          aria-label="Default select example"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option>Select your country</option>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
          <option>France</option>
          <option>Germany</option>
          <option>Japan</option>
          <option>China</option>
        </select>

        {/* get some radio button and check box */}
        <h4>Gender</h4>
        <div className="d-flex gap-3">
          <InputField
            data={data}
            setData={setData}
            inputType="radio"
            formClass="form-check"
            inputClass="form-check-input"
            inputId="male"
            breakLine={false}
            labelTitle="Male"
            inputName="gender"
            placeholder="Enter gender"
          />
          <InputField
            data={data}
            setData={setData}
            inputType="radio"
            formClass="form-check"
            inputClass="form-check-input"
            inputId="female"
            breakLine={false}
            labelTitle="Female"
            inputName="gender"
            placeholder="Enter gender"
          />
        </div>

        <InputField
          data={data}
          setData={setData}
          inputType="text"
          inputId="dob"
          inputName="dob"
          labelTitle="DOB"
          placeholder="Enter DOB"
        />

        <InputField
          data={data}
          setData={setData}
          inputType="text"
          inputId="education"
          labelTitle="Education"
          inputName="education"
          placeholder="Enter education"
        />

        {tosError && (
          <p>
            <small className="text-danger">
              Please accept terms and conditions
            </small>
          </p>
        )}

        <InputField
          data={data}
          setData={setData}
          inputType="checkbox"
          formClass="form-check my-2"
          inputClass="form-check-input"
          inputId="tos"
          labelTitle="Accept our Terms And Condition"
          inputName="tos"
        />

        <button type="submit" className="btn btn-primary mt-2">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Form;
