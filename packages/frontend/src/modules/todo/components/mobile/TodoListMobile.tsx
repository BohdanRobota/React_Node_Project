import React from 'react';
import { List, Spinner } from '@chakra-ui/react';
import { useTodosQuery } from '../../hooks/useTodosQuery';
import { TodoItem } from '../todoItem/TodoItem';

export const TodoListMobile = () => {
  const { data, isLoading, isSuccess } = useTodosQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {isSuccess && (
        <List>{isSuccess && data.data.map((todo) => <TodoItem key={todo.id} {...todo} />)}</List>
      )}
    </>
  );
};
