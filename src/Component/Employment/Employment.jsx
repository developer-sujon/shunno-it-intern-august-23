import React, {useState} from "react";
import Experience from "./Experience";
import ArmayPerson from "./ArmayPerson";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {GetFromData} from "../../FormDataSlice/FormDAtaSlice";

const Employment = () => {
  const [EmplyHis, setEmplyHis] = useState({});
  const [Armayperson, setArmayPerson] = useState({});
  const dispatch = useDispatch();

  const EmplymentData = () => {
    dispatch(GetFromData(EmplyHis));
    dispatch(GetFromData(Armayperson));
  };
  return (
    <div>
      <Experience setEmplyHis={setEmplyHis} />
      <ArmayPerson setArmayPerson={setArmayPerson} />
      <Button onClick={() => EmplymentData()} className="btn btn-primary my-3">
        Update Profile
      </Button>
    </div>
  );
};

export default Employment;
