import React, {useState} from "react";
import { Accordion } from "react-bootstrap";
import { useForm } from "react-hook-form";
// import { FaLink } from "react-icons/fa";
// import { MdFormatListNumbered } from "react-icons/md";
// import { PiListBulletsBold } from "react-icons/pi";
// import { RxCross2 } from "react-icons/rx";
// import Editor from "./Editor";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CareerInfo = () => {
  const [value, setValue] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  // console.log(value)
  return (
    <div className="my-3">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Career and Application Information
          </Accordion.Header>
          <Accordion.Body>
            <form onSubmit={onSubmit} action="">
              {/* Career objective */}
            <label htmlFor="careerObjective" className="text-black">
              Career Objective <span className="text-danger">*</span>
            </label>
            {/* <div className="border mt-2">
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
            </div> */}
            <ReactQuill theme="snow" value={value} onChange={setValue} />

            {/* Present Salary */}
            <div className="my-2 row g-5">
              <div className="col-12 col-lg-6 ">
              <label htmlFor="presentSalary" className="text-black mb-2">
              Present Salary <span className="text-danger">*</span>
            </label>
                <input
                  {...register("presentSalary", { required: "Present salary is required" })}
                  type="number"
                  id="presentSalary"
                  className="form-control"
                  placeholder="Present Salary"
                />
                {errors?.presentSalary && (
                  <span className="text-danger fw-bold">
                    {errors?.presentSalary.message}
                  </span>
                )}
                <p>TK/Month</p>
                <label htmlFor="jobLevel" className="mt-1">Looking for (Job Level)</label><br />
                <input type="radio" name="jobLevel" value="Entry Level"/> Entry Level
                <input type="radio" name="jobLevel" value="Mid Level"/> Mid Level
                <input type="radio" name="jobLevel" value="Top Level"/> Top Level
              </div>

              {/* Expected salary */}
              <div className="col-12 col-lg-6">
              <label htmlFor="expectedSalary" className="text-black mb-2">
              Expected Salary <span className="text-danger">*</span>
            </label>
                <input
                  {...register("expectedSalary", { required: "Expected salary is required" })}
                  type="number"
                  id="expectedSalary"
                  className="form-control"
                  placeholder="Expected Salary"
                />
                {errors?.expectedSalary && (
                  <span className="text-danger fw-bold">
                    {errors?.expectedSalary.message}
                  </span>
                )}
                <p>TK/Month</p>
                <label htmlFor="jobLevel" className="mt-1">Available for (Job Nature)</label><br />
                <input type="radio" name="jobLevel" value="Full Time"/> Full time
                <input type="radio" name="jobLevel" value="Part Time"/> Part time
                <input type="radio" name="jobLevel" value="Contract"/> Contract
                <input type="radio" name="jobLevel" value="Internship"/> Internship
                <input type="radio" name="jobLevel" value="Freelance"/> Freelance
              </div>
            </div>
            </form>

            {/* <Editor></Editor> */}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default CareerInfo;
