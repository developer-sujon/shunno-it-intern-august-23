import { Accordion } from "react-bootstrap";
import AcademicSummery from "../../components/Education/AcademicSummery";
import TrainingSummery from "../../components/Education/TrainingSummery";
import ProfessionalSummery from "../../components/Education/ProfessionalSummery";

const Education = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <AcademicSummery></AcademicSummery>
        <TrainingSummery></TrainingSummery>
        <ProfessionalSummery></ProfessionalSummery>
      </Accordion>
    </div>
  );
};

export default Education;
