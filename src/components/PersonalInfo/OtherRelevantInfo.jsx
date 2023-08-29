import { useContext } from "react";
import { Accordion, Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import { FormContext } from "../../context/FormData";

const OtherRelevantInfo = () => {
  // form context
  const { register, control } = useContext(FormContext);
  return (
    <Accordion.Item eventKey="4">
      <Accordion.Header>Other Relevant Information</Accordion.Header>
      <Accordion.Body>
        <h6>Career Summary</h6>
        <Controller
          name="otherRelevantInfo.careerSummary"
          control={control}
          render={({ field: { onChange, value } }) => (
            <ReactQuill
              style={{ height: "100px" }}
              className="mb-5"
              theme="snow"
              value={value}
              onChange={onChange}
            />
          )}
        />
        <h6 className="pt-3">Special Qualification</h6>
        <Controller
          name="otherRelevantInfo.specialQualification"
          control={control}
          render={({ field: { onChange, value } }) => (
            <ReactQuill
              style={{ height: "100px" }}
              className="mb-5"
              theme="snow"
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Form.Group className="mb-3 pt-3">
          <Form.Label>
            Keywords <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            {...register("otherRelevantInfo.careerKeywords")}
            type="text"
            placeholder="HTML, CSS, Js"
          />
        </Form.Group>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default OtherRelevantInfo;
