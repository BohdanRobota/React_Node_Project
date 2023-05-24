import React, { useState } from 'react';
import { Button, Stack, Switch } from '@chakra-ui/react';
import { useFormik, FormikHelpers } from 'formik';
import { useAddTodoQuery } from '../../hooks/useAddTodoQuery';
import MyModal from '../../../common/components/UI/MyModal/MyModal';
import { initialValues } from '../../../validations/todo/initialValues';
import { todoValidationSchema } from '../../../validations/todo/todo.schema.validations';
import { ITodoCeateDto } from '../../types/todo.type';
import {
  TodoFormContainer,
  TodoFormError,
  TodoFormInput,
  TodoFormInputBox,
  TodoFormMessageBox,
  TodoFormTitle,
  TodoFormPrivateBox,
  TodoFormTextArea,
  TodoForm
} from './AddTodoForm.styled';
import { useMatchMedia } from '../../../common/hooks/useMatchMedia';

function AddTodoForm() {
  const [modal, setModal] = useState(false);
  const mediaInfo = useMatchMedia();
  const { mutate: createTodo } = useAddTodoQuery();

  const onSubmit = (data: ITodoCeateDto, actions: FormikHelpers<ITodoCeateDto>) => {
    createTodo(data);
    actions.resetForm();
    setModal(false);
  };

  const { handleBlur, handleChange, values, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema: todoValidationSchema,
    onSubmit
  });

  const modalOpenHandler = () => {
    setModal(true);
  };

  return (
    <>
      <Button
        colorScheme="teal"
        size="md"
        marginTop="30px"
        marginBottom="30px"
        onClick={modalOpenHandler}
      >
        Add Todo
      </Button>
      <MyModal visible={modal} setVisible={setModal}>
        <TodoFormContainer {...mediaInfo}>
          <TodoFormTitle>Create new Todo</TodoFormTitle>
          <TodoForm onSubmit={handleSubmit}>
            <TodoFormInputBox>
              <TodoFormInput
                id="title"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Title"
                className={errors.title && touched.title ? 'input-error' : ''}
              />
              {errors.title && touched.title && <p className="error">{errors.title}</p>}
            </TodoFormInputBox>
            <TodoFormMessageBox>
              <TodoFormTextArea
                id="description"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Description"
                className={errors.description && touched.description ? 'input-error' : ''}
              />
              {errors.description && touched.description && (
                <TodoFormError>{errors.description}</TodoFormError>
              )}
            </TodoFormMessageBox>
            <TodoFormPrivateBox>
              <Stack direction="row">
                <Switch
                  id="isPrivate"
                  name="isPrivate"
                  colorScheme="teal"
                  size="lg"
                  isChecked={values.isPrivate}
                  onChange={handleChange}
                />
              </Stack>
              <p>is private?</p>
            </TodoFormPrivateBox>
            <Button colorScheme="teal" size="md" type="submit">
              Create Todo
            </Button>
          </TodoForm>
        </TodoFormContainer>
      </MyModal>
    </>
  );
}

export default AddTodoForm;
