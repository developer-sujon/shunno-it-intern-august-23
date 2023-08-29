import React, { useState } from "react";
import Experience from "./Experience";
import ArmayPerson from "./ArmayPerson";
import { Button } from "react-bootstrap";

const Employment = () => {
  const [EmplyHis , setEmplyHis] = useState(null)
  const [Armayperson , setArmayPerson] = useState(null)
  return (
    <div>
      <Experience setEmplyHis={setEmplyHis} />
      <ArmayPerson  setArmayPerson={setArmayPerson}/>
      <Button className="btn btn-primary my-3">Update Profile</Button>
    </div>
  );
};

export default Employment;
