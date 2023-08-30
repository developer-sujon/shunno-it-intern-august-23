import React, { useState } from "react";
import Specialization from "./Specialization";
import Language from "./Language";
import Reference from "./Reference";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetFromData } from "../../FormDataSlice/FormDAtaSlice";

const OtherInfo = () => {
  const [specialDAta , setSpecial1] = useState({})
  const [Language1 , setLanguage1] = useState({})
  const [Referance , setRefaceData1] = useState({})

  const dispatch = useDispatch() ; 

        
    const Otheringo = () => {
      dispatch(GetFromData(specialDAta))
      dispatch(GetFromData(Language1))
      dispatch(GetFromData(Referance))
    }
  return (
    <div className="my-3">
        <Specialization setSpecial1={setSpecial1}></Specialization>
        <Language setLanguage1={setLanguage1}></Language>
        <Reference setRefaceData1={setRefaceData1}></Reference>
        <Button onClick={()=>Otheringo()} className="btn btn-primary my-2">Update Profile</Button>
    </div>
  );
};

export default OtherInfo;
