import React, {useState} from "react";
import AcademeySummary from "./AcademeySummary";
import TraningSummary from "./TraningSummary";
import ProfesonalCertificate from "./ProfesonalCertificate";
import {Button} from "react-bootstrap";

const EducationTrannig = () => {
  const [Academey, setAcademey] = useState({});
  const [profesonal, setprofesonal] = useState({});
  const [Traning, setTraning] = useState({});

  

  const EducatonAndTraning = () => {
     const EduactionTraningData = {
        AcaDemeySummaryData : Academey ,
        ProfesonalSummaryData : profesonal,
        TraningSummaryData : Traning 
     }

     console.log(EduactionTraningData)
  };
  return (
    <div>
      <AcademeySummary setAcademey={setAcademey} />
      <TraningSummary setTraning={setTraning} />
      <ProfesonalCertificate setprofesonal={setprofesonal} />
      <Button onClick={() => EducatonAndTraning()} className="btn btn-primary my-2">
        Update Profile
      </Button>
    </div>
  );
};

export default EducationTrannig;
