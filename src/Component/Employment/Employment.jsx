import React, { useState } from "react";
import Experience from "./Experience";
import ArmayPerson from "./ArmayPerson";
import { Button } from "react-bootstrap";

const Employment = () => {
  const [EmplyHis , setEmplyHis] = useState()
  const [Armayperson , setArmayPerson] = useState()
   const EmplymentData =() => {
     console.log(EmplyHis)
     console.log(Armayperson)
   }
  return (
    <div>
      <Experience setEmplyHis={setEmplyHis} />
      <ArmayPerson  setArmayPerson={setArmayPerson}/>
      <Button onClick={()=> EmplymentData()} className="btn btn-primary my-3">Update Profile</Button>
    </div>
  );
};

export default Employment;
