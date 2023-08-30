import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Present_addres from "../Present_Address/Present_addres";
import Prefered from "./Prefered_Areas/Prefered";
import RelatioveInfo from "./Relative_info/Relatiove_info";
import DisabilityInfo from "./Disability/Disability_info";
import CareerInfo from "../CareerInfo/CareerInfo";
import { Button } from "react-bootstrap";

const PersonalInfo = () => {
   const [PersonalData , setPersonal] = useState({}) ;
   const [Addressfield , setAddressField] = useState({});
   const [carredInfo ,setCarrerInfo] = useState({}) ; 
   const [prefered , setPrefered] =  useState([]) ; 
   const [Reveent , setRelventData] = useState({})
   const[Disability, setDisbilty] = useState({})
    const perinfoData = () => {
     console.log(PersonalData)
     console.log(carredInfo)
     console.log(Disability)
     console.log(Reveent)
   }
  return (
    <div>
      <PersonalDetails setPersonal={setPersonal}/>
      <Present_addres setAddressField={setAddressField} />
      <CareerInfo setCarrerInfo={setCarrerInfo}></CareerInfo>
      <Prefered  setPrefered={setPrefered}/>
      <RelatioveInfo setRelventData={setRelventData}/>
      <DisabilityInfo setDisbilty={setDisbilty}/>
      <Button onClick={()=>perinfoData()} className="btn btn-primary my-2">Update Profile</Button>
      
    </div>
  );
};

export default PersonalInfo;
