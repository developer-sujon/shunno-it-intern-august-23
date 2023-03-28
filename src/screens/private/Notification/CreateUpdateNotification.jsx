//External lib imports
import { Row, Col, Container, Button, Card, Form, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//Internal lib imports
import Layout from '../../../layout/Layout';
import {
  useNotificationCreateMutation,
  useNotificationListQuery,
  useNotificationUpdateMutation,
} from '../../../redux/services/notificationService';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateUpdateNotification = () => {
  let [objectID, SetObjectID] = useState(null);
  const [details, setDetails] = useState({
    name: '',
    color: '#21bf73',
    visibility: true,
  });
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data: allNotification } = useNotificationListQuery();
  const [notificationCreate, { isLoading: createLoading, isSuccess: createSuccess }] = useNotificationCreateMutation();
  const [notificationUpdate, { isLoading: updateLoading, isSuccess: updateSuccess }] = useNotificationUpdateMutation();

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let id = params.get('id');
    if (id !== null) {
      SetObjectID(id);
    }

    if (objectID && allNotification) {
      setDetails(allNotification.find((item) => item.id === objectID));
    }
  }, [objectID, allNotification]);

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
        notifiable: yup.string().required(t('name is required')).min(3, t('name must be 3 characters long')),
        type: yup.string().required(t('type is required')).min(3, t('value must not be lower than 3')),
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
  const submitForm = ({ notifiable, type, visibility }) => {
    const postBody = {
      notifiable,
      type,
      visibility,
    };
    if (!objectID) {
      notificationCreate(postBody);
    } else {
      notificationUpdate({ id: objectID, postBody });
    }
  };

  useEffect(() => {
    if (createSuccess || updateSuccess) {
      navigate('/notification');
    }
  }, [createSuccess, updateSuccess]);

  return (
    <Layout>
      <Container>
        <Card>
          <Card.Body>
            <Row>
              <h5>{t(`${objectID ? 'Update Notification' : 'Save Notification'}`)}</h5>
              <hr className="bg-light" />
              <Col>
                <Form onSubmit={handleSubmit(submitForm)} onReset={reset}>
                  <Row>
                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="notifiable">
                        <Form.Label>{t('name')}</Form.Label>
                        <Controller
                          control={control}
                          name="notifiable"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control
                              onChange={onChange}
                              value={value}
                              ref={ref}
                              isInvalid={errors.notifiable}
                              placeholder={t('name of the Notification')}
                              type="text"
                              size="sm"
                            />
                          )}
                        />
                        {errors.notifiable && <Form.Text className="text-danger">{errors.notifiable.message}</Form.Text>}
                      </Form.Group>
                    </Col>
                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="type">
                        <Form.Label>{t('type')}</Form.Label>
                        <Controller
                          control={control}
                          name="type"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control
                              onChange={onChange}
                              value={value}
                              ref={ref}
                              isInvalid={errors.password}
                              type="text"
                              size="sm"
                            />
                          )}
                        />
                        {errors.password && <Form.Text className="text-danger">{errors.password.message}</Form.Text>}
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
                              label={t(`the notification is ${!value ? 'private' : 'public'}`)}
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

export default CreateUpdateNotification;
