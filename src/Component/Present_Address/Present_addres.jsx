import React, {useState} from "react";
import {Accordion} from "react-bootstrap";
import Inside from "./Present/Inside";
import OutSide from "./Present/OutSide";
import ParmanentIn from "./Present/parmanentIn";
import ParmanentOut from "./Present/ParmanentOut";

const Present_addres = ({setAddressField}) => {
  const [present, setPresent] = useState("");
  const [parmanent, setParmanet] = useState("");
  const [PresentAddress, setPresentAddress] = useState({});
  const [ParmanentAddress, setParmanetAddress] = useState({});  

  setAddressField(PresentAddress, ParmanentAddress)

  return (
    <div className="my-3">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Address Details</Accordion.Header>
          <Accordion.Body>
            <p>
              Present Address <span className="text-danger">*</span>
            </p>
            <input
              className="me-1 fs-2 fw-bold"
              onChange={(e) => setPresent(e.target.value)}
              type="radio"
              id="Inside-Bangladesh"
              name="fav_language"
              value="Inside_Bangladesh-present"
            />
            <label className="me-1 text-xl" htmlFor="Inside-Bangladesh">
              Inside Bangladesh
            </label>
            <input
              className="ms-2 me-1 text-xl"
              type="radio"
              onChange={(e) => setPresent(e.target.value)}
              id="Outside-Bangladesh"
              name="fav_language"
              value="Outside_Bangladesh-present"
            />
            <label className="me-1 text-xl" htmlFor="Outside-Bangladesh">
              Outside Bangladesh
            </label>
            <br />
            {present === "Inside_Bangladesh-present" ? (
              <Inside present={present} setPresentAddress={setPresentAddress}   />
            ) : (
              <OutSide present={present} setPresentAddress={setPresentAddress} />
            )}






            {/* parmaner Address  */}
            <p className="mt-5">
              Parmanent Address <span className="text-danger">*</span>
            </p>
            <input
              className="me-1 fs-2 fw-bold"
              onChange={(e) => setParmanet(e.target.value)}
              type="radio"
              id="Inside_P"
              name="Inside_P"
              value="Inside-Bangladesh-parmanent"
            />
            <label className="me-1 text-xl" htmlFor="Inside_P">
              Inside Bangladesh
            </label>

            <input
              className="ms-1 me-1 fs-2 fw-bold"
              onChange={(e) => setParmanet(e.target.value)}
              type="radio"
              id="OutSide_p"
              name="Inside_P"
              value="OutSide-Bangladesh-parnament"
            />
            <label className="me-1 text-xl" htmlFor="OutSide_p">
              OutSide Bangladesh
            </label>
            <br></br>
            {parmanent === "Inside-Bangladesh-parmanent" ? (
              <ParmanentIn parmanent={parmanent}  setParmanetAddress={setParmanetAddress} />
            ) : (
              <ParmanentOut parmanent={parmanent}  setParmanetAddress={setParmanetAddress}  />
            )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Present_addres;
