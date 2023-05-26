import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { useFormik, FormikHelpers } from 'formik';
import { initialValuesAuth } from '../../../validations/auth/initialValues/initialValuesAuth';
import { registerSchema } from '../../../validations/auth/schemas/auth.schema.validations';
import { IRegisterDto } from '../../dto/register.dto';
import {
  RegisterContainer,
  TodoFormError,
  TodoFormInput,
  TodoFormInputBox,
  TodoFormTitle,
  TodoForm
} from './registration.styled';
import { useMatchMedia } from '../../../common/hooks/useMatchMedia';
import { Context } from '../../../app';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../common/consts/app-keys.const';
import { useToastError } from '../../../common/hooks/useToastError';
import { AxiosError } from 'axios';

function RegistrationForm() {
  const { store } = useContext(Context);
  const toastError = useToastError();
  const mediaInfo = useMatchMedia();
  const navigate = useNavigate();

  const onSubmit = async (data: IRegisterDto, actions: FormikHelpers<IRegisterDto>) => {
    try {
      await store.register(data.email, data.pass);
      actions.resetForm();
      navigate(RouteNames.ACTIVATE);
    } catch (err) {
      toastError(err as AxiosError);
    }
  };

  const { handleBlur, handleChange, values, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValuesAuth,
    validationSchema: registerSchema,
    onSubmit
  });

  return (
    <>
      <RegisterContainer {...mediaInfo}>
        <TodoFormTitle>User Registration</TodoFormTitle>
        <TodoForm onSubmit={handleSubmit}>
          <TodoFormInputBox>
            <TodoFormInput
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="email"
              className={errors.email && touched.email ? 'input-error' : ''}
            />
            {errors.email && touched.email && <TodoFormError>{errors.email}</TodoFormError>}
          </TodoFormInputBox>

          <TodoFormInputBox>
            <TodoFormInput
              id="pass"
              name="pass"
              value={values.pass}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              placeholder="password"
              className={errors.pass && touched.pass ? 'input-error' : ''}
            />
            {errors.pass && touched.pass && <TodoFormError>{errors.pass}</TodoFormError>}
          </TodoFormInputBox>

          <TodoFormInputBox>
            <TodoFormInput
              id="confirm"
              name="confirm"
              value={values.confirm}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              placeholder="confirm password"
              className={errors.confirm && touched.confirm ? 'input-error' : ''}
            />
            {errors.confirm && touched.confirm && <TodoFormError>{errors.confirm}</TodoFormError>}
          </TodoFormInputBox>

          <Button colorScheme="teal" size="md" type="submit">
            Sign Up
          </Button>
        </TodoForm>
      </RegisterContainer>
    </>
  );
}

export default observer(RegistrationForm);
