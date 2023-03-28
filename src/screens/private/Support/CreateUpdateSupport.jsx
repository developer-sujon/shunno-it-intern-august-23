//External lib imports
import { useEffect, useState } from 'react';
import { Row, Col, Container, Button, Card, Form, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

//Internal lib imports
import Layout from '../../../layout/Layout';
import { useTicketListQuery, useTicketUpdateMutation } from '../../../redux/services/ticketService';
import { useCategorydropDownQuery } from '../../../redux/services/categoryService';
import { usePrioritydropDownQuery } from '../../../redux/services/priorityService';
import { useDepartmentdropDownQuery } from '../../../redux/services/departmentService';
import removeEmptyObj from '../../../helpers/removeEmptyObj';

const CreateUpdateSupport = () => {
  let [objectID, SetObjectID] = useState(null);
  const [details, setDetails] = useState({
    priorityID: '',
    departmentID: '',
    categoryID: '',
    agentID: '',
    closeByID: '',
    status: '',
  });

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data: allsupport } = useTicketListQuery();
  const [supportUpdate, { isLoading: updateLoading, isSuccess: updateSuccess }] = useTicketUpdateMutation();
  const { data: allCategory } = useCategorydropDownQuery();
  const { data: allPriority } = usePrioritydropDownQuery();
  const { data: allDepatment } = useDepartmentdropDownQuery();

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let id = params.get('id');
    if (id !== null) {
      SetObjectID(id);
    }

    if (objectID && allsupport) {
      setDetails(allsupport.find((item) => item.id === objectID));
    }
  }, [objectID, allsupport]);

  const {
    control,
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: details,
    resolver: yupResolver(
      yup.object({
        departmentID: yup
          .string()
          .required(t('department is required'))
          .matches(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i, 'must mongo id'),
        status: yup.string().required(t('statu is required')),
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
  const submitForm = (values) => {
    const { categoryID, priorityID, departmentID, status } = values;
    const postBody = removeEmptyObj({ categoryID, priorityID, departmentID, status });

    if (objectID) {
      supportUpdate({ id: objectID, postBody });
    }
  };

  useEffect(() => {
    if (updateSuccess) {
      // navigate('/supports');
    }
  }, [updateSuccess]);

  return (
    <Layout>
      <Container>
        <Card>
          <Card.Body>
            <Row>
              <h5>{t(`${objectID ? 'update ticket' : 'save ticket'}`)}</h5>
              <hr className="bg-light" />
              <Col>
                <Form onSubmit={handleSubmit(submitForm)} onReset={reset}>
                  <Row>
                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="priorityID">
                        <Form.Label>{t('priority')}</Form.Label>
                        <Controller
                          control={control}
                          name="priorityID"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Select
                              onChange={onChange}
                              value={value}
                              ref={ref}
                              isInvalid={errors.priorityID}
                              placeholder={t('priority of the support')}
                              type="text"
                              size="sm"
                            >
                              <option value="">{t('choice priority')}</option>
                              {allPriority?.map((priorityID) => (
                                <option value={priorityID?.value} key={priorityID?.value}>
                                  {priorityID?.label}
                                </option>
                              ))}
                            </Form.Select>
                          )}
                        />
                        {errors.priorityID && <Form.Text className="text-danger">{errors.priorityID.message}</Form.Text>}
                      </Form.Group>
                    </Col>

                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="departmentID">
                        <Form.Label>{t('department')}</Form.Label>
                        <Controller
                          control={control}
                          name="departmentID"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Select
                              onChange={onChange}
                              value={value}
                              ref={ref}
                              isInvalid={errors.departmentID}
                              placeholder={t('department of the support')}
                              type="text"
                              size="sm"
                            >
                              <option value="">{t('choice department')}</option>
                              {allDepatment?.map((departmentID) => (
                                <option value={departmentID?.value} key={departmentID?.value}>
                                  {departmentID?.label}
                                </option>
                              ))}
                            </Form.Select>
                          )}
                        />
                        {errors.departmentID && <Form.Text className="text-danger">{errors.departmentID.message}</Form.Text>}
                      </Form.Group>
                    </Col>

                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="categoryID">
                        <Form.Label>{t('category')}</Form.Label>
                        <Controller
                          control={control}
                          name="categoryID"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Select
                              onChange={onChange}
                              value={value}
                              ref={ref}
                              isInvalid={errors.categoryID}
                              placeholder={t('category of the support')}
                              type="text"
                              size="sm"
                            >
                              <option value="">{t('choice category')}</option>
                              {allCategory?.map((categoryID) => (
                                <option value={categoryID?.value} key={categoryID?.value}>
                                  {categoryID?.label}
                                </option>
                              ))}
                            </Form.Select>
                          )}
                        />
                        {errors.categoryID && <Form.Text className="text-danger">{errors.categoryID.message}</Form.Text>}
                      </Form.Group>
                    </Col>

                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="status">
                        <Form.Label>{t('status')}</Form.Label>
                        <Controller
                          control={control}
                          name="status"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Select
                              onChange={onChange}
                              value={value}
                              ref={ref}
                              isInvalid={errors.status}
                              placeholder={t('status of the support')}
                              type="text"
                              size="sm"
                            >
                              <option value="">{t('choice status')}</option>
                              <option value={'open'}>{t('open')}</option>
                              <option value={'inProgress'}>{t('inProgress')}</option>
                              <option value={'onHold'}>{t('onHold')}</option>
                              <option value={'resolve'}>{t('resolve')}</option>
                            </Form.Select>
                          )}
                        />
                        {errors.status && <Form.Text className="text-danger">{errors.status.message}</Form.Text>}
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={4}>
                      <Button size="sm" className="mt-2" type="submit">
                        {updateLoading || updateLoading ? <Spinner size="sm" color="light" /> : t('save change')}
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

export default CreateUpdateSupport;
