//External lib imports
import {
  Row,
  Col,
  Button,
  Card,
  Badge,
  OverlayTrigger,
  Tooltip,
  Spinner,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";

//Internal lib imports
import AppNavigation from "../../../components/AppNavigation";
import {
  useLazyTicketSearchQuery,
  useTicketSingleListQuery,
} from "../../../redux/services/ticketService";
import Table from "../../../components/Table/Table";
import { BsFillReplyFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import DateFormatter from "../../../utils/DateFormatter";
import { useEffect } from "react";

const TicketSingleList = () => {
  let params = new URLSearchParams(window.location.search);
  let clientApp = "netfee";
  let shunnoID = params.get("netfeeID");

  const [
    trigger,
    { data: searchData, isLoading: searchLoading, isSuccess: searchSuccess },
  ] = useLazyTicketSearchQuery();

  const { t } = useTranslation();
  const { data, isLoading } = useTicketSingleListQuery({ shunnoID, clientApp });
  const navigate = useNavigate();

  const reply = (ticketID) => {
    const response = async () => await trigger({ ticketID, shunnoID });
    response();
  };

  useEffect(() => {
    if (searchSuccess) {
      navigate(
        `/support-ticket/tickets/${searchData?.data}?netfeeID=${shunnoID}&clientApp=${clientApp}`
      );
    }
  }, [searchSuccess]);

  const columns = [
    {
      Header: "#",
      accessor: (_, index) => index + 1,
      sort: true,
    },
    {
      Header: t("ticket id"),
      accessor: (d, index) => d?.ticketID,
      sort: true,
    },
    {
      Header: t("subject"),
      accessor: (d) => d?.subject,
      sort: true,
    },
    {
      Header: t("create date"),
      accessor: (d) => <DateFormatter date={d?.createdAt} />,
      sort: true,
    },
    {
      Header: t("update date"),
      accessor: (d) => <DateFormatter date={d?.updatedAt} />,
      sort: true,
    },
    {
      Header: t("status"),
      accessor: (d) => (
        <div className="bodySmall">
          {d?.status === "open" ? (
            <Badge bg="success" pill>
              <span className="ms-1">{t(d?.status)}</span>
            </Badge>
          ) : d?.status === "inProgress" ? (
            <Badge bg="warning" pill>
              <span className="ms-1">{t(d?.status)}</span>
            </Badge>
          ) : d?.status === "onHold" ? (
            <Badge bg="danger" pill>
              <span className="ms-1">{t(d?.status)}</span>
            </Badge>
          ) : (
            <Badge bg="primary" pill>
              <span className="ms-1">{t(d?.status)}</span>
            </Badge>
          )}
        </div>
      ),
      sort: true,
    },
    {
      Header: t("action"),
      accessor: (d) => (
        <div className="bodySmall">
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id="button-tooltip">{t("reply")}</Tooltip>}
          >
            <Button
              onClick={() => reply(d?.ticketID)}
              variant="primary"
              style={{ padding: "5px 10px" }}
              className="me-1"
            >
              <BsFillReplyFill />
            </Button>
          </OverlayTrigger>
        </div>
      ),
    },
  ];

  const sizePerPageList = [
    {
      text: "5",
      value: 5,
    },
    {
      text: "10",
      value: 10,
    },
    {
      text: "25",
      value: 25,
    },
    {
      text: "All",
      value: data?.length,
    },
  ];

  return (
    <div className="auth-wrapper">
      <div className="auth-content">
        <div className="auth-wrapper">
          <div className="auth-content">
            <AppNavigation title={t("create ticket")} />
            <div className="mt-3">
              <Card>
                <Card.Body>
                  <Row>
                    <Col className="d-flex justify-content-between p-2" sm={12}>
                      <h5>{t("my tickets")}</h5>
                      <Link
                        to={`/support-ticket/create?netfeeID=${shunnoID}&clientApp=${clientApp}`}
                      >
                        <Button size="sm" variant="primary">
                          {t("create ticket")}
                        </Button>
                      </Link>
                    </Col>
                    <Col sm={12}>
                      {isLoading ? (
                        <Spinner size="lg" variant="primary" />
                      ) : data?.length ? (
                        <Table
                          columns={columns}
                          data={data}
                          pageSize={5}
                          sizePerPageList={sizePerPageList}
                          isSortable={true}
                          pagination={true}
                        />
                      ) : (
                        t("no data found")
                      )}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSingleList;
