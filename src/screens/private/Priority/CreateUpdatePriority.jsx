//External lib imports
import { Row, Col, Container, Button, Card, Form, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//Internal lib imports
import Layout from '../../../layout/Layout';
import {
  usePriorityCreateMutation,
  usePriorityListQuery,
  usePriorityUpdateMutation,
} from '../../../redux/services/priorityService';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateUpdatePriority = () => {
  let [objectID, SetObjectID] = useState(null);
  const [details, setDetails] = useState({
    name: '',
    color: '#21bf73',
    visibility: true,
  });
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data: allPriority } = usePriorityListQuery();
  const [priorityCreate, { isLoading: createLoading, isSuccess: createSuccess }] = usePriorityCreateMutation();
  const [priorityUpdate, { isLoading: updateLoading, isSuccess: updateSuccess }] = usePriorityUpdateMutation();

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let id = params.get('id');
    if (id !== null) {
      SetObjectID(id);
    }

    if (objectID && allPriority) {
      setDetails(allPriority.find((item) => item.id === objectID));
    }
  }, [objectID, allPriority]);

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: details,
    resolver: yupResolver(
      yup.object({
        name: yup.string().required(t('name is required')).min(3, t('name must be 3 characters long')),
        priority: yup.string().required(t('value is required')).min(3, t('value must not be lower than 3')),
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
  const submitForm = ({ name, priority, visibility }) => {
    const postBody = {
      name,
      priority,
      visibility,
    };
    if (!objectID) {
      priorityCreate(postBody);
    } else {
      priorityUpdate({ id: objectID, postBody });
    }
  };

  useEffect(() => {
    if (createSuccess || updateSuccess) {
      navigate('/priority');
    }
  }, [createSuccess, updateSuccess]);

  return (
    <Layout>
      <Container>
        <Card>
          <Card.Body>
            <Row>
              <h5>{t(`${objectID ? 'Update Priority' : 'Save Priority'}`)}</h5>
              <hr className="bg-light" />
              <Col>
                <Form onSubmit={handleSubmit(submitForm)} onReset={reset}>
                  <Row>
                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="name">
                        <Form.Label>{t('name')}</Form.Label>
                        <Controller
                          control={control}
                          name="name"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control
                              onChange={onChange}
                              value={value}
                              ref={ref}
                              isInvalid={errors.name}
                              placeholder={t('name of the Priority')}
                              type="text"
                              size="sm"
                            />
                          )}
                        />
                        {errors.name && <Form.Text className="text-danger">{errors.name.message}</Form.Text>}
                      </Form.Group>
                    </Col>
                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="priority">
                        <Form.Label>{t('value')}</Form.Label>
                        <Controller
                          control={control}
                          name="priority"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control
                              onChange={onChange}
                              value={value}
                              ref={ref}
                              isInvalid={errors.priority}
                              type="number"
                              size="sm"
                            />
                          )}
                        />
                        {errors.priority && <Form.Text className="text-danger">{errors.priority.message}</Form.Text>}
                      </Form.Group>
                    </Col>
                    <Col sm={12}>
                      <Form.Group className="mb-3" controlId="visibility">
                        <Form.Label>{t('visibility')}</Form.Label>
                        <Controller
                          control={control}
                          name="visibility"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Check
                              type={'checkbox'}
                              label={t(`the priority is ${!value ? 'private' : 'public'}`)}
                              checked={value}
                              {...register('visibility')}
                            />
                          )}
                        />
                        {errors.password && <Form.Text className="text-danger">{errors.password.message}</Form.Text>}
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={4}>
                      <Button size="sm" className="mt-2" type="submit">
                        {createLoading || updateLoading ? <Spinner size="sm" color="light" /> : t('save change')}
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

export default CreateUpdatePriority;
