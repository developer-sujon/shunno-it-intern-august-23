import React from "react";
import PersonalDetails from "./PersonalDetails";
import Present_addres from "../Present_Address/Present_addres";
import Prefered from "./Prefered_Areas/Prefered";
import RelatioveInfo from "./Relative_info/Relatiove_info";
import DisabilityInfo from "./Disability/Disability_info";

const PersonalInfo = () => {
  return (
    <div>
      <PersonalDetails />
      <Present_addres/>
      <Prefered/>
      <RelatioveInfo/>
      <DisabilityInfo/>
    </div>
  );
};

export default PersonalInfo;
