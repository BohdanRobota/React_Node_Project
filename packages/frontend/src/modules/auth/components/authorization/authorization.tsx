import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { useFormik, FormikHelpers } from 'formik';
import { initialValuesLogin } from '../../../validations/auth/initialValues/initialValueLogin';
import { loginSchema } from '../../../validations/auth/schemas/login.schema.validations';
import {
  RegisterContainer,
  TodoFormError,
  TodoFormInput,
  TodoFormInputBox,
  TodoFormTitle,
  TodoForm
} from '../registration/registration.styled';
import { useMatchMedia } from '../../../common/hooks/useMatchMedia';
import { Context } from '../../../app';
import { observer } from 'mobx-react-lite';
import { ILoginDto } from '../../dto/login.dto';
import { useToastError } from '../../../common/hooks/useToastError';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../common/consts/app-keys.const';

function LoginForm() {
  const { store } = useContext(Context);
  const mediaInfo = useMatchMedia();
  const toastError = useToastError();
  const navigate = useNavigate();
  const onSubmit = async (data: ILoginDto, actions: FormikHelpers<ILoginDto>) => {
    try {
      await store.login(data.email, data.pass);
      actions.resetForm();
      navigate(RouteNames.TODOS);
    } catch (err) {
      toastError(err as AxiosError);
    }
  };

  const { handleBlur, handleChange, values, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValuesLogin,
    validationSchema: loginSchema,
    onSubmit
  });

  return (
    <>
      <RegisterContainer {...mediaInfo}>
        <TodoFormTitle>Authorization</TodoFormTitle>
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
          <Button colorScheme="teal" size="md" type="submit">
            Log in
          </Button>
        </TodoForm>
      </RegisterContainer>
    </>
  );
}

export default observer(LoginForm);
