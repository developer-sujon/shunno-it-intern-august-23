import { useContext } from "react";
import { Accordion, Form } from "react-bootstrap";
import { FormContext } from "../../context/FormData";

const DisabilityInfo = () => {
  const { register } = useContext(FormContext);
  return (
    <Accordion.Item eventKey="5">
      <Accordion.Header>Disability Information (if any)</Accordion.Header>
      <Accordion.Body>
        <h5 className="pt-3">National Disability Id</h5>

        <Form.Group className="mb-3 pt-3">
          <Form.Label>You didn&apos;t mention your ID yet.</Form.Label>
          <Form.Control
            {...register("disabilityInfo")}
            type="text"
            placeholder="If you are a person with disability and have no Disability ID Number, please contact i2i support +88 01730369802 by Call/ SMS/ WhatsApp"
          />
        </Form.Group>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default DisabilityInfo;
