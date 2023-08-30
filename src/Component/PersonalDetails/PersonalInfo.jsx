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
  const [prefered, setPrefered] = useState([]);
  const [Reveent, setRelventData] = useState({});
  const [Disability, setDisbilty] = useState({});

 

  const {FromData} = useSelector((state) => state.FromGetData);

  const perinfoData = () => {
    dispatch(GetFromData(PersonalData));
    dispatch(GetFromData(carredInfo));
    dispatch(GetFromData(Disability));
    dispatch(GetFromData(Reveent));
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
      <Prefered setPrefered={setPrefered} />
      <RelatioveInfo setRelventData={setRelventData} />
      <DisabilityInfo setDisbilty={setDisbilty} />
      <Button onClick={() => perinfoData()} className="btn btn-primary my-2">
        Update Profile
      </Button>
    </div>
  );
};

export default PersonalInfo;
