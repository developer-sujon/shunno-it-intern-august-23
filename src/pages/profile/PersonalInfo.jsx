import { Accordion } from "react-bootstrap";

// text editor css import
import "react-quill/dist/quill.snow.css";

import AddressDetails from "../../components/PersonalInfo/AddressDetails";
import CareerAndAppInfo from "../../components/PersonalInfo/CareerAndAppInfo";
import DisabilityInfo from "../../components/PersonalInfo/DisabilityInfo";
import OtherRelevantInfo from "../../components/PersonalInfo/OtherRelevantInfo";
import PersonalDetails from "../../components/PersonalInfo/PersonalDetails";
import PreferredArea from "../../components/PersonalInfo/PreferredArea";

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
