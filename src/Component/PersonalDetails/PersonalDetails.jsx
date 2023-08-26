import React from "react";

const PersonalDetails = () => {
  return (
    <section>
      <h1>Personal Details</h1>
      <div className="InputFild">
        <div className="Name">
          <label>First Name*</label>
          <input type="text" />
          <label>Last Name*</label>
          <input type="text" />
        </div>
        <div className="ParentName">
          <label>Father's Name</label>
          <input type="text" />
          <label>Mother's Name</label>
          <input type="text" />
        </div>
        <div className="BirthGender">
          <label>Date of Birth*</label>
          <input type="text" />
          <label>Gender*</label>
          <select>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="ReligionMarital">
          <label>Religion</label>
          <select>
            <option value=""></option>
            <option value="Islam">Islam</option>
            <option value="Hindusim">Hindusim</option>
            <option value="Buddhism">Buddhism</option>
          </select>

          <label>Marital Status*</label>
          <select>
            <option value="Married">Married</option>
            <option value="Unmarried">Unmarried</option>
            <option value="Single">Single</option>
          </select>
        </div>

        <div className="ReligionMarital">
          <label>Nationality*</label>
          <select>
            <option value=""></option>
            <option value="Islam">Islam</option>
            <option value="Hindusim">Hindusim</option>
            <option value="Buddhism">Buddhism</option>
          </select>

          <label>Marital Status*</label>
          <input type="text" />
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;
