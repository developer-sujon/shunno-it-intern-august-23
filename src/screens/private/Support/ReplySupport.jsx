//External lib imports
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

//Internal lib imports
import { useSelector } from "react-redux";
import RichEditor from "../../../components/RichEditor";
import Layout from "../../../layout/Layout";
import { useProfileDetailsQuery } from "../../../redux/services/profileService";
import {
  useLazyTicketDetailsQuery,
  useTicketReplyMutation,
} from "../../../redux/services/ticketService";
import { fromNow } from "../../../utils/DateFormatter";
import htmlParser from "../../../utils/htmlParser";

const ReplySupport = () => {
  const [refresh, setRefresh] = useState(false);
  let params = new URLSearchParams(window.location.search);
  let ticketID = params.get("ticketID");
  let shunnoID = params.get("shunnoID");
  const { t } = useTranslation();

  const { userDetails } = useSelector((state) => state.authReducer);
  const [singleTicket, setSingleTicket] = useState();
  const { data: profileDetails } = useProfileDetailsQuery();
  const [trigger, { data: ticketDetails, isSuccess: ticketDetailsSuccess }] =
    useLazyTicketDetailsQuery();
  const [
    ticketReply,
    { data: replyData, isLoading: replyLoading, isSuccess: replySuccess },
  ] = useTicketReplyMutation();

  console.log(ticketDetails)

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      description: "",
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

  console.log(shunnoID, ticketID);

  useEffect(() => {
    if (shunnoID && ticketID) {
      reset({
        description: "",
      });
      const response = async () => await trigger({ ticketID, shunnoID });
      response();
    }
  }, [shunnoID, ticketID, refresh]);

  /*
   * form handle submit
   */
  const submitForm = (values) => {
    const postBody = {
      agentID: userDetails?.sub,
      replyBy: profileDetails?.name,
      description: values.description,
    };

    ticketReply({ id: ticketID, postBody });
  };

  useEffect(() => {
    if (replySuccess) {
      setSingleTicket(replyData?.data);
      //navigate('/customer/ticket-list');
    }
  }, [replySuccess]);

  useEffect(() => {
    if (ticketDetailsSuccess) {
      setSingleTicket(ticketDetails);
      setRefresh(false);
    }
  }, [ticketDetailsSuccess]);

  return (
    <Layout>
      <Container fluid="true" className="p-3">
        <Row>
          <Col>
            <div className="mt-3">
              <Card>
                <Card.Body>
                  <Card.Title className="mb-3">
                    {t("reply ticket")} :{" "}
                    <span className="text-primary">
                      {singleTicket?.ticketID}
                    </span>{" "}
                    &nbsp;&nbsp;
                    {singleTicket?.status === "open" ? (
                      <Badge bg="success" pill>
                        <span className="ms-1">{t(singleTicket?.status)}</span>
                      </Badge>
                    ) : singleTicket?.status === "inProgress" ? (
                      <Badge bg="warning" pill>
                        <span className="ms-1">{t(singleTicket?.status)}</span>
                      </Badge>
                    ) : singleTicket?.status === "onHold" ? (
                      <Badge bg="danger" pill>
                        <span className="ms-1">{t(singleTicket?.status)}</span>
                      </Badge>
                    ) : (
                      <Badge bg="primary" pill>
                        <span className="ms-1">{t(singleTicket?.status)}</span>
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
                          <p>{item?.replyBy}</p>
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
                        <Form.Group className="mb-3" controlId="description">
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
                                placeholder={t("description of the support")}
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
      </Container>
    </Layout>
  );
};

export default ReplySupport;
