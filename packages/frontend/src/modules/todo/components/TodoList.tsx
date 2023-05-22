import React from 'react';
import { List, Spinner } from '@chakra-ui/react';
import { useTodosQuery } from '../hooks/useTodosQuery';
import { TodoItem } from './TodoItem';

const TodoList = () => {
  const { data, isLoading, isSuccess } = useTodosQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      {isSuccess && (
        <List>{isSuccess && data.data.map((todo) => <TodoItem key={todo.id} {...todo} />)}</List>
      )}
    </div>
  );
};

export { TodoList };
