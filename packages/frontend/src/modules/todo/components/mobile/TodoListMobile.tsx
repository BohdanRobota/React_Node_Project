import React from 'react';
import { List, Spinner } from '@chakra-ui/react';
import { useTodosQuery } from '../../hooks/useTodosQuery';
import { TodoItem } from '../todoItem/TodoItem';
import { TodoState } from '../../types/todo.state.type.';

interface TodoListMobileProps {
  state: TodoState;
}
export const TodoListMobile = ({ state }: TodoListMobileProps) => {
  const { data, isLoading, isSuccess } = useTodosQuery(state);

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
