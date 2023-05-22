import React, { useState } from 'react';

import { Button, Input, Stack } from '@chakra-ui/react';
import { useAddTodoQuery } from '../hooks/useAddTodoQuery';
import MyModal from '../../common/components/UI/MyModal/MyModal';

function AddTodoForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [modal, setModal] = useState(false);

  const { mutate: create } = useAddTodoQuery({
    title,
    description,
    isPrivate: false,
    isComplete: false
  });

  const submit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (title && description) {
      create();
      setTitle('');
      setDescription('');
      setModal(false);
    }
  };
  return (
    <>
      <Button marginTop="30px" onClick={() => setModal(true)}>
        Add Todo
      </Button>
      <MyModal visible={modal} setVisible={setModal}>
        <form onSubmit={submit}>
          <Stack>
            <Input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="new todo..."
            />
            <Input
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="new description..."
            />
            <Button type="submit">Add todo</Button>
          </Stack>
        </form>
      </MyModal>
    </>
  );
}

export default AddTodoForm;
