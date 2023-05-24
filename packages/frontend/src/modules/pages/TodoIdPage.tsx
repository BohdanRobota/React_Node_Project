import React from 'react';
import { Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useFindByIdTodoQuery } from '../todo/hooks/useFindByIdTodoQuery';
import { ITodo } from '../todo/types/todo.type';
import { TodoItemOpen } from '../todo/components/todoOpen/TodoItemOpen';

const TodoIdPage = () => {
  const params = useParams();
  const { data, isLoading } = useFindByIdTodoQuery(params.id as string);
  const todo = data?.data;
  if (isLoading) {
    return <Spinner />;
  }
  return <TodoItemOpen {...(todo as ITodo)} />;
};

export default TodoIdPage;
