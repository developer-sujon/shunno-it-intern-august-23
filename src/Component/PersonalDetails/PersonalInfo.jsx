import React, {useState} from "react";
import PersonalDetails from "./PersonalDetails";
import Present_addres from "../Present_Address/Present_addres";
import Prefered from "./Prefered_Areas/Prefered";
import RelatioveInfo from "./Relative_info/Relatiove_info";
import DisabilityInfo from "./Disability/Disability_info";
import CareerInfo from "../CareerInfo/CareerInfo";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {GetFromData} from "../../FormDataSlice/FormDAtaSlice";

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const [PersonalData, setPersonal] = useState({});
  const [Addressfield, setAddressField] = useState({});
  const [Addressfield1, setAddressField1] = useState({});
  const [carredInfo, setCarrerInfo] = useState({});
  const [prefered1, setPrefered1] = useState({});
  const [prefered2, setPrefered2] = useState({});
  const [prefered3, setPrefered3] = useState({});
  const [prefered4, setPrefered4] = useState({});
  const [prefered5, setPrefered5] = useState({});
  const [Reveent, setRelventData] = useState({});
  const [Disability, setDisbilty] = useState({});

  const preferede = {prefered1, prefered2, prefered3, prefered4, prefered5};

  const AddresinOut = [Addressfield, Addressfield1];

  const perinfoData = () => {
    dispatch(GetFromData(PersonalData));
    dispatch(GetFromData(AddresinOut));
    dispatch(GetFromData(carredInfo));
    dispatch(GetFromData(Disability));
    dispatch(GetFromData(Reveent));
    dispatch(GetFromData(preferede))

    // dispatch(GetFromData(personalGetDAta))
  };
  return (
    <div>
      <PersonalDetails setPersonal={setPersonal} />
      <Present_addres
        setAddressField1={setAddressField1}
        setAddressField={setAddressField}
      />
      <CareerInfo setCarrerInfo={setCarrerInfo}></CareerInfo>
      <Prefered
        setPrefered1={setPrefered1}
        setPrefered2={setPrefered2}
        setPrefered3={setPrefered3}
        setPrefered4={setPrefered4}
        setPrefered5={setPrefered5}
      />
      <RelatioveInfo setRelventData={setRelventData} />
      <DisabilityInfo setDisbilty={setDisbilty} />
      <Button onClick={() => perinfoData()} className="btn btn-primary my-2">
        Update Profile
      </Button>
    </div>
  );
};

export default PersonalInfo;
