//External lib imports
import { Row, Col, Container, Button, Card, Form, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//Internal lib imports
import Layout from '../../../layout/Layout';
import { useAgentCreateMutation, useAgentListQuery, useAgentUpdateMutation } from '../../../redux/services/agentService';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { districts, divisions, upazilas } from '../../../helpers/bangladeshGeo';
import { useRoledropDownQuery } from '../../../redux/services/roleService';

const CreateUpdateAgent = () => {
  let [objectID, SetObjectID] = useState(null);
  const [details, setDetails] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    division: '',
    district: '',
    thana: '',
    reference: {
      name: '',
      mobile: '',
    },
    password: '',
    role: '',
    visibility: true,
  });

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data: allAgent } = useAgentListQuery();
  const [agentCreate, { isLoading: createLoading, isSuccess: createSuccess }] = useAgentCreateMutation();
  const [agentUpdate, { isLoading: updateLoading, isSuccess: updateSuccess }] = useAgentUpdateMutation();
  const { data: allRole } = useRoledropDownQuery();

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let id = params.get('id');
    if (id !== null) {
      SetObjectID(id);
    }

    if (objectID && allAgent) {
      setDetails(allAgent.find((item) => item.id === objectID));
    }
  }, [objectID, allAgent]);

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
        name: yup.string().required(t('name is required')).min(3, t('name must be 3 characters long')),
        mobile: yup
          .string()
          .required(t('Mobile number is required'))
          .matches('^(?:\\+88|88)?(01[3-9]\\d{8})$', t('Invalid mobile number')),
        email: yup.string().email(t('Invalid email address')).required(),
        address: yup.string().required(t('address is required')),
        district: yup.string().required(t('district is required')),
        division: yup.string().required(t('division is required')),
        thana: yup.string().required(t('thana is required')),
        ...(!objectID && {
          password: yup
            .string()
            .required(t('password is required.'))
            .min(8, t('password must be 8 digits long'))
            .matches(/^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i, 'Password must contain at least 1 letter and 1 number'),
        }),
        role: yup.string().required(t('role is required')),
        visibility: yup.boolean(),
        reference: yup
          .object()
          .shape({
            name: yup.string().required(t('reference name is required')).min(3, t('name must be 3 characters long')),
            mobile: yup
              .string()
              .required(t('reference mobile number is required'))
              .matches('^(?:\\+88|88)?(01[3-9]\\d{8})$', t('Invalid mobile number')),
          })
          .required(),
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
    let { name, mobile, email, division, district, thana, address, reference, role, password, visibility } = values;
    const createBody = {
      name,
      mobile,
      email,
      division,
      district,
      thana,
      address,
      reference,
      role,
      password,
      visibility,
    };
    const { password: pass, ...others } = createBody;

    if (!objectID) {
      agentCreate(createBody);
    } else {
      agentUpdate({ id: objectID, postBody: others });
    }
  };

  const watchDivision = watch('division', false);
  const watchDistrict = watch('district', false);

  useEffect(() => {
    if (createSuccess || updateSuccess) {
      navigate('/agents');
    }
  }, [createSuccess, updateSuccess]);

  return (
    <Layout>
      <Container>
        <Card>
          <Card.Body>
            <Row>
              <h5>{t(`${objectID ? 'Update Agent' : 'Save Agent'}`)}</h5>
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
                              placeholder={t('name of the agent')}
                              type="text"
                              size="sm"
                            />
                          )}
                        />
                        {errors.name && <Form.Text className="text-danger">{errors.name.message}</Form.Text>}
                      </Form.Group>
                    </Col>

                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="mobile">
                        <Form.Label>{t('mobile')}</Form.Label>
                        <Controller
                          control={control}
                          name="mobile"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control
                              onChange={onChange}
                              value={value}
                              ref={ref}
                              isInvalid={errors.mobile}
                              placeholder={t('mobile of the agent')}
                              type="text"
                              size="sm"
                            />
                          )}
                        />
                        {errors.mobile && <Form.Text className="text-danger">{errors.mobile.message}</Form.Text>}
                      </Form.Group>
                    </Col>

                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label>{t('email')}</Form.Label>
                        <Controller
                          control={control}
                          name="email"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control
                              onChange={onChange}
                              value={value}
                              ref={ref}
                              isInvalid={errors.email}
                              placeholder={t('email of the agent')}
                              type="text"
                              size="sm"
                            />
                          )}
                        />
                        {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
                      </Form.Group>
                    </Col>

                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="division">
                        <Form.Label>{t('division')}</Form.Label>
                        <Controller
                          control={control}
                          name="division"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Select
                              onChange={onChange}
                              value={value}
                              ref={ref}
                              isInvalid={errors.division}
                              placeholder={t('division of the agent')}
                              type="text"
                              size="sm"
                            >
                              <option value="">{t('choice division')}</option>
                              {divisions.map((division) => (
                                <option value={division?.name} key={division?.id}>
                                  {division?.name}
                                </option>
                              ))}
                            </Form.Select>
                          )}
                        />
                        {errors.division && <Form.Text className="text-danger">{errors.division.message}</Form.Text>}
                      </Form.Group>
                    </Col>

                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="district">
                        <Form.Label>{t('district')}</Form.Label>
                        <Controller
                          control={control}
                          name="district"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Select
                              onChange={onChange}
                              value={value}
                              ref={ref}
                              isInvalid={errors.district}
                              placeholder={t('district of the agent')}
                              type="text"
                              size="sm"
                            >
                              <option value="">{t('choice district')}</option>
                              {districts
                                .filter((filterDistrict) => filterDistrict.division_id === watchDivision)
                                .map((district) => (
                                  <option value={district?.name} key={district?.id}>
                                    {district?.name}
                                  </option>
                                ))}
                            </Form.Select>
                          )}
                        />
                        {errors.district && <Form.Text className="text-danger">{errors.district.message}</Form.Text>}
                      </Form.Group>
                    </Col>

                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="thana">
                        <Form.Label>{t('thana')}</Form.Label>
                        <Controller
                          control={control}
                          name="thana"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Select
                              onChange={onChange}
                              value={value}
                              ref={ref}
                              isInvalid={errors.thana}
                              placeholder={t('thana of the agent')}
                              type="text"
                              size="sm"
                            >
                              <option value="">{t('choice thana')}</option>
                              {upazilas
                                .filter((filterUpazilas) => filterUpazilas.district_id === watchDistrict)
                                .map((upazila) => (
                                  <option value={upazila?.name} key={upazila?.id}>
                                    {upazila?.name}
                                  </option>
                                ))}
                            </Form.Select>
                          )}
                        />
                        {errors.thana && <Form.Text className="text-danger">{errors.thana.message}</Form.Text>}
                      </Form.Group>
                    </Col>

                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="address">
                        <Form.Label>{t('address')}</Form.Label>
                        <Controller
                          control={control}
                          name="address"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control
                              onChange={onChange}
                              value={value}
                              ref={ref}
                              isInvalid={errors.address}
                              placeholder={t('address of the agent')}
                              type="text"
                              size="sm"
                            />
                          )}
                        />
                        {errors.address && <Form.Text className="text-danger">{errors.address.message}</Form.Text>}
                      </Form.Group>
                    </Col>

                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="reference.name">
                        <Form.Label>{t('reference name')}</Form.Label>
                        <Controller
                          control={control}
                          name="reference.name"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control
                              onChange={onChange}
                              value={value}
                              ref={ref}
                              isInvalid={errors.reference?.name}
                              placeholder={t('reference name of the agent')}
                              type="text"
                              size="sm"
                            />
                          )}
                        />
                        {errors.reference?.name && (
                          <Form.Text className="text-danger">{errors.reference?.name.message}</Form.Text>
                        )}
                      </Form.Group>
                    </Col>

                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="reference.mobile">
                        <Form.Label>{t('reference mobile')}</Form.Label>
                        <Controller
                          control={control}
                          name="reference.mobile"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control
                              onChange={onChange}
                              value={value}
                              ref={ref}
                              isInvalid={errors.reference?.mobile}
                              placeholder={t('reference mobile of the agent')}
                              type="text"
                              size="sm"
                            />
                          )}
                        />
                        {errors.reference?.mobile && (
                          <Form.Text className="text-danger">{errors.reference?.mobile.message}</Form.Text>
                        )}
                      </Form.Group>
                    </Col>

                    <Col sm={4}>
                      <Form.Group className="mb-3" controlId="role">
                        <Form.Label>{t('role')}</Form.Label>
                        <Controller
                          control={control}
                          name="role"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Select
                              onChange={onChange}
                              value={value}
                              ref={ref}
                              isInvalid={errors.role}
                              placeholder={t('role of the agent')}
                              type="text"
                              size="sm"
                            >
                              <option value="">{t('choice role')}</option>
                              {allRole?.map((role) => (
                                <option value={role?.value} key={role?.id}>
                                  {role?.label}
                                </option>
                              ))}
                            </Form.Select>
                          )}
                        />
                        {errors.role && <Form.Text className="text-danger">{errors.role.message}</Form.Text>}
                      </Form.Group>
                    </Col>

                    <Col sm={4} className={`${objectID && 'd-none'}`}>
                      <Form.Group className="mb-3" controlId="password">
                        <Form.Label>{t('password')}</Form.Label>
                        <Controller
                          control={control}
                          name="password"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control
                              onChange={onChange}
                              value={value}
                              ref={ref}
                              isInvalid={errors.password}
                              placeholder={t('password of the agent')}
                              type="password"
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
                              label={t(`the Agent is ${!value ? 'private' : 'public'}`)}
                              checked={value}
                              {...register('visibility')}
                            />
                          )}
                        />
                        {errors.visibility && <Form.Text className="text-danger">{errors.visibility.message}</Form.Text>}
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

export default CreateUpdateAgent;
