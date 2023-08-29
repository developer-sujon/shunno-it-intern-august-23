import { Accordion } from "react-bootstrap";

// text editor css import
import "react-quill/dist/quill.snow.css";

import PersonalDetails from "../../components/PersonalInfo/Personaldetails";
import AddressDetails from "../../components/PersonalInfo/AddressDetails";
import CareerAndAppInfo from "../../components/PersonalInfo/CareerAndAppInfo";
import PreferredArea from "../../components/PersonalInfo/PreferredArea";
import OtherRelevantInfo from "../../components/PersonalInfo/OtherRelevantInfo";
import DisabilityInfo from "../../components/PersonalInfo/DisabilityInfo";

const PersonalInfo = () => {
  // form context

  return (
    <Accordion defaultActiveKey="0">
      {/* Personal details */}
      <PersonalDetails />

      {/* Address Details */}
      <AddressDetails />

      {/* Career and Application Information */}
      <CareerAndAppInfo />

      {/* Preferred Areas */}
      <PreferredArea />

      {/* Other Relevant Information */}
      <OtherRelevantInfo />

      {/* Disability Information (if any) */}
      <DisabilityInfo />
    </Accordion>
  );
};

export default PersonalInfo;
