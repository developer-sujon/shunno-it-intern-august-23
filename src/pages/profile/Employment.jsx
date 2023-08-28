import { Accordion } from "react-bootstrap";
import EmploymentHistory from "../../components/Employment/EmploymentHistory";
import EmploymentHistoryArmy from "../../components/Employment/EmploymentHistoryArmy";

const Employment = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <EmploymentHistory></EmploymentHistory>
        <EmploymentHistoryArmy></EmploymentHistoryArmy>
      </Accordion>
    </div>
  );
};

export default Employment;
