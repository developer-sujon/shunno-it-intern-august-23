import { Accordion } from "react-bootstrap";
import Specialization from "../../components/OtherInformation/Specialization";
import LanguageProficiency from "../../components/OtherInformation/LanguageProficiency";
import References from "../../components/OtherInformation/References";

const OtherInformation = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Specialization></Specialization>
        <LanguageProficiency></LanguageProficiency>
        <References></References>
      </Accordion>
    </div>
  );
};

export default OtherInformation;
