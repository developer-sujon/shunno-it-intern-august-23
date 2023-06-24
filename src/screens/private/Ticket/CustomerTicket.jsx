//External lib imports
import { useEffect, useState } from "react";
import { Col, Row, Card, Button, Form, Spinner, Badge } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";

//Internal lib imports
import RichEditor from "../../../components/RichEditor";
import AppNavigation from "../../../components/AppNavigation";
import {
  useLazyTicketDetailsQuery,
  useTicketReplyMutation,
} from "../../../redux/services/ticketService";
import { fromNow } from "../../../utils/DateFormatter";
import htmlParser from "../../../utils/htmlParser";

const CustomerTicket = () => {
  let params = new URLSearchParams(window.location.search);
  let clientApp = "netfee";
  let shunnoID = params.get("netfeeID");
  const [refresh, setRefresh] = useState(false);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { token } = useParams();
  const [tokenDetails, setTokenDetails] = useState();
  const [singleTicket, setSingleTicket] = useState();

  const [trigger, { data: ticketDetails, isSuccess: ticketDetailsSuccess }] =
    useLazyTicketDetailsQuery();
  const [
    ticketReply,
    { data: replyData, isLoading: replyLoading, isSuccess: replySuccess },
  ] = useTicketReplyMutation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      description: "",
      replyBy: "",
    },
    resolver: yupResolver(
      yup.object({
        description: yup
          .string()
          .required()
          .required(t("description is required")),
      })
    ),
  });

  /*
   * form handle submit
   */
  const submitForm = (postBody) => {
    if (tokenDetails) {
      ticketReply({ id: tokenDetails?.ticketID, postBody });
    }
  };

  useEffect(() => {
    if (tokenDetails) {
      reset({
        description: "",
        replyBy: tokenDetails?.name,
      });
      const response = async () =>
        await trigger({
          ticketID: tokenDetails?.ticketID,
          shunnoID: tokenDetails?.shunnoID,
        });
      response();
    }
  }, [tokenDetails, refresh]);

  useEffect(() => {
    if (replySuccess) {
      setSingleTicket(replyData?.data);
      //navigate('/customer/ticket-list');
    }
  }, [replySuccess]);

  useEffect(() => {
    if (token) {
      try {
        const r = jwt_decode(token);
        r && setTokenDetails(r);
      } catch (error) {
        console.log(error);
        navigate(
          `/support-ticket/create?netfeeID=${shunnoID}&clientApp=${clientApp}`
        );
      }
    }
  }, []);

  useEffect(() => {
    if (ticketDetailsSuccess) {
      setSingleTicket(ticketDetails);
      setRefresh(false);
    }
  }, [ticketDetailsSuccess]);

  return (
    <div className="auth-wrapper">
      <div className="auth-content">
        <div className="auth-wrapper">
          <div className="auth-content">
            <AppNavigation title={t("create ticket")} />
            <Row>
              <Col>
                <div className="mt-3">
                  <Card>
                    <Card.Body>
                      <Card.Title className="mb-3">
                        {t("reply ticket")} :{" "}
                        <span className="text-primary">
                          {singleTicket?.ticketID}
                        </span>
                        &nbsp;&nbsp;
                        {singleTicket?.status === "open" ? (
                          <Badge bg="success" pill>
                            <span className="ms-1">
                              {t(singleTicket?.status)}
                            </span>
                          </Badge>
                        ) : singleTicket?.status === "inProgress" ? (
                          <Badge bg="warning" pill>
                            <span className="ms-1">
                              {t(singleTicket?.status)}
                            </span>
                          </Badge>
                        ) : singleTicket?.status === "onHold" ? (
                          <Badge bg="danger" pill>
                            <span className="ms-1">
                              {t(singleTicket?.status)}
                            </span>
                          </Badge>
                        ) : (
                          <Badge bg="primary" pill>
                            <span className="ms-1">
                              {t(singleTicket?.status)}
                            </span>
                          </Badge>
                        )}
                      </Card.Title>

                      {/* <Button onClick={() => setRefresh(!refresh)}>
                        <FiRefreshCcw />
                      </Button> */}
                      <hr />
                      {singleTicket?.ticketReplies?.length > 0 &&
                        singleTicket?.ticketReplies.map((item) => (
                          <>
                            <div className="d-flex align-items-center justify-content-between">
                              <p>
                                <b>{item?.replyBy}</b>
                                <br />
                              </p>
                              <span>{fromNow(item?.replyAt)}</span>
                            </div>
                            {htmlParser(item?.description)}
                            <hr />
                          </>
                        ))}
                    </Card.Body>
                  </Card>
                  <Card className="mt-5">
                    <Card.Body className="w-100">
                      <Form onSubmit={handleSubmit(submitForm)} onReset={reset}>
                        <Row className="text-start">
                          <Col sm={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="description"
                            >
                              <Form.Label>{t("description")}</Form.Label>
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
                              {replyLoading ? (
                                <Spinner size="sm" color="light" />
                              ) : (
                                t("reply ticket")
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

export default CustomerTicket;
