//External lib imports
import {
  Row,
  Col,
  Container,
  Button,
  Card,
  Form,
  Spinner,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";

//Internal lib imports
import Layout from "../../../layout/Layout";
import {
  useDepartmentCreateMutation,
  useDepartmentListQuery,
  useDepartmentUpdateMutation,
} from "../../../redux/services/departmentService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAgentdropDownQuery,
  useAgentListQuery,
} from "../../../redux/services/agentService";

const CreateUpdateDepartment = () => {
  let [objectID, SetObjectID] = useState(null);
  const [details, setDetails] = useState({
    name: "",
    agents: [],
    visibility: true,
  });
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data: allDepartment } = useDepartmentListQuery();
  const { data: allAgent } = useAgentdropDownQuery();
  const [
    departmentCreate,
    { isLoading: createLoading, isSuccess: createSuccess },
  ] = useDepartmentCreateMutation();
  const [
    departmentUpdate,
    { isLoading: updateLoading, isSuccess: updateSuccess },
  ] = useDepartmentUpdateMutation();

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    if (id !== null) {
      SetObjectID(id);
    }

    if (objectID && allDepartment) {
      setDetails(allDepartment.find((item) => item.id === objectID));
    }
  }, [objectID, allDepartment]);

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: details,
    resolver: yupResolver(
      yup.object({
        name: yup
          .string()
          .required(t("name is required"))
          .min(3, t("name must be 3 characters long")),
        agents: yup.array().required(t("agents is required")),
        visibility: yup.boolean(),
      })
    ),
  });

  useEffect(() => {
    if (details) {
      reset(details);
    }
  }, [details]);

  /*
   * form handle submit
   */
  const submitForm = ({ name, visibility, agents }) => {
    const postBody = {
      name,
      visibility,
      agents,
    };
    if (!objectID) {
      departmentCreate(postBody);
    } else {
      departmentUpdate({ id: objectID, postBody });
    }
  };

  useEffect(() => {
    if (createSuccess || updateSuccess) {
      navigate("/departments");
    }
  }, [createSuccess, updateSuccess]);

  return (
    <Layout>
      <Container fluid="true" className="p-3">
        <Card>
          <Card.Body>
            <Row>
              <h5>
                {t(`${objectID ? "Update Department" : "Save Department"}`)}
              </h5>
              <hr className="bg-light" />
              <Col>
                <Form onSubmit={handleSubmit(submitForm)} onReset={reset}>
                  <Row>
                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="name">
                        <Form.Label>{t("name")}</Form.Label>
                        <Controller
                          control={control}
                          name="name"
                          defaultValue=""
                          render={({
                            field: { onChange, onBlur, value, ref },
                          }) => (
                            <Form.Control
                              onChange={onChange}
                              value={value}
                              ref={ref}
                              isInvalid={errors.name}
                              placeholder={t("name of the Department")}
                              type="text"
                              size="sm"
                            />
                          )}
                        />
                        {errors.name && (
                          <Form.Text className="text-danger">
                            {errors.name.message}
                          </Form.Text>
                        )}
                      </Form.Group>
                    </Col>

                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="agents">
                        <Form.Label>{t("agents")}</Form.Label>
                        <Controller
                          control={control}
                          name="agents"
                          defaultValue=""
                          render={({
                            field: { onChange, onBlur, value, ref },
                          }) => (
                            <Select
                              inputRef={ref}
                              value={allAgent?.filter((c) =>
                                value.includes(c.value)
                              )}
                              onChange={(val) =>
                                onChange(val.map((c) => c.value))
                              }
                              options={allAgent}
                              isMulti
                            />
                          )}
                        />
                        {errors.agents && (
                          <Form.Text className="text-danger">
                            {errors.agents.message}
                          </Form.Text>
                        )}
                      </Form.Group>
                    </Col>

                    <Col sm={12}>
                      <Form.Group className="mb-3" controlId="visibility">
                        <Form.Label>{t("visibility")}</Form.Label>
                        <Controller
                          control={control}
                          name="visibility"
                          defaultValue=""
                          render={({
                            field: { onChange, onBlur, value, ref },
                          }) => (
                            <Form.Check
                              type={"checkbox"}
                              label={t(
                                `the Department is ${
                                  !value ? "private" : "public"
                                }`
                              )}
                              checked={value}
                              {...register("visibility")}
                            />
                          )}
                        />
                        {errors.password && (
                          <Form.Text className="text-danger">
                            {errors.password.message}
                          </Form.Text>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={4}>
                      <Button size="sm" className="mt-2" type="submit">
                        {createLoading || updateLoading ? (
                          <Spinner size="sm" color="light" />
                        ) : (
                          t("save change")
                        )}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
};

export default CreateUpdateDepartment;
