import { useContext } from "react";
import { FormContext } from "../../context/FormData";
import { useFieldArray } from "react-hook-form";
import { AiOutlineMinusCircle, AiOutlinePlus } from "react-icons/ai";
import { Col, Form, Row } from "react-bootstrap";

const AddDepartment = ({ index }) => {
  const { register, control } = useContext(FormContext);

  const { fields, remove, prepend } = useFieldArray({
    control,
    name: "EmployeeHistory.Department",
  });
  return (
    <>
      <button
        className="d-flex align-items-center gap-2 fw-bold mt-4 mb-5 border-0 bg-white fs-6"
        type="button"
        onClick={() => prepend({ Name: "hello", Exp: "1234" })}
      >
        Add department <AiOutlinePlus></AiOutlinePlus>
      </button>
      {fields.map((item, i) => (
        <Row key={item.id}>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-medium">Name</Form.Label>
              <Form.Control
                {...register(`EmployeeHistory.${index}.Department.${i}.Name`)}
                type="text"
                className="bg-light"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-medium">Exp</Form.Label>
              <Form.Control
                {...register(`EmployeeHistory.${index}.Department.${i}.Exp`)}
                type="number"
                className="bg-light"
              />
            </Form.Group>
          </Col>

          <div>
            {/* delete button  */}
            <button
              type="button"
              className="btn btn-danger px-4 mb-5 mt-2"
              onClick={() => remove(i)}
            >
              <AiOutlineMinusCircle></AiOutlineMinusCircle>
            </button>
          </div>
        </Row>
      ))}
    </>
  );
};

export default AddDepartment;
