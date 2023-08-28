import React, {useState} from "react";
import {Accordion} from "react-bootstrap";
import {useForm} from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import {useQuill} from "react-quilljs";

const RelatioveInfo = () => {
  const [carrer, setCarrer] = useState("");
  const [spceial, setSpceial] = useState("");

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({defaultValues: {Keywords: "html Css javaScript"}});

  const onSubmit = (data) => {
    const Relevent_info = {
      carrer_summary: carrer,
      special_sumary: spceial,
      keywords: data.Keywords,
    };
    console.log(Relevent_info );
  };

  return (
    <div className="mt-2">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Other Relavent Information</Accordion.Header>
          <Accordion.Body>
            <div className="">
              <form onBlur={handleSubmit(onSubmit)}>
                <div>
                  <label className="" htmlFor="">
                    Career Summary
                  </label>
                  <ReactQuill
                    // {...register("career_sumaray", {
                    //   required: "This is required feild",
                    // })}
                    style={{height: "250px"}}
                    className="py-5"
                    theme="snow"
                    defaultValue={carrer}
                    onChange={(e) => setCarrer(e)}
                  />
                </div>
                {errors?.career_sumaray && (
                  <span className="text-danger">
                    {errors?.career_sumaray.message}
                  </span>
                )}

                <div className="mt-2">
                  <label className="" htmlFor="">
                    Special Qualification
                  </label>
                  <ReactQuill
                  // {...register("Special_qulifi", {
                  //   required: "This is required feild",
                  // })}
                    style={{height: "250px"}}
                    className="py-5"
                    theme="snow"
                    defaultValue={spceial}
                    onChange={(e) => setSpceial(e)}
                  />
                </div>
                {errors?.Special_qulifi && (
                  <span className="text-danger">
                    {errors?.Special_qulifi.message}
                  </span>
                )}
                 <br />

                <label className="mb-1 mt-2" htmlFor="disbility">
                  Keywords <span className="text-danger">*</span>
                </label>
                <input
                  id="disbility"
                  type="text"
                  className="form-control mb-2 fs-6 fw-fw-normal"
                  placeholder="Html , Css , Jsx"
                  {...register("Keywords", {
                    required: "This is required feild",
                  })}
                />

                {errors?.Keywords && (
                  <span className="text-danger">
                    {errors?.Keywords.message}
                  </span>
                )}
              </form>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default RelatioveInfo;
