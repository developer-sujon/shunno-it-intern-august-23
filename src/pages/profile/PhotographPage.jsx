import { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FormContext } from "../../context/FormData";
import { Controller } from "react-hook-form";

const PhotographPage = () => {
  const { register, control } = useContext(FormContext);
  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    console.log(baseImage);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="d-flex flex-column gap-2">
      {baseImage ? (
        <>
          <img
            className="rounded img-fluid"
            style={{ width: "9rem" }}
            src={baseImage}
            alt="Image is loading"
          />
        </>
      ) : (
        <>
          <img
            className="rounded img-fluid"
            style={{ width: "9rem" }}
            src="https://res.cloudinary.com/dtcoomque/image/upload/v1663317145/vz7iz88hfniwxejirvjw.png"
            alt="Image is loading"
          />
        </>
      )}

      <Row>
        <Col md="4">
          <Form.Group controlId="formFile" className="my-2 w-full rounded-2">
            <Controller
              name="image"
              control={control}
              render={() => (
                <Form.Control
                  {...register(`Image`)}
                  type="file"
                  onChange={uploadImage}
                  value={baseImage}
                />
              )}
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default PhotographPage;
