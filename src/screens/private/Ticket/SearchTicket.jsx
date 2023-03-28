//External lib imports
import { useEffect, useState } from 'react';
import { Col, Row, Card, Button, Form, Spinner, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

//Internal lib imports
import AppNavigation from '../../../components/AppNavigation';
import { useLazyTicketSearchQuery } from '../../../redux/services/ticketService';

const SearchTicket = () => {
  let params = new URLSearchParams(window.location.search);
  let clientApp = params.get('clientApp');
  let shunnoID = params.get('shunnoID');

  const { t } = useTranslation();
  const navigate = useNavigate();

  const [trigger, { data: searchData, isLoading: searchLoading, isSuccess: searchSuccess }] = useLazyTicketSearchQuery();

  const [details, setDetails] = useState({
    ticketID: '',
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: details,
    resolver: yupResolver(
      yup.object({
        ticketID: yup.string().required(t('ticketID is required')).min(4, t('ticketID must be 3 characters long')),
      })
    ),
  });

  /*
   * form handle submit
   */
  const submitForm = (values) => {
    const response = async () => await trigger({ ticketID: values?.ticketID, shunnoID });
    response();
  };

  useEffect(() => {
    if (searchSuccess) {
      navigate(`/support-ticket/tickets/${searchData?.data}?shunnoID=${shunnoID}&clientApp=${clientApp}`);
    }
  }, [searchSuccess]);

  return (
    <div className="auth-wrapper">
      <div className="auth-content">
        <div className="auth-wrapper">
          <div className="auth-content">
            <AppNavigation title={t('search your ticket')} />
            <Row>
              <Col>
                <div className="mt-3">
                  <Card>
                    <Card.Body className="w-100">
                      <Card.Title className="mb-3">{t('search your ticket')}</Card.Title>
                      <hr />
                      <Form onSubmit={handleSubmit(submitForm)} onReset={reset}>
                        <Row className="text-start">
                          <Col sm={12}>
                            <Form.Group className="mb-3" controlId="ticketID">
                              <Form.Label>{t('ticketID')}</Form.Label>
                              <Controller
                                control={control}
                                name="ticketID"
                                defaultValue=""
                                render={({ field: { onChange, onBlur, value, ref } }) => (
                                  <Form.Control
                                    onChange={onChange}
                                    value={value}
                                    ref={ref}
                                    isInvalid={errors.ticketID}
                                    placeholder={t('ticketID')}
                                    type="number"
                                  />
                                )}
                              />
                              {errors.ticketID && <Form.Text className="text-danger">{errors.ticketID.message}</Form.Text>}
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={4}>
                            <Button size="sm" className="mt-2" type="submit">
                              {searchLoading ? <Spinner size="sm" color="light" /> : t('search ticket')}
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

export default SearchTicket;
