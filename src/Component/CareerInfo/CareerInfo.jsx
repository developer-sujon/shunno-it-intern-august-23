import React from "react";
import { Accordion } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaLink } from "react-icons/fa";
import { MdFormatListNumbered } from "react-icons/md";
import { PiListBulletsBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

const CareerInfo = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="my-3">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Career and Application Information
          </Accordion.Header>
          <Accordion.Body>
            <label htmlFor="careerObjective" className="text-black">Career Objective <span className="text-danger">*</span></label>
            <div className="border mt-2">
              <div className="d-flex gap-3 align-items-center p-3 border-bottom">
                <select {...register("textSize")}>
                  <option value="normal">Normal</option>
                  <option value="heading1">Heading 1</option>
                  <option value="heading1">Heading 2</option>
                  <option value="heading1">Heading 3</option>
                </select>
                <span className="fw-bold fs-5">B</span>
                <span className="fw-bold fst-italic fs-5">I</span>
                <span className="fw-bold text-decoration-underline fs-5">
                  U
                </span>
                <FaLink></FaLink>
                <MdFormatListNumbered className="fs-5 fw-bold"></MdFormatListNumbered>
                <PiListBulletsBold className="fs-5 fw-bold"></PiListBulletsBold>
                <span className="fs-5 fw-bold text-decoration-underline ">
                  T<RxCross2 className="fs-6"></RxCross2>
                </span>
              </div>
              <textarea
                name=""
                id="careerObjective"
                className="w-100 border-0 p-3"
              ></textarea>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default CareerInfo;
