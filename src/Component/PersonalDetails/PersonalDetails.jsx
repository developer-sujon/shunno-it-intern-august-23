import { useState } from "react";
import { useForm } from "react-hook-form";
import "../PersonalDetails/style.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const PersonalDetails = () => {
  const [value2, setValue2] = useState();
  const [value3, setValue3] = useState();
  const [value4, setValue4] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ color: "rgb(94, 91, 91)", fontWeight: "bold" }}
            >
              Personal Details
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="MainDiv">
                <div className="ColumnLeft">
                  <div className="FirstName">
                    <label>First Name*</label>
                    <br></br>
                    <input
                      {...register("FirstName", {
                        required: "input field is required",
                      })}
                      type="text"
                    />
                    <p>{errors.FirstName?.message}</p>
                  </div>

                  <div className="FatherName">
                    <label>Father's Name</label> <br></br>
                    <input
                      {...register("FatherName", {
                        required: "input field is required",
                      })}
                      type="text"
                    />
                    <p>{errors.FatherName?.message}</p>
                  </div>

                  <div className="DateOfBirth">
                    <label>Date of Birth*</label> <br></br>
                    <input {...register("DateOfBirth")} type="date" />
                  </div>

                  <div className="Religion">
                    <label>Religion</label>
                    <br></br>
                    <select {...register("Religion")}>
                      <option value=""></option>
                      <option value="Islam">Islam</option>
                      <option value="Hindusim">Hindusim</option>
                      <option value="Buddhism">Buddhism</option>
                    </select>
                  </div>

                  <div className="Nationality">
                    <label>Nationality*</label>
                    <br></br>
                    <select {...register("Nationality")}>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                      <option value="Pakistan">Pakistan</option>
                    </select>
                  </div>
                  <div className="PassportNumber">
                    <label>Passport Number</label>
                    <br></br>
                    <input
                      {...register("PassportNumber", {
                        required: "input field is required",
                      })}
                      type="text"
                    />
                    <p>{errors.PassportNumber?.message}</p>
                  </div>

                  <div className="Primary">
                    <label>Primary Mobile</label>
                    <br></br>
                    <PhoneInput
                      {...register("PrimaryMobile", {
                        required: "input field is required",
                      })}
                      placeholder="Enter phone number"
                      value={value2}
                      onChange={setValue2}
                    />
                    <p>{errors.PrimaryMobile?.message}</p>
                  </div>

                  <div className="Emergency">
                    <label>Emergency Contact</label>
                    <br></br>
                    <PhoneInput
                      {...register("EmergencyContact", {
                        required: "input field is required",
                      })}
                      placeholder="Enter phone number"
                      value={value4}
                      onChange={setValue4}
                    />
                    <p>{errors.EmergencyContact?.message}</p>
                  </div>

                  <div className="AlternateEmail">
                    <label>Alternate Email</label>
                    <br></br>
                    <input {...register("AlternateEmail")} type="text" />
                  </div>

                  <div className="Height">
                    <label>Height (meters)</label>
                    <br></br>
                    <input
                      {...register("Height", {
                        required: "input field is required",
                      })}
                      type="text"
                    />
                    <p>{errors.Height?.message}</p>
                  </div>
                </div>

                <div className="ColumnRight">
                  <div className="LastName">
                    <label>Last Name*</label>
                    <br></br>
                    <input
                      {...register("LastName", {
                        required: "input field is required",
                      })}
                      type="text"
                    />
                    <p>{errors.LastName?.message}</p>
                  </div>

                  <div className="MotherName">
                    <label>Mother's Name</label>
                    <br></br>
                    <input
                      {...register("MotherName", {
                        required: "input field is required",
                      })}
                      type="text"
                    />
                    <p>{errors.MotherName?.message}</p>
                  </div>

                  <div className="Gender">
                    <label>Gender*</label> <br></br>
                    <select {...register("Gender")}>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="MaritalStatus">
                    <label>Marital Status*</label>
                    <br></br>
                    <select {...register("MaritalStatus")}>
                      <option value="Married">Married</option>
                      <option value="Unmarried">Unmarried</option>
                      <option value="Single">Single</option>
                    </select>
                  </div>

                  <div className="NationalId">
                    <label>National Id</label>
                    <br></br>
                    <input
                      {...register("NationalId", {
                        required: "input field is required",
                      })}
                      type="text"
                    />
                    <p>{errors.NationalId?.message}</p>
                  </div>

                  <div className="PassportIssue">
                    <label>Passport Issue Date</label>
                    <br></br>
                    <input {...register("PassportIssue")} type="date" />
                    <p></p>
                  </div>

                  <div className="Secondary">
                    <label>Secondary Mobile</label>
                    <br></br>
                    <PhoneInput
                      {...register("Secondary")}
                      placeholder="Enter phone number"
                      value={value3}
                      onChange={setValue3}
                    />
                  </div>

                  <div className="PrimaryEmail">
                    <label>Primary Email</label>
                    <br></br>
                    <input
                      {...register("PrimaryEmail", {
                        required: "input field is required",
                      })}
                      type="text"
                    />
                    <p>{errors.PrimaryEmail?.message}</p>
                  </div>

                  <div className="BloodGroup">
                    <label>Blood Group</label>
                    <br></br>
                    <select {...register("BloodGroup")}>
                      <option value="O+">O+</option>
                      <option value="B+">B+</option>
                      <option value="Ab+">Ab+</option>
                    </select>
                  </div>

                  <div className="Weight">
                    <label>Weight(kg)</label>
                    <br></br>
                    <input
                      {...register("Weight", {
                        required: "input field is required",
                      })}
                      type="text"
                    />
                    <p>{errors.Weight?.message}</p>
                  </div>
                </div>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default PersonalDetails;
