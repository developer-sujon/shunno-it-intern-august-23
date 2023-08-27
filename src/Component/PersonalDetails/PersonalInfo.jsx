import React from "react";
import PersonalDetails from "./PersonalDetails";
import Present_addres from "../Present_Address/Present_addres";
import CareerInfo from "../CareerInfo/CareerInfo";

const PersonalInfo = () => {
  return (
    <div>
      <PersonalDetails />
      <Present_addres/>
      <CareerInfo></CareerInfo>
    </div>
  );
};

export default PersonalInfo;
