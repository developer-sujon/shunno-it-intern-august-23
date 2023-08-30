import React, {useState} from "react";
import {Accordion} from "react-bootstrap";
import Select from "react-select";

const Prefered = ({setPrefered}) => {
  const [SkillCategory, setSkillCategory] = useState([]);
  const [special, setSpecial] = useState([]);
  const [value1, setValue1] = useState({});
  const [value2, setValue2] = useState({});
  const [value3, setValue3] = useState({});

  //  const valueMaxinum = () => {
  //    if(value1?.length < 4){
  //     return value1
  //    }
  //  }

  // console.log(value1)

  // const handleChange = (seletedOption) => {
  //   // console.log(seletedOption);
  //   if (value1?.length < 3) {
  //     const value1Data = value1?.filter(
  //       (data) => data.value !== seletedOption.value
  //     );
  //     setValue1(value1Data);
  //   }
  //   else {
  //     alert("maxium added 3 ");
  //   }
  // };
  // const handleChange1 = (seletedOption) => {
  //   console.log("handle1", seletedOption);
  // };
  // const handleChange2 = (seletedOption) => {
  //   console.log("handle2", seletedOption);
  // };

  const preferedData = [SkillCategory, special, value1, value2, value3];
  // setPreferValue(preferedData)
  // console.log(preferedData)

  const option = [
    {value: "Dhaka", label: "Dhaka"},
    {value: "Tangail", label: "Tangail"},
    {value: "ForidPur", label: "ForidPur"},
    {value: "Gazipur", label: "Gazipur"},
    {value: "jamalpur", label: "jamalpur"},
    {value: "Madripur", label: "Madripur"},
  ];

  const option2 = [
    {value: "India", label: "india"},
    {value: "Usa", label: "Usa"},
    {value: "Srilanka", label: "Srilanka"},
  ];

  const option3 = [
    {value: "school", label: "school"},
    {value: "collage", label: "collage"},
    {value: "inter", label: "inter"},
  ];

  const skillCate = (e) => {
    if (e.target.checked) {
      if (SkillCategory.length < 3) {
        setSkillCategory([...SkillCategory, e.target.value]);
      } else {
        alert("maxium added 3 Skill");
      }
    } else {
      const filterSkill = SkillCategory.filter(
        (skill) => skill != e.target.value
      );
      setSkillCategory(filterSkill);
    }
  };

  const specialCategory = (e) => {
    if (e.target.checked) {
      if (special.length < 1) {
        setSpecial([...special, e.target.value]);
      } else {
        alert(" special cateGory seleted 1");
      }
    } else {
      const filterSkill = special.filter((skill) => skill != e.target.value);
      setSpecial(filterSkill);
    }
  };

  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Prefered Areas</Accordion.Header>
          <Accordion.Body>
            <span>
              Preferred Job Categories <span className="text-danger">*</span>
            </span>
            <br />
            <span>You can add maximum 3 Functional category!</span>

            <div className="d-flex gap-3">
              <div className="w-50">
                <label htmlFor="">Functional (max 3)</label>
                <div className="h-50 overflow-scroll overflow-x-hidden">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={SkillCategory.includes("Accounting/Finance")}
                      value="Accounting/Finance"
                      id="Accounting/Finance"
                      onChange={(e) => skillCate(e)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="Accounting/Finance">
                      Accounting/Finance
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue="Bank/Non-Bank Fin. Institution"
                      checked={SkillCategory.includes(
                        "Bank/Non-Bank Fin. Institution"
                      )}
                      onChange={(e) => skillCate(e)}
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault">
                      Bank/Non-Bank Fin. Institution
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      checked={SkillCategory.includes(
                        "Commercial/Supply Chain"
                      )}
                      onChange={(e) => skillCate(e)}
                      value="Commercial/Supply Chain"
                      id="Commercial/SupplyChain"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="Commercial/SupplyChain">
                      Commercial/Supply Chain
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={(e) => skillCate(e)}
                      value="Education/Training"
                      checked={SkillCategory.includes("Education/Training")}
                      id="Education/Training"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="Education/Training">
                      Education/Training
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      onChange={(e) => skillCate(e)}
                      value="Engineer/Architect"
                      checked={SkillCategory.includes("Engineer/Architect")}
                      id="Engineer/Architect"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="Engineer/Architect">
                      Engineer/Architect
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      onChange={(e) => skillCate(e)}
                      value="Garments/Textile"
                      checked={SkillCategory.includes("Garments/Textile")}
                      id="Garments/Textile"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="Garments/Textile">
                      Garments/ Textile
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      onChange={(e) => skillCate(e)}
                      value="General Management/Admin"
                      checked={SkillCategory.includes(
                        "General Management/Admin"
                      )}
                      id=" GeneralManagement/Admin"
                    />
                    <label
                      className="form-check-label"
                      htmlFor=" GeneralManagement/Admin">
                      General Management/Admin
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      onChange={(e) => skillCate(e)}
                      value="IT/Telecommunication"
                      checked={SkillCategory.includes("IT/Telecommunication")}
                      id="IT/Telecommunication"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="IT/Telecommunication">
                      IT/Telecommunication
                    </label>
                  </div>
                </div>
              </div>

              <div className="w-50 ">
                <label htmlFor="">Special Skill (max 3)</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    value="ওয়েল্ডার"
                    checked={special.includes("ওয়েল্ডার")}
                    id="wellding"
                    onChange={(e) => specialCategory(e)}
                  />
                  <label className="form-check-label" htmlFor="wellding">
                    ওয়েল্ডার
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    onChange={(e) => specialCategory(e)}
                    checked={special.includes("স্যুইং মেশিন অপারেটর")}
                    value="স্যুইং মেশিন অপারেটর"
                    id="flexCheckDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault1">
                    স্যুইং মেশিন অপারেটর
                  </label>
                </div>
              </div>
            </div>

            <span>
              Preferred Job Location <span className="text-danger">*</span>
            </span>
            <br />
            <span>
              Preferred Job Location defines the geographical place where you
              prefer to work. Add your priority wise preferred job locations.
              i.e. 1st: Dhaka, 2nd: Sylhet, 3rd: Khulna.
            </span>

            <div className="d-flex gap-3 mt-3">
              <div className="w-50">
                <span>Inside Bangladesh Add Districts (max 15)</span>
                <Select
                  defaultValue={value1}
                  onChange={setValue1}
                  className="mt-2"
                  options={option}
                  isMulti
                />
              </div>

              <div className="w-50">
                <span>Outside Bangladesh Add Countries (max 10)</span>
                <Select
                  defaultValue={value2}
                  onChange={setValue2}
                  className="mt-2"
                  // defaultInputValue={[option2[0],option2[1]]}
                  options={option2}
                  isMulti
                />
              </div>
            </div>

            <div>
              <span>Add your preferred organization type (max 12)</span>
              <Select
                classNames="from-control pb-5"
                defaultValue={value3}
                onChange={setValue3}
                className="mt-2"
                // defaultInputValue={[option3[0] option3[1].value]}
                options={option3}
                isMulti
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Prefered;
