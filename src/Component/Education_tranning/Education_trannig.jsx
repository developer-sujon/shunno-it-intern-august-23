import React, {useState} from "react";
import AcademeySummary from "./AcademeySummary";
import TraningSummary from "./TraningSummary";
import ProfesonalCertificate from "./ProfesonalCertificate";
import {Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetFromData } from "../../FormDataSlice/FormDAtaSlice";

const EducationTrannig = () => {
  const [Academey, setAcademey] = useState({});
  const [profesonal, setprofesonal] = useState({});
  const [Traning, setTraning] = useState({});

  const dispatch = useDispatch() ;

  const  {FromData} = useSelector(state => state.FromGetData)
  
  const EducatonAndTraning = () => {
    const EduactionTraningData = {
      AcaDemeySummaryData : Academey ,
      ProfesonalSummaryData : profesonal,
      TraningSummaryData : Traning 
    }
    dispatch(GetFromData(EduactionTraningData))
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
