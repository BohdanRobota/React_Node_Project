import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { useFormik, FormikHelpers } from 'formik';

import {
  RegisterContainer,
  TodoFormError,
  TodoFormInput,
  TodoFormInputBox,
  TodoFormTitle,
  TodoForm
} from './../authorization/authorization.styled';
import { useMatchMedia } from '../../../common/hooks/useMatchMedia';
import { Context } from '../../../app';
import { observer } from 'mobx-react-lite';
import { useToastError } from '../../../common/hooks/useToastError';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { initialValuesChangePassword } from '../../../validations/auth/initialValues/initialValuesChangePassword';
import { changePasswordSchema } from '../../../validations/auth/schemas/changePassword.schema';
import { IChangePasswordDto } from '../../dto/changePassword.dto';
import { useToast } from '@chakra-ui/react';

function ChangePasswordForm() {
  const { store } = useContext(Context);
  const mediaInfo = useMatchMedia();
  const toastError = useToastError();
  const toast = useToast();
  const navigate = useNavigate();
  const onSubmit = async (data: IChangePasswordDto, actions: FormikHelpers<IChangePasswordDto>) => {
    try {
      await store.changePassword(data.email, data.oldPassword, data.newPassword);
      actions.resetForm();
      toast({
        title: 'Password is successfully updated',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top'
      });
    } catch (err) {
      toastError(err as AxiosError);
    }
  };

  const { handleBlur, handleChange, values, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValuesChangePassword,
    validationSchema: changePasswordSchema,
    onSubmit
  });

  return (
    <>
      <RegisterContainer {...mediaInfo}>
        <TodoFormTitle>Change your password</TodoFormTitle>
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
              id="oldPassword"
              name="oldPassword"
              value={values.oldPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              placeholder="old password"
              className={errors.oldPassword && touched.oldPassword ? 'input-error' : ''}
            />
            {errors.oldPassword && touched.oldPassword && (
              <TodoFormError>{errors.oldPassword}</TodoFormError>
            )}
          </TodoFormInputBox>
          <TodoFormInputBox>
            <TodoFormInput
              id="newPassword"
              name="newPassword"
              value={values.newPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              placeholder="new password"
              className={errors.newPassword && touched.newPassword ? 'input-error' : ''}
            />
            {errors.newPassword && touched.newPassword && (
              <TodoFormError>{errors.newPassword}</TodoFormError>
            )}
          </TodoFormInputBox>
          <Button colorScheme="teal" size="md" type="submit">
            Change password
          </Button>
        </TodoForm>
      </RegisterContainer>
    </>
  );
}

export default observer(ChangePasswordForm);
