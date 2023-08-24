//External lib imports
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

//Internal lib imports
import * as authValidation from "../validation/auth.validation";

const Login = () => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      mobile: "",
      password: "",
    },
    resolver: yupResolver(authValidation.login),
  });

  /*
   * form handle submit
   */
  const submitForm = (values) => {};

  /*
   * set token localStorage
   */

  return (
    <div className="auth-wrapper">
      <div className="auth-content">
        <div className="auth-wrapper">
          <div className="auth-content">
            <Row className="justify-content-center">
              <Col xl={8} className="center-screen">
                <Card className="w-100">
                  <Card.Body>
                    <h5>Sign In</h5>
                    <br />
                    <Form onSubmit={handleSubmit(submitForm)} onReset={reset}>
                      <Form.Group className="mb-3" controlId="Mobile">
                        <Form.Label>Mobile</Form.Label>
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
                              placeholder="Mobile"
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
                      <Form.Group className="mb-3" controlId="Password">
                        <Form.Label>Password</Form.Label>
                        <Controller
                          control={control}
                          name="password"
                          defaultValue=""
                          render={({
                            field: { onChange, onBlur, value, ref },
                          }) => (
                            <Form.Control
                              onChange={onChange}
                              value={value}
                              ref={ref}
                              isInvalid={errors.password}
                              placeholder="Password"
                              type="password"
                            />
                          )}
                        />
                        {errors.password && (
                          <Form.Text className="text-danger">
                            {errors.password.message}
                          </Form.Text>
                        )}
                      </Form.Group>
                      <div className="d-grid">
                        <button
                          className="btn btn-primary btn-block login-btn mt-2"
                          type="submit"
                        >
                          {"loginLoading" ? (
                            <Spinner size="sm" color="light" />
                          ) : (
                            t("Sign in")
                          )}
                        </button>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
