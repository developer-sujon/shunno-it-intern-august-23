//External lib imports
import { useEffect, useState } from "react";
import { Col, Row, Card, Button, Form, Spinner, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

//Internal lib imports
import RichEditor from "../../../components/RichEditor";
import AppNavigation from "../../../components/AppNavigation";
import { useDepartmentdropDownQuery } from "../../../redux/services/departmentService";
import { useTicketCreateMutation } from "../../../redux/services/ticketService";
import ToastMessage from "../../../helpers/ToastMessage";

const CreateCustomerTicket = () => {
  let params = new URLSearchParams(window.location.search);
  let clientApp = "netfee";
  let netfeeID = params.get("netfeeID");

  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data: allDepartment } = useDepartmentdropDownQuery();
  const [
    ticketCreate,
    { data: createData, isLoading: createLoading, isSuccess: createSuccess },
  ] = useTicketCreateMutation();

  const [details, setDetails] = useState({
    name: "",
    mobile: "",
    clientApp,
    shunnoID: netfeeID,
    description: "",
    subject: "",
    departmentID: "",
  });

  const {
    control,
    handleSubmit,
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
          .min(3, t("name must be 3 characters long"))
          .max(30, t("name maximum 30 characters")),
        mobile: yup
          .string()
          .required(t("mobile number is required"))
          .matches(
            "^(?:\\+88|88)?(01[3-9]\\d{8})$",
            t("invalid mobile number")
          ),
        subject: yup
          .string()
          .required(t("subject is required"))
          .min(3, t("subject must be 3 characters long"))
          .max(30, t("subject maximum 30 characters")),
        departmentID: yup
          .string()
          .required(t("department is required"))
          .matches(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i, "must mongo id"),
        description: yup.string().required(t("description is required")),
      })
    ),
  });

  useEffect(() => {
    if (!netfeeID || netfeeID.length !== 4) {
      ToastMessage.errorMessage("invalid netfee id");
    }
  }, []);

  /*
   * form handle submit
   */
  const submitForm = (values) => {
    ticketCreate(values);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-content">
        <div className="auth-wrapper">
          <div className="auth-content">
            <AppNavigation title={t("create ticket")} />
            {createSuccess && (
              <Alert
                style={{ background: "#21bf73", border: 0, color: "#fff" }}
                variant={"primary"}
              >
                Ticket created successfully{" "}
                <b className="">
                  <Link
                    to={`/support-ticket/tickets/${createData?.data}?netfeeID=${netfeeID}&clientApp=${clientApp}`}
                  >
                    Your unique ticket link is this.
                  </Link>
                </b>
              </Alert>
            )}
            <Row>
              <Col>
                <div className="mt-3">
                  <Card>
                    <Card.Body className="w-100">
                      <Card.Title className="mb-3 text-center">
                        {t("create ticket")}
                      </Card.Title>
                      <hr />
                      <Form onSubmit={handleSubmit(submitForm)} onReset={reset}>
                        <Row className="text-start">
                          <Col sm={6}>
                            <Form.Group className="mb-3" controlId="name">
                              <Form.Label>{t("name")}</Form.Label>{" "}
                              <span className="text-danger">*</span>
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
                                    placeholder={t("name")}
                                    type="text"
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
                          <Col sm={6}>
                            <Form.Group className="mb-3" controlId="mobile">
                              <Form.Label>{t("mobile")}</Form.Label>
                              <span className="text-danger">*</span>
                              <Controller
                                control={control}
                                name="mobile"
                                defaultValue=""
                                render={({
                                  field: { onChange, onBlur, value, ref },
                                }) => (
                                  <Form.Control
                                    onChange={onChange}
                                    value={value}
                                    ref={ref}
                                    isInvalid={errors.mobile}
                                    placeholder={t("mobile")}
                                    type="text"
                                  />
                                )}
                              />
                              {errors.mobile && (
                                <Form.Text className="text-danger">
                                  {errors.mobile.message}
                                </Form.Text>
                              )}
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-3" controlId="subject">
                              <Form.Label>{t("subject")}</Form.Label>
                              <span className="text-danger">*</span>
                              <Controller
                                control={control}
                                name="subject"
                                defaultValue=""
                                render={({
                                  field: { onChange, onBlur, value, ref },
                                }) => (
                                  <Form.Control
                                    onChange={onChange}
                                    value={value}
                                    ref={ref}
                                    isInvalid={errors.subject}
                                    placeholder={t("subject of the support")}
                                    type="text"
                                  />
                                )}
                              />
                              {errors.subject && (
                                <Form.Text className="text-danger">
                                  {errors.subject.message}
                                </Form.Text>
                              )}
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group
                              className="mb-3"
                              controlId="departmentID"
                            >
                              <Form.Label>{t("department")}</Form.Label>
                              <span className="text-danger">*</span>
                              <Controller
                                control={control}
                                name="departmentID"
                                defaultValue=""
                                render={({
                                  field: { onChange, onBlur, value, ref },
                                }) => (
                                  <Form.Select
                                    onChange={onChange}
                                    value={value}
                                    ref={ref}
                                    isInvalid={errors.departmentID}
                                    placeholder={t("department of the agent")}
                                    type="text"
                                  >
                                    <option value="">
                                      {t("choice department")}
                                    </option>
                                    {allDepartment?.map((department) => (
                                      <option
                                        value={department?.value}
                                        key={department?.id}
                                      >
                                        {department?.label}
                                      </option>
                                    ))}
                                  </Form.Select>
                                )}
                              />
                              {errors.departmentID && (
                                <Form.Text className="text-danger">
                                  {errors.departmentID.message}
                                </Form.Text>
                              )}
                            </Form.Group>
                          </Col>

                          <Col sm={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="description"
                            >
                              <Form.Label>{t("description")}</Form.Label>
                              <span className="text-danger">*</span>
                              <Controller
                                control={control}
                                name="description"
                                defaultValue=""
                                render={({
                                  field: { onChange, onBlur, value, ref },
                                }) => (
                                  <RichEditor
                                    onChange={onChange}
                                    value={value}
                                    ref={ref}
                                    isInvalid={errors.description}
                                    placeholder={t(
                                      "description of the support"
                                    )}
                                    type="text"
                                  />
                                )}
                              />
                              {errors.description && (
                                <Form.Text className="text-danger">
                                  {errors.description.message}
                                </Form.Text>
                              )}
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={4}>
                            <Button size="sm" className="mt-2" type="submit">
                              {createLoading ? (
                                <Spinner size="sm" color="light" />
                              ) : (
                                t("create ticket")
                              )}
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCustomerTicket;
