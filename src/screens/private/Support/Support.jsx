//External lib imports
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  OverlayTrigger,
  Row,
  Spinner,
  Tooltip
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { AiOutlineEdit } from "react-icons/ai";

//Internal lib imports
import { BsFillReplyFill, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import Table from "../../../components/Table/Table";
import Layout from "../../../layout/Layout";
import { useTicketListQuery } from "../../../redux/services/ticketService";
import DateFormatter from "../../../utils/DateFormatter";

const SupportTicket = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useTicketListQuery();

  const deleteItem = (id) => {};

  const columns = [
    {
      Header: t("netfeeID"),
      accessor: (d) => d?.shunnoID,
      sort: true,
    },
    {
      Header: t("ticketID"),
      accessor: (d) => d?.ticketID,
      sort: true,
    },
    {
      Header: t("name"),
      accessor: (d) => d?.name,
      sort: true,
    },
    {
      Header: t("mobile"),
      accessor: (d) => d?.mobile,
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
            overlay={<Tooltip id="button-tooltip">Edit</Tooltip>}
          >
            <Link to={`/support-create-update?id=${d?.id}`}>
              <Button
                variant="primary"
                style={{ padding: "5px 10px" }}
                className="me-1"
              >
                <AiOutlineEdit />
              </Button>
            </Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id="button-tooltip">{t("reply")}</Tooltip>}
          >
            <Link
              to={`/support-reply?ticketID=${d?.ticketID}&shunnoID=${d?.shunnoID}`}
            >
              <Button
                variant="primary"
                style={{ padding: "5px 10px" }}
                className="me-1"
              >
                <BsFillReplyFill />
              </Button>
            </Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id="button-tooltip">Delete</Tooltip>}
          >
            <Button
              variant="danger"
              style={{ padding: "5px 10px" }}
              onClick={() => deleteItem(d.id)}
            >
              <BsTrash />
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
    <Layout>
      <Container fluid="true" className="p-3">
        <Card>
          <Card.Body>
            <Row>
              <Col className="d-flex justify-content-between p-2" sm={12}>
                <h5>{t("Supports")}</h5>
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
      </Container>
    </Layout>
  );
};

export default SupportTicket;
